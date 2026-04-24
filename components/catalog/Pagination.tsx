'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    router.push(`/catalog?${params.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visible = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2
  )

  return (
    <div className="flex items-center justify-center gap-1 mt-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 border border-cream-300 flex items-center justify-center text-taupe-600 hover:border-gold-400 hover:text-gold-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        ‹
      </button>

      {visible.map((p, i) => {
        const prev = visible[i - 1]
        const showEllipsis = prev && p - prev > 1
        return (
          <span key={p} className="flex items-center gap-1">
            {showEllipsis && (
              <span className="w-9 h-9 flex items-center justify-center text-taupe-400 text-sm">…</span>
            )}
            <button
              onClick={() => goToPage(p)}
              className={`w-9 h-9 border flex items-center justify-center text-sm font-body transition-all ${
                p === currentPage
                  ? 'bg-charcoal-900 text-cream-100 border-charcoal-900'
                  : 'border-cream-300 text-taupe-600 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {p}
            </button>
          </span>
        )
      })}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 border border-cream-300 flex items-center justify-center text-taupe-600 hover:border-gold-400 hover:text-gold-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        ›
      </button>
    </div>
  )
}
