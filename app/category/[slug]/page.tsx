'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { categories, brands } from '@/lib/data';
import { useStore } from '@/lib/store';

export default function CategoryPage() {
  const { locale } = useStore();
  const params = useParams();

  const slug = params.slug as string;

  const category = categories.find((c) => c.id === slug);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Category not found</h1>
      </div>
    );
  }

 const categoryBrands = brands.filter(
  (brand) => brand.category === category.id
);

  
  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-28 pb-20 lg:px-8">

      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-gold">
          Home
        </Link>

        <ChevronRight className="h-4 w-4" />

        <span className="text-foreground">
          {locale === 'ar' ? category.nameAr : category.name}
        </span>
      </nav>

      {/* Header */}
      <div className="mb-14 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          CATEGORY
        </p>

        <h1 className="mt-3 font-display text-5xl font-light">
          {locale === 'ar' ? category.nameAr : category.name}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {category.description}
        </p>
      </div>

      {/* Brands */}

      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          THE HOUSES WE REPRESENT
        </p>

        <h2 className="mt-3 font-display text-3xl font-light text-foreground md:text-4xl">
          Legendary maisons and rising stars
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">

        {categoryBrands.map((brand) => (

          <Link
            key={brand.id}
            href={`/brand/${brand.id}`}
            className="group rounded-xl border border-border bg-card/50 p-6 transition hover:border-gold/40 hover:shadow-luxe"
          >

            <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border border-border">

              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover transition group-hover:scale-105"
              />

            </div>

            <h3 className="text-center font-display text-xl font-semibold text-foreground/80 group-hover:text-gold">
              {brand.name}
            </h3>

            <p className="mt-1 text-center text-xs uppercase tracking-widest text-muted-foreground">
              {brand.country}
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}