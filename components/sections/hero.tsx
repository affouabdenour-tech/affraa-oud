'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';

const heroImages = [
  "/images/hero/bg1.jpg",
  "/images/hero/bg2.jpg",
  "/images/hero/bg3.jpg",
];

export function Hero() {
  const { locale } = useStore();
  const tr = t(locale);

  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 20 });

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brown"
    >
      {/* Background Slider */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1 +
            scrollY * 0.0003})`,
        }}
      >
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              currentImage === index
                ? 'opacity-40 scale-100'
                : 'opacity-0 scale-110'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-brown" />

        <div className="absolute inset-0 bg-gradient-to-r from-brown via-transparent to-brown/60" />
      </div>

      {/* Gold Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-gold/60"
            style={{
              left: `${(i * 37) % 100}%`,
              bottom: '-10px',
              animation: `particle ${8 + (i % 6) * 2}s linear ${
                i * 0.4
              }s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
<div className="relative z-10 mx-auto max-w-4xl px-4 text-center">

  {/* Logo */}
  <div
    className={
      mounted
        ? "animate-fade-in"
        : "opacity-0"
    }
  >
    <h1 className="mx-auto text-center font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.55em] uppercase text-[#F8F3E8]">
      AFFRAA OUD
    </h1>
  </div>

  {/* Buttons */}

        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row ${
            mounted ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{
            animationDelay: '600ms',
          }}
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

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            {tr.hero.scroll}
          </span>

          <span className="flex h-10 w-6 justify-center rounded-full border border-foreground/30 p-1">
            <span className="h-2 w-1 animate-float rounded-full bg-gold" />
          </span>
        </div>
      </div>
    </section>
  );
}