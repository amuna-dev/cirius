/* Выполняется в <head> до отрисовки страницы, чтобы не мелькали не тот язык и не та тема.
   Язык: ?lang= в ссылке, затем сохранённый выбор. По умолчанию — русский (он лежит в HTML).
   Тема: сохранённый выбор посетителя. По умолчанию — светлая.
   Выбор хранится только в браузере посетителя (localStorage) и никуда не отправляется. */
(function () {
  var root = document.documentElement;
  var read = function (key) { try { return localStorage.getItem(key); } catch (e) { return null; } };

  // Языки: русский (лежит в HTML), узбекский (латиница) и английский — из словарей
  var known = function (l) { return l === 'ru' || l === 'uz' || l === 'en'; };
  var lang = null;
  try { lang = new URLSearchParams(location.search).get('lang'); } catch (e) {}
  if (!known(lang)) lang = read('sirius_lang');
  root.lang = known(lang) ? lang : 'ru';

  if (read('sirius_theme') === 'dark') {
    root.setAttribute('data-theme', 'dark');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = '#111315';
  }

  root.classList.add('js');
  // Блоки с анимацией скрыты до появления. Если main.js не запустился — показываем всё
  setTimeout(function () {
    if (!root.classList.contains('reveal-ready')) root.classList.add('reveal-fallback');
  }, 2500);
  if (root.lang !== 'ru') {
    // Пока main.js подставляет перевод, страница скрыта
    root.classList.add('i18n-pending');
    setTimeout(function () { root.classList.remove('i18n-pending'); }, 1500);
  }
})();
