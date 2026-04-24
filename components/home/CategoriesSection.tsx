import Link from 'next/link'

const CATEGORIES = [
  {
    id: 'curtains',
    label: 'Шторы',
    desc: 'Классические, французские, итальянские и современные шторы из натуральных тканей',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    count: 200,
    href: '/catalog?category=curtains',
  },
  {
    id: 'tulle',
    label: 'Тюль',
    desc: 'Воздушные ткани, вуаль и органза. Лёгкость и изысканность для любого интерьера',
    image: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=800&q=80',
    count: 150,
    href: '/catalog?category=tulle',
  },
  {
    id: 'blinds',
    label: 'Жалюзи',
    desc: 'Рулонные, горизонтальные и вертикальные. Идеальный контроль света',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    count: 150,
    href: '/catalog?category=blinds',
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-500 font-body font-medium">
              Наш ассортимент
            </span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900">
            Категории
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[9px] tracking-[0.3em] uppercase text-gold-400 font-body mb-1">
                  {cat.count}+ моделей
                </div>
                <h3 className="font-display text-3xl font-light text-white mb-2">{cat.label}</h3>
                <p className="text-cream-300 text-xs leading-relaxed font-body mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold-400 font-body group-hover:gap-3 transition-all">
                  Смотреть все
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
