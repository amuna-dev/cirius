/* =========================================================================
   Счётчик просмотров сайта — функция Cloudflare Pages (единственная серверная часть сайта).

   Адрес: /api/views (Cloudflare берёт его из пути файла: functions/api/views.js)
   - GET  — вернуть текущее число просмотров: {"views": 1234}
   - POST — засчитать просмотр (+1) и вернуть новое число

   Число хранится в базе Cloudflare D1 «cirius-views» (подключена в wrangler.toml
   под именем DB): одна таблица counters, одна строка views. Никаких сторонних
   сервисов, cookies и личных данных — только число. Предела нет: счёт точный
   до 9 квадриллионов.

   Одновременные заходы не теряются: +1 делает сама база одной командой
   (value = value + 1), поэтому два запроса не могут перезаписать друг друга.
   ========================================================================= */

// Роботы и проверки скорости не считаются (они почти не выполняют JS, но некоторые умеют)
const BOTS = /bot|crawl|spider|slurp|lighthouse|headless|pingdom|uptime|monitor/i;

const CREATE = 'CREATE TABLE IF NOT EXISTS counters (name TEXT PRIMARY KEY, value INTEGER NOT NULL)';
const INCREMENT = "INSERT INTO counters (name, value) VALUES ('views', 1) "
  + 'ON CONFLICT(name) DO UPDATE SET value = value + 1 RETURNING value';
const READ = "SELECT value FROM counters WHERE name = 'views'";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});

// Засчитываем только POST со своего же сайта и не от роботов
function isCountable(request) {
  if (request.method !== 'POST') return false;
  const site = request.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin') return false;
  return !BOTS.test(request.headers.get('user-agent') || '');
}

async function views(db, countable) {
  const value = await db.prepare(countable ? INCREMENT : READ).first('value');
  return Number(value) || 0;
}

export async function onRequest({ request, env }) {
  if (request.method !== 'GET' && request.method !== 'POST') return json({ error: 'method not allowed' }, 405);
  if (!env.DB) return json({ error: 'unavailable' }, 503);   // база не подключена

  const countable = isCountable(request);
  try {
    try {
      return json({ views: await views(env.DB, countable) });
    } catch (error) {
      // Новая пустая база: создаём таблицу и повторяем
      if (!/no such table/i.test(String(error?.message))) throw error;
      await env.DB.prepare(CREATE).run();
      return json({ views: await views(env.DB, countable) });
    }
  } catch (error) {
    console.error('views counter:', error);
    return json({ error: 'unavailable' }, 503);
  }
}
