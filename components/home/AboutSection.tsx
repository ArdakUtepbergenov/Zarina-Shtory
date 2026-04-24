export default function AboutSection() {
  return (
    <section className="py-20 bg-charcoal-900 relative overflow-hidden grain">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                alt="Мастерская Zarina Шторы"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent card */}
            <div className="absolute -bottom-5 -right-5 bg-gold-500 p-6 w-36 hidden lg:block">
              <div className="font-display text-5xl font-light text-white leading-none">15</div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-white/80 font-body mt-1">лет опыта</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-400 font-body font-medium">
                О нас
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
              15 лет создаём<br />
              <span className="italic text-gold-400">уют в вашем доме</span>
            </h2>
            <p className="text-taupe-300 font-body leading-relaxed mb-4">
              Студия Zarina — это профессиональный пошив штор, тюля и монтаж жалюзи в Атырау. 
              За 15 лет мы выполнили более 2000 заказов для частных домов, квартир и коммерческих помещений.
            </p>
            <p className="text-taupe-300 font-body leading-relaxed mb-8">
              Мы работаем только с проверенными тканями, создаём изделия по индивидуальным меркам 
              и гарантируем качество каждого изделия. От замера до монтажа — всё под ключ.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Индивидуальный пошив',
                'Любая сложность',
                'Гарантия качества',
                'Работаем с 2009 года',
              ].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gold-400 rounded-full shrink-0" />
                  <span className="text-sm text-cream-200 font-body">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/77018273334?text=Здравствуйте!%20Хочу%20узнать%20подробнее."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
