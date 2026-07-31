export type Locale = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export type CategoryId =
  | 'dupes'
  | 'niche-perfumes'
  | 'ultra-niche'
  | 'musk-collection'
  | 'arabian-perfumes'
  | 'oud'
  | 'bakhoor'
  | 'gift-sets';

export type Gender = 'men' | 'women' | 'unisex';
export type Season = 'spring' | 'summer' | 'autumn' | 'winter' | 'all';
export type Concentration =
  | 'parfum'
  | 'eau-de-parfum'
  | 'eau-de-toilette'
  | 'eau-de-cologne'
  | 'extrait';
   'pure-oil'
export type FragranceFamily =
  | 'woody'
  | 'oriental'
  | 'floral'
  | 'amber'
  | 'leather'
  | 'chypre'
  | 'gourmand'
  | 'fresh'
  | 'smoky'
  | 'spicy';

export interface Notes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface BottleSize {
  size: string;
  price: number;
}

export interface DecantSize {
  size: string;
  price: number;
}

export interface PurchaseOptions {
  fullBottle: BottleSize[];
  decants: DecantSize[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  brand: string;
  brandId: string;
  category: CategoryId;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  images: string[];
  description: string;
  descriptionAr: string;
  notes: Notes;
  family: FragranceFamily;
  concentration: Concentration;
  gender: Gender;
  season: Season;
  longevity: number;
  projection: number;
  ingredients: string[];
  sizes: string[];
  purchaseOptions: PurchaseOptions;
  countryOfOrigin: string;
  bestseller?: boolean;
  isNew?: boolean;
  reviews: Review[];
}

export interface Category {
  id: CategoryId;
  name: string;
  nameAr: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Brand {
  id: string;
  slug?: string;
  name: string;
  nameAr?: string;
  country: string;

  image: string;
  category: string;

  logo?: string;
  categoryId?: string;
  placeholder?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  purchaseType: 'full-bottle' | 'decant';
  price: number;
  giftWrap: boolean;
}

export interface SavedItem {
  productId: string;
  size: string;
  purchaseType: 'full-bottle' | 'decant';
  price: number;
}
