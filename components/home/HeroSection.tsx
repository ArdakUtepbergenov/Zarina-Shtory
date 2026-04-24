import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85"
          alt="Элегантные шторы на заказ"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-500 font-body font-medium">
              15 лет в Атырау
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal-900 leading-[1.05] mb-4">
            Шторы<br />
            <span className="italic text-gold-500">на заказ</span><br />
            в Атырау
          </h1>

          <p className="font-body text-base text-taupe-600 leading-relaxed mb-8 max-w-sm">
            Создаём уют в вашем доме. Шторы, тюль и жалюзи ручной работы. 
            Бесплатный замер и монтаж.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/77018273334?text=Здравствуйте!%20Хочу%20заказать%20бесплатный%20замер."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Бесплатный замер
            </a>
            <Link
              href="/catalog"
              className="border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream-100 font-body text-xs tracking-widest uppercase px-6 py-3.5 transition-all text-center"
            >
              Смотреть каталог
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8 pt-8 border-t border-cream-300">
            {[
              { num: '15+', label: 'лет опыта' },
              { num: '500+', label: 'моделей' },
              { num: '2000+', label: 'клиентов' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-medium text-gold-500">{stat.num}</div>
                <div className="text-[10px] tracking-widest uppercase text-taupe-500 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[9px] tracking-widest uppercase text-taupe-500 font-body">Прокрутить</span>
        <div className="w-px h-8 bg-gold-400 animate-pulse" />
      </div>
    </section>
  )
}
