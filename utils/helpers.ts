import { Product } from './types'

export const WHATSAPP_NUMBER = '77018273334'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export function getWhatsAppLink(product?: Product): string {
  if (!product) {
    return `${WHATSAPP_BASE}?text=${encodeURIComponent('Здравствуйте! Хочу узнать подробнее о ваших шторах.')}`
  }
  const msg = `Здравствуйте! Меня интересует "${product.title}" (арт. №${product.id}). Подскажите подробности.`
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`
}

export function getMeasurementLink(): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent('Здравствуйте! Хочу заказать бесплатный замер.')}`
}

export const CATEGORY_LABELS: Record<string, string> = {
  curtains: 'Шторы',
  tulle: 'Тюль',
  blinds: 'Жалюзи',
  all: 'Все товары',
}


export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  curtains:
    'Шторы на заказ в Атырау: подбор тканей, пошив по индивидуальным размерам и оформление окон для вашего интерьера.',
  tulle:
    'Тюль в Атырау: выбор тканей, подбор подходящего дизайна и пошив по размерам ваших окон.',
  blinds:
    'Жалюзи в Атырау: рулонные, горизонтальные и вертикальные модели для дома и офиса.',
}

export const CATEGORY_SEO: Record<
  string,
  { title: string; description: string }
> = {
  curtains: {
    title: 'Купить шторы в Атырау на заказ | Zarina',
    description:
      'Шторы на заказ в Атырау. Подбор тканей, индивидуальный пошив, замер и монтаж от студии Zarina.',
  },
  tulle: {
    title: 'Купить тюль в Атырау | Zarina',
    description:
      'Каталог тюля в Атырау: ткани, варианты оформления окон и пошив по индивидуальным размерам.',
  },
  blinds: {
    title: 'Жалюзи в Атырау — каталог | Zarina',
    description:
      'Рулонные и другие виды жалюзи в Атырау. Подбор моделей и консультация по оформлению окон.',
  },
}


export const ITEMS_PER_PAGE = 24


export function paginateProducts(
  products: Product[],
  page: number,
  perPage = ITEMS_PER_PAGE
) {
  const safePerPage = Math.max(1, perPage)
  const totalPages = Math.ceil(products.length / safePerPage)
  const safePage = Math.min(
    Math.max(1, Math.floor(page) || 1),
    Math.max(1, totalPages)
  )

  const start = (safePage - 1) * safePerPage
  return products.slice(start, start + safePerPage)
}

export function filterProducts(
  products: Product[],
  category: string,
  search: string,
  sort: string
): Product[] {
  let filtered = [...products]

  if (category && category !== 'all') {
    filtered = filtered.filter((p) => p.category === category)
  }

if (search.trim()) {
  const q = search.trim().toLocaleLowerCase('ru')

  filtered = filtered.filter(
    (p) =>
      p.title.toLocaleLowerCase('ru').includes(q) ||
      p.description.toLocaleLowerCase('ru').includes(q) ||
      p.tags.some((t) => t.toLocaleLowerCase('ru').includes(q))
  )
}
  
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price)
  else if (sort === 'new') filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))

  return filtered
}
