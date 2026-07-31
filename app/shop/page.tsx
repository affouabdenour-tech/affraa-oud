'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { t, formatPrice } from '@/lib/i18n';
import { products } from '@/lib/products';
import { brands, categories } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/types';

type SortKey = 'popular' | 'newest' | 'priceLow' | 'priceHigh' | 'rating' | 'bestSelling';

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-28" />}>
      <ShopContent />
    </Suspense>
  );
}

function ShopContent() {
  const { locale } = useStore();
  const tr = t(locale);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [sort, setSort] = useState<SortKey>('popular');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 800]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setSaleOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [minLongevity, setMinLongevity] = useState(0);
  const [minProjection, setMinProjection] = useState(0);

  const filtered = useMemo(() => {
    let result: Product[] = [...products];

    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brandId));
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedGenders.length > 0) {
      result = result.filter((p) => selectedGenders.includes(p.gender));
    }
    if (selectedSeasons.length > 0) {
      result = result.filter((p) => selectedSeasons.includes(p.season));
    }
    if (inStockOnly) result = result.filter((p) => p.inStock);
    if (onSaleOnly) result = result.filter((p) => p.compareAtPrice);
    if (minRating > 0) result = result.filter((p) => p.rating >= minRating);
    if (minLongevity > 0) result = result.filter((p) => p.longevity >= minLongevity);
    if (minProjection > 0) result = result.filter((p) => p.projection >= minProjection);

    switch (sort) {
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'priceLow':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'bestSelling':
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [
    categoryParam,
    selectedBrands,
    priceRange,
    selectedGenders,
    selectedSeasons,
    inStockOnly,
    onSaleOnly,
    minRating,
    minLongevity,
    minProjection,
    sort,
  ]);

  const resetFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 800]);
    setSelectedGenders([]);
    setSelectedSeasons([]);
    setInStockOnly(false);
    setSaleOnly(false);
    setMinRating(0);
    setMinLongevity(0);
    setMinProjection(0);
  };

  const activeCategory = categories.find((c) => c.id === categoryParam);
  const pageTitle = activeCategory
    ? locale === 'ar'
      ? activeCategory.nameAr
      : activeCategory.name
    : locale === 'ar'
      ? 'كل العطور'
      : 'All Fragrances';

  const toggleArray = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <FilterGroup title={tr.filters.brand}>
        {brands.map((b) => (
          <Checkbox
            key={b.id}
            label={b.name}
            checked={selectedBrands.includes(b.id)}
            onChange={() => toggleArray(selectedBrands, b.id, setSelectedBrands)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={tr.filters.priceRange}>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>{formatPrice(priceRange[0], locale)}</span>
            <span>{formatPrice(priceRange[1], locale)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={800}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-gold"
          />
        </div>
      </FilterGroup>

      <FilterGroup title={tr.filters.gender}>
        {(['men', 'women', 'unisex'] as const).map((g) => (
          <Checkbox
            key={g}
            label={tr.common[g]}
            checked={selectedGenders.includes(g)}
            onChange={() => toggleArray(selectedGenders, g, setSelectedGenders)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={tr.filters.season}>
        {(['spring', 'summer', 'autumn', 'winter', 'all'] as const).map((s) => (
          <Checkbox
            key={s}
            label={tr.common[s]}
            checked={selectedSeasons.includes(s)}
            onChange={() => toggleArray(selectedSeasons, s, setSelectedSeasons)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={tr.filters.longevity}>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setMinLongevity(minLongevity === n ? 0 : n)}
              className={cn(
                'h-9 w-9 rounded-lg border text-sm font-medium transition',
                minLongevity === n
                  ? 'border-gold bg-gold/15 text-gold'
                  : 'border-border text-muted-foreground hover:border-gold/40',
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title={tr.filters.projection}>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setMinProjection(minProjection === n ? 0 : n)}
              className={cn(
                'h-9 w-9 rounded-lg border text-sm font-medium transition',
                minProjection === n
                  ? 'border-gold bg-gold/15 text-gold'
                  : 'border-border text-muted-foreground hover:border-gold/40',
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title={tr.filters.customerRating}>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(r)}
              className={cn(
                'rounded-lg border px-3 py-1.5 text-sm transition',
                minRating === r
                  ? 'border-gold bg-gold/15 text-gold'
                  : 'border-border text-muted-foreground hover:border-gold/40',
              )}
            >
              {r === 0 ? 'Any' : `${r}+`}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title={tr.filters.availability}>
        <Checkbox
          label={tr.product.inStock}
          checked={inStockOnly}
          onChange={() => setInStockOnly(!inStockOnly)}
        />
        <Checkbox
          label={tr.filters.discount}
          checked={onSaleOnly}
          onChange={() => setSaleOnly(!onSaleOnly)}
        />
      </FilterGroup>

      <button
        onClick={resetFilters}
        className="w-full rounded-full border border-border py-2.5 text-sm font-medium text-foreground transition hover:border-destructive hover:text-destructive"
      >
        {tr.filters.reset}
      </button>
    </div>
  );

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-28 pb-20 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {locale === 'ar' ? 'المتجر' : 'Boutique'}
        </p>
        <h1 className="mt-2 font-display text-4xl font-light text-foreground md:text-5xl">
          {pageTitle}
        </h1>
        {activeCategory && (
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground">
            {activeCategory.description}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
        <button
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-gold lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {tr.filters.title}
        </button>

        <p className="hidden text-sm text-muted-foreground lg:block">
          {filtered.length} {tr.filters.results}
        </p>

        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-muted-foreground sm:inline">{tr.filters.sort}:</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="appearance-none rounded-full border border-border bg-card py-2 pl-4 pr-9 text-sm font-medium text-foreground outline-none transition focus:border-gold"
            >
              <option value="popular">{tr.filters.sortPopular}</option>
              <option value="newest">{tr.filters.sortNewest}</option>
              <option value="priceLow">{tr.filters.sortPriceLow}</option>
              <option value="priceHigh">{tr.filters.sortPriceHigh}</option>
              <option value="rating">{tr.filters.sortRating}</option>
              <option value="bestSelling">{tr.filters.sortBestSelling}</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-28">
            <FilterContent />
          </div>
        </aside>

        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-display text-2xl text-foreground">No fragrances found</p>
              <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters.</p>
              <button
                onClick={resetFilters}
                className="mt-4 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                {tr.filters.reset}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-card p-6 shadow-2xl animate-slide-in-right">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold">{tr.filters.title}</h2>
              <button onClick={() => setFiltersOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="flex w-full items-center gap-2.5 text-sm text-foreground/80 transition hover:text-foreground"
    >
      <span
        className={cn(
          'flex h-4 w-4 items-center justify-center rounded border transition',
          checked ? 'border-gold bg-gold text-primary-foreground' : 'border-border',
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}
