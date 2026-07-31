'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import { useStore } from '@/lib/store';
import { brands } from '@/lib/data';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function BrandPage() {
  const { locale } = useStore();

  const params = useParams();
  const id = params.id as string;

  const brand = brands.find((b) => b.id === id);

  if (!brand) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">
          Brand not found
        </h1>
      </div>
    );
  }

  const brandProducts = products.filter(
    (product) => product.brandId === brand.id
  );

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-28 pb-20 lg:px-8">

      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">

        <Link href="/">Home</Link>

        <ChevronRight className="h-4 w-4" />

        <Link href="/brands">Brands</Link>

        <ChevronRight className="h-4 w-4" />

        <span className="text-foreground">
          {brand.name}
        </span>

      </nav>

      <div className="mb-14 text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          BRAND
        </p>

        <h1 className="mt-3 font-display text-5xl font-light">
          {brand.name}
        </h1>

        <p className="mt-4 text-muted-foreground">
          {brand.country}
        </p>
              </div>

      {brandProducts.length === 0 ? (

        <div className="rounded-2xl border border-border bg-card/50 py-20 text-center">

          <h2 className="font-display text-2xl">
            No fragrances available
          </h2>

          <p className="mt-3 text-muted-foreground">
            This brand has no products yet.
          </p>

        </div>

      ) : (

        <>

          <div className="mb-10 flex items-center justify-between">

            <h2 className="font-display text-3xl font-light">
              {locale === "ar"
                ? `عطور ${brand.name}`
                : `${brand.name} Collection`}
            </h2>

            <span className="rounded-full border border-border px-5 py-2 text-sm text-muted-foreground">
              {brandProducts.length} Products
            </span>

          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

            {brandProducts.map((product, index) => (

              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />

            ))}

          </div>

          <div className="mt-20 rounded-3xl border border-border bg-card/40 p-10">

            <div className="grid gap-10 md:grid-cols-2">

              <div>

                <h3 className="font-display text-3xl">
                  {brand.name}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">

                  {locale === "ar"
                    ? `تصفح جميع عطور ${brand.name} الأصلية داخل متجر AFFRAA OUD. جميع المنتجات معروضة بصور متعددة ومعلومات كاملة مع إمكانية اختيار الحجم المناسب وإضافة المنتج مباشرة إلى السلة.`
                    : `Discover the complete ${brand.name} collection at AFFRAA OUD. Every fragrance includes multiple images, detailed notes and bottle size selection.`}

                </p>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl border border-border p-6">

                  <p className="text-xs uppercase tracking-widest text-gold">
                    Products
                  </p>

                  <h2 className="mt-3 font-display text-4xl">
                    {brandProducts.length}
                  </h2>

                </div>

                <div className="rounded-2xl border border-border p-6">

                  <p className="text-xs uppercase tracking-widest text-gold">
                    Country
                  </p>

                  <h2 className="mt-3 font-display text-2xl">
                    {brand.country}
                  </h2>

                </div>

              </div>

            </div>

          </div>

        </>
      )}
            <div className="mt-20 flex justify-center">

        <Link
          href="/brands"
          className="rounded-full border border-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition hover:bg-gold hover:text-primary-foreground"
        >
          {locale === "ar"
            ? "عرض جميع الشركات"
            : "View All Brands"}
        </Link>

      </div>

      <div className="mt-16 text-center">

        <p className="text-sm text-muted-foreground">

          {locale === "ar"
            ? "AFFRAA OUD • Luxury Fragrance Boutique"
            : "AFFRAA OUD • Luxury Fragrance Boutique"}

        </p>

      </div>

    </div>

  );

}