import classicWhite from '../assets/catalogImages/classic.png';
import two from '../assets/catalogImages/minimal.png';
import v from '../assets/catalogImages/v.png';
import fit from '../assets/catalogImages/fit.png';



export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
  materials: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    description: "Базовая белая футболка из 100% хлопка. Идеальная основа любого гардероба.",
    price: 29.99,
    image: classicWhite,
    category: "basic",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["100% хлопок", "220 г/м²"]
  },
  {
    id: 2,
    name: "Oversized White Tee",
    description: "Свободная белая футболка oversize кроя. Современный и комфортный силуэт.",
    price: 34.99,
    image: two,
    category: "oversized",
    sizes: ["S", "M", "L", "XL"],
    materials: ["100% хлопок", "180 г/м²"]
  },
  {
    id: 3,
    name: "Premium Heavyweight",
    description: "Плотная белая футболка премиум качества. Долговечная и держит форму.",
    price: 39.99,
    image: v,
    category: "premium",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    materials: ["100% органический хлопок", "280 г/м²"]
  },
  {
    id: 4,
    name: "V-Neck White Tee",
    description: "Белая футболка с V-образным вырезом. Элегантный вариант для любого случая.",
    price: 32.99,
    image: fit,
    category: "vneck",
    sizes: ["S", "M", "L", "XL"],
    materials: ["100% хлопок", "200 г/м²"]
  },
  {
    id: 5,
    name: "Pocket White Tee",
    description: "Белая футболка с грудным карманом. Функционально и стильно.",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop",
    category: "pocket",
    sizes: ["XS", "S", "M", "L"],
    materials: ["100% хлопок", "240 г/м²"]
  },
  {
    id: 6,
    name: "Long Sleeve White Tee",
    description: "Белая футболка с длинным рукавом. Универсальна для любого сезона.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1605281325496-d5c711271f29?w=800&auto=format&fit=crop",
    category: "longsleeve",
    sizes: ["S", "M", "L", "XL"],
    materials: ["100% хлопок", "220 г/м²"]
  }
];