import { Metadata } from 'next'
import { Suspense } from 'react'
import CatalogFilters from '@/components/catalog/CatalogFilters'
import ProductCard from '@/components/catalog/ProductCard'
import Pagination from '@/components/catalog/Pagination'
import productsData from '@/data/products.json'
import { Product } from '@/utils/types'
import { filterProducts, paginateProducts, ITEMS_PER_PAGE, CATEGORY_LABELS } from '@/utils/helpers'

export const metadata: Metadata = {
  title: 'Каталог штор, тюля и жалюзи',
  description: 'Более 500 моделей штор, тюля и жалюзи на заказ в Атырау. Бесплатный замер и монтаж.',
}

interface PageProps {
  searchParams: {
    category?: string
    search?: string
    sort?: string
    page?: string
  }
}

const allProducts = productsData as Product[]

export default function CatalogPage({ searchParams }: PageProps) {
  const category = searchParams.category || 'all'
  const search = searchParams.search || ''
  const sort = searchParams.sort || 'default'
  const page = parseInt(searchParams.page || '1', 10)

  const filtered = filterProducts(allProducts, category, search, sort)
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = paginateProducts(filtered, page)

  const pageTitle =
    category !== 'all' ? CATEGORY_LABELS[category] || 'Каталог' : 'Весь каталог'

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Page header */}
      <div className="bg-white border-b border-cream-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-taupe-400 font-body mb-3">
            <a href="/" className="hover:text-gold-500 transition-colors">Главная</a>
            <span>›</span>
            <span>Каталог</span>
            {category !== 'all' && (
              <>
                <span>›</span>
                <span className="text-charcoal-700">{CATEGORY_LABELS[category]}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-gold-400" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-body">
              Zarina Шторы
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900">
            {pageTitle}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters */}
        <div className="mb-6">
          <Suspense>
            <CatalogFilters
              category={category}
              search={search}
              sort={sort}
              totalCount={filtered.length}
            />
          </Suspense>
        </div>

        {/* Products grid */}
        {paginated.length === 0 ? (
          <div className="text-center py-20">
            <div className="font-display text-3xl text-taupe-400 mb-3">Ничего не найдено</div>
            <p className="text-taupe-500 font-body">Попробуйте изменить параметры поиска</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5">
              {paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <Suspense>
              <Pagination currentPage={page} totalPages={totalPages} />
            </Suspense>
          </>
        )}
      </div>
    </div>
  )
}
