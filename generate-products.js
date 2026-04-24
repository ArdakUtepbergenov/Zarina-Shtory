// Run with: node generate-products.js > data/products.json

const curtainStyles = [
  'Классические', 'Французские', 'Итальянские', 'Римские', 'Австрийские',
  'Японские', 'Скандинавские', 'Современные', 'Бохо', 'Лофт', 'Минималист',
  'Арт-деко', 'Прованс', 'Эко', 'Геометрические', 'Полосатые', 'Бархатные'
];
const curtainFabrics = [
  'Бархат', 'Лён', 'Хлопок', 'Шёлк', 'Органза', 'Жаккард', 'Бязь',
  'Блэкаут', 'Велюр', 'Атлас', 'Тафта', 'Микрофибра', 'Шифон', 'Муслин'
];
const curtainColors = [
  'Белый', 'Кремовый', 'Бежевый', 'Серый', 'Серо-голубой', 'Пудровый розовый',
  'Терракотовый', 'Оливковый', 'Горчичный', 'Антрацит', 'Морской', 'Бордовый',
  'Мятный', 'Лавандовый', 'Шоколадный', 'Слоновая кость', 'Тёмно-синий'
];
const rooms = [
  'гостиная', 'спальня', 'детская', 'кабинет', 'кухня', 'столовая', 'прихожая'
];

const tulleStyles = [
  'Сетка', 'Вуаль', 'Органза', 'Батист', 'Флок', 'Вышивка', 'Кружевная',
  'Жаккардовая', 'Полосатая', 'С принтом', 'Многослойная', 'Градиент'
];
const tulleColors = [
  'Белая', 'Молочная', 'Кремовая', 'Нежно-голубая', 'Мятная', 'Пудровая',
  'Чуть розовая', 'Ванильная', 'Шампань', 'Айвори', 'Бежевая'
];

const blindTypes = [
  'Рулонные', 'Жалюзи горизонтальные', 'Жалюзи вертикальные', 'День-ночь',
  'Зебра', 'Плиссе', 'Деревянные', 'Бамбуковые', 'Тканевые', 'Алюминиевые'
];
const blindColors = [
  'Белые', 'Серые', 'Бежевые', 'Деревянные', 'Венге', 'Антрацит',
  'Кремовые', 'Голубые', 'Зелёные', 'Коричневые', 'Чёрные'
];

const unsplashCurtains = [
  'photo-1586023492125-27b2c045efd7',
  'photo-1558618666-fcd25c85cd64',
  'photo-1555041469-a586c61ea9bc',
  'photo-1600585154526-990dced4db0d',
  'photo-1616137422495-1e9e46e2aa77',
  'photo-1631049307264-da0ec9d70304',
  'photo-1506439773649-6e0eb8cfb237',
  'photo-1513694203232-719a280e022f',
  'photo-1560448204-e02f11c3d0e2',
  'photo-1493809842364-78817add7ffb',
  'photo-1502005097973-6a7082348e28',
  'photo-1484101403633-562f891dc89a',
];
const unsplashBlinds = [
  'photo-1545324418-cc1a3fa10c00',
  'photo-1505577058444-a3dab90d4253',
  'photo-1509644851169-2acc08aa25b5',
  'photo-1524758631624-e2822e304c36',
  'photo-1567016432779-094069958ea5',
];
const unsplashTulle = [
  'photo-1571508601891-ca5e7a713859',
  'photo-1586023492125-27b2c045efd7',
  'photo-1558618666-fcd25c85cd64',
  'photo-1616137422495-1e9e46e2aa77',
];

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

const products = [];
let id = 1;

// Generate 200 curtains
for (let i = 0; i < 200; i++) {
  const style = rand(curtainStyles);
  const fabric = rand(curtainFabrics);
  const color = rand(curtainColors);
  const room = rand(rooms);
  const img1 = rand(unsplashCurtains);
  const img2 = rand(unsplashCurtains);
  const price = randInt(25000, 180000);
  products.push({
    id: id++,
    title: `${style} шторы из ${fabric.toLowerCase()}а — ${color}`,
    description: `Элегантные ${style.toLowerCase()} шторы из натурального ${fabric.toLowerCase()}а. Идеально подходят для ${room}. Цвет: ${color}. Изготовим под размеры вашего окна. Возможна любая длина и ширина. Крепление на люверсы, шторную ленту или кольца.`,
    category: 'curtains',
    fabric,
    color,
    room,
    style,
    images: [
      `https://images.unsplash.com/${img1}?auto=format&fit=crop&w=800&q=80`,
      `https://images.unsplash.com/${img2}?auto=format&fit=crop&w=800&q=80`,
    ],
    price,
    priceLabel: `от ${price.toLocaleString('ru-RU')} ₸`,
    tags: [style, fabric, color, room, 'шторы на заказ', 'Атырау'],
    featured: i < 8,
    new: i < 20,
    popular: i % 7 === 0,
  });
}

// Generate 150 tulle
for (let i = 0; i < 150; i++) {
  const style = rand(tulleStyles);
  const color = rand(tulleColors);
  const room = rand(rooms);
  const img1 = rand(unsplashTulle);
  const img2 = rand(unsplashCurtains);
  const price = randInt(8000, 55000);
  products.push({
    id: id++,
    title: `Тюль ${style.toLowerCase()} — ${color}`,
    description: `Лёгкий воздушный тюль типа "${style}" в оттенке "${color}". Создаёт мягкое рассеянное освещение и придаёт интерьеру изысканность. Подходит для ${room}. Пошив по вашим меркам.`,
    category: 'tulle',
    style,
    color,
    room,
    images: [
      `https://images.unsplash.com/${img1}?auto=format&fit=crop&w=800&q=80`,
      `https://images.unsplash.com/${img2}?auto=format&fit=crop&w=800&q=80`,
    ],
    price,
    priceLabel: `от ${price.toLocaleString('ru-RU')} ₸`,
    tags: [style, color, room, 'тюль', 'тюль на заказ', 'Атырау'],
    featured: i < 6,
    new: i < 15,
    popular: i % 5 === 0,
  });
}

// Generate 150 blinds
for (let i = 0; i < 150; i++) {
  const type = rand(blindTypes);
  const color = rand(blindColors);
  const room = rand(rooms);
  const img1 = rand(unsplashBlinds);
  const img2 = rand(unsplashCurtains);
  const price = randInt(12000, 95000);
  products.push({
    id: id++,
    title: `${type} жалюзи — ${color}`,
    description: `${type} жалюзи ${color.toLowerCase()} цвета. Надёжное управление светом, лёгкая очистка, долговечная конструкция. Подходят для ${room}. Установка в день заказа. Гарантия 3 года.`,
    category: 'blinds',
    type,
    color,
    room,
    images: [
      `https://images.unsplash.com/${img1}?auto=format&fit=crop&w=800&q=80`,
      `https://images.unsplash.com/${img2}?auto=format&fit=crop&w=800&q=80`,
    ],
    price,
    priceLabel: `от ${price.toLocaleString('ru-RU')} ₸`,
    tags: [type, color, room, 'жалюзи', 'рулонные', 'Атырау'],
    featured: i < 6,
    new: i < 15,
    popular: i % 6 === 0,
  });
}

console.log(JSON.stringify(products, null, 2));
