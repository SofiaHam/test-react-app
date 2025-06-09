// src/data/products.js

// 1. Імпортуйте ваші зображення тут
// Переконайтеся, що назви файлів та їхні шляхи точно відповідають тим, що у вас в папці src/assets
import VesnianaNiznicImage from '../assets/vesniana_niznict.jpg'; // Назва файлу: vesniana_niznic.jpg
import TroiandaImage from '../assets/troianda.jpg';             // Назва файлу: troianda.jpg
import SoniadchukImage from '../assets/soniachnuk.jpg';         // Назва файлу: soniadchuk.jpg
import OrhideiaImage from '../assets/orxideia.jpg';            // Назва файлу: orhxideia.jpg
import FonImage from '../assets/fon.jpg';                     // Назва файлу: fon.jpeg (ви можете її використати для інших товарів або створити нові)

const products = [
  {
    id: 1,
    name: 'Букет "Весняна ніжність"',
    price: 850.00,
    description: 'Ніжний букет з тюльпанів та фрезій, ідеальний для весняного настрою та подарунку.',
    imageUrl: VesnianaNiznicImage, // 2. Призначте імпортовану змінну
  },
  {
    id: 2,
    name: 'Червоні троянди (11 шт.)',
    price: 1200.00,
    description: 'Класичний букет з 11 червоних троянд, символ пристрасті та любові. Свіжі та ароматні.',
    imageUrl: TroiandaImage, // Призначте імпортовану змінну
  },
  {
    id: 3,
    name: 'Композиція "Соняшник"',
    price: 980.00,
    description: 'Яскрава композиція з соняшників та декоративної зелені, що дарує тепло та радість.',
    imageUrl: SoniadchukImage, // Призначте імпортовану змінну
  },
  {
    id: 4,
    name: 'Орхідея Фаленопсис',
    price: 750.00,
    description: 'Елегантна орхідея Фаленопсис, ідеальний подарунок для будь-якого випадку. Довго квітне.',
    imageUrl: OrhideiaImage, // Призначте імпортовану змінну
  },
  {
    id: 5,
    name: 'Фоновий букет', // Приклад для використання іншого зображення
    price: 600.00,
    description: 'Букет, який підходить для фону будь-якого свята.',
    imageUrl: FonImage, // Призначте імпортовану змінну
  },
  // Додайте інші товари за потребою, використовуючи ваші зображення
];

export default products;