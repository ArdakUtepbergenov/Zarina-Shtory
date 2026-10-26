
import type { Metadata } from 'next'

import HeroSection from '@/components/home/HeroSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedSection from '@/components/home/FeaturedSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import VideoSection from '@/components/home/VideoSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import ContactSection from '@/components/home/ContactSection'

import productsData from '@/data/products.json'
import type { Product } from '@/utils/types'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zarinashtory.com'),

  title: 'Купить шторы в Атырау — на заказ | Zarina',
  description:
    'Купить шторы в Атырау в студии Zarina. Индивидуальный пошив, тюль, подбор тканей, замер и монтаж. Посмотрите каталог и примеры наших работ.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: '/',
    siteName: 'Zarina Шторы',
    title: 'Купить шторы в Атырау — Zarina',
    description:
      'Шторы на заказ в Атырау: индивидуальный пошив, тюль, подбор тканей, замер и монтаж.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const allProducts = productsData as Product[]
const featuredProducts = allProducts
  .filter((product) => product.featured)
  .slice(0, 8)

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection products={featuredProducts} />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <ReviewsSection />
      <ContactSection />
    </>
  )
}
