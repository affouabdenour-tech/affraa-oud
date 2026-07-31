import type { Category, Brand } from './types';

export const categories: Category[] = [
  {
    id: 'dupes',
    name: 'Dupes',
    nameAr: 'البديل',
    description: 'High quality inspired fragrances — luxury scents at an accessible price.',
    image:
      'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 24,
  },
  {
    id: 'niche-perfumes',
    name: 'Niche Perfumes',
    nameAr: 'العطور النيش',
    description: 'Artisan houses creating singular, uncompromising scents.',
    image:
      'https://images.pexels.com/photos/30999130/pexels-photo-30999130.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 18,
  },
  {
    id: 'ultra-niche',
    name: 'Ultra Niche',
    nameAr: 'النيش الفائق',
    description: 'Limited editions and rare compositions for the true collector.',
    image:
      'https://images.pexels.com/photos/12456278/pexels-photo-12456278.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 12,
  },
  {
    id: 'musk-collection',
    name: 'Musk Collection',
    nameAr: 'مجموعة المسك',
    description: 'Pure musks — soft, sensual, and endlessly elegant.',
    image:
      'https://images.pexels.com/photos/30618765/pexels-photo-30618765.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 9,
  },
  {
    id: 'arabian-perfumes',
    name: 'Arabian Perfumes',
    nameAr: 'العطور العربية',
    description: 'Traditional Arabian attars and oriental blends rooted in heritage.',
    image:
      'https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 16,
  },
  {
    id: 'oud',
    name: 'Oud',
    nameAr: 'العود',
    description: 'The king of ingredients — pure agarwood oils and blends.',
    image:
      'https://images.pexels.com/photos/35658144/pexels-photo-35658144.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 20,
  },
  {
    id: 'bakhoor',
    name: 'Bakhoor',
    nameAr: 'البخور',
    description: 'Aromatic woods and resins to fragrance your home and garments.',
    image:
      'https://images.pexels.com/photos/17860048/pexels-photo-17860048.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 14,
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    nameAr: 'مجموعات الهدايا',
    description: 'Curated coffrets presented in signature AFFRAA OUD boxes.',
    image:
      'https://images.pexels.com/photos/34972176/pexels-photo-34972176.jpeg?auto=compress&cs=tinysrgb&w=900',
    productCount: 11,
  },
];

export const brands: Brand[] = [
 {
  id: "arabian-oud",
  name: "العربية للعود",
  country: "السعودية",
  image: "/images/brands/arabian-oud.jpg",
  category: "arabian-perfumes",
},
{
  id: "abdul-samad",
  name: "عبد الصمد القرشي",
  country: "السعودية",
  image: "/images/brands/abdul-samad.jpg",
  category: "arabian-perfumes",
},
{
  id: "almajed",
  name: "الماجد للعود",
  country: "السعودية",
  image: "/images/brands/almajed.jpg",
  category: "arabian-perfumes",
},
{
  id: "al-dakheel",
  name: "الدخيل للعود",
  country: "السعودية",
  image: "/images/brands/al-dakheel.jpg",
  category: "arabian-perfumes",
},
{
  id: "atyab-almarshood",
  name: "أطياب المرشود",
  country: "الكويت",
  image: "/images/brands/atyab-almarshood.jpg",
  category: "arabian-perfumes",
},
{
  id: "gissah",
  name: "قصة",
  country: "الكويت",
  image: "/images/brands/gissah.jpg",
  category: "arabian-perfumes",
},
{
  id: "nukhbat-al-oud",
  name: "نخبة العود",
  country: "السعودية",
  image: "/images/brands/nakhbat-aloud.jpg",
  category: "arabian-perfumes",
},
{
  id: "aljazeera",
  name: "الجزيرة",
  country: "قطر",
  image: "/images/brands/aljazeera.jpg",
  category: "arabian-perfumes",
},
{
  id: "assaf",
  name: "Assaf",
  nameAr: "عساف",
  country: "Saudi Arabia",
  image: "/images/brands/assaf.jpg",
  category: "dupes",
},

{
  id: "ibraq",
  name: "Ibraq",
  nameAr: "إبراق",
  country: "Saudi Arabia",
  image: "/images/brands/ibraq.jpg",
  category: "dupes",
},

{
  id: "osma",
  name: "Osma",
  nameAr: "أوسما",
  country: "Saudi Arabia",
  image: "/images/brands/osma.jpg",
  category: "dupes",
},

{
  id: "lavern",
  name: "Lavern",
  nameAr: "لافيرن",
  country: "Saudi Arabia",
  image: "/images/brands/lavern.jpg",
  category: "dupes",
},

{
  id: "al-ezz-oud",
  name: "Al Ezz Oud",
  nameAr: "العز للعود",
  country: "Saudi Arabia",
  image: "/images/brands/al-ezz-oud.jpg",
  category: "dupes",
},

{
  id: "reef",
  name: "Reef",
  nameAr: "ريف",
  country: "Saudi Arabia",
  image: "/images/brands/reef.jpg",
  category: "dupes",
},

{
  id: "rayhan",
  name: "Rayhan",
  nameAr: "الريحان",
  country: "Saudi Arabia",
  image: "/images/brands/rayhan.jpg",
  category: "dupes",
},

{
  id: "rasasi",
  name: "Rasasi",
  nameAr: "الرصاصي",
  country: "UAE",
  image: "/images/brands/rasasi.jpg",
  category: "dupes",
},

{
  id: "french-avenue",
  name: "French Avenue",
  nameAr: "فرنش أفينيو",
  country: "UAE",
  image: "/images/brands/french-avenue.jpg",
  category: "dupes",
},

{
  id: "armaf",
  name: "Armaf",
  nameAr: "أرماف",
  country: "UAE",
  image: "/images/brands/armaf.jpg",
  category: "dupes",
},

{
  id: "lattafa",
  name: "Lattafa",
  nameAr: "لطافة",
  country: "UAE",
  image: "/images/brands/lattafa.jpg",
  category: "dupes",
},

{
  id: "maison-alhambra",
  name: "Maison Alhambra",
  nameAr: "ميزون الحمراء",
  country: "UAE",
  image: "/images/brands/maison-alhambra.jpg",
  category: "dupes",
},

{
  id: "zimaya",
  name: "Zimaya",
  nameAr: "زيمايا",
  country: "UAE",
  image: "/images/brands/zimaya.jpg",
  category: "dupes",
},
];
export const navLinks = [
  { label: 'Home', labelAr: 'الرئيسية', href: '/' },
  { label: 'Brands', labelAr: 'العلامات', href: '/brands' },
  { label: 'Dupes', labelAr: 'البديل', href: '/category/dupes' },
  { label: 'Niche Perfumes', labelAr: 'العطور النيش', href: '/category/niche-perfumes' },
  { label: 'Ultra Niche', labelAr: 'النيش الفائق', href: '/category/ultra-niche' },
  { label: 'Musk Collection', labelAr: 'مجموعة المسك', href: '/category/musk-collection' },
  { label: 'Bakhoor', labelAr: 'البخور', href: '/category/bakhoor' },
  { label: 'Oud', labelAr: 'العود', href: '/category/oud' },
  { label: 'Gift Sets', labelAr: 'مجموعات الهدايا', href: '/category/gift-sets' },
  { label: 'New Arrivals', labelAr: 'وصل حديثاً', href: '/shop?sort=newest' },
  { label: 'Best Sellers', labelAr: 'الأكثر مبيعاً', href: '/shop?sort=bestSelling' },
  { label: 'About AFFRAA OUD', labelAr: 'عن أفرا عود', href: '/about' },
  { label: 'Contact', labelAr: 'اتصل بنا', href: '/contact' },
];
