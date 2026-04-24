import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import productsData from '@/data/products.json'
import { Product } from '@/utils/types'
import { getWhatsAppLink, getMeasurementLink, CATEGORY_LABELS } from '@/utils/helpers'
import ProductCard from '@/components/catalog/ProductCard'

const allProducts = productsData as Product[]

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = allProducts.find((p) => p.id === parseInt(params.id))
  if (!product) return { title: 'Товар не найден' }
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  }
}

export function generateStaticParams() {
  return allProducts.slice(0, 100).map((p) => ({ id: String(p.id) }))
}

export default function ProductPage({ params }: PageProps) {
  const product = allProducts.find((p) => p.id === parseInt(params.id))
  if (!product) notFound()

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const waLink = getWhatsAppLink(product)
  const measureLink = getMeasurementLink()

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-taupe-400 font-body mb-8">
          <Link href="/" className="hover:text-gold-500">Главная</Link>
          <span>›</span>
          <Link href="/catalog" className="hover:text-gold-500">Каталог</Link>
          <span>›</span>
          <Link
            href={`/catalog?category=${product.category}`}
            className="hover:text-gold-500"
          >
            {CATEGORY_LABELS[product.category]}
          </Link>
          <span>›</span>
          <span className="text-charcoal-700 line-clamp-1">{product.title}</span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-[4/5] bg-cream-100 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((img, i) => (
                  <div key={i} className="aspect-square bg-cream-100 overflow-hidden">
                    <img
                      src={img}
                      alt={`${product.title} — фото ${i + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.new && <span className="badge-new">Новинка</span>}
              {product.popular && <span className="badge-popular">Хит продаж</span>}
            </div>

            <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-body font-medium mb-2">
              {CATEGORY_LABELS[product.category]} · Арт. №{product.id}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-light text-charcoal-900 leading-tight mb-4">
              {product.title}
            </h1>

            <div className="font-display text-2xl text-gold-600 mb-6">
              {product.priceLabel}
              <span className="font-body text-xs text-taupe-400 ml-2 font-normal">/ за комплект</span>
            </div>

            <p className="text-taupe-600 font-body leading-relaxed mb-6 text-sm">
              {product.description}
            </p>

            {/* Details */}
            <div className="border border-cream-200 divide-y divide-cream-200 mb-6">
              {product.fabric && (
                <div className="flex justify-between py-2.5 px-4 text-sm font-body">
                  <span className="text-taupe-500">Ткань</span>
                  <span className="text-charcoal-800 font-medium">{product.fabric}</span>
                </div>
              )}
              {product.color && (
                <div className="flex justify-between py-2.5 px-4 text-sm font-body">
                  <span className="text-taupe-500">Цвет</span>
                  <span className="text-charcoal-800 font-medium">{product.color}</span>
                </div>
              )}
              {product.style && (
                <div className="flex justify-between py-2.5 px-4 text-sm font-body">
                  <span className="text-taupe-500">Стиль</span>
                  <span className="text-charcoal-800 font-medium">{product.style}</span>
                </div>
              )}
              {product.room && (
                <div className="flex justify-between py-2.5 px-4 text-sm font-body">
                  <span className="text-taupe-500">Помещение</span>
                  <span className="text-charcoal-800 font-medium capitalize">{product.room}</span>
                </div>
              )}
              <div className="flex justify-between py-2.5 px-4 text-sm font-body">
                <span className="text-taupe-500">Изготовление</span>
                <span className="text-charcoal-800 font-medium">Индивидуальный пошив</span>
              </div>
              <div className="flex justify-between py-2.5 px-4 text-sm font-body">
                <span className="text-taupe-500">Монтаж</span>
                <span className="text-green-700 font-medium">Бесплатно</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 w-full"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Заказать в WhatsApp
              </a>
              <a
                href={measureLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream-100 font-body text-xs tracking-widest uppercase px-6 py-3.5 transition-all text-center w-full"
              >
                Заказать бесплатный замер
              </a>
            </div>

            {/* Trust */}
            <div className="mt-5 flex flex-wrap gap-3">
              {['Бесплатный замер', 'Бесплатный монтаж', 'Гарантия 3 года', 'Индивидуальный пошив'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-taupe-500 font-body">
                  <svg className="w-3 h-3 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold-400" />
              <h2 className="font-display text-2xl font-light text-charcoal-900">Похожие товары</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
