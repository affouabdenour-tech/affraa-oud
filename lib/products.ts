import type { Product } from "./types";

export const products: Product[] = [

{
  id: "kalemat",
  slug: "kalemat",
  name: "Kalemat",
  nameAr: "كلمات",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/kalemat/1.jpg",
  "/images/products/arabian-oud/kalemat/2.jpg",
  "/images/products/arabian-oud/kalemat/3.jpg",
],

  description:
    "One of Arabian Oud's most iconic creations, blending warm amber, honey, musk and precious woods into a luxurious oriental fragrance.",

  descriptionAr:
    "يعد كلمات من أشهر عطور العربية للعود، يجمع بين العنبر والعسل والمسك والأخشاب في تركيبة شرقية فاخرة ذات ثبات وفوحان مميز.",

  notes: {
    top: ["Honey"],
    heart: ["Amber", "Woody Notes", "Floral Notes"],
    base: ["Musk"],
  },

  family: "amber",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Amber",
    "Honey",
    "Musk",
    "Woody Notes",
    "Floral Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  bestseller: true,

  reviews: [],
},

{
  id: "musc-kashmir",
  slug: "musc-kashmir",
  name: "Musc Kashmir",
  nameAr: "مسك كشمير",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/kashmir-musc/1.jpg",
  "/images/products/arabian-oud/kashmir-musc/2.jpg",
  "/images/products/arabian-oud/kashmir-musc/3.jpg",
],

  description:
    "A luxurious white musk fragrance enriched with soft floral accords, delivering elegance, purity and exceptional comfort.",

  descriptionAr:
    "عطر مسكي فاخر يجمع بين المسك الأبيض والزهور البيضاء ليمنح إحساساً بالنقاء والفخامة والنعومة طوال اليوم.",

  notes: {
    top: ["White Flowers"],
    heart: ["White Musk"],
    base: ["Soft Musk"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "White Flowers",
    "White Musk",
    "Soft Musk",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "resala",
  slug: "resala",
  name: "Resala",
  nameAr: "الرسالة",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

price: 2500,

sizes: ["10ml", "50ml", "100ml"],

purchaseOptions: {
  fullBottle: [
    { size: "10ml", price: 2500 },
    { size: "50ml", price: 8500 },
    { size: "100ml", price: 15500 },
  ],
  decants: [],
},


  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/resala/1.jpg",
  "/images/products/arabian-oud/resala/2.jpg",
  "/images/products/arabian-oud/resala/3.jpg",
],

  description:
    "Resala is one of Arabian Oud's masterpiece creations. A luxurious oriental fragrance combining warm spices, precious rose, rich woods, cocoa, vanilla and leather for a bold, elegant and unforgettable signature.",

  descriptionAr:
    "الرسالة من أشهر عطور العربية للعود، يجمع بين التوابل الدافئة والورد والأخشاب والكاكاو والفانيلا والجلود في تركيبة شرقية فاخرة ذات حضور قوي وثبات استثنائي.",

  notes: {
    top: ["Warm Spices", "Rose"],
    heart: ["Woody Notes", "Cocoa"],
    base: ["Vanilla", "Leather"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Warm Spices",
    "Rose",
    "Woody Notes",
    "Cocoa",
    "Vanilla",
    "Leather",
    
  ],

  

  countryOfOrigin: "Saudi Arabia",

  bestseller: true,

  reviews: [],
},

{
  id: "majestic-oud",
  slug: "majestic-oud",
  name: "Majestic Oud",
  nameAr: "ماجيستك عود",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

 images: [
  "/images/products/arabian-oud/majestic-oud/1.jpg",
  "/images/products/arabian-oud/majestic-oud/2.jpg",
  "/images/products/arabian-oud/majestic-oud/3.jpg",
],

  description:
    "Majestic Oud is a refined oriental fragrance highlighting natural oud, amber and musk with fresh spicy accents, creating a luxurious scent with remarkable depth and elegance.",

  descriptionAr:
    "ماجيستك عود عطر شرقي فاخر يبرز جمال العود الطبيعي مع العنبر والمسك ولمسات التوابل المنعشة ليمنح فخامة وأناقة تدوم لساعات طويلة.",

  notes: {
    top: ["Fresh Spices"],
    heart: ["Oud", "Amber"],
    base: ["Musk"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Oud",
    "Amber",
    "Musk",
    "Fresh Spices",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "majestic-intense",
  slug: "majestic-intense",
  name: "Majestic Intense",
  nameAr: "ماجيستك إنتنس",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/majestic-intense/1.jpg",
  "/images/products/arabian-oud/majestic-intense/2.jpg",
  "/images/products/arabian-oud/majestic-intense/3.jpg",
],

  description:
    "Majestic Intense is a powerful woody composition created for lovers of luxurious oriental fragrances. Rich woods blend with elegant oriental accords to deliver exceptional depth and long-lasting performance.",

  descriptionAr:
    "ماجيستك إنتنس تركيبة خشبية فاخرة تشع بالقوة والأناقة، صُممت لعشاق العطور الشرقية الراقية بثبات وفوحان يدومان لساعات طويلة.",

  notes: {
    top: ["Woody Notes"],
    heart: ["Oriental Notes"],
    base: ["Precious Woods"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Woody Notes",
    "Oriental Notes",
    "Precious Woods",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "musc-rose",
  slug: "musc-rose",
  name: "Musc Rose",
  nameAr: "مسك روز",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/musc-rose/1.jpg",
  "/images/products/arabian-oud/musc-rose/2.jpg",
  "/images/products/arabian-oud/musc-rose/3.jpg",
],
  description:
    "Musc Rose combines soft white musk with blooming roses, fresh citrus and fruity notes to create an elegant fragrance that feels clean, smooth and naturally luxurious.",

  descriptionAr:
    "مسك روز يجمع بين المسك الناعم والورد الفاخر مع الحمضيات والفاكهة ولمسات خشبية ومنعشة ليمنح عطراً راقياً يناسب جميع الأوقات.",

  notes: {
    top: ["Citrus", "Fruity Notes"],
    heart: ["Rose", "White Musk"],
    base: ["Woody Notes", "Fresh Musk"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 4,
  projection: 4,

  ingredients: [
    "Rose",
    "White Musk",
    "Citrus",
    "Fruity Notes",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "rose-wood",
  slug: "rose-wood",
  name: "Rose Wood",
  nameAr: "روز وود",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/rose-wood/1.jpg",
  "/images/products/arabian-oud/rose-wood/2.jpg",
  "/images/products/arabian-oud/rose-wood/3.jpg",
],

  description:
    "Rose Wood blends velvety rose with creamy vanilla and precious woods, wrapped in soft musk and amber to create an elegant oriental fragrance with exceptional refinement.",

  descriptionAr:
    "روز وود يمزج الورد المخملي مع الفانيلا والأخشاب الفاخرة والمسك والعنبر ليمنح عطراً شرقياً راقياً يجمع بين النعومة والفخامة.",

  notes: {
    top: ["Rose"],
    heart: ["Vanilla", "Woody Notes"],
    base: ["Amber", "Musk"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Rose",
    "Vanilla",
    "Woody Notes",
    "Amber",
    "Musk",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "twin",
  slug: "twin",
  name: "Twin",
  nameAr: "توين",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/twin/1.jpg",
  "/images/products/arabian-oud/twin/2.jpg",
  "/images/products/arabian-oud/twin/3.jpg",
],

  description:
    "Twin is a modern fragrance balancing sparkling citrus, creamy vanilla and soft amber with elegant white florals and musk for a smooth everyday signature.",

  descriptionAr:
    "توين عطر عصري يجمع بين الحمضيات المنعشة والفانيلا والعنبر مع الزهور البيضاء والمسك ليمنح إحساساً بالنظافة والأناقة طوال اليوم.",

  notes: {
    top: ["Citrus", "Fruity Notes"],
    heart: ["White Flowers", "Vanilla"],
    base: ["Amber", "Musk"],
  },

  family: "fresh",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 4,
  projection: 4,

  ingredients: [
    "Citrus",
    "Vanilla",
    "Amber",
    "White Flowers",
    "Musk",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "ramz",
  slug: "ramz",
  name: "RAMZ",
  nameAr: "رمز",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/ramz/1.jpg",
  "/images/products/arabian-oud/ramz/2.jpg",
  "/images/products/arabian-oud/ramz/3.jpg",
],
  description:
    "RAMZ is a refreshing aromatic fragrance inspired by the sea. Marine accords blend with citrus, musk and precious woods to create a clean and elegant scent for everyday wear.",

  descriptionAr:
    "رمز عطر أروماتيكي منعش مستوحى من أجواء البحر، يجمع بين النفحات البحرية والحمضيات والمسك والأخشاب ليمنح إحساساً بالنظافة والانتعاش والأناقة.",

  notes: {
    top: ["Marine Notes", "Citrus"],
    heart: ["Aromatic Notes"],
    base: ["Musk", "Woody Notes"],
  },

  family: "fresh",
  concentration: "eau-de-parfum",
  gender: "men",
  season: "all",

  longevity: 4,
  projection: 4,

  ingredients: [
    "Marine Notes",
    "Citrus",
    "Musk",
    "Woody Notes",
    "Aromatic Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "shalki-blue",
  slug: "shalki-blue",
  name: "Shalki Blue",
  nameAr: "شالكي بلو",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/shalki-blue/1.jpg",
  "/images/products/arabian-oud/shalki-blue/2.jpg",
  "/images/products/arabian-oud/shalki-blue/3.jpg",
],
  description:
    "Shalki Blue is an elegant oriental floral fragrance with a smooth luxurious character. A refined composition designed for those seeking sophistication and freshness together.",

  descriptionAr:
    "شالكي بلو عطر زهري شرقي راقٍ يجمع بين الأناقة والانتعاش في تركيبة فاخرة تمنح حضوراً مميزاً يدوم لساعات طويلة.",

  notes: {
    top: ["Oriental Notes"],
    heart: ["Floral Notes"],
    base: ["Soft Woods"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 4,
  projection: 4,

  ingredients: [
    "Oriental Notes",
    "Floral Notes",
    "Soft Woods",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "cherry-bubbles",
  slug: "cherry-bubbles",
  name: "Cherry Bubbles",
  nameAr: "تشيري بابلز",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
  "/images/products/arabian-oud/cherry-bubbles/1.jpg",
  "/images/products/arabian-oud/cherry-bubbles/2.jpg",
  "/images/products/arabian-oud/cherry-bubbles/3.jpg",
],
  description:
    "A joyful fruity-floral fragrance built around delicious cherry accords with soft berries and delicate floral notes.",

  descriptionAr:
    "عطر فاكهي زهري مبهج يجمع بين الكرز والتوت مع لمسات زهرية ناعمة ليمنح رائحة شبابية أنيقة.",

  notes: {
    top: ["Cherry", "Red Berries"],
    heart: ["Floral Notes"],
    base: ["Soft Musk"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "Cherry",
    "Red Berries",
    "Floral Notes",
    "Soft Musk",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "asalat-musk",
  slug: "asalat-musk",
  name: "Asalat Musk",
  nameAr: "أصالة مسك",
  brand: "Arabian Oud",
  brandId: "arabian-oud",
  category: "arabian-perfumes",

  price: 2,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

 images: [
  "/images/products/arabian-oud/asalat-elmusc/1.jpg",
  "/images/products/arabian-oud/asalat-elmusc/2.jpg",
  "/images/products/arabian-oud/asalat-elmusc/3.jpg",
],



  description:
    "A luxurious musk fragrance with exceptional softness and elegance, offering a clean comforting scent that lasts all day.",

  descriptionAr:
    "عطر مسكي فاخر يتميز بالنعومة والفخامة، يمنح إحساساً بالنظافة والراحة مع ثبات ممتاز طوال اليوم.",

  notes: {
    top: ["Soft Musk"],
    heart: ["White Musk"],
    base: ["Sweet Musk"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "White Musk",
    "Soft Musk",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1 },
      { size: "100ml", price: 2 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "body-oud-satin",
  slug: "body-oud-satin",

  name: "Body Oud Satin",
  nameAr: "بودي عود ساتان",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 26000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/body-oud-satin/1.jpg",
    "/images/products/abdul-samad/body-oud-satin/2.jpg",
    "/images/products/abdul-samad/body-oud-satin/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance centered around premium oud, enriched with warm spicy accords for an elegant and long-lasting scent.",

  descriptionAr:
    "عطر شرقي فاخر يرتكز على العود الفاخر ممزوج بنفحات تابلية دافئة تمنحه طابعًا أنيقًا وثباتًا يدوم طويلًا.",

  notes: {
    top: ["Fresh Spices"],
    heart: ["Oud"],
    base: ["Woody Notes"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Oud",
    "Fresh Spices",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 2700 },
      { size: "100ml", price: 26000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "body-oud-tobacco",
  slug: "body-oud-tobacco",

  name: "Body Oud Tobacco",
  nameAr: "بودي عود توباكو",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 26000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/body-oud-tobacco/1.jpg",
    "/images/products/abdul-samad/body-oud-tobacco/2.jpg",
    "/images/products/abdul-samad/body-oud-tobacco/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance blending rich tobacco, precious oud and warm amber for a deep, elegant signature scent.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين التبغ الفاخر والعود والعنبر ليمنح رائحة عميقة وأنيقة تدوم طويلاً.",

  notes: {
    top: ["Tobacco", "Spices"],
    heart: ["Oud", "Patchouli"],
    base: ["Amber", "Musk", "Vanilla"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Tobacco",
    "Oud",
    "Amber",
    "Patchouli",
    "Vanilla",
    "Musk",
  ],

  sizes: ["75ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "75ml", price: 26000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "khaltat-watan",
  slug: "khaltat-watan",

  name: "Khaltat Watan",
  nameAr: "خلطة وطن",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 18500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/khaltat-watan/1.jpg",
    "/images/products/abdul-samad/khaltat-watan/2.jpg",
    "/images/products/abdul-samad/khaltat-watan/3.jpg",
  ],

  description:
    "A unique oriental blend crafted to deliver freshness with an elegant Arabian signature.",

  descriptionAr:
    "تركيبة عطرية شرقية خاصة تمنح شعوراً بالانتعاش مع طابع عربي فاخر.",

  notes: {
    top: ["Fresh Notes"],
    heart: ["Oriental Accord"],
    base: ["Warm Oriental Blend"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Oriental Blend",
    "Fresh Notes",
  ],

  sizes: ["100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 18500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "safari-lhomme",
  slug: "safari-lhomme",

  name: "Safari L'Homme",
  nameAr: "سفاري للرجل",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 34000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/safari-lhomme/1.jpg",
    "/images/products/abdul-samad/safari-lhomme/2.jpg",
    "/images/products/abdul-samad/safari-lhomme/3.jpg",
  ],

  description:
    "A refined oriental masculine fragrance blending warm spices, oud, amber and musk with elegant floral and woody accords.",

  descriptionAr:
    "عطر رجالي شرقي فاخر يجمع بين التوابل الدافئة والعود والعنبر والمسك مع لمسات خشبية وزهرية أنيقة.",

  notes: {
    top: [
      "Warm Spices",
      "Citrus",
      "Aromatic Notes",
    ],

    heart: [
      "Rose",
      "Cinnamon",
      "Patchouli",
    ],

    base: [
      "Oud",
      "Amber",
      "Musk",
      "Soft Woods",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "men",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Warm Spices",
    "Amber",
    "Musk",
    "Oud",
    "Aromatic Notes",
    "Soft Notes",
    "Citrus",
    "Rose",
    "Patchouli",
    "Cinnamon",
  ],

  sizes: [
    "10ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 3500,
      },
      {
        size: "100ml",
        price: 34000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "safari-la-femme",
  slug: "safari-la-femme",

  name: "Safari La Femme",
  nameAr: "سفاري للمرأة",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 34000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/safari-la-femme/1.jpg",
    "/images/products/abdul-samad/safari-la-femme/2.jpg",
    "/images/products/abdul-samad/safari-la-femme/3.jpg",
  ],

  description:
    "An elegant feminine oriental fragrance blending creamy vanilla, coffee, fruity accords and warm woods with a soft gourmand signature.",

  descriptionAr:
    "عطر نسائي شرقي فاخر يجمع بين الفانيلا والقهوة والنفحات الفاكهية والخشبية مع لمسات ناعمة ودافئة تمنح حضورًا راقيًا.",

  notes: {
    top: [
      "Vanilla",
      "Fruity Notes",
      "Almond",
    ],

    heart: [
      "Coffee",
      "Warm Spices",
      "Patchouli",
    ],

    base: [
      "Woody Notes",
      "Soft Notes",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "women",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Vanilla",
    "Sweet Notes",
    "Fruity Notes",
    "Woody Notes",
    "Warm Spices",
    "Coffee",
    "Almond",
    "Patchouli",
    "Soft Notes",
  ],

  sizes: [
    "10ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 3500,
      },
      {
        size: "100ml",
        price: 34000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "caramel-powder",
  slug: "caramel-powder",

  name: "Caramel Powder",
  nameAr: "كاراميل باودر",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 28500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/caramel-powder/1.jpg",
    "/images/products/abdul-samad/caramel-powder/2.jpg",
    "/images/products/abdul-samad/caramel-powder/3.jpg",
  ],

  description:
    "A delicious gourmand fragrance blending creamy caramel, vanilla and white musk into a soft luxurious oriental scent.",

  descriptionAr:
    "عطر غورماند فاخر يجمع بين الكراميل الكريمي والفانيلا والمسك الأبيض ليمنح رائحة دافئة وناعمة تدوم طويلاً.",

  notes: {
    top: [
      "Caramel",
    ],

    heart: [
      "Vanilla",
    ],

    base: [
      "White Musk",
    ],
  },

  family: "gourmand",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Caramel",
    "Vanilla",
    "White Musk",
  ],

  sizes: [
    "10ml",
    "90ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 3300,
      },
      {
        size: "90ml",
        price: 28500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "musc-rose",
  slug: "musc-rose",

  name: "Musc Rose",
  nameAr: "مسك روز",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 18500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/musc-rose/1.jpg",
    "/images/products/abdul-samad/musc-rose/2.jpg",
    "/images/products/abdul-samad/musc-rose/3.jpg",
  ],

  description:
    "An elegant floral musk fragrance combining citrus freshness with delicate peony, pine essence and creamy sandalwood.",

  descriptionAr:
    "عطر زهري مسكي أنيق يجمع بين انتعاش البرتقال والليمون مع الفاونيا البيضاء وخلاصة الصنوبر وخشب الصندل الناعم.",

  notes: {
    top: [
      "Orange Oil",
      "Lemon Oil",
    ],

    heart: [
      "White Peony",
      "Pine Essence",
    ],

    base: [
      "Sandalwood",
    ],
  },

  family: "floral",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Orange Oil",
    "Lemon Oil",
    "White Peony",
    "Pine Essence",
    "Sandalwood",
  ],

  sizes: [
    "80ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "80ml",
        price: 18500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "musc-toffee",
  slug: "musc-toffee",

  name: "Musc Toffee",
  nameAr: "مسك توفي",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 18500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/musc-toffee/1.jpg",
    "/images/products/abdul-samad/musc-toffee/2.jpg",
    "/images/products/abdul-samad/musc-toffee/3.jpg",
  ],

  description:
    "A sweet oriental musk fragrance blending rose, bergamot and saffron with delicious caramel, vanilla and soft musky notes.",

  descriptionAr:
    "عطر شرقي مسكي حلو يجمع بين الورد والبرغموت والزعفران مع الكراميل والفانيلا والنفحات المسكية الناعمة.",

  notes: {
    top: [
      "Rose",
      "Bergamot",
      "Saffron",
    ],

    heart: [
      "Caramel",
      "Sweet Notes",
    ],

    base: [
      "Vanilla",
      "Musky Notes",
    ],
  },

  family: "gourmand",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Rose",
    "Bergamot",
    "Saffron",
    "Caramel",
    "Sweet Notes",
    "Vanilla",
    "Musky Notes",
  ],

  sizes: [
    "80ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "80ml",
        price: 18500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "bleu-kinam-vanilla",
  slug: "bleu-kinam-vanilla",

  name: "Bleu Kinam Vanilla",
  nameAr: "بلو كينام فانيلا",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 2500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/bleu-kinam-vanilla/1.jpg",
    "/images/products/abdul-samad/bleu-kinam-vanilla/2.jpg",
    "/images/products/abdul-samad/bleu-kinam-vanilla/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance combining warm spices, soft floral accords and rich vanilla over an elegant woody base.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين التوابل الدافئة والنفحات الزهرية الناعمة مع الفانيلا وقاعدة خشبية غنية تمنحه شخصية راقية.",

  notes: {
    top: [
      "Warm Spices",
    ],

    heart: [
      "Floral Notes",
    ],

    base: [
      "Vanilla",
      "Woody Notes",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Warm Spices",
    "Floral Notes",
    "Vanilla",
    "Woody Notes",
  ],

  sizes: [
    "10ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "vintage-amber",
  slug: "vintage-amber",

  name: "Vintage Amber",
  nameAr: "فينتج أمبر",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 26000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/vintage-amber/1.jpg",
    "/images/products/abdul-samad/vintage-amber/2.jpg",
    "/images/products/abdul-samad/vintage-amber/3.jpg",
  ],

  description:
    "A luxurious oriental amber fragrance combining citrus freshness with ylang-ylang, precious oud, white musk and rich amber accords.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين الحمضيات المنعشة واليلانج يلانج مع العود والمسك الأبيض والعنبر والباتشولي ليمنح رائحة فخمة تدوم طويلاً.",

  notes: {
    top: [
      "Citrus",
      "Ylang Ylang",
    ],

    heart: [
      "Amber",
      "White Musk",
      "Oud",
    ],

    base: [
      "Ambergris",
      "Patchouli",
    ],
  },

  family: "amber",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Citrus",
    "Ylang Ylang",
    "Amber",
    "White Musk",
    "Oud",
    "Ambergris",
    "Patchouli",
  ],

  sizes: [
    "10ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2800,
      },
      {
        size: "100ml",
        price: 26000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "saffran-and-musc",
  slug: "saffran-and-musc",

  name: "Saffran and Musc",
  nameAr: "زعفران ومسك",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 2400,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/saffran-and-musc/1.jpg",
    "/images/products/abdul-samad/saffran-and-musc/2.jpg",
    "/images/products/abdul-samad/saffran-and-musc/3.jpg",
  ],

  description:
    "A refined oriental fragrance blending luxurious saffron with delicate floral accords, iris and soft musk for an elegant everyday scent.",

  descriptionAr:
    "عطر شرقي أنيق يجمع بين الزعفران الفاخر والنفحات المنعشة والزهور والسوسن مع لمسات مسكية ناعمة تمنحه طابعًا راقيًا.",

  notes: {
    top: [
      "Saffron",
      "Fresh Notes",
    ],

    heart: [
      "Floral Notes",
      "Orris",
    ],

    base: [
      "Musk",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Saffron",
    "Fresh Notes",
    "Floral Notes",
    "Orris",
    "Musk",
  ],

  sizes: [
    "10ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2400,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "thyme-lavender",
  slug: "thyme-lavender",

  name: "Thyme Lavender",
  nameAr: "ثايم لافندر",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 1700,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/thyme-lavender/1.jpg",
    "/images/products/abdul-samad/thyme-lavender/2.jpg",
    "/images/products/abdul-samad/thyme-lavender/3.jpg",
  ],

  description:
    "A refreshing oriental fragrance combining aromatic thyme with soothing lavender, soft woods and elegant rosy nuances.",

  descriptionAr:
    "عطر شرقي منعش يجمع بين الزعتر العطري واللافندر مع لمسات خشبية ووردية ناعمة تمنحه شخصية راقية.",

  notes: {
    top: [
      "Thyme",
      "Fresh Notes",
    ],

    heart: [
      "Lavender",
      "Rose",
    ],

    base: [
      "Woody Notes",
      "Oriental Notes",
    ],
  },

  family: "floral",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 4,

  projection: 4,

  ingredients: [
    "Thyme",
    "Lavender",
    "Woody Notes",
    "Oriental Notes",
    "Rose",
  ],

  sizes: [
    "10ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 1700,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "berries-apple",
  slug: "berries-apple",

  name: "Berries Apple",
  nameAr: "بيريز آبل",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 1700,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/berries-apple/1.jpg",
    "/images/products/abdul-samad/berries-apple/2.jpg",
    "/images/products/abdul-samad/berries-apple/3.jpg",
  ],

  description:
    "A fresh oriental fragrance blending juicy berries and crisp apple with soft woody and rosy accords for a vibrant everyday scent.",

  descriptionAr:
    "عطر شرقي منعش يجمع بين التوت والتفاح مع نفحات خشبية ووردية ناعمة تمنحه رائحة حيوية وأنيقة.",

  notes: {
    top: [
      "Berries",
      "Apple",
    ],

    heart: [
      "Fresh Notes",
      "Rose",
    ],

    base: [
      "Woody Notes",
      "Oriental Notes",
    ],
  },

  family: "floral",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 4,

  projection: 4,

  ingredients: [
    "Berries",
    "Apple",
    "Fresh Notes",
    "Rose",
    "Woody Notes",
    "Oriental Notes",
  ],

  sizes: [
    "10ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 1700,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "viva-la-vida",
  slug: "viva-la-vida",

  name: "Viva La Vida",
  nameAr: "فيفا لا فيدا",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/viva-la-vida/1.jpg",
    "/images/products/abdul-samad/viva-la-vida/2.jpg",
    "/images/products/abdul-samad/viva-la-vida/3.jpg",
  ],

  description:
    "A vibrant oriental fragrance bursting with citrus freshness and warm spices, creating an elegant and long-lasting signature.",

  descriptionAr:
    "عطر شرقي فاخر يبدأ بنفحات حمضية متألقة وتوابل منعشة، تتفجر بدايته بالليمون والبرغموت والزنجبيل مع لمسة من الفلفل الأبيض، ثم ينتقل إلى قلب عشبي أنيق يمنح العطر شخصية راقية وثباتاً يدوم طويلاً.",

  notes: {
    top: [
      "Lemon",
      "Bergamot",
      "Ginger",
      "White Pepper",
    ],

    heart: [
      "Herbal Notes",
    ],

    base: [
      "Woody Notes",
      "Soft Musk",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Lemon",
    "Bergamot",
    "Ginger",
    "White Pepper",
    "Herbal Notes",
    "Woody Notes",
    "Soft Musk",
  ],

  sizes: [
    "10ml",
    "50ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2000,
      },
      {
        size: "50ml",
        price: 9800,
      },
      {
        size: "100ml",
        price: 19500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "viva-la-oud",
  slug: "viva-la-oud",

  name: "Viva La Oud",
  nameAr: "فيفا لا عود",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 21000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/viva-la-oud/1.jpg",
    "/images/products/abdul-samad/viva-la-oud/2.jpg",
    "/images/products/abdul-samad/viva-la-oud/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance opening with pink pepper, saffron, nutmeg and clove, unfolding into an elegant iris and cedarwood heart before settling into a rich woody oriental base.",

  descriptionAr:
    "عطر شرقي فاخر يبدأ بالفلفل الوردي والزعفران ممزوجين بجوزة الطيب والقرنفل، ثم ينتقل إلى قلب أنيق من السوسن وخشب الأرز، ليستقر على قاعدة شرقية غنية تدوم طويلاً.",

  notes: {
    top: [
      "Pink Pepper",
      "Saffron",
      "Nutmeg",
      "Clove",
    ],

    heart: [
      "Iris",
      "Cedarwood",
    ],

    base: [
      "Oud",
      "Amber",
      "Musk",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Pink Pepper",
    "Saffron",
    "Nutmeg",
    "Clove",
    "Iris",
    "Cedarwood",
    "Oud",
    "Amber",
    "Musk",
  ],

  sizes: [
    "10ml",
    "50ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2150,
      },
      {
        size: "50ml",
        price: 10500,
      },
      {
        size: "100ml",
        price: 21000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "viva-havana-banana",
  slug: "viva-havana-banana",

  name: "Viva Havana Banana",
  nameAr: "فيفا هافانا بانانا",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/viva-havana-banana/1.jpg",
    "/images/products/abdul-samad/viva-havana-banana/2.jpg",
    "/images/products/abdul-samad/viva-havana-banana/3.jpg",
  ],

  description:
    "A tropical gourmand fragrance blending creamy banana with sweet oriental accords, creating a warm and addictive signature.",

  descriptionAr:
    "عطر استوائي غورماند دافئ يجمع بين رائحة الموز الكريمي والنفحات الحلوة الفاخرة ليمنح رائحة مميزة تدوم طويلاً.",

  notes: {
    top: [
      "Banana",
      "Sweet Notes",
    ],

    heart: [
      "Creamy Notes",
      "Vanilla",
    ],

    base: [
      "Soft Musk",
      "Woody Notes",
    ],
  },

  family: "gourmand",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Banana",
    "Sweet Notes",
    "Creamy Notes",
    "Vanilla",
    "Soft Musk",
    "Woody Notes",
  ],

  sizes: [
    "10ml",
    "50ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2000,
      },
      {
        size: "50ml",
        price: 9800,
      },
      {
        size: "100ml",
        price: 19500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "viva-vanilla",
  slug: "viva-vanilla",

  name: "Viva Vanilla",
  nameAr: "فيفا فانيلا",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/viva-vanilla/1.jpg",
    "/images/products/abdul-samad/viva-vanilla/2.jpg",
    "/images/products/abdul-samad/viva-vanilla/3.jpg",
  ],

  description:
    "A luxurious gourmand fragrance with creamy vanilla, soft sweetness and warm oriental accords that leave a comforting elegant trail.",

  descriptionAr:
    "عطر غورماند فاخر يتميز بالفانيلا الكريمية والحلاوة الناعمة مع لمسات شرقية دافئة تمنح رائحة مريحة وأنيقة تدوم طويلاً.",

  notes: {
    top: [
      "Vanilla",
      "Sweet Notes",
    ],

    heart: [
      "Creamy Notes",
      "Soft Spices",
    ],

    base: [
      "White Musk",
      "Woody Notes",
    ],
  },

  family: "gourmand",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Vanilla",
    "Sweet Notes",
    "Creamy Notes",
    "Soft Spices",
    "White Musk",
    "Woody Notes",
  ],

  sizes: [
    "10ml",
    "50ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2000,
      },
      {
        size: "50ml",
        price: 9800,
      },
      {
        size: "100ml",
        price: 19500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "viva-tiramisu",
  slug: "viva-tiramisu",

  name: "Viva Tiramisu",
  nameAr: "فيفا تيراميسو",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/viva-tiramisu/1.jpg",
    "/images/products/abdul-samad/viva-tiramisu/2.jpg",
    "/images/products/abdul-samad/viva-tiramisu/3.jpg",
  ],

  description:
    "A luxurious gourmand fragrance inspired by the famous Italian dessert, blending rich coffee, creamy sweetness and warm vanilla into an unforgettable scent.",

  descriptionAr:
    "عطر غورماند فاخر مستوحى من حلوى التيراميسو الإيطالية، يجمع بين القهوة الغنية والحلاوة الكريمية والفانيلا الدافئة ليمنح رائحة جذابة تدوم طويلاً.",

  notes: {
    top: [
      "Coffee",
      "Sweet Notes",
    ],

    heart: [
      "Creamy Notes",
      "Cocoa",
    ],

    base: [
      "Vanilla",
      "White Musk",
    ],
  },

  family: "gourmand",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Coffee",
    "Sweet Notes",
    "Creamy Notes",
    "Cocoa",
    "Vanilla",
    "White Musk",
  ],

  sizes: [
    "10ml",
    "50ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2000,
      },
      {
        size: "50ml",
        price: 9800,
      },
      {
        size: "100ml",
        price: 19500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "viva-macaron",
  slug: "viva-macaron",

  name: "Viva Macaron",
  nameAr: "فيفا ماكرون",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: false,
  stockCount: 0,

  images: [
    "/images/products/abdul-samad/viva-macaron/1.jpg",
    "/images/products/abdul-samad/viva-macaron/2.jpg",
    "/images/products/abdul-samad/viva-macaron/3.jpg",
  ],

  description:
    "A delicious gourmand fragrance combining fruity sweetness with creamy accords and warm oriental notes, inspired by the elegance of French macarons.",

  descriptionAr:
    "عطر غورماند فاخر يجمع بين الحلاوة الفاكهية والانتعاش والدفء في تركيبة مستوحاة من حلوى الماكرون الفرنسية.",

  notes: {
    top: [
      "Fruity Notes",
      "Sweet Notes",
    ],

    heart: [
      "Creamy Notes",
      "Vanilla",
    ],

    base: [
      "White Musk",
      "Warm Woods",
    ],
  },

  family: "gourmand",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Fruity Notes",
    "Sweet Notes",
    "Creamy Notes",
    "Vanilla",
    "White Musk",
    "Warm Woods",
  ],

  sizes: [
    "10ml",
    "50ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2000,
      },
      {
        size: "50ml",
        price: 9800,
      },
      {
        size: "100ml",
        price: 19500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "viva-matcha-cookie",
  slug: "viva-matcha-cookie",

  name: "Viva Matcha Cookie",
  nameAr: "فيفا ماتشا كوكي",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/viva-matcha-cookie/1.jpg",
    "/images/products/abdul-samad/viva-matcha-cookie/2.jpg",
    "/images/products/abdul-samad/viva-matcha-cookie/3.jpg",
  ],

  description:
    "A luxurious gourmand fragrance inspired by creamy matcha cookies, blending soft sweetness with elegant oriental accords.",

  descriptionAr:
    "عطر غورماند فاخر مستوحى من كوكيز الماتشا، يجمع بين الحلاوة الناعمة واللمسات الكريمية مع طابع شرقي راقٍ.",

  notes: {
    top: [
      "Matcha",
      "Sweet Notes",
    ],

    heart: [
      "Creamy Notes",
      "Cookie Accord",
    ],

    base: [
      "Vanilla",
      "White Musk",
    ],
  },

  family: "gourmand",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Matcha",
    "Sweet Notes",
    "Creamy Notes",
    "Cookie Accord",
    "Vanilla",
    "White Musk",
  ],

  sizes: [
    "10ml",
    "50ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 2000,
      },
      {
        size: "50ml",
        price: 9800,
      },
      {
        size: "100ml",
        price: 19500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "white-oud-safida",
  slug: "white-oud-safida",

  name: "White Oud Safida",
  nameAr: "دهن عود أبيض صافيدا",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 120000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/white-oud-safida/1.jpg",
    "/images/products/abdul-samad/white-oud-safida/2.jpg",
    "/images/products/abdul-samad/white-oud-safida/3.jpg",
  ],

  description:
    "An exclusive white oud oil with elegant floral nuances, offering a refined luxurious oriental experience.",

  descriptionAr:
    "دهن عود أبيض فاخر يمتزج بإشراقة العود الأبيض مع نفحات زهرية راقية تمنحه طابعاً فاخراً وثباتاً استثنائياً.",

  notes: {
    top: [
      "White Oud",
    ],

    heart: [
      "Floral Notes",
    ],

    base: [
      "Soft Woods",
      "White Musk",
    ],
  },

  family: "woody",

 concentration: "parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "White Oud",
    "Floral Notes",
    "White Musk",
    "Soft Woods",
  ],

  sizes: [
    "12ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "12ml",
        price: 120000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "oud-klakasi",
  slug: "oud-klakasi",

  name: "Oud Klakasi",
  nameAr: "دهن عود كلاكاسي",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 120000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/oud-klakasi/1.jpg",
    "/images/products/abdul-samad/oud-klakasi/2.jpg",
    "/images/products/abdul-samad/oud-klakasi/3.jpg",
  ],

  description:
    "Pure natural oud oil with an authentic luxurious oriental character and exceptional longevity.",

  descriptionAr:
    "دهن عود طبيعي فاخر يتميز برائحة العود الأصيلة وثبات وفوحان استثنائيين.",

  notes: {
    top: [
      "Pure Oud",
    ],

    heart: [
      "Oud Wood",
    ],

    base: [
      "Deep Oud",
    ],
  },

  family: "woody",

  concentration: "parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Pure Oud",
  ],

  sizes: [
    "12ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "12ml",
        price: 120000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "oud-villaria",
  slug: "oud-villaria",

  name: "Oud Villaria",
  nameAr: "دهن عود فيلاريا",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 120000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/oud-villaria/1.jpg",
    "/images/products/abdul-samad/oud-villaria/2.jpg",
    "/images/products/abdul-samad/oud-villaria/3.jpg",
  ],

  description:
    "An elegant pure oud oil combining fresh citrus, floral notes and refined oud with a luxurious oriental character.",

  descriptionAr:
    "دهن عود فاخر يجمع بين الحمضيات المنعشة والنفحات الزهرية والعود في تركيبة شرقية راقية تدوم طويلاً.",

  notes: {
    top: [
      "Citrus",
      "Fresh Spices",
    ],

    heart: [
      "Floral Notes",
      "Oud",
    ],

    base: [
      "Woody Notes",
      "Soft Musk",
    ],
  },

  family: "woody",

  concentration: "parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Citrus",
    "Floral Notes",
    "Fresh Spices",
    "Oud",
    "Woody Notes",
    "Soft Musk",
  ],

  sizes: [
    "80ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "80ml",
        price: 120000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "black-incense",
  slug: "black-incense",

  name: "Black Incense",
  nameAr: "بلاك إنسنس",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 38000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/black-incense/1.jpg",
    "/images/products/abdul-samad/black-incense/2.jpg",
    "/images/products/abdul-samad/black-incense/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance with warm spicy accords, citrus freshness, leather and tobacco wrapped in a rich woody composition.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين التوابل الدافئة والحمضيات والجلد والتبغ مع لمسات خشبية غنية تمنحه شخصية قوية وفاخرة.",

  notes: {
    top: [
      "توابل دافئة",
      "حمضيات",
      "فاكهي",
    ],

    heart: [
      "جلدي",
      "عطري",
      "تبغ",
    ],

    base: [
      "لبني كريمي",
      "توابل منعشة",
      "حلو",
      "معدني",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "توابل دافئة",
    "حمضيات",
    "حلو",
    "فاكهي",
    "معدني",
    "جلدي",
    "عطري",
    "لبني كريمي",
    "تبغ",
    "توابل منعشة",
  ],

  sizes: [
    "80ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "80ml",
        price: 38000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "pink-incense",
  slug: "pink-incense",

  name: "Pink Incense",
  nameAr: "بينك إنسنس",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 38000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/pink-incense/1.JPG",
    "/images/products/abdul-samad/pink-incense/2.JPG",
    "/images/products/abdul-samad/pink-incense/3.JPG",
  ],

  description:
    "A luxurious floral oriental fragrance blending rose, jasmine, vanilla and musk into a soft elegant composition.",

  descriptionAr:
    "عطر شرقي زهري فاخر يجمع بين الورد والياسمين والفانيلا والمسك ليمنح رائحة ناعمة وأنيقة تدوم طويلاً.",

  notes: {
    top: [
      "Rose",
    ],

    heart: [
      "Jasmine",
      "Vanilla",
    ],

    base: [
      "White Musk",
    ],
  },

  family: "floral",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Rose",
    "Jasmine",
    "Vanilla",
    "White Musk",
  ],

  sizes: [
    "80ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "80ml",
        price: 38000,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "the-black",
  slug: "the-black",

  name: "The Black",
  nameAr: "ذا بلاك",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/the-black/1.jpg",
    "/images/products/abdul-samad/the-black/2.jpg",
    "/images/products/abdul-samad/the-black/3.jpg",
  ],

  description:
    "A sophisticated oriental fragrance combining citrus freshness with soft floral notes, iris, aromatic herbs and warm woody accords.",

  descriptionAr:
    "عطر شرقي راقٍ يجمع بين الحمضيات المنعشة والزهور الناعمة والسوسن مع لمسات عشبية وأروماتية وخشبية تمنحه طابعًا فخمًا ومتوازنًا.",

  notes: {
    top: [
      "Citrus",
      "Fresh Spices",
    ],

    heart: [
      "Rose",
      "Iris",
      "Herbal Notes",
      "Aromatic Notes",
    ],

    base: [
      "Woody Notes",
      "Sweet Notes",
      "Soft Notes",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Citrus",
    "Soft Notes",
    "Floral Notes",
    "Rose",
    "Iris",
    "Fresh Spices",
    "Woody Notes",
    "Sweet Notes",
    "Herbal Notes",
    "Aromatic Notes",
  ],

  sizes: [
    "10ml",
    "120ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 1900,
      },
      {
        size: "120ml",
        price: 19500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "body-oud-tobacco",
  slug: "body-oud-tobacco",

  name: "Body Oud Tobacco",
  nameAr: "بودي عود توباكو",

  brand: "Abdul Samad Al Qurashi",
  brandId: "abdul-samad",

  category: "arabian-perfumes",

  price: 27500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/abdul-samad/body-oud-tobacco/1.jpg",
    "/images/products/abdul-samad/body-oud-tobacco/2.jpg",
    "/images/products/abdul-samad/body-oud-tobacco/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance blending rich tobacco, precious oud, smooth whisky accord and warm sweet spices for a bold masculine signature.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين التبغ الفاخر والعود مع لمسة ويسكي وتوابل دافئة ليمنح رائحة قوية وأنيقة تدوم طويلاً.",

  notes: {
    top: [
      "Tobacco",
      "Fresh Spices",
    ],

    heart: [
      "Oud",
      "Whisky Accord",
    ],

    base: [
      "Sweet Notes",
      "Woody Notes",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 5,

  ingredients: [
    "Tobacco",
    "Oud",
    "Sweet Notes",
    "Whisky Accord",
    "Fresh Spices",
  ],

  sizes: [
    "10ml",
    "100ml",
  ],

  purchaseOptions: {
    fullBottle: [
      {
        size: "10ml",
        price: 3100,
      },
      {
        size: "100ml",
        price: 27500,
      },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "noir",
  slug: "noir",

  name: "Noir",
  nameAr: "نوار",

  brand: "Al Majed Oud",
  brandId: "almajed",

  category: "arabian-perfumes",

  price: 19500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/al-majed-oud/noir/1.jpg",
    "/images/products/al-majed-oud/noir/2.jpg",
    "/images/products/al-majed-oud/noir/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance blending leather, woods, amber and fruity notes with a soft smoky finish.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين الجلود والأخشاب والعنبر والنفحات الفاكهية مع لمسة ناعمة ومدخنة.",

  notes: {
    top: ["Fruity Notes", "Violet"],
    heart: ["Leather", "Orris"],
    base: ["Amber", "Woods", "Smoky Notes"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Leather",
    "Fruity",
    "Woody",
    "Sweet",
    "Animalic",
    "Orris",
    "Amber",
    "Soft",
    "Smoky",
    "Violet",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 2300 },
      { size: "100ml", price: 19500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "serious",
  slug: "serious",

  name: "Serious",
  nameAr: "سيريوس",

  brand: "Al Majed Oud",
  brandId: "almajed",

  category: "arabian-perfumes",

  price: 16500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/al-majed-oud/serious/1.jpg",
    "/images/products/al-majed-oud/serious/2.jpg",
    "/images/products/al-majed-oud/serious/3.jpg",
  ],

  description:
    "A fresh woody oriental fragrance combining oud, citrus and aromatic herbs with a warm spicy finish.",

  descriptionAr:
    "عطر شرقي خشبي منعش يجمع بين العود والحمضيات والأعشاب العطرية مع لمسة دافئة من التوابل.",

  notes: {
    top: ["Citrus", "Fresh Spices"],
    heart: ["Aromatic Herbs", "Ozone"],
    base: ["Oud", "Woods"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Herbal",
    "Woody",
    "Oud",
    "Citrus",
    "Fresh",
    "Aromatic",
    "Fresh Spicy",
    "Ozone",
    "Warm Spicy",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 2000 },
      { size: "100ml", price: 16500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "mashaer-musk",
  slug: "mashaer-musk",

  name: "Mashaer Musk",
  nameAr: "مشاعر مسك",

  brand: "Nukhbat Al Oud",
  brandId: "nukhbat-al-oud",

  category: "arabian-perfumes",

  price: 22000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/nukhbat-al-oud/mashaer-musk/1.jpg",
    "/images/products/nukhbat-al-oud/mashaer-musk/2.jpg",
    "/images/products/nukhbat-al-oud/mashaer-musk/3.jpg",
  ],

  description:
    "A luxurious fruity musk fragrance with a soft elegant scent.",

  descriptionAr:
    "عطر فاخر يجمع بين الفواكه والمسك برائحة ناعمة وأنيقة.",

  notes: {
    top: ["Fruits"],
    heart: ["Musk"],
    base: ["White Musk"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Fruits",
    "Musk",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 2800 },
      { size: "100ml", price: 22000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "mashaer-silver",
  slug: "mashaer-silver",

  name: "Mashaer Silver",
  nameAr: "مشاعر سيلفر",

  brand: "Nukhbat Al Oud",
  brandId: "nukhbat-al-oud",

  category: "arabian-perfumes",

  price: 19000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/nukhbat-al-oud/mashaer-silver/1.jpg",
    "/images/products/nukhbat-al-oud/mashaer-silver/2.jpg",
    "/images/products/nukhbat-al-oud/mashaer-silver/3.jpg",
  ],

  description:
    "A refined blend of fruity, floral and woody accords.",

  descriptionAr:
    "مزيج أنيق يجمع بين الروائح الفاكهية والزهرية والخشبية.",

  notes: {
    top: ["Fruity Notes"],
    heart: ["Floral Notes"],
    base: ["Woody Notes"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Fruity Notes",
    "Floral Notes",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 2000 },
      { size: "100ml", price: 19000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "mashaer-oud",
  slug: "mashaer-oud",

  name: "Mashaer Oud",
  nameAr: "مشاعر عود",

  brand: "Nukhbat Al Oud",
  brandId: "nukhbat-al-oud",

  category: "arabian-perfumes",

  price: 24000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/nukhbat-al-oud/mashaer-oud/1.jpg",
    "/images/products/nukhbat-al-oud/mashaer-oud/2.jpg",
    "/images/products/nukhbat-al-oud/mashaer-oud/3.jpg",
  ],

  description:
    "A warm oriental fragrance combining vanilla, musk, amber, rose and precious woods.",

  descriptionAr:
    "عطر شرقي دافئ يجمع بين الفانيلا والمسك والعنبر والورد والأخشاب.",

  notes: {
    top: ["Vanilla"],
    heart: ["Rose", "Amber"],
    base: ["Musk", "Wood", "Balsamic", "Sweet"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Vanilla",
    "Musk",
    "Amber",
    "Rose",
    "Wood",
    "Balsamic",
    "Sweet",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 2700 },
      { size: "100ml", price: 24000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "portrait",
  slug: "portrait",

  name: "Portrait",
  nameAr: "بورتريه",

  brand: "Nukhbat Al Oud",
  brandId: "nukhbat-al-oud",

  category: "arabian-perfumes",

  price: 28000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/nukhbat-al-oud/portrait/1.jpg",
    "/images/products/nukhbat-al-oud/portrait/2.jpg",
    "/images/products/nukhbat-al-oud/portrait/3.jpg",
  ],

  description:
    "An elegant fragrance combining citrus freshness with fruity amber accords over a luxurious leathery woody base.",

  descriptionAr:
    "عطر أنيق يجمع بين الحمضيات المنعشة والفاكهة والعنبر مع قاعدة جلدية خشبية فاخرة.",

  notes: {
    top: [
      "Bergamot",
      "Lemon",
      "Grapefruit",
      "Pink Pepper",
    ],
    heart: [
      "Watermelon",
      "Pineapple",
      "Amber",
    ],
    base: [
      "Patchouli",
      "Leather",
      "Vetiver",
    ],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Bergamot",
    "Lemon",
    "Grapefruit",
    "Pink Pepper",
    "Watermelon",
    "Pineapple",
    "Amber",
    "Patchouli",
    "Leather",
    "Vetiver",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 3000 },
      { size: "100ml", price: 28000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "lazward",
  slug: "lazward",

  name: "Lazward",
  nameAr: "لازورد",

  brand: "Nukhbat Al Oud",
  brandId: "nukhbat-al-oud",

  category: "arabian-perfumes",

  price: 25000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/nukhbat-al-oud/lazward/1.jpg",
    "/images/products/nukhbat-al-oud/lazward/2.jpg",
    "/images/products/nukhbat-al-oud/lazward/3.jpg",
  ],

  description:
    "A refined fragrance opening with bergamot and apple, followed by powdery orange blossom over a smooth vanilla base.",

  descriptionAr:
    "عطر راقٍ يبدأ بالبرغموت والتفاح، يتوسطه زهر البرتقال البودري الناعم، ويستقر على قاعدة من الفانيلا.",

  notes: {
    top: [
      "Bergamot",
      "Apple",
    ],
    heart: [
      "Orange Blossom",
    ],
    base: [
      "Vanilla",
    ],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Bergamot",
    "Apple",
    "Orange Blossom",
    "Vanilla",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 3000 },
      { size: "100ml", price: 25000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-tango",
  slug: "gissah-tango",

  name: "Gissah Tango",
  nameAr: "قصة تانغو",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-tango/1.jpg",
    "/images/products/gissah/gissah-tango/2.jpg",
    "/images/products/gissah/gissah-tango/3.jpg",
  ],

  description:
    "A luxurious tropical gourmand fragrance with citrus freshness blended with caramel, vanilla and amber.",

  descriptionAr:
    "عطر جورماند استوائي فاخر يجمع بين الحمضيات والفاكهة مع الكراميل والفانيلا والعنبر.",

  notes: {
    top: ["Citrus", "Fruity"],
    heart: ["White Flowers", "Terpenes"],
    base: ["Caramel", "Vanilla", "Amber", "Warm Spices"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Sweet",
    "Citrus",
    "Tropical",
    "Fruity",
    "Caramel",
    "Vanilla",
    "White Flowers",
    "Terpenes",
    "Amber",
    "Fresh Spices",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1500 },
      { size: "100ml", price: 27000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-voila",
  slug: "gissah-voila",

  name: "Gissah Voilà",
  nameAr: "قصة ڤوالا",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-voila/1.jpg",
    "/images/products/gissah/gissah-voila/2.jpg",
    "/images/products/gissah/gissah-voila/3.jpg",
  ],

  description:
    "A soft floral-musky fragrance with white flowers, honey and citrus wrapped in an elegant sweet accord.",

  descriptionAr:
    "عطر زهري مسكي ناعم يجمع بين الزهور البيضاء والعسل والحمضيات مع لمسة حلوة أنيقة.",

  notes: {
    top: ["Citrus"],
    heart: ["White Flowers", "Honey", "Floral"],
    base: ["Musk", "Sweet Notes", "Animalic"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "White Flowers",
    "Honey",
    "Sweet",
    "Soft",
    "Citrus",
    "Floral",
    "Musk",
    "Animalic",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1500 },
      { size: "100ml", price: 27000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-mavro",
  slug: "gissah-mavro",

  name: "Gissah Mavro",
  nameAr: "قصة مافرو",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-mavro/1.jpg",
    "/images/products/gissah/gissah-mavro/2.jpg",
    "/images/products/gissah/gissah-mavro/3.jpg",
  ],

  description:
    "An elegant woody aromatic fragrance with citrus freshness and warm spicy accords.",

  descriptionAr:
    "عطر خشبي أروماتيك أنيق يجمع بين الحمضيات والتوابل الدافئة والنفحات العطرية.",

  notes: {
    top: ["Citrus", "Fresh Spices"],
    heart: ["Aromatic", "Woody"],
    base: ["Sweet", "Metallic", "Warm Spices"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Citrus",
    "Warm Spices",
    "Woody",
    "Aromatic",
    "Sweet",
    "Fresh Spices",
    "Metallic",
    "Soft Spices",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1500 },
      { size: "100ml", price: 27000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-akoya",
  slug: "gissah-akoya",

  name: "Gissah Akoya",
  nameAr: "قصة أكويا",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-akoya/1.jpg",
    "/images/products/gissah/gissah-akoya/2.jpg",
    "/images/products/gissah/gissah-akoya/3.jpg",
  ],

  description:
    "A luxurious sweet woody fragrance blending caramel, citrus and white flowers with patchouli.",

  descriptionAr:
    "عطر خشبي حلو فاخر يجمع بين الكراميل والحمضيات والزهور البيضاء مع الباتشولي.",

  notes: {
    top: ["Citrus", "Fruity"],
    heart: ["White Flowers", "Patchouli"],
    base: ["Caramel", "Woody", "Warm Spices", "Balsamic"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Woody",
    "Sweet",
    "Fruity",
    "Caramel",
    "Citrus",
    "Patchouli",
    "Warm Spices",
    "White Flowers",
    "Lavender",
    "Balsamic",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1500 },
      { size: "100ml", price: 27000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-hudson-valley",
  slug: "gissah-hudson-valley",

  name: "Gissah Hudson Valley",
  nameAr: "قصة هدسون فالي",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-hudson-valley/1.jpg",
    "/images/products/gissah/gissah-hudson-valley/2.jpg",
    "/images/products/gissah/gissah-hudson-valley/3.jpg",
  ],

  description:
    "A luxurious oriental fragrance blending warm spices, amber and patchouli with elegant leather notes.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين التوابل الدافئة والعنبر والباتشولي مع لمسات جلدية أنيقة.",

  notes: {
    top: ["Warm Spices", "Fruity"],
    heart: ["Rose", "Amber", "Patchouli"],
    base: ["Woody", "Leather", "Metallic", "Soft Spices"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Warm Spices",
    "Fruity",
    "Amber",
    "Woody",
    "Rose",
    "Patchouli",
    "Metallic",
    "Soft Spices",
    "Leather",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1500 },
      { size: "100ml", price: 27000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-hudson-ii",
  slug: "gissah-hudson-ii",

  name: "Gissah Hudson II",
  nameAr: "قصة هدسون II",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-hudson-ii/1.jpg",
    "/images/products/gissah/gissah-hudson-ii/2.jpg",
    "/images/products/gissah/gissah-hudson-ii/3.jpg",
  ],

  description:
    "A rich musky oriental fragrance with fruity notes, amber and white flowers creating a luxurious signature.",

  descriptionAr:
    "عطر شرقي مسكي غني يجمع بين الفواكه والعنبر والزهور البيضاء ليمنح حضوراً فاخراً.",

  notes: {
    top: ["Fruity"],
    heart: ["White Flowers", "Amber", "Rose"],
    base: ["Musk", "Animalic", "Sweet", "Warm Spices", "Balsamic"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Musk",
    "Fruity",
    "Amber",
    "Animalic",
    "White Flowers",
    "Sweet",
    "Rose",
    "Soft",
    "Warm Spices",
    "Balsamic",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1500 },
      { size: "100ml", price: 27000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-helen",
  slug: "gissah-helen",

  name: "Gissah Helen",
  nameAr: "قصة هيلين",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-helen/1.jpg",
    "/images/products/gissah/gissah-helen/2.jpg",
    "/images/products/gissah/gissah-helen/3.jpg",
  ],

  description:
    "A refined aromatic fragrance combining lavender, fresh woods and amber with soft fruity accords.",

  descriptionAr:
    "عطر أروماتيك راقٍ يجمع بين الخزامى والأخشاب والعنبر مع لمسات فاكهية ناعمة ومنعشة.",

  notes: {
    top: [
      "Lavender",
      "Fresh Notes",
      "Fruity Notes",
    ],

    heart: [
      "Aromatic Notes",
      "Herbal Notes",
      "Fresh Spices",
    ],

    base: [
      "Woody Notes",
      "Amber",
      "Soft Spices",
    ],
  },

  family: "woody",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "Lavender",
    "Aromatic",
    "Fruity",
    "Woody",
    "Fresh",
    "Amber",
    "Fresh Spices",
    "Soft",
    "Herbal",
    "Soft Spices",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 8500},
      { size: "100ml", price: 75000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "gissah-hudson-amora",
  slug: "gissah-hudson-amora",

  name: "Gissah Hudson Amora",
  nameAr: "قصة هدسون أمورا",

  brand: "Gissah",
  brandId: "gissah",

  category: "arabian-perfumes",

  price: 27000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/gissah/gissah-hudson-amora/1.jpg",
    "/images/products/gissah/gissah-hudson-amora/2.jpg",
    "/images/products/gissah/gissah-hudson-amora/3.jpg",
  ],

  description:
    "A soft oriental fragrance blending white flowers, musk and amber with elegant citrus accords.",

  descriptionAr:
    "عطر شرقي ناعم يجمع بين الزهور البيضاء والمسك والعنبر مع لمسات حمضية أنيقة.",

  notes: {
    top: [
      "Citrus",
      "White Flowers",
    ],

    heart: [
      "Rose",
      "Amber",
    ],

    base: [
      "Musk",
      "Soft Notes",
      "Animalic",
    ],
  },

  family: "oriental",

  concentration: "eau-de-parfum",

  gender: "unisex",

  season: "all",

  longevity: 5,

  projection: 4,

  ingredients: [
    "White Flowers",
    "Musk",
    "Amber",
    "Soft",
    "Citrus",
    "Animalic",
    "Floral",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "10ml", price: 1500 },
      { size: "100ml", price: 27000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "arrogate-bakhur",
  slug: "arrogate-bakhur",

  name: "Arrogate Bakhur",
  nameAr: "أراغيت بخور",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/arrogate-bakhur/1.jpg",
    "/images/products/assaf/arrogate-bakhur/2.jpg",
    "/images/products/assaf/arrogate-bakhur/3.jpg",
  ],

  description:
    "A warm oriental fragrance blending oud, amber, leather and smoky aromatic notes with a luxurious floral touch.",

  descriptionAr:
    "عطر شرقي دافئ يجمع بين العود والعنبر والجلود مع لمسات وردية وأروماتك ومدخنة بطابع فاخر.",

  notes: {
    top: ["Warm Spicy", "Aromatic"],
    heart: ["Rose", "Leather", "Oud"],
    base: ["Amber", "Animalic", "Smoky"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Oud",
    "Amber",
    "Leather",
    "Rose",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},


{
  id: "arrogate-comete",
  slug: "arrogate-comete",

  name: "Arrogate Comète",
  nameAr: "أراغيت كوميت",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/arrogate-comete/1.jpg",
    "/images/products/assaf/arrogate-comete/2.jpg",
    "/images/products/assaf/arrogate-comete/3.jpg",
  ],

  description:
    "A warm spicy fragrance combining amber, citrus, tobacco, leather and woody notes.",

  descriptionAr:
    "عطر دافئ يجمع بين العنبر والحمضيات والتبغ والجلود والأخشاب مع لمسة ناعمة وحلوة.",

  notes: {
    top: ["Citrus", "Warm Spicy"],
    heart: ["Amber", "Rose", "Leather"],
    base: ["Woody", "Tobacco", "Sweet"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Amber",
    "Leather",
    "Tobacco",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},


{
  id: "dangerous-arrogate",
  slug: "dangerous-arrogate",

  name: "Dangerous Arrogate",
  nameAr: "دانجرس أراغيت",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,

  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/dangerous-arrogate/1.jpg",
    "/images/products/assaf/dangerous-arrogate/2.jpg",
    "/images/products/assaf/dangerous-arrogate/3.jpg",
  ],

  description:
    "A sweet fruity fragrance with vanilla, musk, amber and woody notes.",

  descriptionAr:
    "عطر حلو وفاكهي يجمع بين الفانيلا والمسك والعنبر والأخشاب مع لمسات منعشة.",

  notes: {
    top: ["Citrus", "Fruity"],
    heart: ["White Floral", "Sweet"],
    base: ["Vanilla", "Musk", "Amber"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Vanilla",
    "Musk",
    "Amber",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "lip-stick",
  slug: "lip-stick",

  name: "Lip Stick",
  nameAr: "ليب ستيك",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/lip-stick/1.jpg",
    "/images/products/assaf/lip-stick/2.jpg",
    "/images/products/assaf/lip-stick/3.jpg",
  ],

  description:
    "A sweet fruity floral fragrance opening with apple, pear, cinnamon and pink pepper, followed by white flowers and a warm vanilla base.",

  descriptionAr:
    "عطر حلو وفاكهي زهري يبدأ بالتفاح والكمثرى والقرفة والفلفل الوردي، ثم قلب من الزهور البيضاء وقاعدة دافئة من الفانيلا والأخشاب.",

  notes: {
    top: ["Apple", "Pear", "Cinnamon", "Pink Pepper"],
    heart: ["Orange Blossom", "Rose", "Jasmine", "White Flowers", "Peach", "Apricot"],
    base: ["Vanilla", "Patchouli", "Guaiac Wood", "Vetiver"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Vanilla",
    "Patchouli",
    "White Floral",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},


{
  id: "rick",
  slug: "rick",

  name: "Rick",
  nameAr: "ريك",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,

  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/rick/1.jpg",
    "/images/products/assaf/rick/2.jpg",
    "/images/products/assaf/rick/3.jpg",
  ],

  description:
    "A fresh floral woody fragrance with musk, fruity and aromatic notes.",

  descriptionAr:
    "عطر منعش زهري وخشبي يجمع بين المسك والفواكه والزهور مع لمسات عشبية وتوابل دافئة.",

  notes: {
    top: ["Fresh", "Fruity"],
    heart: ["Rose", "White Floral", "Floral"],
    base: ["Musk", "Woody", "Herbal"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Musk",
    "Rose",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},


{
  id: "frankel-black-elixir",
  slug: "frankel-black-elixir",

  name: "Frankel Black Elixir",
  nameAr: "فرانكل بلاك إليكسير",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,

  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/frankel-black-elixir/1.jpg",
    "/images/products/assaf/frankel-black-elixir/2.jpg",
    "/images/products/assaf/frankel-black-elixir/3.jpg",
  ],

  description:
    "A deep woody aromatic fragrance with vanilla, amber, violet and earthy notes.",

  descriptionAr:
    "عطر خشبي وأروماتك عميق يجمع بين الحمضيات والفانيلا والعنبر والبنفسج ولمسات ترابية.",

  notes: {
    top: ["Citrus", "Aromatic"],
    heart: ["Violet", "Amber"],
    base: ["Vanilla", "Woody", "Earthy"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "men",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Vanilla",
    "Amber",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},


{
  id: "frankel-silver-elixir",
  slug: "frankel-silver-elixir",

  name: "Frankel Silver Elixir",
  nameAr: "فرانكل سيلفر إليكسير",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,

  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/frankel-silver-elixir/1.jpg",
    "/images/products/assaf/frankel-silver-elixir/2.jpg",
    "/images/products/assaf/frankel-silver-elixir/3.jpg",
  ],

  description:
    "A fresh aromatic fragrance with citrus, musk, white flowers and woody notes.",

  descriptionAr:
    "عطر منعش وأروماتك يجمع بين الحمضيات والمسك والزهور البيضاء والأخشاب.",

  notes: {
    top: ["Citrus", "Fresh"],
    heart: ["White Floral", "Aromatic"],
    base: ["Musk", "Woody"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Musk",
    "Citrus",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "king-enable",
  slug: "king-enable",

  name: "King Enable",
  nameAr: "كينغ إنابل",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,

  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/king-enable/1.jpg",
    "/images/products/assaf/king-enable/2.jpg",
    "/images/products/assaf/king-enable/3.jpg",
  ],

  description:
    "A warm sweet aromatic fragrance blending vanilla, lavender, tobacco, amber and patchouli.",

  descriptionAr:
    "عطر دافئ وحلو يجمع بين الفانيلا والخزامى والتبغ والعنبر والباتشولي بطابع أروماتك.",

  notes: {
    top: ["Lavender", "Fresh Spicy"],
    heart: ["Tobacco", "Aromatic"],
    base: ["Vanilla", "Amber", "Patchouli", "Woody"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "men",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Vanilla",
    "Tobacco",
    "Amber",
    "Patchouli",
    "Lavender",
  ],

  sizes: ["10ml", "200ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "200ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},


{
  id: "im-here-enable",
  slug: "im-here-enable",

  name: "I'm Here Enable",
  nameAr: "I'm Here إنابل",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,

  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/im-here-enable/1.jpg",
    "/images/products/assaf/im-here-enable/2.jpg",
    "/images/products/assaf/im-here-enable/3.jpg",
  ],

  description:
    "A modern fragrance combining citrus, white floral, woody and vanilla accords.",

  descriptionAr:
    "عطر عصري يجمع بين الحمضيات والزهور البيضاء والأخشاب والفانيلا مع لمسات مسكية وحلوة.",

  notes: {
    top: ["Citrus", "Fresh Spicy"],
    heart: ["White Floral", "Woody"],
    base: ["Vanilla", "Musk", "Animalic", "Sweet"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Citrus",
    "White Floral",
    "Woody",
    "Aromatic",
    "Vanilla",
    "Musk",
  ],

  sizes: ["10ml", "200ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "200ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},


{
  id: "charlotte",
  slug: "charlotte",

  name: "Charlotte",
  nameAr: "شارلوت",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,

  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/charlotte/1.jpg",
    "/images/products/assaf/charlotte/2.jpg",
    "/images/products/assaf/charlotte/3.jpg",
  ],

  description:
    "A fruity floral fragrance opening with grapes and mandarin, followed by jasmine, orange blossom and a soft musk vanilla base.",

  descriptionAr:
    "عطر زهري وفاكهي يبدأ بالعنب والماندرين، ثم الياسمين وزهرة البرتقال مع قاعدة من المسك والعنبر وخشب الصندل والفانيلا.",

  notes: {
    top: ["Grapes", "Mandarin"],
    heart: ["Jasmine", "Orange Blossom"],
    base: ["Musk", "Amber", "Sandalwood", "Vanilla"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Grapes",
    "Mandarin",
    "Jasmine",
    "Orange Blossom",
    "Musk",
    "Amber",
    "Sandalwood",
    "Vanilla",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "200ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "blush",
  slug: "blush",

  name: "Blush",
  nameAr: "بلش",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/blush/1.jpg",
    "/images/products/assaf/blush/2.jpg",
    "/images/products/assaf/blush/3.jpg",
  ],

  description:
    "A delicate floral fragrance with mandarin, ginger, peony and sandalwood.",

  descriptionAr:
    "عطر زهري ناعم يجمع بين اليوسفي والزنجبيل والفاوانيا وخشب الصندل مع قاعدة مسكية دافئة.",

  notes: {
    top: ["Mandarin", "Ginger"],
    heart: ["Peony", "Orange Blossom", "Rose"],
    base: ["Musk", "Sandalwood"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Mandarin",
    "Ginger",
    "Peony",
    "Orange Blossom",
    "Rose",
    "Musk",
    "Sandalwood",
  ],

  sizes: ["10ml", "200ml"],

  purchaseOptions: {
    fullBottle: [{ size: "200ml", price: 14500 }],
    decants: [{ size: "10ml", price: 900 }],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "noble",
  slug: "noble",

  name: "Noble",
  nameAr: "نوبل",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/noble/1.jpg",
    "/images/products/assaf/noble/2.jpg",
    "/images/products/assaf/noble/3.jpg",
  ],

  description:
    "A luxurious floral vanilla fragrance with iris and jasmine.",

  descriptionAr:
    "عطر فاخر يجمع بين السوسن والياسمين مع لمسة فانيليا ناعمة وأنيقة.",

  notes: {
    top: ["Iris"],
    heart: ["Jasmine"],
    base: ["Vanilla"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Iris",
    "Jasmine",
    "Vanilla",
  ],

  sizes: ["10ml", "200ml"],

  purchaseOptions: {
    fullBottle: [{ size: "200ml", price: 14500 }],
    decants: [{ size: "10ml", price: 900 }],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "gris-flora",
  slug: "gris-flora",

  name: "Gris Flora",
  nameAr: "غري فلورا",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/gris-flora/1.jpg",
    "/images/products/assaf/gris-flora/2.jpg",
    "/images/products/assaf/gris-flora/3.jpg",
  ],

  description:
    "A warm woody floral fragrance enriched with vanilla, amber and rose.",

  descriptionAr:
    "عطر دافئ يجمع بين الأخشاب والزهور البيضاء والفانيليا والعنبر والورد مع لمسة بودرية ومدخنة.",

  notes: {
    top: ["Warm Spices"],
    heart: ["White Flowers", "Rose"],
    base: ["Vanilla", "Amber", "Woody", "Balsamic"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Vanilla",
    "Amber",
    "Rose",
    "White Flowers",
    "Woody Notes",
  ],

  sizes: ["10ml", "200ml"],

  purchaseOptions: {
    fullBottle: [{ size: "200ml", price: 14500 }],
    decants: [{ size: "10ml", price: 900 }],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "wild-colt",
  slug: "wild-colt",

  name: "Wild Colt",
  nameAr: "وايلد كولت",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/wild-colt/1.jpg",
    "/images/products/assaf/wild-colt/2.jpg",
    "/images/products/assaf/wild-colt/3.jpg",
  ],

  description:
    "A bold woody leather fragrance with amber, patchouli and warm spices.",

  descriptionAr:
    "عطر قوي يجمع بين العنبر والجلود والأخشاب والباتشولي مع لمسات حمضية وتوابل دافئة.",

  notes: {
    top: ["Citrus", "Warm Spices"],
    heart: ["Leather", "Woody"],
    base: ["Amber", "Patchouli", "Musk"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "men",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Amber",
    "Leather",
    "Woody Notes",
    "Patchouli",
    "Musk",
  ],

  sizes: ["10ml", "200ml"],

  purchaseOptions: {
    fullBottle: [{ size: "200ml", price: 14500 }],
    decants: [{ size: "10ml", price: 900 }],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "wild-colt-smoky",
  slug: "wild-colt-smoky",

  name: "Wild Colt Smoky",
  nameAr: "وايلد كولت سموكي",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/wild-colt-smoky/1.jpg",
    "/images/products/assaf/wild-colt-smoky/2.jpg",
    "/images/products/assaf/wild-colt-smoky/3.jpg",
  ],

  description:
    "A luxurious smoky woody fragrance combining saffron, leather, amber and musk with an elegant oriental character.",

  descriptionAr:
    "عطر خشبي مدخن فاخر يجمع بين الزعفران والبرتقال والزنجبيل والهيل، مع قلب من العنبر وخشب الأرز والباتشولي، وقاعدة من الجلود ونجيل الهند والمسك.",

  notes: {
    top: ["Saffron", "Orange", "Ginger", "Cardamom"],
    heart: ["Amber", "Cedarwood", "Patchouli"],
    base: ["Leather", "Vetiver", "Musk"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Saffron",
    "Orange",
    "Ginger",
    "Cardamom",
    "Amber",
    "Cedarwood",
    "Patchouli",
    "Leather",
    "Vetiver",
    "Musk",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "crown-spirit",
  slug: "crown-spirit",

  name: "Crown Spirit",
  nameAr: "كراون سبيريت",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/crown-spirit/1.jpg",
    "/images/products/assaf/crown-spirit/2.jpg",
    "/images/products/assaf/crown-spirit/3.jpg",
  ],

  description:
    "An elegant woody fragrance with citrus freshness blended with musk, rose, patchouli and amber.",

  descriptionAr:
    "عطر خشبي أنيق يجمع بين الحمضيات والورد والمسك والباتشولي والعنبر مع لمسة زهرية ناعمة.",

  notes: {
    top: ["Citrus"],
    heart: ["Rose", "White Floral"],
    base: ["Musk", "Patchouli", "Amber", "Woody Notes"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Citrus",
    "Rose",
    "White Floral",
    "Musk",
    "Patchouli",
    "Amber",
    "Woody Notes",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "lady",
  slug: "lady",

  name: "Lady",
  nameAr: "ليدي",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/lady/1.jpg",
    "/images/products/assaf/lady/2.jpg",
    "/images/products/assaf/lady/3.jpg",
  ],

  description:
    "A luxurious feminine fragrance combining orange blossom, rose and cashmere wood with a soft elegant finish.",

  descriptionAr:
    "عطر نسائي فاخر يجمع بين البرتقال والورد وخشب الكشمير ليمنح رائحة ناعمة وأنيقة تدوم طويلاً.",

  notes: {
    top: ["Orange"],
    heart: ["Rose"],
    base: ["Cashmere Wood"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 5,
  projection: 3,

  ingredients: [
    "Orange",
    "Rose",
    "Cashmere Wood",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "gris-eric",
  slug: "gris-eric",

  name: "Gris Eric",
  nameAr: "غري إريك",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/gris-eric/1.jpg",
    "/images/products/assaf/gris-eric/2.jpg",
    "/images/products/assaf/gris-eric/3.jpg",
  ],

  description:
    "A refined woody floral fragrance with rose, patchouli, amber and warm spicy accords.",

  descriptionAr:
    "عطر خشبي راقٍ يجمع بين الورد والباتشولي والعنبر مع لمسات بودرية وتوابل دافئة وطابع ترابي أنيق.",

  notes: {
    top: ["Warm Spices"],
    heart: ["Rose", "Floral"],
    base: ["Woody Notes", "Patchouli", "Amber", "Moss"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Rose",
    "Patchouli",
    "Amber",
    "Woody Notes",
    "Moss",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "wild-colt-tobacco",
  slug: "wild-colt-tobacco",

  name: "Wild Colt Tobacco",
  nameAr: "وايلد كولت توباكو",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 14500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/wild-colt-tobacco/1.jpg",
    "/images/products/assaf/wild-colt-tobacco/2.jpg",
    "/images/products/assaf/wild-colt-tobacco/3.jpg",
  ],

  description:
    "A luxurious powdery fragrance blending tobacco accords with white flowers, violet and woody notes.",

  descriptionAr:
    "عطر بودري فاخر يجمع بين نفحات التبغ والزهور البيضاء والبنفسج مع لمسات خشبية وحلوة ومسكية.",

  notes: {
    top: ["Powdery", "White Floral"],
    heart: ["Violet", "Floral"],
    base: ["Woody", "Musk", "Sweet", "Citrus"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "White Flowers",
    "Violet",
    "Woody Notes",
    "Musk",
    "Citrus",
  ],

  sizes: ["10ml", "100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 14500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "wild-pegasus",
  slug: "wild-pegasus",

  name: "Wild Pegasus",
  nameAr: "وايلد بيغاسوس",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 9200,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/wild-pegasus/1.jpg",
    "/images/products/assaf/wild-pegasus/2.jpg",
    "/images/products/assaf/wild-pegasus/3.jpg",
  ],

  description:
    "A soft floral fragrance with citrus, rose and sweet white floral accords.",

  descriptionAr:
    "عطر زهري ناعم يجمع بين الحمضيات والورد والزهور البيضاء مع لمسة حلوة ومنعشة.",

  notes: {
    top: ["Citrus"],
    heart: ["White Floral", "Rose"],
    base: ["Sweet Floral"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "White Flowers",
    "Rose",
    "Citrus",
  ],

  sizes: ["100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 9200 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "miss-sakura",
  slug: "miss-sakura",

  name: "Miss Sakura",
  nameAr: "ميس ساكورا",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 8600,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/miss-sakura/1.jpg",
    "/images/products/assaf/miss-sakura/2.jpg",
    "/images/products/assaf/miss-sakura/3.jpg",
  ],

  description:
    "A delicate floral fragrance with fresh cherry, fruity accords and white flowers.",

  descriptionAr:
    "عطر زهري منعش يجمع بين الكرز والفواكه والزهور البيضاء ليمنح رائحة أنثوية ناعمة ومشرقة.",

  notes: {
    top: ["Cherry", "Fresh"],
    heart: ["White Floral", "Floral"],
    base: ["Soft Fruity"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "Cherry",
    "White Flowers",
    "Floral Notes",
    "Fruity Notes",
  ],

  sizes: ["100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 8600 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "lady-supreme",
  slug: "lady-supreme",

  name: "Lady Supreme",
  nameAr: "ليدي سوبريم",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 7800,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/lady-supreme/1.jpg",
    "/images/products/assaf/lady-supreme/2.jpg",
    "/images/products/assaf/lady-supreme/3.jpg",
  ],

  description:
    "A soft elegant fragrance with floral notes, clean musk and smooth woody accords.",

  descriptionAr:
    "عطر هادئ وأنيق يجمع بين النعومة الزهرية والمسك النظيف مع لمسات خفيفة من الأخشاب الناعمة.",

  notes: {
    top: ["Soft Floral"],
    heart: ["Musk"],
    base: ["Woody Notes"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "Floral Notes",
    "White Musk",
    "Woody Notes",
  ],

  sizes: ["100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 7800 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "lady-supreme",
  slug: "lady-supreme",

  name: "Lady Supreme",
  nameAr: "ليدي سوبريم",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 7800,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/lady-supreme/1.jpg",
    "/images/products/assaf/lady-supreme/2.jpg",
    "/images/products/assaf/lady-supreme/3.jpg",
  ],

  description:
    "A soft elegant fragrance with floral notes, clean musk and smooth woody accords.",

  descriptionAr:
    "عطر هادئ وأنيق يجمع بين النعومة الزهرية والمسك النظيف مع لمسات خفيفة من الأخشاب الناعمة.",

  notes: {
    top: ["Soft Floral"],
    heart: ["Musk"],
    base: ["Woody Notes"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "Floral Notes",
    "White Musk",
    "Woody Notes",
  ],

  sizes: ["100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 7800 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "frankel-silver",
  slug: "frankel-silver",

  name: "Frankel Silver",
  nameAr: "فرانكل سيلفر",

  brand: "Assaf",
  brandId: "assaf",

  category: "dupes",

  price: 7800,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/assaf/frankel-silver/1.jpg",
    "/images/products/assaf/frankel-silver/2.jpg",
    "/images/products/assaf/frankel-silver/3.jpg",
  ],

  description:
    "A fresh aromatic fragrance with citrus, herbs, musk and elegant woody accords.",

  descriptionAr:
    "عطر منعش وأروماتك يجمع بين الحمضيات والأعشاب والمسك والزهور البيضاء مع قاعدة خشبية أنيقة.",

  notes: {
    top: ["Citrus", "Fresh"],
    heart: ["Herbal", "White Floral", "Aromatic"],
    base: ["Musk", "Woody Notes"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "Citrus",
    "Herbal Notes",
    "White Floral",
    "Musk",
    "Woody Notes",
  ],

  sizes: ["100ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "100ml", price: 7800 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "black-diamond",
  slug: "black-diamond",

  name: "Black Diamond",
  nameAr: "بلاك دايموند",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/black-diamond/1.jpg",
    "/images/products/ibraq/black-diamond/2.jpg",
    "/images/products/ibraq/black-diamond/3.jpg",
  ],

  description:
    "A powerful smoky oriental fragrance combining oud, leather, amber and fruity accords with a warm aromatic character.",

  descriptionAr:
    "عطر شرقي قوي ومدخن يجمع بين العود والجلود والعنبر مع نفحات فاكهية وبحرية ولمسات أروماتك وتوابل دافئة.",

  notes: {
    top: ["Fruity Notes", "Marine Notes", "Aromatic"],
    heart: ["Oud", "Leather", "Amber"],
    base: ["Smoky Notes", "Balsamic", "Warm Spices", "Animalic"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "men",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Oud",
    "Leather",
    "Amber",
    "Fruity Notes",
    "Smoky Notes",
    "Marine Notes",
  ],

  sizes: ["10ml", "150ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "150ml", price: 8500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "sapphire-leather",
  slug: "sapphire-leather",

  name: "Sapphire Leather",
  nameAr: "سافاير ليذر",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/sapphire-leather/1.jpg",
    "/images/products/ibraq/sapphire-leather/2.jpg",
    "/images/products/ibraq/sapphire-leather/3.jpg",
  ],

  description:
    "A dark leather fragrance with smoky, herbal and woody accords.",

  descriptionAr:
    "عطر جلدي داكن يجمع بين الجلود والنفحات المدخنة والعشبية والخشبية بطابع قوي وفاخر.",

  notes: {
    top: ["Herbal Notes"],
    heart: ["Leather", "Smoky Notes"],
    base: ["Woody Notes", "Animalic Notes"],
  },

  family: "leather",
  concentration: "eau-de-parfum",
  gender: "men",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Leather",
    "Smoky Notes",
    "Herbal Notes",
    "Woody Notes",
  ],

  sizes: ["10ml", "150ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "150ml", price: 8500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "pink-diamond",
  slug: "pink-diamond",

  name: "Pink Diamond",
  nameAr: "بينك دايموند",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/pink-diamond/1.jpg",
    "/images/products/ibraq/pink-diamond/2.jpg",
    "/images/products/ibraq/pink-diamond/3.jpg",
  ],

  description:
    "An elegant floral musky fragrance enriched with amber, citrus and soft spicy notes.",

  descriptionAr:
    "عطر زهري مسكي أنيق يجمع بين الزهور البيضاء والورد والمسك والعنبر مع لمسات حمضية وتوابل ناعمة.",

  notes: {
    top: ["Citrus", "Soft Spices"],
    heart: ["White Floral", "Rose"],
    base: ["Musk", "Amber", "Animalic"],
  },

  family: "floral",
  concentration: "eau-de-parfum",
  gender: "women",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "White Flowers",
    "Rose",
    "Musk",
    "Amber",
    "Citrus",
    "Soft Spices",
  ],

  sizes: ["10ml", "150ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "150ml", price: 8500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "black-carbon",
  slug: "black-carbon",

  name: "Black Carbon",
  nameAr: "بلاك كاربون",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/black-carbon/1.jpg",
    "/images/products/ibraq/black-carbon/2.jpg",
    "/images/products/ibraq/black-carbon/3.jpg",
  ],

  description:
    "A sophisticated woody oriental fragrance with rose, amber, patchouli and balsamic accords.",

  descriptionAr:
    "عطر شرقي خشبي يجمع بين الورد والعنبر والباتشولي والحمضيات مع لمسات بلسمية وتوابل دافئة.",

  notes: {
    top: ["Citrus", "Fresh Spices"],
    heart: ["Rose", "Amber"],
    base: ["Patchouli", "Woody Notes", "Balsamic"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Rose",
    "Amber",
    "Patchouli",
    "Citrus",
    "Woody Notes",
    "Balsamic Notes",
  ],

  sizes: ["10ml", "150ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "150ml", price: 8500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "nude-coral-diamond",
  slug: "nude-coral-diamond",

  name: "Nude Coral Diamond",
  nameAr: "نود كورال دايموند",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/nude-coral-diamond/1.jpg",
    "/images/products/ibraq/nude-coral-diamond/2.jpg",
    "/images/products/ibraq/nude-coral-diamond/3.jpg",
  ],

  description:
    "A warm gourmand fragrance blending vanilla, coconut, amber and white floral notes.",

  descriptionAr:
    "عطر غورماند دافئ يجمع بين الفانيلا وجوز الهند والعنبر والزهور البيضاء مع لمسات خشبية وحلوة وناعمة.",

  notes: {
    top: ["Citrus", "Coconut"],
    heart: ["White Floral"],
    base: ["Vanilla", "Amber", "Woody Notes", "Sweet Notes"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "men",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Vanilla",
    "Amber",
    "White Flowers",
    "Coconut",
    "Woody Notes",
  ],

  sizes: ["10ml", "150ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "150ml", price: 8500 },
    ],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "manta-lthr",
  slug: "manta-lthr",

  name: "Manta LTHR",
  nameAr: "مانتا ليذر",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/manta-lthr/1.jpg",
    "/images/products/ibraq/manta-lthr/2.jpg",
    "/images/products/ibraq/manta-lthr/3.jpg",
  ],

  description:
    "A luxurious oriental leather fragrance with fruity accords, vanilla, oud and amber.",

  descriptionAr:
    "عطر شرقي جلدي فاخر يجمع بين الفواكه والعنبر والفانيلا والعود والجلود مع طابع دافئ وناعم.",

  notes: {
    top: ["Fruity Notes"],
    heart: ["Amber", "Warm Spices"],
    base: ["Vanilla", "Oud", "Leather", "Soft Musk"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Fruity Notes",
    "Amber",
    "Vanilla",
    "Oud",
    "Leather",
  ],

  sizes: ["75ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "75ml", price: 8500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "vicuna-lthr",
  slug: "vicuna-lthr",

  name: "Vicuna LTHR",
  nameAr: "فيكونا ليذر",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/vicuna-lthr/1.jpg",
    "/images/products/ibraq/vicuna-lthr/2.jpg",
    "/images/products/ibraq/vicuna-lthr/3.jpg",
  ],

  description:
    "A warm woody amber fragrance enriched with cinnamon, balsamic accords and soft sweetness.",

  descriptionAr:
    "عطر خشبي دافئ يجمع بين العنبر والقرفة والنفحات الأروماتك والبلسمية مع لمسات حلوة ومنعشة وناعمة.",

  notes: {
    top: ["Fresh Spices"],
    heart: ["Cinnamon", "Aromatic"],
    base: ["Amber", "Woody Notes", "Balsamic", "Sweet Notes"],
  },

  family: "woody",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Amber",
    "Cinnamon",
    "Woody Notes",
    "Aromatic Notes",
    "Balsamic Notes",
  ],

  sizes: ["75ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "75ml", price: 8500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "malayan-lthr",
  slug: "malayan-lthr",

  name: "Malayan LTHR",
  nameAr: "مالايان ليذر",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 8500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/malayan-lthr/1.jpg",
    "/images/products/ibraq/malayan-lthr/2.jpg",
    "/images/products/ibraq/malayan-lthr/3.jpg",
  ],

  description:
    "A luxurious oriental leather fragrance blending raspberry, saffron, oud, sandalwood and amber.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين توت العليق والليتشي والزعفران والورد والبنفسج مع قاعدة غنية من العود والجلود وخشب الصندل والعنبر والباتشولي.",

  notes: {
    top: ["Raspberry", "Lychee", "Red Berries", "Red Currant"],
    heart: ["Saffron", "Rose", "Violet", "Incense"],
    base: ["Oud", "Leather", "Sandalwood", "Amber", "Patchouli"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Raspberry",
    "Lychee",
    "Saffron",
    "Rose",
    "Violet",
    "Incense",
    "Oud",
    "Leather",
    "Sandalwood",
    "Amber",
    "Patchouli",
  ],

  sizes: ["75ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "75ml", price: 8500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},

{
  id: "honey-musc",
  slug: "honey-musc",

  name: "Honey Musc",
  nameAr: "هوني مسك",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 12500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/honey-musc/1.jpg",
    "/images/products/ibraq/honey-musc/2.jpg",
    "/images/products/ibraq/honey-musc/3.jpg",
  ],

  description:
    "A sweet musky fragrance combining honey, vanilla, tobacco and floral notes.",

  descriptionAr:
    "عطر مسكي حلو يجمع بين العسل والفانيلا والتبغ مع لمسات زهرية وحمضية دافئة وناعمة.",

  notes: {
    top: ["Citrus"],
    heart: ["Honey", "Floral Notes"],
    base: ["Vanilla", "Musk", "Tobacco", "Warm Spices"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Honey",
    "Vanilla",
    "White Musk",
    "Tobacco",
    "Floral Notes",
    "Citrus",
  ],

  sizes: ["75ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "75ml", price: 12500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "rose-tobacco",
  slug: "rose-tobacco",

  name: "Rose Tobacco",
  nameAr: "روز توباكو",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 15000,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/rose-tobacco/1.jpg",
    "/images/products/ibraq/rose-tobacco/2.jpg",
    "/images/products/ibraq/rose-tobacco/3.jpg",
  ],

  description:
    "An oriental tobacco fragrance with rose, vanilla, amber and leather accords.",

  descriptionAr:
    "عطر شرقي يجمع بين التبغ والورد والفانيلا والعنبر مع لمسات جلدية ومدخنة وبلسمية ناعمة.",

  notes: {
    top: ["Tobacco", "Warm Spices"],
    heart: ["Rose"],
    base: ["Vanilla", "Amber", "Leather", "Balsamic", "Smoky Notes"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 5,

  ingredients: [
    "Tobacco",
    "Rose",
    "Vanilla",
    "Amber",
    "Leather",
  ],

  sizes: ["75ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "75ml", price: 15000 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "touq",
  slug: "touq",

  name: "Touq",
  nameAr: "توق",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 13500,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/touq/1.jpg",
    "/images/products/ibraq/touq/2.jpg",
    "/images/products/ibraq/touq/3.jpg",
  ],

  description:
    "A rich oriental fragrance with vanilla, honey, oud, musk and patchouli.",

  descriptionAr:
    "عطر شرقي فاخر يجمع بين الفانيلا والعسل مع الهيل والقرنفل والتوابل الدافئة، ويستقر على قاعدة من العود والمسك والباتشولي.",

  notes: {
    top: ["Vanilla", "Honey"],
    heart: ["Cardamom", "Clove", "Warm Spices"],
    base: ["Oud", "Musk", "Patchouli"],
  },

  family: "oriental",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 5,
  projection: 4,

  ingredients: [
    "Vanilla",
    "Honey",
    "Cardamom",
    "Clove",
    "Oud",
    "Musk",
    "Patchouli",
  ],

  sizes: ["50ml"],

  purchaseOptions: {
    fullBottle: [
      { size: "50ml", price: 13500 },
    ],
    decants: [],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
{
  id: "french-tobacco",
  slug: "french-tobacco",

  name: "French Tobacco",
  nameAr: "فرنش توباكو",

  brand: "Ibraq",
  brandId: "ibraq",

  category: "dupes",

  price: 900,
  rating: 5,
  reviewCount: 0,

  inStock: true,
  stockCount: 999,

  images: [
    "/images/products/ibraq/french-tobacco/1.jpg",
    "/images/products/ibraq/french-tobacco/2.jpg",
    "/images/products/ibraq/french-tobacco/3.jpg",
  ],

  description:
    "A fresh aromatic fragrance with citrus, fruity and vibrant accords.",

  descriptionAr:
    "عطر منعش يجمع بين الحمضيات والنفحات الفاكهية والأروماتك مع لمسة منعشة تدوم طوال اليوم.",

  notes: {
    top: ["Citrus"],
    heart: ["Fresh Notes", "Fruity Notes"],
    base: ["Aromatic Notes"],
  },

  family: "fresh",
  concentration: "eau-de-parfum",
  gender: "unisex",
  season: "all",

  longevity: 4,
  projection: 3,

  ingredients: [
    "Citrus",
    "Fresh Notes",
    "Fruity Notes",
    "Aromatic Notes",
  ],

  sizes: ["10ml"],

  purchaseOptions: {
    fullBottle: [],
    decants: [
      { size: "10ml", price: 900 },
    ],
  },

  countryOfOrigin: "Saudi Arabia",

  reviews: [],
},
];
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByBrand(brandId: string): Product[] {
  return products.filter((p) => p.brandId === brandId);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();

  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.nameAr.includes(query) ||
      p.brand.toLowerCase().includes(q) ||
      p.brandId.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.brandId === product.brandId ||
          p.category === product.category)
    )
    .slice(0, limit);
}

export function getFrequentlyBoughtTogether(
  product: Product,
  limit = 3
): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.brandId === product.brandId
    )
    .slice(0, limit);
}