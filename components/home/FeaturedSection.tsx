import Link from 'next/link'
import ProductCard from '@/components/catalog/ProductCard'
import { Product } from '@/utils/types'

export default function FeaturedSection({ products }: { products: Product[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-500 font-body font-medium">
                Выбор редакции
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900">
              Популярные модели
            </h2>
          </div>
          <Link
            href="/catalog"
            className="text-xs tracking-widest uppercase text-charcoal-800 hover:text-gold-500 font-body font-medium border-b border-charcoal-300 hover:border-gold-400 transition-all pb-0.5"
          >
            Весь каталог →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
