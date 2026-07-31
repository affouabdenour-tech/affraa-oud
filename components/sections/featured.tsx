'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export function FeaturedSection() {
  const { locale } = useStore();
  const tr = t(locale);
  const featured = products.filter((p) => p.bestseller || p.isNew).slice(0, 8);

  return (
    <section className="relative bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent py-20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {tr.sections.featured}
          </p>
          <h2 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">
            {tr.sections.featuredSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:border-gold hover:bg-gold/10"
          >
            View All Fragrances
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
