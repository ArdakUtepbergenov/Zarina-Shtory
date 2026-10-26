
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
  title: 'Купить шторы в Атырау — пошив на заказ | Zarina',
  description:
    'Студия Zarina в Атырау: индивидуальный пошив штор, подбор тканей, тюль и жалюзи. Узнайте условия замера и монтажа, посмотрите каталог и примеры работ.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    title: 'Шторы на заказ в Атырау — Zarina',
    description:
      'Индивидуальный пошив штор, подбор тканей, тюль и жалюзи в Атырау.',
    url: '/',
    siteName: 'Zarina Шторы',
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
