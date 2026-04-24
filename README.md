# Zarina Шторы — E-commerce Catalog

Полноценный каталог-сайт для студии штор в Атырау, Казахстан.

## 🛠 Технологии

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- 500+ товаров в JSON

## 🚀 Быстрый старт

```bash
# 1. Установить зависимости
npm install

# 2. Запустить dev-сервер
npm run dev

# 3. Открыть http://localhost:3000
```

## 📦 Сборка для продакшна

```bash
npm run build
npm start
```

## 📁 Структура проекта

```
zarina-shtory/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Главная страница
│   ├── globals.css         # Глобальные стили
│   ├── catalog/
│   │   └── page.tsx        # Каталог с фильтрами и пагинацией
│   └── product/
│       └── [id]/
│           └── page.tsx    # Страница товара
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Шапка сайта
│   │   └── Footer.tsx      # Подвал сайта
│   ├── ui/
│   │   └── WhatsAppFloat.tsx  # Плавающая кнопка WhatsApp
│   ├── catalog/
│   │   ├── ProductCard.tsx    # Карточка товара
│   │   ├── CatalogFilters.tsx # Фильтры и поиск
│   │   └── Pagination.tsx     # Пагинация
│   └── home/
│       ├── HeroSection.tsx    # Hero с призывом к действию
│       ├── CategoriesSection.tsx  # Категории
│       ├── FeaturedSection.tsx    # Популярные товары
│       ├── AboutSection.tsx       # О компании / 15 лет
│       ├── ServicesSection.tsx    # Услуги и преимущества
│       ├── ReviewsSection.tsx     # Отзывы клиентов
│       └── ContactSection.tsx     # Контакты
├── data/
│   └── products.json       # 500 товаров
├── utils/
│   ├── types.ts            # TypeScript типы
│   └── helpers.ts          # Утилиты: WhatsApp, фильтрация
└── generate-products.js    # Генератор товаров (запускать отдельно)
```

## 📊 Каталог товаров

- **200 штор** (17 стилей × 14 тканей × 17 цветов)
- **150 тюлей** (12 стилей × 11 цветов)
- **150 жалюзи** (10 видов × 11 цветов)

## ⚙️ Генерация новых товаров

```bash
node generate-products.js > data/products.json
```

## 🔮 Масштабирование (будущее)

### Подключение базы данных
Замените импорт `products.json` на вызов API:

```ts
// app/catalog/page.tsx
// Вместо:
import productsData from '@/data/products.json'

// Используйте:
const response = await fetch('https://your-api.com/products?...')
const { products, total } = await response.json()
```

### Firebase / Supabase
```ts
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(url, key)
const { data } = await supabase.from('products').select('*').range(0, 23)
```

## 📞 Контакты бизнеса

- **WhatsApp:** +7 701 827 3334
- **Instagram:** @zarina.shtory.atyrau
- **Адрес:** ул. Мамекұлы 104, Атырау 060002

## 📄 SEO

Каждая страница имеет:
- Уникальный `<title>` и `<description>`
- Open Graph метатеги
- Структурированные URL (`/product/123`)
- SSG для первых 100 товаров
- Динамический SSR для остальных
