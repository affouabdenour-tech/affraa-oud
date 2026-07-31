'use client';
import Image from 'next/image';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { brands } from '@/lib/data';

export function BrandsSection() {
  const { locale } = useStore();
  const tr = t(locale);

  return (
    <section className="border-y border-border bg-card/50 py-16">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {tr.sections.brands}
          </p>
          <h2 className="mt-3 font-display text-3xl font-light text-foreground md:text-4xl">
            {tr.sections.brandsSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col items-center justify-center gap-1 rounded-xl border border-border p-6 transition hover:border-gold/40 hover:shadow-luxe"
            >
              
               <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border border-border">
  <Image
    src={brand.image}
    alt={brand.name}
    fill
    className="object-cover"
  />
</div>

<span className="font-display text-xl font-semibold text-foreground/70 transition group-hover:text-gold">
  {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
