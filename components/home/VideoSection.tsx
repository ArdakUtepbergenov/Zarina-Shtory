'use client'

import { useState } from 'react'
import { videos } from '@/data/videos'
import { Video } from '@/utils/types'

const CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'curtains', label: 'Шторы' },
  { id: 'tulle', label: 'Тюль' },
  { id: 'blinds', label: 'Жалюзи' },
]

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[9/16] bg-charcoal-800 overflow-hidden w-full"
    >
      {/* YouTube thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/10 transition-all duration-300" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 text-charcoal-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal-900/80 to-transparent">
        <p className="text-white text-xs font-body font-medium">{video.title}</p>
      </div>

      {/* Shorts badge */}
      <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider">
        SHORTS
      </div>
    </button>
  )
}

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-body flex items-center gap-1"
        >
          Закрыть ✕
        </button>

        {/* Video embed — aspect ratio 9:16 for Shorts */}
        <div className="aspect-[9/16] w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <p className="text-center text-white/70 text-xs font-body mt-3">{video.title}</p>
      </div>
    </div>
  )
}

export default function VideoSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filtered = activeCategory === 'all'
    ? videos
    : videos.filter((v) => v.category === activeCategory)

  const displayed = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-500 font-body font-medium">
              Видео работы
            </span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900 mb-3">
            Смотрите в деталях
          </h2>
          <p className="text-taupe-500 font-body text-sm max-w-md mx-auto">
            Видео наших работ — как шторы и жалюзи выглядят в реальных интерьерах
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setShowAll(false) }}
              className={`px-4 py-2 text-xs font-body font-medium tracking-wider border transition-all ${
                activeCategory === cat.id
                  ? 'bg-charcoal-900 text-cream-100 border-charcoal-900'
                  : 'border-cream-300 text-taupe-600 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {displayed.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setActiveVideo(video)}
            />
          ))}
        </div>

        {/* Show more */}
        {!showAll && filtered.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream-100 font-body text-xs tracking-widest uppercase px-8 py-3 transition-all"
            >
              Показать все видео ({filtered.length})
            </button>
          </div>
        )}

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
            Больше работ в Instagram
          </a>
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  )
}
