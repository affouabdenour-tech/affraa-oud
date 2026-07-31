'use client';

import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function WishlistPage() {
  const { locale, wishlist } = useStore();
  const tr = t(locale);
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 pt-20 text-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-muted">
          <Heart className="h-14 w-14 text-muted-foreground" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-light text-foreground">{tr.nav.wishlist}</h1>
          <p className="mt-2 text-muted-foreground">Your wishlist is empty.</p>
        </div>
        <Link
          href="/shop"
          className="flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold"
        >
          {tr.cart.continueShopping}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-28 pb-20 lg:px-8">
      <h1 className="mb-8 font-display text-4xl font-light text-foreground md:text-5xl">
        {tr.nav.wishlist}
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {wishlistProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
