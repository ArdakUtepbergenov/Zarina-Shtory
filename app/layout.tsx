import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export const metadata: Metadata = {
  title: {
    default: 'Zarina Шторы — Шторы на заказ в Атырау | 15 лет опыта',
    template: '%s | Zarina Шторы Атырау',
  },
  description:
    'Шторы, тюль и жалюзи на заказ в Атырау. 15 лет опыта. Бесплатный замер и монтаж. Более 500 моделей. Производство в день обращения.',
  keywords: [
    'шторы на заказ Атырау',
    'тюль Атырау',
    'жалюзи Атырау',
    'шторы Атырау',
    'рулонные жалюзи Атырау',
    'пошив штор',
    'Zarina шторы',
  ],
  authors: [{ name: 'Zarina Шторы' }],
  creator: 'Zarina Шторы',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://zarina-shtory.kz',
    siteName: 'Zarina Шторы',
    title: 'Zarina Шторы — Шторы на заказ в Атырау',
    description: 'Шторы, тюль и жалюзи на заказ в Атырау. 15 лет опыта. Бесплатный замер и монтаж.',
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
