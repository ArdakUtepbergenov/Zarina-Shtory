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
  curtains: 'Классические и современные шторы из натуральных тканей',
  tulle: 'Воздушный тюль любой сложности пошива',
  blinds: 'Рулонные, горизонтальные и вертикальные жалюзи',
}

export const ITEMS_PER_PAGE = 24

export function paginateProducts(products: Product[], page: number, perPage = ITEMS_PER_PAGE) {
  const start = (page - 1) * perPage
  return products.slice(start, start + perPage)
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
    const q = search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price)
  else if (sort === 'new') filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))

  return filtered
}
