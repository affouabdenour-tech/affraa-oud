'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, TrendingUp } from 'lucide-react';
import { useStore } from '@/lib/store';
import { t, formatPrice } from '@/lib/i18n';
import { searchProducts } from '@/lib/products';

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, locale } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const tr = t(locale);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setSearchOpen]);

  if (!searchOpen) return null;

  const results = query ? searchProducts(query).slice(0, 6) : [];
  const trending = ['Oud', 'Rose', 'Musk', 'Amber', 'Leather'];

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-md animate-fade-in-slow"
        onClick={() => setSearchOpen(false)}
      />
      <div className="absolute inset-x-0 top-0 bg-card p-6 shadow-2xl animate-slide-up">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <Search className="h-6 w-6 text-gold" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={locale === 'ar' ? 'ابحث عن عطر، علامة، أو عائلة عطرية...' : 'Search fragrances, brands, families...'}
              className="flex-1 bg-transparent text-lg text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!query && (
            <div className="mt-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <TrendingUp className="h-4 w-4" /> Trending
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {trending.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80 transition hover:border-gold hover:text-gold"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && (
            <div className="mt-6 max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  No results for "{query}"
                </p>
              ) : (
                <div className="space-y-2">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 rounded-xl p-2 transition hover:bg-gold/10"
                    >
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] uppercase tracking-widest text-gold">
                          {product.brand}
                        </p>
                        <p className="font-display text-base font-medium text-foreground">
                          {locale === 'ar' ? product.nameAr : product.name}
                        </p>
                        <p className="text-sm text-muted-foreground capitalize">
                          {product.family} · {tr.common[product.gender]}
                        </p>
                      </div>
                      <span className="font-display text-lg font-semibold text-foreground">
                        {formatPrice(product.price, locale)}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
