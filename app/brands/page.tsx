'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { brands } from '@/lib/data';
import { products, getProductsByBrand } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function BrandsPage() {
  const { locale } = useStore();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const brandProducts = useMemo(
    () => (selectedBrand ? getProductsByBrand(selectedBrand) : []),
    [selectedBrand],
  );

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-28 pb-20 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {locale === 'ar' ? 'العلامات' : 'Maisons'}
        </p>
        <h1 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">
          {locale === 'ar' ? 'الدور التي نثق بها' : 'The Houses We Represent'}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          {locale === 'ar'
            ? 'اختر علامة لتصفح جميع عطورها.'
            : 'Select a brand to browse all its fragrances.'}
        </p>
      </div>

      {/* Brand grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {brands.map((brand, i) => {
          const count = products.filter((p) => p.brandId === brand.id).length;
          const isActive = selectedBrand === brand.id;
          return (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(isActive ? null : brand.id)}
              className={cn(
                'group relative overflow-hidden rounded-2xl border bg-card p-8 text-left shadow-luxe transition animate-fade-in',
                isActive
                  ? 'border-gold shadow-gold'
                  : 'border-border hover:border-gold/40 hover:shadow-gold',
              )}
              style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition group-hover:bg-gold/15" />
              <div className="relative flex items-start justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground transition group-hover:text-gold">
                    {locale === 'ar' ? brand.nameAr : brand.name}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {brand.country}
                  </p>
                  <p className="mt-3 text-sm text-foreground/60">
                    {count} {locale === 'ar' ? 'عطر' : 'fragrances'}
                  </p>
                </div>
                {isActive && (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Products for selected brand */}
      {selectedBrand && (
        <div className="mt-16 border-t border-border pt-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-3xl font-light text-foreground">
              {locale === 'ar' ? 'عطور ' : 'Fragrances by '}
              <span className="text-gradient-gold">
                {locale === 'ar' ? brands.find((b) => b.id === selectedBrand)?.nameAr : brands.find((b) => b.id === selectedBrand)?.name}
              </span>
            </h2>
            <button
              onClick={() => setSelectedBrand(null)}
              className="text-sm font-medium text-muted-foreground transition hover:text-gold"
            >
              {locale === 'ar' ? 'عرض كل العلامات' : 'Show all brands'}
            </button>
          </div>

          {brandProducts.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">
              {locale === 'ar' ? 'لا توجد عطور متاحة لهذه العلامة حالياً.' : 'No fragrances available for this brand yet.'}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {brandProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      )}

      {!selectedBrand && (
        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-105"
          >
            {locale === 'ar' ? 'تصفح كل العطور' : 'Browse All Fragrances'}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
