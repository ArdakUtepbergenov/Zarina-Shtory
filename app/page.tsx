import HeroSection from '@/components/home/HeroSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedSection from '@/components/home/FeaturedSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import VideoSection from '@/components/home/VideoSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import ContactSection from '@/components/home/ContactSection'
import productsData from '@/data/products.json'
import { Product } from '@/utils/types'

const allProducts = productsData as Product[]
const featuredProducts = allProducts.filter((p) => p.featured).slice(0, 8)

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
