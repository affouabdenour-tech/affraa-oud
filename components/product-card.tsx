'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Heart, ShoppingBag, Eye, GitCompare, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { t, formatPrice } from '@/lib/i18n';
import type { Product } from '@/lib/types';
import { StarRating } from '@/components/star-rating';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { locale, addToCart, wishlist, toggleWishlist, compare, toggleCompare } =
    useStore();
  const { toast } = useToast();
  const tr = t(locale);
  const inWishlist = wishlist.includes(product.id);
  const inCompare = compare.includes(product.id);
  const [hovered, setHovered] = useState(false);

  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-luxe transition-all duration-500 hover:shadow-gold hover:border-gold/40 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms`, opacity: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden">
        <img
          src={product.images[0]}
          alt={locale === 'ar' ? product.nameAr : product.name}
          className={cn(
            'h-full w-full object-cover transition-all duration-700',
            hovered ? 'scale-110' : 'scale-100',
          )}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
              {tr.common.new}
            </span>
          )}
          {product.bestseller && (
            <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold ring-1 ring-gold/40">
              {tr.common.bestseller}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-destructive px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-destructive-foreground">
              {discount}% {tr.common.off}
            </span>
          )}
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/40 backdrop-blur-[2px]">
            <span className="rounded-full bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground">
              {tr.product.outOfStock}
            </span>
          </div>
        )}

        <div
          className={cn(
            'absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 transition-all duration-500',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
              toast({
                title: inWishlist ? 'Removed from wishlist' : 'Added to wishlist',
              });
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition hover:bg-gold hover:text-primary-foreground"
            aria-label={tr.product.wishlist}
          >
            <Heart className={cn('h-4 w-4', inWishlist && 'fill-current')} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleCompare(product.id);
              toast({ title: inCompare ? 'Removed from compare' : 'Added to compare' });
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition hover:bg-gold hover:text-primary-foreground"
            aria-label={tr.product.compare}
          >
            {inCompare ? <Check className="h-4 w-4" /> : <GitCompare className="h-4 w-4" />}
          </button>
          <Link
            href={`/product/${product.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition hover:bg-gold hover:text-primary-foreground"
            aria-label={tr.product.quickView}
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
          {product.brand}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 font-display text-lg font-medium leading-tight text-foreground transition-colors group-hover:text-gold">
            {locale === 'ar' ? product.nameAr : product.name}
          </h3>
        </Link>
        <StarRating
          rating={product.rating}
          count={product.reviewCount}
          size="sm"
          className="mt-2"
        />
        <div className="mt-3 flex items-end justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-foreground">
              {formatPrice(product.price, locale)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice, locale)}
              </span>
            )}
          </div>
          <span
            className={cn(
              'text-[11px] font-medium',
              product.inStock ? 'text-emerald-500' : 'text-destructive',
            )}
          >
            {product.inStock
              ? product.stockCount <= 5
                ? tr.product.onlyLeft.replace('{n}', String(product.stockCount))
                : tr.product.inStock
              : tr.product.outOfStock}
          </span>
        </div>

        <button
          onClick={() => {
            addToCart(product.id);
            toast({ title: 'Added to cart', description: locale === 'ar' ? product.nameAr : product.name });
          }}
          disabled={!product.inStock}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ShoppingBag className="h-4 w-4" />
          {tr.product.addToCart}
        </button>
      </div>
    </div>
  );
}
