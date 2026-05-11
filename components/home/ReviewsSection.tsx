const REVIEWS = [
  {
    name: 'Айгерим К.',
    text: 'Заказывала шторы для гостиной и спальни. Качество превзошло все ожидания! Ткань плотная, пошив аккуратный. Мастер приехал на замер в день звонка, монтаж сделали быстро. Очень довольна!',
    rating: 5,
    room: 'Гостиная + спальня',
    date: 'Март 2024',
  },
  {
    name: 'Дина М.',
    text: 'Брали рулонные жалюзи для кабинета. Цена приятно удивила, качество отличное. Установили аккуратно, объяснили как пользоваться. Рекомендую всем!',
    rating: 5,
    room: 'Кабинет',
    date: 'Февраль 2024',
  },
  {
    name: 'Рустем А.',
    text: 'Обращался за тюлем для детской комнаты. Помогли с выбором, подобрали идеальный вариант. Дочке очень понравилось! Обязательно вернёмся за шторами.',
    rating: 5,
    room: 'Детская',
    date: 'Январь 2024',
  },
  {
    name: 'Нурия С.',
    text: 'Сделали шторы для всей квартиры (4 комнаты). Замер, пошив, установка — всё чётко и профессионально. Цены разумные, качество на высоте. Студия Zarina — лучшие в Атырау!',
    rating: 5,
    room: 'Вся квартира',
    date: 'Декабрь 2023',
  },
  {
    name: 'Мария Т.',
    text: 'Потрясающий сервис и качество. Шторы из бархата для спальни выглядят роскошно. Очень внимательно подошли к деталям, учли все пожелания.',
    rating: 5,
    room: 'Спальня',
    date: 'Ноябрь 2023',
  },
  {
    name: 'Болат Е.',
    text: 'Заказывал жалюзи "день-ночь" для офиса. Быстро, качественно, недорого. Сотрудники в восторге! Теперь буду рекомендовать всем коллегам.',
    rating: 5,
    room: 'Офис',
    date: 'Октябрь 2023',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-500 font-body font-medium">
              Отзывы клиентов
            </span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900 mb-3">
            Что говорят наши клиенты
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating count={5} />
            <span className="text-sm text-taupe-500 font-body">5.0 · 2000+ довольных клиентов</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-cream-50 border border-cream-200 p-6 hover:border-gold-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-body font-medium text-charcoal-900 text-sm">{r.name}</div>
                  <div className="text-[10px] text-taupe-400 font-body">{r.room} · {r.date}</div>
                </div>
                <StarRating count={r.rating} />
              </div>
              <p className="text-taupe-600 text-sm leading-relaxed font-body">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/zarina.shtory.atyrau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal-700 hover:text-gold-600 font-body font-medium border-b border-charcoal-300 hover:border-gold-400 transition-all pb-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Все работы в Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
