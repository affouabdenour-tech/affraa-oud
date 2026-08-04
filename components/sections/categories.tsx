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

      {/* Section Header */}

      <div className="mb-14 text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {tr.sections.categories}
        </p>

        <h2 className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl">
          {tr.sections.categoriesSubtitle}
        </h2>

      </div>

      {/* Categories Grid */}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

        {categories.map((cat, index) => (

          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border shadow-luxe"
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >

            {/* Image */}

            <img
              src={cat.image}
              alt={locale === 'ar' ? cat.nameAr : cat.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-gold/0 to-gold/0 transition duration-500 group-hover:from-gold/20" />

            {/* Content */}

            <div
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              className={`absolute inset-x-0 bottom-0 p-5 ${
                locale === 'ar'
                  ? 'text-right'
                  : 'text-left'
              }`}
            >

              <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80">

                {locale === 'ar'
                  ? `${cat.productCount} منتج`
                  : `${cat.productCount} Products`}

              </p>

              <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-white">

                {locale === 'ar'
                  ? cat.nameAr
                  : cat.name}

              </h3>

              <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/70 opacity-0 transition duration-500 group-hover:opacity-100">

                {locale === 'ar'
  ? cat.description
  : cat.description}

              </p>
                            <div
                className={`mt-4 flex items-center gap-2 text-xs font-semibold text-gold opacity-0 transition duration-500 group-hover:opacity-100 ${
                  locale === 'ar'
                    ? 'justify-end flex-row-reverse'
                    : 'justify-start'
                }`}
              >
                <span>
                  {locale === 'ar'
                    ? 'استكشف'
                    : 'Explore'}
                </span>

                <ArrowRight
                  className={`h-3.5 w-3.5 transition ${
                    locale === 'ar'
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}