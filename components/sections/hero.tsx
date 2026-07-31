'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';

export function Hero() {
  const { locale } = useStore();
  const tr = t(locale);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const particles = Array.from({ length: 20 });

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brown"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0003})`,
        }}
      >
        <img
          src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-brown" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown via-transparent to-brown/60" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-gold/60"
            style={{
              left: `${(i * 37) % 100}%`,
              bottom: '-10px',
              animation: `particle ${8 + (i % 6) * 2}s linear ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div
          className={`mb-6 flex items-center justify-center gap-2 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          <span className="h-px w-12 bg-gold/50" />
          <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            {tr.hero.tagline}
          </span>
          <span className="h-px w-12 bg-gold/50" />
        </div>

        <h1
          className={`font-display text-5xl font-light leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '400ms' }}
        >
          {tr.hero.title}{' '}
          <span className="block font-semibold text-gradient-gold">{tr.hero.titleAccent}</span>
        </h1>

        <p
          className={`mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '700ms' }}
        >
          {tr.hero.subtitle}
        </p>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '1000ms' }}
        >
          <Link
            href="/shop"
            className="group flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-105"
          >
            {tr.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm transition hover:border-gold hover:bg-gold/10"
          >
            {tr.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">{tr.hero.scroll}</span>
          <span className="flex h-10 w-6 justify-center rounded-full border border-foreground/30 p-1">
            <span className="h-2 w-1 animate-float rounded-full bg-gold" />
          </span>
        </div>
      </div>
    </section>
  );
}
