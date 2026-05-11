'use client'

import { useState } from 'react'

const CURTAIN_VIDEOS = [
  { id: 'R9aqW591WyU', title: 'Шторы в интерьере' },
  { id: '_wjYNchf4KI', title: 'Жалюзи день-ночь' },
  { id: 'Ir3FVoaoWPw', title: 'Тюль на окне' },
  { id: 'G6c5OsdI76A', title: 'Рулонные жалюзи' },
  { id: 'GXHeuw1upLc', title: 'Шторы для гостиной' },
  { id: 'vQCdV0NLv3o', title: 'Монтаж жалюзи' },
  { id: 'kJXwubM3lcY', title: 'Шторы блэкаут' },
  { id: 'JCZT8zMnBPg', title: 'Жалюзи зебра' },
  { id: 'Yn1Aa69z9kU', title: 'Тюль органза' },
  { id: 'eFY0GpfRg8E', title: 'Шторы для спальни' },
  { id: 'TBjLtNKZD2Q', title: 'Жалюзи для кухни' },
  { id: 'kBIkHvKtNrc', title: 'Шторы на заказ' },
  { id: 'FTzgfa08OwQ', title: 'Рулонные блэкаут' },
  { id: 'H2ej1DHtksc', title: 'Тюль вуаль' },
  { id: '3YYnu0wrG7g', title: 'Шторы и жалюзи' },
]

function VideoModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-sm mx-auto" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-body flex items-center gap-1"
        >
          Закрыть ✕
        </button>
        <div className="aspect-[9/16] w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-center text-white/70 text-xs font-body mt-3">{title}</p>
      </div>
    </div>
  )
}

export default function CurtainsVideoGallery() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null)

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Page header */}
      <div className="bg-white border-b border-cream-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-taupe-400 font-body mb-3">
            <a href="/" className="hover:text-gold-500 transition-colors">Главная</a>
            <span>›</span>
            <a href="/catalog" className="hover:text-gold-500 transition-colors">Каталог</a>
            <span>›</span>
            <span className="text-charcoal-700">Шторы</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-gold-400" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-body">
              Zarina Шторы
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-charcoal-900 mb-2">
            Шторы на заказ
          </h1>
          <p className="text-taupe-500 font-body text-sm max-w-lg">
            Шторы изготавливаются индивидуально под ваши окна. Посмотрите наши работы на видео
            и свяжитесь с нами для замера и расчёта стоимости.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Info banner */}
        <div className="bg-charcoal-900 p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-1">
              Пошив штор под любые окна
            </h2>
            <p className="text-taupe-400 font-body text-sm">
              Бесплатный выезд на замер · Любая сложность · Широкий выбор тканей
            </p>
          </div>
          <a
            href="https://wa.me/77018273334?text=Здравствуйте!%20Хочу%20заказать%20шторы.%20Можно%20узнать%20подробнее?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Узнать стоимость
          </a>
        </div>

        {/* Section title */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-px w-8 bg-gold-400" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-body">
              Наши работы
            </span>
          </div>
          <h2 className="font-display text-3xl font-light text-charcoal-900">
            Видео из реальных интерьеров
          </h2>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {CURTAIN_VIDEOS.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-[9/16] bg-charcoal-800 overflow-hidden"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/10 transition-all duration-300" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-charcoal-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-charcoal-900/80 to-transparent">
                <p className="text-white text-[10px] font-body">{video.title}</p>
              </div>
              {/* Badge */}
              <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] font-bold px-1 py-0.5">
                SHORTS
              </div>
            </button>
          ))}
        </div>

        {/* How to order */}
        <div className="bg-white border border-cream-200 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold-400" />
            <h2 className="font-display text-2xl font-light text-charcoal-900">
              Как заказать шторы
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { step: '01', title: 'Напишите нам', desc: 'Опишите ваши пожелания — размеры, стиль, ткань' },
              { step: '02', title: 'Бесплатный замер', desc: 'Мастер приедет и снимет точные мерки с ваших окон' },
              { step: '03', title: 'Пошив', desc: 'Изготовим шторы в срок от 3 до 7 дней' },
              { step: '04', title: 'Монтаж', desc: 'Установим карнизы и повесим шторы — бесплатно' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="font-display text-3xl font-light text-gold-300 shrink-0 leading-none">
                  {s.step}
                </div>
                <div>
                  <div className="font-body font-medium text-charcoal-900 text-sm mb-1">{s.title}</div>
                  <div className="text-taupe-500 text-xs font-body leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/77018273334?text=Здравствуйте!%20Хочу%20заказать%20шторы.%20Можно%20узнать%20подробнее?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Написать в WhatsApp
          </a>
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <VideoModal
          videoId={activeVideo.id}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  )
}
