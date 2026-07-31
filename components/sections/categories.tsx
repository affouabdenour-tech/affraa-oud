'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { categories } from '@/lib/data';

export function CategoriesSection() {
  const { locale } = useStore();
  const tr = t(locale);

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {tr.sections.categories}
        </p>
        <h2 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">
          {tr.sections.categoriesSubtitle}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border shadow-luxe animate-fade-in"
            style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
          >
            <img
              src={cat.image}
              alt={locale === 'ar' ? cat.nameAr : cat.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-gold/0 via-gold/0 to-gold/0 transition group-hover:from-gold/20" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80">
                {cat.productCount} {locale === 'ar' ? 'منتج' : 'products'}
              </p>
              <h3 className="mt-1 font-display text-xl font-medium text-foreground">
                {locale === 'ar' ? cat.nameAr : cat.name}
              </h3>
              <p className="mt-1 text-xs text-foreground/60 line-clamp-2 opacity-0 transition duration-500 group-hover:opacity-100">
                {cat.description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-gold opacity-0 transition duration-500 group-hover:opacity-100">
                Explore
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
