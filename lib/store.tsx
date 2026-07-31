'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import type { Locale, Theme, CartItem, SavedItem } from '@/lib/types';
import { products } from '@/lib/products';

interface StoreContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  cart: CartItem[];
  addToCart: (productId: string, quantity?: number, size?: string, purchaseType?: 'full-bottle' | 'decant', price?: number) => void;
  removeFromCart: (productId: string, size: string, purchaseType: string) => void;
  updateQuantity: (productId: string, size: string, purchaseType: string, quantity: number) => void;
  saveForLater: (productId: string, size: string, purchaseType: string) => void;
  moveToCart: (productId: string, size: string, purchaseType: string, price: number) => void;
  savedItems: SavedItem[];
  removeFromSaved: (productId: string) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  compare: string[];
  toggleCompare: (productId: string) => void;
  recentlyViewed: string[];
  addRecentlyViewed: (productId: string) => void;
  giftWrap: boolean;
  setGiftWrap: (v: boolean) => void;
  coupon: string;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTax: number;
  cartShipping: number;
  cartGiftWrapFee: number;
  cartTotal: number;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
}

const StoreContext = createContext<StoreContextValue | null>(null);

const COUPONS: Record<string, number> = {
  LUMIERE10: 0.1,
  WELCOME15: 0.15,
  GOLD20: 0.2,
};

const GIFT_WRAP_FEE = 15;
const FREE_SHIPPING_THRESHOLD = 200;
const STANDARD_SHIPPING = 12;
const TAX_RATE = 0.05;

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ar');
  const [theme, setTheme] = useState<Theme>('dark');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [giftWrap, setGiftWrap] = useState(false);
  const [coupon, setCoupon] = useState<string>('');
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const s = localStorage.getItem('lumiere-store');
      if (s) {
        const d = JSON.parse(s);
        if (d.locale) setLocaleState(d.locale);
        if (d.theme) setTheme(d.theme);
        if (d.cart) setCart(d.cart);
        if (d.savedItems) setSavedItems(d.savedItems);
        if (d.wishlist) setWishlist(d.wishlist);
        if (d.compare) setCompare(d.compare);
        if (d.recentlyViewed) setRecentlyViewed(d.recentlyViewed);
        if (typeof d.giftWrap === 'boolean') setGiftWrap(d.giftWrap);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    root.lang = locale;
    root.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [theme, locale, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(
      'lumiere-store',
      JSON.stringify({ locale, theme, cart, savedItems, wishlist, compare, recentlyViewed, giftWrap }),
    );
  }, [locale, theme, cart, savedItems, wishlist, compare, recentlyViewed, giftWrap, mounted]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  );

  const addToCart = useCallback(
    (productId: string, quantity = 1, size?: string, purchaseType: 'full-bottle' | 'decant' = 'full-bottle', price?: number) => {
      const product = products.find((p) => p.id === productId);
      if (!product) return;
      const chosenSize = size || product.sizes[0] || product.purchaseOptions?.fullBottle?.[0]?.size || '50ml';
      const chosenPrice = price ?? product.purchaseOptions?.fullBottle?.[0]?.price ?? product.price;
      setCart((prev) => {
        const existing = prev.find(
          (i) => i.productId === productId && i.size === chosenSize && i.purchaseType === purchaseType,
        );
        if (existing) {
          return prev.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + quantity } : i,
          );
        }
        return [...prev, { productId, quantity, size: chosenSize, purchaseType, price: chosenPrice, giftWrap: false }];
      });
      setCartOpen(true);
    },
    [],
  );

  const removeFromCart = useCallback((productId: string, size: string, purchaseType: string) => {
    setCart((prev) =>
      prev.filter((i) => !(i.productId === productId && i.size === size && i.purchaseType === purchaseType)),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: string, purchaseType: string, quantity: number) => {
      if (quantity < 1) return;
      setCart((prev) =>
        prev.map((i) =>
          i.productId === productId && i.size === size && i.purchaseType === purchaseType ? { ...i, quantity } : i,
        ),
      );
    },
    [],
  );

  const saveForLater = useCallback((productId: string, size: string, purchaseType: string) => {
    setCart((prev) => {
      const item = prev.find((i) => i.productId === productId && i.size === size && i.purchaseType === purchaseType);
      if (item) {
        setSavedItems((s) =>
          s.some((i) => i.productId === productId) ? s : [...s, { productId, size, purchaseType: item.purchaseType, price: item.price }],
        );
      }
      return prev.filter((i) => !(i.productId === productId && i.size === size && i.purchaseType === purchaseType));
    });
  }, []);

  const moveToCart = useCallback((productId: string, size: string, purchaseType: string, price: number) => {
    setSavedItems((prev) => prev.filter((i) => i.productId !== productId));
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.productId === productId && i.size === size && i.purchaseType === purchaseType,
      );
      if (existing) return prev;
      return [...prev, { productId, quantity: 1, size, purchaseType: purchaseType as 'full-bottle' | 'decant', price, giftWrap: false }];
    });
  }, []);

  const removeFromSaved = useCallback((productId: string) => {
    setSavedItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  const toggleCompare = useCallback((productId: string) => {
    setCompare((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : prev.length < 4
          ? [...prev, productId]
          : prev,
    );
  }, []);

  const addRecentlyViewed = useCallback((productId: string) => {
    setRecentlyViewed((prev) =>
      [productId, ...prev.filter((id) => id !== productId)].slice(0, 8),
    );
  }, []);

  const applyCoupon = useCallback((code: string) => {
    const upper = code.toUpperCase();
    if (COUPONS[upper]) {
      setCoupon(upper);
      return true;
    }
    return false;
  }, []);

  const removeCoupon = useCallback(() => setCoupon(''), []);

  const cartCount = useMemo(
    () => cart.reduce((sum, i) => sum + i.quantity, 0),
    [cart],
  );

  const cartSubtotal = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId);
        return sum + (product ? item.price * item.quantity : 0);
      }, 0),
    [cart],
  );

  const cartDiscount = useMemo(() => {
    if (!coupon) return 0;
    return Math.round(cartSubtotal * COUPONS[coupon] * 100) / 100;
  }, [cartSubtotal, coupon]);

  const cartGiftWrapFee = useMemo(
    () => (giftWrap ? GIFT_WRAP_FEE : 0),
    [giftWrap],
  );

  const afterDiscount = cartSubtotal - cartDiscount;
  const cartShipping = useMemo(() => {
    if (afterDiscount === 0) return 0;
    return afterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  }, [afterDiscount]);

  const cartTax = useMemo(
    () => Math.round(afterDiscount * TAX_RATE * 100) / 100,
    [afterDiscount],
  );

  const cartTotal = useMemo(
    () => afterDiscount + cartShipping + cartTax + cartGiftWrapFee,
    [afterDiscount, cartShipping, cartTax, cartGiftWrapFee],
  );

  const value: StoreContextValue = {
    locale,
    setLocale,
    theme,
    toggleTheme,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    saveForLater,
    moveToCart,
    savedItems,
    removeFromSaved,
    wishlist,
    toggleWishlist,
    compare,
    toggleCompare,
    recentlyViewed,
    addRecentlyViewed,
    giftWrap,
    setGiftWrap,
    coupon,
    applyCoupon,
    removeCoupon,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTax,
    cartShipping,
    cartGiftWrapFee,
    cartTotal,
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
