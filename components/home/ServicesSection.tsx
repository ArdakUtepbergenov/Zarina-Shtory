const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Бесплатный замер',
    desc: 'Мастер приедет в удобное для вас время, измерит окна и поможет с выбором модели',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Монтаж под ключ',
    desc: 'Профессиональная установка штор, карнизов и жалюзи. Полностью бесплатно',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Индивидуальный пошив',
    desc: 'Шторы и тюль любого размера и сложности. Подберём под ваш интерьер',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Быстрое производство',
    desc: 'Изготовим шторы в срок от 3 до 7 дней. Срочный заказ — от 1 дня',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Премиальные ткани',
    desc: 'Работаем с проверенными поставщиками тканей из России, Турции и Европы',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Гарантия 3 года',
    desc: 'На все виды работ предоставляем гарантию. Устраним любой дефект бесплатно',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-500 font-body font-medium">
              Почему нас выбирают
            </span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900">
            Наши преимущества
          </h2>
        </div>

        {/* Measurement CTA */}
        <div className="bg-charcoal-900 p-8 sm:p-12 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl font-light text-white mb-2">
              Бесплатный замер и монтаж
            </h3>
            <p className="text-taupe-400 font-body text-sm">
              Выезжаем на объект в день обращения. Атырау и пригород.
            </p>
          </div>
          <a
            href="https://wa.me/77018273334?text=Здравствуйте!%20Хочу%20заказать%20бесплатный%20замер."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold whitespace-nowrap shrink-0"
          >
            Заказать замер
          </a>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-white p-6 border border-cream-200 hover:border-gold-300 transition-colors group">
              <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform inline-block">
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-charcoal-900 mb-2">{s.title}</h3>
              <p className="text-taupe-500 text-sm leading-relaxed font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
