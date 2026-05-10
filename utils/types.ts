export interface Product {
  id: number
  title: string
  description: string
  category: 'curtains' | 'tulle' | 'blinds'
  images: string[]
  price: number
  priceLabel: string
  tags: string[]
  featured?: boolean
  new?: boolean
  popular?: boolean
  fabric?: string
  color?: string
  room?: string
  style?: string
  type?: string
}

export interface Category {
  id: 'curtains' | 'tulle' | 'blinds' | 'all'
  label: string
  description: string
  count?: number
  image: string
}

export interface Review {
  id: number
  name: string
  text: string
  rating: number
  date: string
  room?: string
}

export interface Video {
  id: string
  title: string
  category: 'curtains' | 'tulle' | 'blinds'
}

export interface FilterState {
  category: string
  search: string
  sort: 'default' | 'price-asc' | 'price-desc' | 'new'
}
