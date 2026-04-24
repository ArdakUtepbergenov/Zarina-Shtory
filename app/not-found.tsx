import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 pt-32 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="font-display text-8xl font-light text-cream-300 mb-4">404</div>
        <div className="font-display text-3xl text-charcoal-800 mb-3">Страница не найдена</div>
        <p className="text-taupe-500 font-body mb-8">Товар или страница не существует</p>
        <Link href="/catalog" className="btn-gold inline-block">
          Вернуться в каталог
        </Link>
      </div>
    </div>
  )
}
