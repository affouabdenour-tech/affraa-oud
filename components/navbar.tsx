'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { navLinks } from '@/lib/data';

function ThreeDotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Navbar() {
  const {
  locale,
  setLocale,
  cartCount,
  setCartOpen,
  setSearchOpen
} = useStore();

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const tr = t(locale);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass border-b border-border py-2 shadow-luxe'
            : isHome
              ? 'bg-transparent py-4'
              : 'glass py-3',
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 lg:px-8">

          {/* Left */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-gold/15"
            aria-label={tr.nav.menu}
          >
            <ThreeDotIcon className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span className="font-display text-xl font-semibold tracking-[0.15em] text-foreground transition group-hover:text-gold sm:text-2xl">
              AFFRAA OUD
            </span>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-2">

            {/* Language Button */}
<button
  onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
  className="rounded-full border border-gold px-3 py-1 text-xs font-semibold text-gold transition hover:bg-gold hover:text-black"
>
  {locale === 'ar' ? '🇬🇧 EN' : '🇸🇦 AR'}
</button>
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-gold/15"
              aria-label={tr.nav.search}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-gold/15"
              aria-label={tr.nav.cart}
            >
              <ShoppingBag className="h-5 w-5" />

              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>

          </div>

        </div>
      </header>

      {/* Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">

          <div
            className="absolute inset-0 bg-brown/60 backdrop-blur-sm animate-fade-in-slow"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-card p-6 shadow-2xl animate-slide-in-left">

            <div className="mb-8 flex items-center justify-between">

              <span className="font-display text-lg font-semibold tracking-wide text-foreground">
                AFFRAA OUD
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            <nav className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-wider transition hover:bg-gold/10 hover:text-gold',
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-foreground/80',
                  )}
                >
                  {locale === 'ar'
                    ? link.labelAr
                    : link.label}
                </Link>
              ))}

            </nav>

          </div>

        </div>
      )}
    </>
  );
}