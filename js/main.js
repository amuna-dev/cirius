/* =========================================================================
   Сириус — визовый консалтинг. Скрипты сайта.

   Сайт-визитка: никаких форм и сбора данных. Весь контент лежит в HTML
   на русском, сайт полностью читается без JS. Здесь только поведение:
   1. Английская версия: подстановка текстов из js/i18n-en.js
   2. Переключатели языка и темы
   3. Шапка, мобильное меню, нижняя панель на телефоне
   4. Появление блоков при прокрутке
   5. Возврат кнопкой «Назад»
   ========================================================================= */
'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const LANG = document.documentElement.lang === 'en' ? 'en' : 'ru';
const LANG_KEY = 'sirius_lang';
const THEME_KEY = 'sirius_theme';
const SCROLL_KEY = 'sirius_scroll';
const EN = window.SIRIUS_EN || {};

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// localStorage может быть недоступен (приватный режим, запрет cookie)
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* выбор языка не запомнится */ } },
};

/* Строки, которые скрипт ставит сам (подписи бургера) */
const t = (key, fallback) => (LANG === 'en' && EN[key]) || fallback;


/* =========================================================================
   1. Английская версия
   ========================================================================= */

function applyEnglish() {
  $$('[data-t]').forEach((el) => {
    const value = EN[el.dataset.t];
    if (value !== undefined) el.innerHTML = value;
  });

  // Атрибуты: data-t-attr="aria-label:ui.navMain;alt:home.hero.alt"
  $$('[data-t-attr]').forEach((el) => {
    el.dataset.tAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      if (EN[key] !== undefined) el.setAttribute(attr, EN[key]);
    });
  });

  const page = document.body.dataset.page;
  if (EN[`meta.${page}.title`]) document.title = EN[`meta.${page}.title`];
  const description = $('meta[name="description"]');
  if (description && EN[`meta.${page}.description`]) description.content = EN[`meta.${page}.description`];
}


/* =========================================================================
   2. Переключатели языка и темы
   ========================================================================= */

function initLangSwitch() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param === 'ru' || param === 'en') storage.set(LANG_KEY, param);

  $$('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === LANG;
    button.setAttribute('aria-pressed', String(active));
    button.addEventListener('click', () => {
      if (active) return;
      storage.set(LANG_KEY, button.dataset.lang);
      try { sessionStorage.setItem(SCROLL_KEY, String(window.scrollY / document.documentElement.scrollHeight)); } catch { /* страница откроется сверху */ }
      const url = new URL(location.href);
      url.searchParams.set('lang', button.dataset.lang);
      location.href = url;
    });
  });
}

/* Тема: светлая по умолчанию, тёмная — html[data-theme="dark"]. Начальное значение ставит js/init.js */
function initTheme() {
  const root = document.documentElement;
  const meta = $('meta[name="theme-color"]');
  const sync = () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    $$('[data-theme-toggle]').forEach((button) => button.setAttribute('aria-pressed', String(dark)));
    if (meta) meta.content = dark ? '#111315' : '#F7F4EE';
  };
  $$('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const dark = root.getAttribute('data-theme') !== 'dark';
      if (dark) root.setAttribute('data-theme', 'dark');
      else root.removeAttribute('data-theme');
      storage.set(THEME_KEY, dark ? 'dark' : 'light');
      sync();
    });
  });
  sync();
  return sync;
}

/* После смены языка возвращает к тому же месту: длина текстов разная, поэтому храним долю высоты */
function restoreScroll() {
  try {
    const share = sessionStorage.getItem(SCROLL_KEY);
    sessionStorage.removeItem(SCROLL_KEY);
    if (share && !location.hash) window.scrollTo({ top: Number(share) * document.documentElement.scrollHeight, behavior: 'instant' });
  } catch { /* остаёмся наверху */ }
}


/* =========================================================================
   3. Шапка, меню, нижняя панель
   ========================================================================= */

function initHeader() {
  const header = $('[data-header]');
  const burger = $('[data-burger]');
  const nav = $('[data-nav]');
  if (!header || !burger || !nav) return;

  // Пока меню открыто, страница под ним недоступна для Tab и экранных дикторов
  const behind = ['main', 'footer', '.quick-contact'].map((selector) => $(selector)).filter(Boolean);
  const setMenu = (open) => {
    document.documentElement.classList.toggle('menu-open', open);
    behind.forEach((el) => el.toggleAttribute('inert', open));
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? t('ui.menuClose', 'Закрыть меню') : t('ui.menuOpen', 'Открыть меню'));
  };

  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      burger.focus();
    }
  });
  // addListener — для Safari старше 14, где у MediaQueryList нет addEventListener
  const wide = matchMedia('(min-width: 900px)');
  const closeMenu = () => setMenu(false);
  if (wide.addEventListener) wide.addEventListener('change', closeMenu);
  else wide.addListener(closeMenu);

  // Подложка шапки появляется при прокрутке
  let ticking = false;
  const onFrame = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onFrame); }
  }, { passive: true });
  onFrame();
}

/* Нижняя панель на телефоне. На главной она выезжает, когда кнопки первого экрана уже
   прокручены вверх: иначе панель закрывала бы их. Пока класса is-shown нет, CSS прячет панель */
function initMobileBar() {
  const bar = $('.mobile-bar');
  if (!bar) return;
  const actions = $('.hero__actions');
  if (!actions || !('IntersectionObserver' in window)) {
    bar.classList.add('is-shown');
    return;
  }
  new IntersectionObserver(([entry]) => {
    bar.classList.toggle('is-shown', !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(actions);
}


/* =========================================================================
   4. Появление блоков
   ========================================================================= */

function initReveal() {
  document.documentElement.classList.add('reveal-ready');
  const items = $$('[data-reveal]');
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  // Срабатывает заранее: блок начинает появляться, когда до экрана ещё ~15% высоты
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px 15% 0px' });
  items.forEach((el) => observer.observe(el));
}


/* =========================================================================
   5. Возврат кнопкой «Назад»
   ========================================================================= */

/* Браузер может показать страницу из кэша, а тему или язык за это время сменили
   на другой странице. Подтягиваем сохранённый выбор */
function initPageshow(syncTheme) {
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    const savedLang = storage.get(LANG_KEY) === 'en' ? 'en' : 'ru';
    if (savedLang !== LANG) {
      const url = new URL(location.href);
      url.searchParams.set('lang', savedLang);
      location.replace(url);
      return;
    }
    const root = document.documentElement;
    if (storage.get(THEME_KEY) === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    syncTheme();
  });
}


/* =========================================================================
   Запуск
   ========================================================================= */

if (LANG === 'en') applyEnglish();
document.documentElement.classList.remove('i18n-pending');

$$('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

initLangSwitch();
const syncTheme = initTheme();
initHeader();
initMobileBar();
initReveal();
restoreScroll();
initPageshow(syncTheme);
