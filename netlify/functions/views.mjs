/* =========================================================================
   Счётчик просмотров сайта — функция Netlify (единственная серверная часть сайта).

   Адрес: /api/views
   - GET  — вернуть текущее число просмотров: {"views": 1234}
   - POST — засчитать просмотр (+1) и вернуть новое число

   Число хранится в Netlify Blobs (хранилище «site-stats») в аккаунте Netlify,
   где размещён сайт. Никаких сторонних сервисов, cookies и личных данных —
   только числа. Предела нет: счёт точный до 9 квадриллионов.

   Одновременные заходы. Счётчик разбит на 8 ячеек: каждый просмотр прибавляет +1
   в случайную ячейку, итог — их сумма. Запись идёт «только если ячейку никто
   не изменил» (onlyIfMatch); если кто-то успел раньше — короткая случайная пауза,
   перечитываем и пробуем снова. Так просмотры не теряются даже при наплыве.
   ========================================================================= */
import { getStore } from '@netlify/blobs';

const STORE = 'site-stats';
const SHARDS = 8;
const MAX_ATTEMPTS = 25;
// Роботы и проверки скорости не считаются (они почти не выполняют JS, но некоторые умеют)
const BOTS = /bot|crawl|spider|slurp|lighthouse|headless|pingdom|uptime|monitor/i;

const shardKey = (i) => `views-${i}`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});

async function readShard(store, key) {
  const entry = await store.getWithMetadata(key, { type: 'json' });
  const count = Number(entry?.data?.count);
  return { count: Number.isSafeInteger(count) && count > 0 ? count : 0, etag: entry?.etag };
}

async function total(store) {
  const shards = await Promise.all(Array.from({ length: SHARDS }, (_, i) => readShard(store, shardKey(i))));
  return shards.reduce((sum, shard) => sum + shard.count, 0);
}

async function increment(store) {
  const key = shardKey(Math.floor(Math.random() * SHARDS));
  let { count, etag } = await readShard(store, key);
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const result = etag
      ? await store.setJSON(key, { count: count + 1 }, { onlyIfMatch: etag })
      : await store.setJSON(key, { count: count + 1 }, { onlyIfNew: true });
    if (result.modified) return true;
    await sleep(Math.random() * 20 * (attempt + 1));   // кто-то записал одновременно — ждём и берём свежее число
    ({ count, etag } = await readShard(store, key));
  }
  return false;
}

// Засчитываем только запросы со своего же сайта (браузер сам ставит Sec-Fetch-Site) и не от роботов
function isCountable(req) {
  if (req.method !== 'POST') return false;
  const site = req.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin') return false;
  return !BOTS.test(req.headers.get('user-agent') || '');
}

export default async (req) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return json({ error: 'method not allowed' }, 405);
  }
  try {
    const store = getStore({ name: STORE, consistency: 'strong' });
    if (isCountable(req)) await increment(store);
    return json({ views: await total(store) });
  } catch (error) {
    console.error('views counter:', error);
    return json({ error: 'unavailable' }, 503);
  }
};

export const config = { path: '/api/views' };
