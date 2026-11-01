/* =========================================================================
   NOIR Detail — логика сайта.

   Файл состоит из двух частей:
   1. SITE — ВСЕ русские тексты, цены и контакты, SITE_EN — английский перевод.
      Менять контент нужно только здесь.
   2. Код виджетов — ниже, контент он берёт из SITE.

   Все данные в SITE вымышленные: замените их на реальные перед запуском.
   ========================================================================= */

const SITE = {
  /* --- Валюта: одна на весь сайт --- */
  currency: { symbol: '$', position: 'before' },

  /* --- Контакты --- */
  contacts: {
    address: 'Ташкент, Яшнабадский район, ул. Шёлковая, 17',
    hours: 'Ежедневно, 9:00–21:00',
    // Ссылки-заглушки: подставьте настоящие адреса
    telegram: 'https://t.me/noirdetail_example',
    whatsapp: 'https://wa.me/',
    instagram: 'https://instagram.com/noirdetail_example',
    youtube: 'https://youtube.com/@noirdetail_example',
  },

  /* --- Маска телефона: # — цифра --- */
  phoneMask: '+998 (##) ###-##-##',

  /* --- Акция --- */
  promo: {
    discount: 15,            // процент скидки, также используется в калькуляторе
    seatsLeft: 3,            // счётчик «осталось мест»
    deadline: null,          // дата конца акции, например '2026-12-31T23:59:59'; null — до конца текущей недели
    popupDelay: 25,          // через сколько секунд показать всплывающее окно
    popupTitle: 'Скидка 15% на первый визит',
    popupText: 'Оставьте номер, и мы закрепим скидку за вами. Перезвоним и подберём удобное время.',
    popupButton: 'Закрепить скидку',
  },

  /* --- Тексты разделов. <em> в заголовке выделяет слова градиентом --- */
  texts: {
    hero: {
      eyebrow: 'Детейлинг-студия премиум-класса',
      title: 'Ваш автомобиль заслуживает <em>идеального блеска</em>',
      lead: 'Керамика и защита кузова на годы: глубокий блеск, стойкость к царапинам и реагентам, гарантия в договоре.',
      ctaPrimary: 'Бесплатная диагностика кузова',
      ctaSecondary: 'Рассчитать стоимость',
    },
    services: {
      eyebrow: 'Услуги',
      title: 'Всё для кузова и салона в одном боксе',
      lead: 'Подбираем работы под состояние автомобиля. Точную цену называем после бесплатной диагностики.',
    },
    ba: {
      eyebrow: 'До / После',
      title: 'Разница видна сразу',
      lead: 'Потяните разделитель: слева кузов до работ, справа тот же автомобиль после полировки и керамики.',
    },
    process: { eyebrow: 'Как мы работаем', title: 'Четыре шага до идеального кузова' },
    why: { eyebrow: 'Почему NOIR Detail', title: 'Отвечаем за результат документально' },
    gallery: { eyebrow: 'Галерея', title: 'Наши работы' },
    faq: { eyebrow: 'Частые вопросы', title: 'Отвечаем до того, как вы спросите' },
    lead: {
      eyebrow: 'Акция для новых клиентов',
      title: 'Бесплатная диагностика кузова + скидка 15%',
      lead: 'Замерим толщину лака, покажем дефекты под лампой и назовём точную цену. Это ни к чему не обязывает.',
      timerLabel: 'До конца акции:',
      formTitle: 'Записаться на диагностику',
      submit: 'Получить диагностику и скидку',
      note: 'Перезвоним в течение 15 минут в рабочее время. Нажимая кнопку, вы соглашаетесь на обработку персональных данных.',
    },
    sv: {
      eyebrow: 'Пакеты, цены, запись',
      title: 'Услуги и расчёт стоимости',
      lead: 'Выберите готовый пакет или соберите свой набор работ в калькуляторе. Выбор сразу попадёт в форму записи.',
    },
    packages: {
      eyebrow: 'Пакеты',
      title: 'Три готовых решения',
      lead: 'Цены указаны для седана. Для других классов рассчитайте стоимость в калькуляторе.',
    },
    calc: {
      eyebrow: 'Калькулятор',
      title: 'Рассчитайте стоимость за минуту',
      lead: 'Цена ориентировочная: точную сумму назовём после бесплатной диагностики.',
    },
    compare: { eyebrow: 'Сравнение', title: 'Что входит в каждый пакет' },
    booking: {
      eyebrow: 'Запись',
      title: 'Запишитесь в удобный день',
      lead: 'Оставьте заявку, и мы перезвоним, чтобы подтвердить дату и время.',
      submit: 'Записаться',
    },
    guarantees: { eyebrow: 'Гарантии и сертификаты', title: 'Обещания, закреплённые на бумаге' },
    finalCta: {
      title: 'Не уверены, что выбрать?',
      lead: 'Приезжайте на бесплатную диагностику: осмотрим автомобиль и подскажем, какие работы действительно нужны.',
      button: 'Записаться на диагностику',
    },
    footer: { tagline: 'Премиум-детейлинг и керамика для автомобилей, за которыми хочется ухаживать.' },
    success: {
      title: 'Заявка принята',
      text: 'Перезвоним в течение 15 минут в рабочее время. Если удобнее написать самим, мы на связи в Telegram.',
    },
    /* Подписи интерфейса: кнопки, формы, ошибки, служебные тексты */
    ui: {
      meta: {
        home: { title: 'NOIR Detail — премиум-детейлинг и керамика для авто в Ташкенте', description: 'Студия детейлинга NOIR Detail: керамическое покрытие, полировка, химчистка салона и защитная плёнка PPF. Гарантия до 5 лет в договоре. Бесплатная диагностика кузова.' },
        services: { title: 'Услуги и расчёт стоимости — NOIR Detail', description: 'Пакеты детейлинга, онлайн-калькулятор стоимости и запись в студию NOIR Detail. Полировка, керамика, химчистка и плёнка PPF с гарантией в договоре.' },
      },
      skip: 'Перейти к содержанию',
      logoLabel: 'NOIR Detail — на главную',
      langLabel: 'Выбор языка',
      navMain: 'Основная навигация',
      navFooter: 'Навигация в футере',
      navHome: 'Главная',
      navServices: 'Услуги и расчёт',
      book: 'Записаться',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      heroPhoto: 'Главное фото',
      heroAlt: 'Чёрный автомобиль с идеально отполированным кузовом в студии NOIR Detail',
      before: 'До',
      after: 'После',
      beforeAlt: 'Кузов до полировки: тусклый лак с мелкими царапинами',
      afterAlt: 'Кузов после полировки: глубокий блеск без царапин',
      sliderLabel: 'Положение разделителя до и после',
      days: 'дней',
      hours: 'часов',
      minutes: 'минут',
      seconds: 'секунд',
      formName: 'Ваше имя',
      formNamePh: 'Как к вам обращаться',
      formPhone: 'Телефон',
      formCar: 'Марка автомобиля',
      formCarPh: 'Например, BMW X5',
      formCarPhAlt: 'Например, Toyota Camry',
      formService: 'Услуга',
      formServicePick: 'Выберите услугу',
      formDate: 'Удобная дата',
      formComment: 'Комментарий',
      formCommentPh: 'Что важно учесть',
      footerContacts: 'Контакты',
      footerHours: 'Часы работы',
      footerSections: 'Разделы',
      footerSocials: 'Соцсети',
      footerTelegram: 'Написать в Telegram',
      rights: 'Все права защищены.',
      chipsNav: 'Разделы страницы',
      chipPackages: 'Пакеты',
      chipCalc: 'Калькулятор',
      chipCompare: 'Сравнение',
      chipBooking: 'Запись',
      calcStep1: '1. Класс автомобиля',
      calcStep2: '2. Услуги',
      calcResult: 'Итог расчёта',
      calcTotal: 'Итого',
      calcBook: 'Записаться на этот расчёт',
      calcHint: 'Выберите хотя бы одну услугу',
      summaryReset: 'Убрать выбранный расчёт',
      from: 'от',
      term: 'Срок',
      choosePackage: 'Выбрать пакет',
      yes: 'Да',
      no: 'Нет',
      price: 'Цена',
      compareCaption: 'Сравнение пакетов детейлинга',
      compareCorner: 'Что входит',
      optServices: 'Услуги',
      optPackages: 'Пакеты',
      optOther: 'Другое',
      optCalc: 'Индивидуальный расчёт',
      optConsult: 'Нужна консультация',
      chat: 'Написать нам',
      chatClose: 'Закрыть меню связи',
      popupEyebrow: 'Для новых клиентов',
      closeWindow: 'Закрыть окно',
      lightbox: 'Просмотр фото',
      lightboxClose: 'Закрыть просмотр',
      prevPhoto: 'Предыдущее фото',
      nextPhoto: 'Следующее фото',
      openPhoto: 'Открыть фото',
      errors: {
        name: 'Укажите имя',
        phone: 'Введите номер телефона полностью',
        car: 'Укажите марку автомобиля',
        service: 'Выберите услугу',
        send: 'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в Telegram.',
      },
      packageName: (name) => `Пакет «${name}»`,
      packageSummary: (price, term) => ` от ${price}, срок ${term}`,
      photoCount: (n, total) => `${n} из ${total}`,
      discountLine: (price, percent) => `${price} со скидкой ${percent}% на первый визит`,
      yourCalc: (price) => `Ваш расчёт: ${price}.`,
      seats: (n) => `Осталось ${n} ${plural(n, ['место', 'места', 'мест'])} на эту неделю`,
    },
  },

  /* --- Услуги на главной. size: lg — большая карточка, accent — карточка без фото --- */
  services: [
    { id: 'ceramic', name: 'Керамическое покрытие', desc: 'Твёрдый слой поверх лака: блеск, гидрофобный эффект и защита от реагентов до 5 лет.', price: 350, img: 'images/service2.jpg', icon: 'shield', size: 'lg' },
    { id: 'polish', name: 'Полировка кузова', desc: 'Убираем мелкие царапины и голограммы, возвращаем лаку глубину цвета.', price: 180, img: 'images/service1.jpg', icon: 'sparkle' },
    { id: 'interior', name: 'Химчистка салона', desc: 'Кожа, ткань, потолок и багажник без запахов и следов.', price: 120, img: 'images/service3.jpg', icon: 'seat' },
    { id: 'ppf', name: 'Защитная плёнка PPF', desc: 'Невидимая плёнка на капот, бампер и зоны риска. Защищает от сколов.', price: 900, img: 'images/service4.jpg', icon: 'layers' },
    { id: 'complex', name: 'Комплексный детейлинг', desc: 'Кузов, салон и керамика за один визит. Выгоднее, чем заказывать работы по отдельности.', price: 590, icon: 'star', size: 'accent' },
  ],

  /* --- Шаги работы --- */
  steps: [
    { title: 'Заявка', text: 'Оставляете заявку на сайте, и мы перезваниваем в течение 15 минут.' },
    { title: 'Диагностика', text: 'Бесплатно осматриваем кузов, замеряем лак и называем точную цену.' },
    { title: 'Работа', text: 'Работаем в закрытом боксе и присылаем фотоотчёт по этапам.' },
    { title: 'Выдача с гарантией', text: 'Передаём автомобиль, договор с гарантией и советы по уходу.' },
  ],

  /* --- Преимущества --- */
  advantages: [
    { icon: 'award', title: 'Сертифицированные материалы', text: 'Используем только оригинальные составы от официальных поставщиков.' },
    { icon: 'camera', title: 'Фотоотчёт', text: 'Показываем каждый этап работ, даже если вы не можете приехать.' },
    { icon: 'doc', title: 'Гарантия в договоре', text: 'Срок и условия гарантии фиксируем на бумаге.' },
    { icon: 'lock', title: 'Закрытый бокс', text: 'Автомобиль стоит в чистом боксе без пыли и посторонних.' },
  ],

  /* --- Галерея --- */
  gallery: [
    { src: 'images/car1.jpg', label: 'Работа №1', alt: 'Автомобиль после полировки и нанесения керамики' },
    { src: 'images/car2.jpg', label: 'Работа №2', alt: 'Глубокий блеск кузова после детейлинга' },
    { src: 'images/car3.jpg', label: 'Работа №3', alt: 'Автомобиль с защитной плёнкой на передней части' },
    { src: 'images/studio.jpg', label: 'Наша студия', alt: 'Закрытый бокс студии NOIR Detail с профессиональным светом' },
  ],

  /* --- FAQ --- */
  faq: [
    { q: 'Сколько стоит детейлинг?', a: 'Полировка стоит от $180, керамика от $350, химчистка от $120. Цена зависит от класса и состояния автомобиля. Точную сумму назовём после бесплатной диагностики и не изменим её в процессе.' },
    { q: 'Сколько времени займут работы?', a: 'Мойка и полировка занимают 1 день, полировка с керамикой 2–3 дня, полный комплекс с PPF 5–7 дней. Срок фиксируем до начала работ.' },
    { q: 'Есть ли гарантия?', a: 'Да, до 5 лет на керамику и плёнку. Срок и условия указаны в договоре, а обслуживание покрытия проводим у себя в студии.' },
    { q: 'Что если результат не понравится?', a: 'Вы принимаете автомобиль вместе с мастером под лампами. Если что-то не устроит, бесплатно устраним замечания до выдачи.' },
    { q: 'Безопасна ли полировка для лака?', a: 'Перед работой замеряем толщину лака и снимаем минимальный слой. Если запаса лака мало, предложим щадящий вариант или откажемся от абразивной полировки.' },
    { q: 'Нужно ли оставлять автомобиль?', a: 'Да, на время работ автомобиль стоит в закрытом боксе. Мы присылаем фотоотчёт, а забрать машину можно в любой день с 9:00 до 21:00.' },
  ],

  /* --- Пакеты. summary — название в форме записи --- */
  packages: [
    { id: 'basic', name: 'Базовый', price: 190, term: '1 день', desc: 'Освежить автомобиль и вернуть блеск.', items: ['Детейлинг-мойка', 'Очистка кузова от битума', 'Лёгкая полировка', 'Защитный воск'] },
    { id: 'premium', name: 'Премиум', price: 590, term: '2–3 дня', desc: 'Оптимальная защита кузова на два года.', popular: true, badge: 'Выбор клиентов', items: ['Всё из пакета «Базовый»', 'Двухэтапная полировка', 'Керамика, 2 слоя', 'Химчистка салона', 'Гарантия 2 года'] },
    { id: 'max', name: 'Максимум', price: 1390, term: '5–7 дней', desc: 'Полная защита для новых и дорогих авто.', items: ['Всё из пакета «Премиум»', 'Керамика, 3 слоя', 'PPF на зоны риска', 'Защита дисков и стёкол', 'Гарантия 5 лет'] },
  ],

  /* --- Калькулятор: цена услуги × коэффициент класса --- */
  calc: {
    classes: [
      { id: 'sedan', name: 'Седан', k: 1 },
      { id: 'crossover', name: 'Кроссовер', k: 1.2 },
      { id: 'suv', name: 'Внедорожник', k: 1.4 },
      { id: 'premium', name: 'Премиум', k: 1.6 },
    ],
    services: [
      { id: 'polish', name: 'Полировка', price: 180, checked: true },
      { id: 'ceramic', name: 'Керамика', price: 350, checked: true },
      { id: 'interior', name: 'Химчистка', price: 120 },
      { id: 'ppf', name: 'PPF', price: 900 },
      { id: 'wash', name: 'Мойка', price: 30 },
    ],
  },

  /* --- Таблица сравнения: по одному значению на каждый пакет --- */
  compare: [
    { name: 'Детейлинг-мойка', values: [true, true, true] },
    { name: 'Полировка', values: ['Лёгкая', '2 этапа', '2 этапа'] },
    { name: 'Керамика', values: [false, '2 слоя', '3 слоя'] },
    { name: 'Химчистка салона', values: [false, true, true] },
    { name: 'PPF на зоны риска', values: [false, false, true] },
    { name: 'Защита дисков и стёкол', values: [false, false, true] },
    { name: 'Гарантия', values: ['—', '2 года', '5 лет'] },
    { name: 'Срок', values: ['1 день', '2–3 дня', '5–7 дней'] },
  ],

  /* --- Гарантии и сертификаты --- */
  guarantees: [
    { icon: 'doc', title: 'Договор на работы', text: 'Состав, цена и сроки закреплены до начала работ.' },
    { icon: 'shield', title: 'Гарантия до 5 лет', text: 'Распространяется на керамику и плёнку PPF.' },
    { icon: 'award', title: 'Сертификаты мастеров', text: 'Мастера проходят обучение у производителей покрытий.' },
    { icon: 'sparkle', title: 'Оригинальные материалы', text: 'Подтверждаем происхождение каждого состава.' },
  ],
};

/* --- Английская версия. Здесь только переводы: цены, ссылки и настройки берутся из SITE.
       Порядок элементов в списках такой же, как в SITE --- */
const SITE_EN = {
  contacts: {
    address: '17 Shyolkovaya St, Yashnabad District, Tashkent',
    hours: 'Daily, 9:00 AM – 9:00 PM',
  },

  promo: {
    popupTitle: '15% off your first visit',
    popupText: 'Leave your number and we will lock in the discount for you. We will call back and find a time that suits you.',
    popupButton: 'Claim my discount',
  },

  texts: {
    hero: {
      eyebrow: 'Premium detailing studio',
      title: 'Your car deserves a <em>flawless shine</em>',
      lead: 'Ceramic coating and paint protection that lasts for years: deep gloss, resistance to scratches and road salt, and a warranty in writing.',
      ctaPrimary: 'Free paint inspection',
      ctaSecondary: 'Get a price estimate',
    },
    services: {
      eyebrow: 'Services',
      title: 'Everything for paint and interior under one roof',
      lead: 'We tailor the work to the condition of your car. You get the exact price after a free inspection.',
    },
    ba: {
      eyebrow: 'Before / After',
      title: 'See the difference instantly',
      lead: 'Drag the divider: the left side shows the paint before the work, the right side shows the same car after polishing and ceramic coating.',
    },
    process: { eyebrow: 'How we work', title: 'Four steps to flawless paint' },
    why: { eyebrow: 'Why NOIR Detail', title: 'We put our results in writing' },
    gallery: { eyebrow: 'Gallery', title: 'Our work' },
    faq: { eyebrow: 'FAQ', title: 'Answers before you ask' },
    lead: {
      eyebrow: 'New client offer',
      title: 'Free paint inspection + 15% off',
      lead: 'We measure paint thickness, show you the defects under inspection lights and give you an exact price, with no obligation.',
      timerLabel: 'Offer ends in:',
      formTitle: 'Book your inspection',
      submit: 'Get my inspection and discount',
      note: 'We call back within 15 minutes during business hours. By clicking the button, you agree to the processing of your personal data.',
    },
    sv: {
      eyebrow: 'Packages, pricing, booking',
      title: 'Services and pricing',
      lead: 'Pick a ready-made package or build your own in the calculator. Your choice goes straight into the booking form.',
    },
    packages: {
      eyebrow: 'Packages',
      title: 'Three ready-made options',
      lead: 'Prices are for a sedan. Use the calculator for other vehicle classes.',
    },
    calc: {
      eyebrow: 'Calculator',
      title: 'Get your price in a minute',
      lead: 'This is an estimate: we confirm the exact amount after a free inspection.',
    },
    compare: { eyebrow: 'Compare', title: 'What each package includes' },
    booking: {
      eyebrow: 'Booking',
      title: 'Book a day that suits you',
      lead: 'Leave a request and we will call you back to confirm the date and time.',
      submit: 'Book now',
    },
    guarantees: { eyebrow: 'Warranties and certificates', title: 'Promises backed by paperwork' },
    finalCta: {
      title: 'Not sure what to choose?',
      lead: 'Come in for a free inspection: we will look over your car and tell you which work it actually needs.',
      button: 'Book an inspection',
    },
    footer: { tagline: 'Premium detailing and ceramic coating for cars worth looking after.' },
    success: {
      title: 'Request received',
      text: 'We will call you back within 15 minutes during business hours. Prefer to message us yourself? We are on Telegram.',
    },
    ui: {
      meta: {
        home: { title: 'NOIR Detail — premium car detailing and ceramic coating in Tashkent', description: 'NOIR Detail studio: ceramic coating, paint polishing, interior deep cleaning and paint protection film. Written warranty of up to 5 years. Free paint inspection.' },
        services: { title: 'Services and pricing — NOIR Detail', description: 'Detailing packages, an online price calculator and booking at NOIR Detail. Polishing, ceramic coating, interior cleaning and PPF with a written warranty.' },
      },
      skip: 'Skip to content',
      logoLabel: 'NOIR Detail — home',
      langLabel: 'Choose language',
      navMain: 'Main navigation',
      navFooter: 'Footer navigation',
      navHome: 'Home',
      navServices: 'Services & Pricing',
      book: 'Book now',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      heroPhoto: 'Main photo',
      heroAlt: 'Black car with perfectly polished paint at the NOIR Detail studio',
      before: 'Before',
      after: 'After',
      beforeAlt: 'Paint before polishing: dull clear coat with fine scratches',
      afterAlt: 'Paint after polishing: deep gloss with no scratches',
      sliderLabel: 'Before and after divider position',
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
      formName: 'Your name',
      formNamePh: 'What should we call you?',
      formPhone: 'Phone',
      formCar: 'Car make and model',
      formCarPh: 'e.g. BMW X5',
      formCarPhAlt: 'e.g. Toyota Camry',
      formService: 'Service',
      formServicePick: 'Choose a service',
      formDate: 'Preferred date',
      formComment: 'Comment',
      formCommentPh: 'Anything we should know?',
      footerContacts: 'Contact',
      footerHours: 'Opening hours',
      footerSections: 'Pages',
      footerSocials: 'Social media',
      footerTelegram: 'Message us on Telegram',
      rights: 'All rights reserved.',
      chipsNav: 'Page sections',
      chipPackages: 'Packages',
      chipCalc: 'Calculator',
      chipCompare: 'Compare',
      chipBooking: 'Booking',
      calcStep1: '1. Vehicle class',
      calcStep2: '2. Services',
      calcResult: 'Estimate summary',
      calcTotal: 'Total',
      calcBook: 'Book this estimate',
      calcHint: 'Choose at least one service',
      summaryReset: 'Remove the selected estimate',
      from: 'from',
      term: 'Time',
      choosePackage: 'Choose package',
      yes: 'Yes',
      no: 'No',
      price: 'Price',
      compareCaption: 'Detailing package comparison',
      compareCorner: 'Included',
      optServices: 'Services',
      optPackages: 'Packages',
      optOther: 'Other',
      optCalc: 'Custom estimate',
      optConsult: 'I need advice',
      chat: 'Message us',
      chatClose: 'Close contact menu',
      popupEyebrow: 'For new clients',
      closeWindow: 'Close window',
      lightbox: 'Photo viewer',
      lightboxClose: 'Close viewer',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      openPhoto: 'Open photo',
      errors: {
        name: 'Please enter your name',
        phone: 'Please enter your full phone number',
        car: 'Please enter your car make',
        service: 'Please choose a service',
        send: 'We could not send your request. Please try again or message us on Telegram.',
      },
      packageName: (name) => `${name} package`,
      packageSummary: (price, term) => ` from ${price}, takes ${term}`,
      photoCount: (n, total) => `${n} of ${total}`,
      discountLine: (price, percent) => `${price} with ${percent}% off your first visit`,
      yourCalc: (price) => `Your estimate: ${price}.`,
      seats: (n) => `${n} ${n === 1 ? 'spot' : 'spots'} left this week`,
    },
  },

  services: [
    { name: 'Ceramic coating', desc: 'A hard layer over the clear coat: gloss, water beading and protection from road salt for up to 5 years.' },
    { name: 'Paint polishing', desc: 'We remove fine scratches and holograms and bring back the depth of the color.' },
    { name: 'Interior deep cleaning', desc: 'Leather, fabric, headliner and trunk, free of odors and stains.' },
    { name: 'Paint protection film', desc: 'Invisible film for the hood, bumper and high-risk areas. Protects against stone chips.' },
    { name: 'Full detailing', desc: 'Paint, interior and ceramic coating in one visit. Better value than booking each job separately.' },
  ],

  steps: [
    { title: 'Request', text: 'Leave a request on the website and we call you back within 15 minutes.' },
    { title: 'Inspection', text: 'We inspect the paint for free, measure its thickness and give you the exact price.' },
    { title: 'The work', text: 'We work in a closed bay and send you a photo report at each stage.' },
    { title: 'Handover with warranty', text: 'You get your car back with a warranty agreement and care tips.' },
  ],

  advantages: [
    { title: 'Certified materials', text: 'We only use genuine products from official suppliers.' },
    { title: 'Photo report', text: 'We show you every stage of the work, even if you cannot come in.' },
    { title: 'Warranty in the contract', text: 'The warranty period and terms are set out on paper.' },
    { title: 'Closed bay', text: 'Your car stays in a clean bay, away from dust and strangers.' },
  ],

  gallery: [
    { label: 'Project 1', alt: 'Car after polishing and ceramic coating' },
    { label: 'Project 2', alt: 'Deep paint gloss after detailing' },
    { label: 'Project 3', alt: 'Car with protective film on the front end' },
    { label: 'Our studio', alt: 'Closed bay at the NOIR Detail studio with professional lighting' },
  ],

  faq: [
    { q: 'How much does detailing cost?', a: 'Polishing starts at $180, ceramic coating at $350 and interior cleaning at $120. The price depends on the class and condition of the car. We give you the exact amount after a free inspection and it will not change during the work.' },
    { q: 'How long does the work take?', a: 'A wash and polish takes 1 day, polishing with ceramic coating takes 2–3 days, and the full package with PPF takes 5–7 days. We agree on the time before we start.' },
    { q: 'Is there a warranty?', a: 'Yes, up to 5 years on ceramic coating and film. The period and terms are in the contract, and we service the coating at our studio.' },
    { q: 'What if I do not like the result?', a: 'You inspect the car with the technician under the lights. If anything is not right, we fix it for free before handover.' },
    { q: 'Is polishing safe for the paint?', a: 'We measure the paint thickness first and remove as little as possible. If the paint is thin, we suggest a gentler option or skip abrasive polishing altogether.' },
    { q: 'Do I need to leave the car with you?', a: 'Yes, the car stays in a closed bay during the work. We send you a photo report, and you can pick it up any day from 9:00 AM to 9:00 PM.' },
  ],

  packages: [
    { name: 'Basic', term: '1 day', desc: 'Freshen up your car and bring back the shine.', items: ['Detailing wash', 'Tar removal', 'Light polish', 'Protective wax'] },
    { name: 'Premium', term: '2–3 days', desc: 'The best balance: paint protection for two years.', badge: 'Clients’ choice', items: ['Everything in Basic', 'Two-stage polish', 'Ceramic coating, 2 layers', 'Interior deep cleaning', '2-year warranty'] },
    { name: 'Maximum', term: '5–7 days', desc: 'Complete protection for new and high-end cars.', items: ['Everything in Premium', 'Ceramic coating, 3 layers', 'PPF on high-risk areas', 'Wheel and glass protection', '5-year warranty'] },
  ],

  calc: {
    classes: [{ name: 'Sedan' }, { name: 'Crossover' }, { name: 'SUV' }, { name: 'Premium' }],
    services: [{ name: 'Polishing' }, { name: 'Ceramic' }, { name: 'Interior cleaning' }, { name: 'PPF' }, { name: 'Wash' }],
  },

  compare: [
    { name: 'Detailing wash' },
    { name: 'Polishing', values: ['Light', '2 stages', '2 stages'] },
    { name: 'Ceramic coating', values: [false, '2 layers', '3 layers'] },
    { name: 'Interior deep cleaning' },
    { name: 'PPF on high-risk areas' },
    { name: 'Wheel and glass protection' },
    { name: 'Warranty', values: ['—', '2 years', '5 years'] },
    { name: 'Time', values: ['1 day', '2–3 days', '5–7 days'] },
  ],

  guarantees: [
    { title: 'Work contract', text: 'Scope, price and timing are agreed before we start.' },
    { title: 'Warranty of up to 5 years', text: 'Covers ceramic coating and PPF.' },
    { title: 'Certified technicians', text: 'Our technicians train with the coating manufacturers.' },
    { title: 'Genuine materials', text: 'We can show where every product comes from.' },
  ],
};

/* Накладывает перевод на SITE: списки объединяются по порядку элементов */
function overlay(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === 'object') overlay(target[key], value);
    else target[key] = value;
  }
}

/* Язык определяет короткий скрипт в <head> каждой страницы: ?lang=, выбор посетителя, язык браузера */
const LANG = document.documentElement.lang === 'en' ? 'en' : 'ru';
if (LANG === 'en') overlay(SITE, SITE_EN);
const UI = SITE.texts.ui;


/* =========================================================================
   Подключение отправки заявок
   ========================================================================= */

/**
 * Заглушка: заявка никуда не уходит, только выводится в консоль браузера.
 * Здесь подключается Telegram-бот или CRM.
 *
 * Токен бота нельзя хранить в этом файле: его увидит любой посетитель.
 * Поставьте небольшой серверный обработчик (Cloudflare Worker, функция
 * на хостинге, PHP-скрипт), который перешлёт заявку через Bot API
 * sendMessage или в CRM, и обращайтесь к нему отсюда:
 *
 *   const res = await fetch('https://ваш-домен/api/lead', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(lead),
 *   });
 *   if (!res.ok) throw new Error('Заявка не отправлена');
 *
 * Функция должна вернуть промис: при ошибке (throw) форма покажет посетителю
 * сообщение об ошибке.
 *
 * @param {Object} lead name, phone, car, service, date, comment, summary,
 *                      source (какая форма), page, lang, createdAt
 */
async function sendLead(lead) {
  console.info('[NOIR Detail] Новая заявка (заглушка sendLead):', lead);
  await new Promise((resolve) => setTimeout(resolve, 600));
}


/* =========================================================================
   Утилиты
   ========================================================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const PROMO_KEY = 'noir_promo_seen';
const LANG_KEY = 'noir_lang';
const SCROLL_KEY = 'noir_scroll';

// localStorage может быть недоступен (приватный режим, запрет cookie)
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* показ запомнится только до перезагрузки */ } },
};

const formatNumber = (n) => Math.round(n).toLocaleString(LANG === 'en' ? 'en-US' : 'ru-RU');

function formatPrice(n) {
  const { symbol, position } = SITE.currency;
  return position === 'before' ? `${symbol}${formatNumber(n)}` : `${formatNumber(n)} ${symbol}`;
}

function plural(n, [one, few, many]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

const getByPath = (obj, path) => path.split('.').reduce((value, key) => value?.[key], obj);

/* Плавно меняет число в элементе. Новый запуск отменяет предыдущий. */
const numberAnimations = new WeakMap();
function animateNumber(el, from, to, format, duration = 900) {
  cancelAnimationFrame(numberAnimations.get(el));
  if (reducedMotion()) { el.textContent = format(to); return; }
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = format(from + (to - from) * eased);
    if (progress < 1) numberAnimations.set(el, requestAnimationFrame(tick));
  };
  numberAnimations.set(el, requestAnimationFrame(tick));
}


/* =========================================================================
   Иконки (inline SVG)
   ========================================================================= */

const ICONS = {
  shield: '<path d="M12 3 5 6v5c0 4.6 2.9 8.3 7 10 4.1-1.7 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  sparkle: '<path d="M12 3.5 13.9 9 19.5 11 13.9 13 12 18.5 10.1 13 4.5 11 10.1 9z"/><path d="M19 3v3M17.5 4.5h3M5 18v3M3.5 19.5h3"/>',
  seat: '<path d="M8 3h4.5a2 2 0 0 1 2 2.2L14 12h3.5a2 2 0 0 1 2 2v3H9a2 2 0 0 1-2-1.7L6 5.3A2 2 0 0 1 8 3z"/><path d="M9 17v4M17 17v4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  star: '<path d="m12 3 2.7 5.8 6.3.8-4.6 4.3 1.2 6.2-5.6-3.1-5.6 3.1 1.2-6.2L3 9.6l6.3-.8z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-2.5 5 2.5-1.5-7"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
  doc: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5M12 14.5v2.5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  minus: '<path d="M7 12h10"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  phone: '<path d="M5 3.5h4l1.6 5-2.3 1.8a12 12 0 0 0 5.4 5.4l1.8-2.3 5 1.6v4a1.5 1.5 0 0 1-1.6 1.5C10.5 19.8 4.2 13.5 3.5 5.1A1.5 1.5 0 0 1 5 3.5z"/>',
  chat: '<path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3.5 21l1.6-4.8A8.5 8.5 0 1 1 21 12z"/><path d="M8.5 12h.01M12.5 12h.01M16.5 12h.01"/>',
  whatsapp: '<path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.1-4.3A8.5 8.5 0 1 1 20.5 12z"/><path d="M9 8c-.4 3 3.800 7.300 7 7l.8-1.700-2.300-1.100-1 1c-1.100-.5-2-1.400-2.500-2.500l1-1-1.100-2.300z"/>',
  telegram: '<path d="M21 4.500 3.500 11.200c-.8.3-.8 1.300 0 1.500l4.300 1.300 1.700 5.100c.2.600 1 .8 1.500.3l2.400-2.300 4.400 3.200c.6.400 1.400.1 1.500-.6L22 5.400c.1-.700-.5-1.200-1-.9z"/><path d="m8 14 9.500-6.500-6.500 7.500"/>',
  instagram: '<rect x="3.500" y="3.500" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
  youtube: '<rect x="2.500" y="5.500" width="19" height="13" rx="4"/><path d="m10 9.500 5 2.500-5 2.500z"/>',
};

function icon(name, size = 24) {
  return `<svg class="icon" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}


/* =========================================================================
   Фото и заглушки
   ========================================================================= */

/* Разметка блока с фото. Если файла нет, блок превратится в заглушку. */
function mediaHtml({ src, alt, label, lazy = true }) {
  return `<div class="media" data-label="${label}" data-file="${src}">
    <img src="${src}" alt="${alt}" width="1200" height="800" ${lazy ? 'loading="lazy"' : ''} decoding="async">
  </div>`;
}

function markMissing(img) {
  const box = img.closest('.media');
  if (!box || box.classList.contains('is-missing')) return;
  box.classList.add('is-missing');
  box.setAttribute('role', 'img');
  box.setAttribute('aria-label', img.alt);
  const placeholder = document.createElement('div');
  placeholder.className = 'media__ph';
  placeholder.setAttribute('aria-hidden', 'true');
  placeholder.innerHTML = `<span class="media__tag">${icon('camera', 15)}<span>${box.dataset.label}</span><small>${box.dataset.file}</small></span>`;
  box.append(placeholder);
}

function initMedia() {
  // Ошибки загрузки не всплывают, поэтому слушаем на фазе перехвата
  document.addEventListener('error', (event) => {
    if (event.target.tagName === 'IMG') markMissing(event.target);
  }, true);
  // Фото из HTML могли упасть ещё до запуска этого скрипта
  $$('.media img').forEach((img) => {
    if (img.complete && img.naturalWidth === 0) markMissing(img);
  });
}


/* =========================================================================
   Подстановка контента из SITE
   ========================================================================= */

function applyTexts() {
  $$('[data-t]').forEach((el) => {
    const [root] = el.dataset.t.split('.');
    const source = root === 'contacts' ? SITE : SITE.texts;
    const value = getByPath(source, el.dataset.t);
    if (value !== undefined) el.innerHTML = value;
  });
  // Атрибуты: data-t-attr="aria-label:ui.navMain;placeholder:ui.formName"
  $$('[data-t-attr]').forEach((el) => {
    el.dataset.tAttr.split(';').forEach((pair) => {
      const [attr, path] = pair.split(':');
      el.setAttribute(attr, getByPath(SITE.texts, path));
    });
  });
  const meta = UI.meta[document.body.dataset.page];
  document.title = meta.title;
  $('meta[name="description"]').content = meta.description;

  $$('[data-href]').forEach((el) => {
    const key = el.dataset.href;
    el.href = SITE.contacts[key];
  });
  $$('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon, 20); });
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
}

const renderers = {
  services: () => SITE.services.map((item, i) => {
    const sizeClass = item.size ? ` card--${item.size}` : '';
    const photo = item.img ? mediaHtml({ src: item.img, alt: item.name, label: item.name }) : '';
    return `
    <article class="card${sizeClass}" data-glow data-reveal style="--i:${i}">
      ${photo}
      <div class="card__body">
        <span class="card__icon">${icon(item.icon)}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="card__foot">
          <span class="card__price">${UI.from} ${formatPrice(item.price)}</span>
          <a class="card__link" href="#lead" data-pick="${item.name}">${UI.book} ${icon('arrowRight', 18)}</a>
        </div>
      </div>
    </article>`;
  }).join(''),

  steps: () => SITE.steps.map((item, i) => `
    <li class="step" style="--i:${i}">
      <span class="step__num">${i + 1}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </li>`).join(''),

  advantages: () => featuresHtml(SITE.advantages),
  guarantees: () => featuresHtml(SITE.guarantees),

  gallery: () => SITE.gallery.map((item, i) => `
    <button class="gallery__item" type="button" data-lightbox="${i}" aria-label="${UI.openPhoto}: ${item.alt}" data-reveal style="--i:${i}">
      ${mediaHtml(item)}
    </button>`).join(''),

  faq: () => SITE.faq.map((item, i) => {
    const open = i === 0;
    return `
    <div class="faq__item${open ? ' is-open' : ''}">
      <h3>
        <button class="faq__q" type="button" id="faq-q-${i}" aria-expanded="${open}" aria-controls="faq-a-${i}">
          <span>${item.q}</span>${icon('chevron', 20)}
        </button>
      </h3>
      <div class="faq__a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${item.a}</p></div></div>
    </div>`;
  }).join(''),

  socials: () => ['telegram', 'whatsapp', 'instagram', 'youtube'].map((key) => `
    <a class="icon-btn" href="${SITE.contacts[key]}" target="_blank" rel="noopener" aria-label="${key[0].toUpperCase()}${key.slice(1)}">${icon(key, 20)}</a>`).join(''),

  packages: () => SITE.packages.map((item, i) => `
    <article class="package${item.popular ? ' package--popular gradient-border' : ''}" data-reveal style="--i:${i}">
      ${item.badge ? `<span class="package__badge">${item.badge}</span>` : ''}
      <h3>${item.name}</h3>
      <p class="package__desc">${item.desc}</p>
      <p class="package__price">${formatPrice(item.price)}</p>
      <p class="package__term">${icon('sparkle', 16)} ${UI.term}: ${item.term}</p>
      <ul class="package__list">
        ${item.items.map((text) => `<li>${icon('check', 18)}<span>${text}</span></li>`).join('')}
      </ul>
      <button class="btn ${item.popular ? 'btn--primary' : 'btn--ghost'} btn--block" type="button" data-package="${item.id}">${UI.choosePackage}</button>
    </article>`).join(''),

  compare: () => {
    const cell = (value) => {
      if (value === true) return `<span class="yes">${icon('check', 20)}<span class="sr-only">${UI.yes}</span></span>`;
      if (value === false) return `<span class="no">${icon('minus', 20)}<span class="sr-only">${UI.no}</span></span>`;
      return value;
    };
    const priceRow = { name: UI.price, values: SITE.packages.map((p) => formatPrice(p.price)) };
    const rows = [...SITE.compare, priceRow];
    const popular = SITE.packages.findIndex((p) => p.popular);
    const mark = (i) => (i === popular ? ' class="is-popular"' : '');
    // Роли сохраняют семантику таблицы: на телефоне строки перестраиваются через CSS grid
    return `
    <table class="compare" role="table">
      <caption class="sr-only">${UI.compareCaption}</caption>
      <thead role="rowgroup">
        <tr role="row">
          <th role="columnheader" scope="col" class="compare__corner">${UI.compareCorner}</th>
          ${SITE.packages.map((p, i) => `<th role="columnheader" scope="col"${mark(i)}>${p.name}</th>`).join('')}
        </tr>
      </thead>
      <tbody role="rowgroup">
        ${rows.map((row) => `
        <tr role="row">
          <th role="rowheader" scope="row">${row.name}</th>
          ${row.values.map((value, i) => `<td role="cell"${mark(i)}>${cell(value)}</td>`).join('')}
        </tr>`).join('')}
      </tbody>
    </table>`;
  },
};

function featuresHtml(items) {
  return items.map((item, i) => `
    <article class="feature" data-reveal style="--i:${i}">
      <span class="card__icon">${icon(item.icon)}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>`).join('');
}

function renderContent() {
  $$('[data-render]').forEach((el) => { el.innerHTML = renderers[el.dataset.render](); });

  // Выбор услуги в формах: услуги, пакеты и расчёт
  const serviceNames = SITE.services.map((s) => s.name);
  const packageNames = SITE.packages.map((p) => UI.packageName(p.name));
  const optgroup = (label, names) => `<optgroup label="${label}">${names.map((n) => `<option>${n}</option>`).join('')}</optgroup>`;
  $$('[data-service-select]').forEach((select) => {
    select.insertAdjacentHTML('beforeend', optgroup(UI.optServices, serviceNames) + optgroup(UI.optPackages, packageNames) + optgroup(UI.optOther, [UI.optCalc, UI.optConsult]));
  });
}


/* =========================================================================
   Общие элементы страницы: кнопка связи, нижняя панель, модальные окна
   ========================================================================= */

function renderShell() {
  const bookingHref = `#${$('[data-booking-section]').id}`;
  const { promo, contacts } = SITE;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="fab" data-fab>
      <div class="fab__menu" id="fab-menu" data-fab-menu>
        <a class="fab__item fab__item--tg" href="${contacts.telegram}" target="_blank" rel="noopener">${icon('telegram', 20)}<span>Telegram</span></a>
        <a class="fab__item fab__item--wa" href="${contacts.whatsapp}" target="_blank" rel="noopener">${icon('whatsapp', 20)}<span>WhatsApp</span></a>
      </div>
      <button class="fab__toggle" type="button" aria-label="${UI.chat}" aria-expanded="false" aria-controls="fab-menu" data-fab-toggle>
        <span class="fab__open">${icon('chat', 26)}</span><span class="fab__close">${icon('close', 24)}</span>
      </button>
    </div>

    <div class="mobile-bar">
      <a class="btn btn--ghost" href="${contacts.telegram}" target="_blank" rel="noopener">${icon('telegram', 18)} Telegram</a>
      <a class="btn btn--primary" href="${bookingHref}">${UI.book}</a>
    </div>

    <dialog class="modal" id="promo-modal" aria-labelledby="promo-title">
      <button class="modal__close" type="button" aria-label="${UI.closeWindow}" data-dialog-close>${icon('close', 22)}</button>
      <div class="modal__body gradient-border">
        <form class="form" data-lead-form="popup" novalidate>
          <p class="eyebrow">${UI.popupEyebrow}</p>
          <h2 id="promo-title" class="modal__title">${promo.popupTitle}</h2>
          <p class="modal__text">${promo.popupText}</p>
          <div class="field">
            <label for="promo-name">${UI.formName}</label>
            <input id="promo-name" name="name" type="text" autocomplete="name" placeholder="${UI.formNamePh}" data-rule="name" required>
          </div>
          <div class="field">
            <label for="promo-phone">${UI.formPhone}</label>
            <input id="promo-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" data-phone data-rule="phone" required>
          </div>
          <button class="btn btn--primary btn--lg btn--block" type="submit">${promo.popupButton}</button>
        </form>
      </div>
    </dialog>

    <dialog class="lightbox" id="lightbox" aria-label="${UI.lightbox}">
      <button class="modal__close" type="button" aria-label="${UI.lightboxClose}" data-dialog-close>${icon('close', 22)}</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="${UI.prevPhoto}" data-lb-prev>${icon('arrowLeft', 22)}</button>
      <div class="lightbox__stage" data-lb-stage></div>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="${UI.nextPhoto}" data-lb-next>${icon('arrowRight', 22)}</button>
      <p class="lightbox__caption" data-lb-caption></p>
    </dialog>
  `);
}

function initDialogs() {
  $$('dialog').forEach((dialog) => {
    // Клик по затемнению: цель события — сам dialog
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.closest('[data-dialog-close]')) dialog.close();
    });
  });
}

function initFab() {
  const root = $('[data-fab]');
  const toggle = $('[data-fab-toggle]');
  const setOpen = (open) => {
    root.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? UI.chatClose : UI.chat);
  };
  toggle.addEventListener('click', () => setOpen(!root.classList.contains('is-open')));
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) setOpen(false);
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { setOpen(false); toggle.focus(); }
  });
}


/* =========================================================================
   Переключатель языка
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

/* После смены языка возвращает к тому же месту: длина текстов разная, поэтому храним долю высоты */
function restoreScroll() {
  try {
    const share = sessionStorage.getItem(SCROLL_KEY);
    sessionStorage.removeItem(SCROLL_KEY);
    if (share) window.scrollTo({ top: Number(share) * document.documentElement.scrollHeight, behavior: 'instant' });
  } catch { /* остаёмся наверху */ }
}


/* =========================================================================
   Шапка и меню
   ========================================================================= */

function initHeader() {
  const header = $('[data-header]');
  const burger = $('[data-burger]');
  const nav = $('[data-nav]');

  const setMenu = (open) => {
    document.documentElement.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? UI.menuClose : UI.menuOpen);
  };

  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      burger.focus();
    }
  });
  matchMedia('(min-width: 720px)').addEventListener('change', () => setMenu(false));

  // Шапка и параллакс используют один обработчик прокрутки
  const parallax = $('[data-parallax]');
  const useParallax = parallax && !reducedMotion();
  const fab = $('.hero') && $('[data-fab]');                          // на первом экране телефона кнопка связи закрывала бы призыв
  let ticking = false;
  const onFrame = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 16);
    fab?.classList.toggle('is-tucked', y < window.innerHeight * 0.5);
    if (useParallax && y < window.innerHeight * 1.2) {
      parallax.style.transform = `translate3d(0, ${y * 0.16}px, 0)`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onFrame); }
  }, { passive: true });
  onFrame();
}


/* =========================================================================
   Появление блоков и подсветка карточек
   ========================================================================= */

function initReveal() {
  const items = $$('[data-reveal]');
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  items.forEach((el) => observer.observe(el));
}

function initCardGlow() {
  if (!matchMedia('(hover: hover)').matches) return;
  document.addEventListener('pointermove', (event) => {
    const card = event.target.closest?.('[data-glow]');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, { passive: true });
}


/* =========================================================================
   Слайдер «До / После»
   ========================================================================= */

function initBeforeAfter() {
  const root = $('[data-ba]');
  if (!root) return;
  const handle = $('[data-ba-handle]', root);

  const setPosition = (percent) => {
    const value = Math.min(100, Math.max(0, percent));
    root.style.setProperty('--pos', `${value}%`);
    handle.setAttribute('aria-valuenow', String(Math.round(value)));
  };
  const fromPointer = (event) => {
    const rect = root.getBoundingClientRect();
    setPosition(((event.clientX - rect.left) / rect.width) * 100);
  };

  root.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    root.setPointerCapture(event.pointerId);
    root.classList.add('is-dragging');
    fromPointer(event);
  });
  root.addEventListener('pointermove', (event) => {
    if (root.classList.contains('is-dragging')) fromPointer(event);
  });
  const stop = () => root.classList.remove('is-dragging');
  root.addEventListener('pointerup', stop);
  root.addEventListener('pointercancel', stop);

  handle.addEventListener('keydown', (event) => {
    const current = Number(handle.getAttribute('aria-valuenow'));
    const moves = { ArrowLeft: current - 4, ArrowDown: current - 4, ArrowRight: current + 4, ArrowUp: current + 4, Home: 0, End: 100 };
    if (event.key in moves) {
      event.preventDefault();
      setPosition(moves[event.key]);
    }
  });
  setPosition(50);
}


/* =========================================================================
   FAQ и галерея
   ========================================================================= */

function initFaq() {
  const faq = $('.faq');
  if (!faq) return;
  faq.addEventListener('click', (event) => {
    const button = event.target.closest('.faq__q');
    if (!button) return;
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.closest('.faq__item').classList.toggle('is-open', open);
  });
}

function initLightbox() {
  const dialog = $('#lightbox');
  const stage = $('[data-lb-stage]', dialog);
  const caption = $('[data-lb-caption]', dialog);
  const items = SITE.gallery;
  let index = 0;

  const show = (i) => {
    index = (i + items.length) % items.length;
    const item = items[index];
    stage.innerHTML = mediaHtml({ ...item, lazy: false });
    caption.textContent = `${item.label} · ${UI.photoCount(index + 1, items.length)}`;
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-lightbox]');
    if (!trigger) return;
    show(Number(trigger.dataset.lightbox));
    dialog.showModal();
  });
  $('[data-lb-prev]', dialog).addEventListener('click', () => show(index - 1));
  $('[data-lb-next]', dialog).addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });

  // Свайп на телефоне
  let startX = null;
  stage.addEventListener('pointerdown', (event) => { startX = event.clientX; });
  stage.addEventListener('pointerup', (event) => {
    if (startX === null) return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 40) show(index + (delta < 0 ? 1 : -1));
    startX = null;
  });
}


/* =========================================================================
   Формы: маска телефона, проверка, отправка
   ========================================================================= */

const MASK = SITE.phoneMask;
const MASK_PREFIX = MASK.slice(0, MASK.indexOf('#'));                // '+998 ('
const MASK_CODE = MASK_PREFIX.replace(/\D/g, '');                    // '998'
const MASK_START = MASK_PREFIX.slice(0, MASK_CODE.length + 1);       // '+998'
const MASK_DIGITS = MASK.split('#').length - 1;

function formatPhone(digits) {
  let out = MASK_PREFIX;
  let pending = '';
  let used = 0;
  for (const char of MASK.slice(MASK_PREFIX.length)) {
    if (char !== '#') { pending += char; continue; }
    if (used >= digits.length) break;
    out += pending + digits[used++];
    pending = '';
  }
  return out;
}

function initPhoneMask(input) {
  input.placeholder = MASK.replace(/#/g, '_');

  input.addEventListener('focus', () => { if (!input.value) input.value = MASK_PREFIX; });
  input.addEventListener('blur', () => { if (input.value === MASK_PREFIX) input.value = ''; });

  input.addEventListener('input', (event) => {
    const raw = input.value;
    const hasPrefix = raw.startsWith(MASK_START);
    const isDelete = event.inputType?.startsWith('delete');
    let digits = raw.replace(/\D/g, '');

    if (hasPrefix) digits = digits.slice(MASK_CODE.length);
    else if (isDelete) digits = '';                                   // стёрли часть кода страны
    else if (digits.length > MASK_DIGITS && digits.startsWith(MASK_CODE)) digits = digits.slice(MASK_CODE.length);

    const caret = input.selectionStart ?? raw.length;
    const atEnd = caret === raw.length;
    const digitsBefore = raw.slice(0, caret).replace(/\D/g, '').length - (hasPrefix ? MASK_CODE.length : 0);

    input.value = formatPhone(digits.slice(0, MASK_DIGITS));
    if (atEnd) return;

    // Правка в середине номера: возвращаем курсор к той же цифре
    let position = MASK_PREFIX.length;
    for (let seen = 0; position < input.value.length && seen < digitsBefore; position++) {
      if (/\d/.test(input.value[position])) seen++;
    }
    input.setSelectionRange(position, position);
  });
}

const VALIDATORS = {
  name: (value) => (value.trim().length >= 2 ? '' : UI.errors.name),
  phone: (value) => (value.replace(/\D/g, '').length === MASK_CODE.length + MASK_DIGITS ? '' : UI.errors.phone),
  car: (value) => (value.trim().length >= 2 ? '' : UI.errors.car),
  service: (value) => (value ? '' : UI.errors.service),
};

function showFieldError(input, message) {
  const field = input.closest('.field');
  let error = $('.field__error', field);
  if (!error) {
    error = document.createElement('p');
    error.className = 'field__error';
    error.id = `${input.id}-error`;
    field.append(error);
    input.setAttribute('aria-describedby', error.id);
  }
  error.textContent = message;
  field.classList.toggle('is-invalid', Boolean(message));
  input.setAttribute('aria-invalid', String(Boolean(message)));
}

const validateField = (input) => {
  const message = VALIDATORS[input.dataset.rule](input.value);
  showFieldError(input, message);
  return !message;
};

function showSuccess(form, lead) {
  const { title, text } = SITE.texts.success;
  const panel = document.createElement('div');
  panel.className = 'success';
  panel.tabIndex = -1;
  panel.setAttribute('role', 'status');
  panel.innerHTML = `
    <span class="success__icon">${icon('check', 34)}</span>
    <h3 class="success__title"></h3>
    <p class="success__text"></p>
    <a class="success__link" href="${SITE.contacts.telegram}" target="_blank" rel="noopener">${UI.footerTelegram}</a>`;
  // Имя вводит посетитель, поэтому только textContent
  $('.success__title', panel).textContent = `${title}, ${lead.name.trim()}!`;
  $('.success__text', panel).textContent = text;
  form.hidden = true;
  form.after(panel);
  panel.focus();
}

/* Возвращает форму после экрана успеха: например, выбрали ещё один пакет */
function restoreForm(form) {
  if (!form.hidden) return;
  form.nextElementSibling?.remove();
  form.reset();
  form.hidden = false;
}

function initForms() {
  $$('[data-phone]').forEach(initPhoneMask);

  $$('[data-date-min]').forEach((input) => {
    const now = new Date();
    input.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  });

  $$('[data-lead-form]').forEach((form) => {
    const fields = $$('[data-rule]', form);
    fields.forEach((input) => {
      input.addEventListener('blur', () => { if (input.value && input.value !== MASK_PREFIX) validateField(input); });
      input.addEventListener(input.tagName === 'SELECT' ? 'change' : 'input', () => {
        if (input.closest('.field').classList.contains('is-invalid')) validateField(input);
      });
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const invalid = fields.filter((input) => !validateField(input));
      if (invalid.length) { invalid[0].focus(); return; }

      const button = $('[type="submit"]', form);
      let status = $('.form__status', form);
      status?.remove();
      button.disabled = true;
      button.classList.add('is-loading');

      const lead = {
        ...Object.fromEntries(new FormData(form)),
        source: form.dataset.leadForm,
        page: location.pathname.split('/').pop() || 'index.html',
        lang: LANG,
        createdAt: new Date().toISOString(),
      };

      try {
        await sendLead(lead);
        storage.set(PROMO_KEY, '1');                                  // клиент уже оставил заявку, окно со скидкой не нужно
        showSuccess(form, lead);
      } catch (error) {
        console.error(error);
        status = document.createElement('p');
        status.className = 'form__status';
        status.setAttribute('role', 'alert');
        status.textContent = UI.errors.send;
        button.after(status);
      } finally {
        button.disabled = false;
        button.classList.remove('is-loading');
      }
    });
  });
}

/* Подставляет выбор пакета или расчёта в форму записи */
function fillBooking({ service, title, text }) {
  const section = $('[data-booking-section]');
  const form = $('[data-lead-form]', section);
  restoreForm(form);
  $('[data-service-select]', form).value = service;
  const select = $('[data-service-select]', form);
  if (select.closest('.field').classList.contains('is-invalid')) validateField(select);

  const summary = $('[data-form-summary]', form);
  if (summary) {
    $('[data-summary-title]', summary).textContent = title;
    $('[data-summary-text]', summary).textContent = text;
    $('[data-summary-input]', form).value = `${title} ${text}`;
    summary.hidden = false;
    summary.focus({ preventScroll: true });
  }
  section.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
}

function initBookingLinks() {
  // Карточка услуги на главной подставляет услугу в форму
  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-pick]');
    if (!link) return;
    const section = $('[data-booking-section]');
    const form = $('[data-lead-form]', section);
    restoreForm(form);
    $('[data-service-select]', form).value = link.dataset.pick;
  });

  // Кнопки пакетов на странице услуг
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-package]');
    if (!button) return;
    const pack = SITE.packages.find((p) => p.id === button.dataset.package);
    fillBooking({
      service: UI.packageName(pack.name),
      title: UI.packageName(pack.name),
      text: UI.packageSummary(formatPrice(pack.price), pack.term),
    });
  });

  $('[data-summary-reset]')?.addEventListener('click', () => {
    const form = $('[data-summary-reset]').closest('form');
    $('[data-form-summary]', form).hidden = true;
    $('[data-summary-input]', form).value = '';
    $('[data-service-select]', form).value = '';
    $('[data-service-select]', form).focus();
  });
}


/* =========================================================================
   Калькулятор
   ========================================================================= */

function initCalc() {
  const root = $('[data-calc]');
  if (!root) return;
  const { classes, services } = SITE.calc;

  $('[data-calc-classes]', root).innerHTML = classes.map((item, i) => `
    <label class="tile">
      <input type="radio" name="carClass" value="${item.id}" ${i === 0 ? 'checked' : ''}>
      <span class="tile__box"><b>${item.name}</b></span>
    </label>`).join('');

  $('[data-calc-services]', root).innerHTML = services.map((item) => `
    <label class="tile">
      <input type="checkbox" name="service" value="${item.id}" ${item.checked ? 'checked' : ''}>
      <span class="tile__box"><span class="tile__check">${icon('check', 16)}</span><b>${item.name}</b><small>${UI.from} ${formatPrice(item.price)}</small></span>
    </label>`).join('');

  const totalEl = $('[data-calc-total]', root);
  const discountEl = $('[data-calc-discount]', root);
  const linesEl = $('[data-calc-lines]', root);
  const liveEl = $('[data-calc-live]', root);
  const bookButton = $('[data-calc-book]', root);
  const hint = $('[data-calc-hint]', root);
  let shownTotal = 0;
  let current = null;

  const roundPrice = (n) => Math.round(n / 5) * 5;

  const calculate = () => {
    const carClass = classes.find((c) => c.id === $('input[name="carClass"]:checked', root).value);
    const lines = $$('input[name="service"]:checked', root).map((input) => {
      const service = services.find((s) => s.id === input.value);
      return { name: service.name, price: roundPrice(service.price * carClass.k) };
    });
    return { carClass, lines, total: lines.reduce((sum, line) => sum + line.price, 0) };
  };

  const update = () => {
    current = calculate();
    const { lines, total } = current;
    animateNumber(totalEl, shownTotal, total, (n) => formatPrice(roundPrice(n)), 500);
    shownTotal = total;

    linesEl.innerHTML = lines.map((line) => `<li><span>${line.name}</span><b>${formatPrice(line.price)}</b></li>`).join('');
    const withDiscount = roundPrice(total * (1 - SITE.promo.discount / 100));
    discountEl.textContent = total ? UI.discountLine(formatPrice(withDiscount), SITE.promo.discount) : '';
    liveEl.textContent = `${UI.calcTotal} ${formatPrice(total)}`;
    bookButton.disabled = !lines.length;
    hint.hidden = lines.length > 0;
  };

  root.addEventListener('change', update);
  root.addEventListener('submit', (event) => event.preventDefault());

  bookButton.addEventListener('click', () => {
    const { carClass, lines, total } = current;
    fillBooking({
      service: UI.optCalc,
      title: UI.yourCalc(formatPrice(total)),
      // Аббревиатуры вроде PPF оставляем заглавными
      text: ` ${carClass.name}: ${lines.map(({ name }) => (name === name.toUpperCase() ? name : name.toLowerCase())).join(', ')}`,
    });
  });

  update();
}


/* =========================================================================
   Акция: места, обратный отсчёт, всплывающее окно
   ========================================================================= */

function initScarcity() {
  const seats = $('[data-promo-seats]');
  if (seats) seats.textContent = UI.seats(SITE.promo.seatsLeft);

  const root = $('[data-countdown]');
  if (!root) return;

  const endOfWeek = () => {
    const date = new Date();
    date.setDate(date.getDate() + (7 - date.getDay()) % 7);           // ближайшее воскресенье
    date.setHours(23, 59, 59, 0);
    return date;
  };
  const deadline = SITE.promo.deadline ? new Date(SITE.promo.deadline) : endOfWeek();
  const units = Object.fromEntries($$('[data-unit]', root).map((el) => [el.dataset.unit, el]));
  const pad = (n) => String(n).padStart(2, '0');

  const tick = () => {
    const left = Math.floor((deadline - Date.now()) / 1000);
    if (left <= 0) {                                                  // акция закончилась: таймер не показываем
      root.hidden = true;
      clearInterval(timer);
      return;
    }
    units.d.textContent = pad(Math.floor(left / 86400));
    units.h.textContent = pad(Math.floor(left / 3600) % 24);
    units.m.textContent = pad(Math.floor(left / 60) % 60);
    units.s.textContent = pad(left % 60);
  };
  const timer = setInterval(tick, 1000);
  tick();
}

function initPromo() {
  const dialog = $('#promo-modal');
  if (storage.get(PROMO_KEY)) return;
  let done = false;

  // Окно не должно мешать: ждём, пока закроются меню и другие окна и посетитель допишет форму
  const isBusy = () => $('dialog[open]')
    || document.documentElement.classList.contains('menu-open')
    || document.activeElement?.closest('form');

  const show = () => {
    if (done) return;
    if (storage.get(PROMO_KEY)) { done = true; return; }
    done = true;
    storage.set(PROMO_KEY, '1');
    dialog.showModal();
  };

  const showByTimer = () => {
    if (isBusy()) { setTimeout(showByTimer, 5000); return; }
    show();
  };
  setTimeout(showByTimer, SITE.promo.popupDelay * 1000);

  // Exit-intent: курсор ушёл за верхний край окна
  document.documentElement.addEventListener('mouseleave', (event) => {
    if (event.clientY <= 0 && !isBusy()) show();
  });
}


/* =========================================================================
   Запуск
   ========================================================================= */

initLangSwitch();
initMedia();
applyTexts();
renderContent();
renderShell();
initDialogs();
initFab();
initHeader();
initBeforeAfter();
initFaq();
initLightbox();
initForms();
initBookingLinks();
initCalc();
initScarcity();
initPromo();
initCardGlow();
restoreScroll();
initReveal();
document.documentElement.classList.remove('i18n-pending');
