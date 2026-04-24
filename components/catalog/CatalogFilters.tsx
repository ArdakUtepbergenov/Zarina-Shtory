'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'curtains', label: 'Шторы' },
  { id: 'tulle', label: 'Тюль' },
  { id: 'blinds', label: 'Жалюзи' },
]

const SORT_OPTIONS = [
  { id: 'default', label: 'По умолчанию' },
  { id: 'price-asc', label: 'Цена ↑' },
  { id: 'price-desc', label: 'Цена ↓' },
  { id: 'new', label: 'Новинки' },
]

export default function CatalogFilters({
  category,
  search,
  sort,
  totalCount,
}: {
  category: string
  search: string
  sort: string
  totalCount: number
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value && value !== 'all' && value !== 'default') {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      params.delete('page')
      router.push(`/catalog?${params.toString()}`)
    },
    [router, searchParams]
  )

  return (
    <div className="bg-white border border-cream-200 p-4 sm:p-5 space-y-4">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Поиск по каталогу..."
          defaultValue={search}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              updateParam('search', (e.target as HTMLInputElement).value)
            }
          }}
          className="input-luxury w-full pl-10 pr-4 py-2.5 text-sm font-body"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe-400"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Categories */}
      <div>
        <p className="text-[10px] tracking-widest uppercase text-taupe-500 font-body mb-2">Категория</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateParam('category', cat.id)}
              className={`px-3 py-1.5 text-xs font-body font-medium tracking-wider border transition-all ${
                (category === cat.id) || (cat.id === 'all' && !category)
                  ? 'bg-charcoal-900 text-cream-100 border-charcoal-900'
                  : 'border-cream-300 text-taupe-600 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort + count */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <p className="text-[10px] tracking-widest uppercase text-taupe-500 font-body">Сортировка:</p>
          <select
            defaultValue={sort}
            onChange={(e) => updateParam('sort', e.target.value)}
            className="input-luxury px-2 py-1.5 text-xs font-body bg-white"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </select>
        </div>
        <span className="text-xs text-taupe-500 font-body">
          Найдено: <strong className="text-charcoal-800">{totalCount}</strong> товаров
        </span>
      </div>
    </div>
  )
}
