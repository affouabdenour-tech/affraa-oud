'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/lib/store';

export function EditorialBanner() {
  const { locale } = useStore();

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[500px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/30618765/pexels-photo-30618765.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="The Art of Oud"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 to-transparent" />
        </div>
        <div className="flex flex-col justify-center bg-brown p-10 lg:p-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {locale === 'ar' ? 'إرث العطر' : 'The Olfactory Heritage'}
          </p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground md:text-5xl">
            {locale === 'ar' ? 'من قلب الصحراء' : 'From the Heart'}{' '}
            <span className="text-gradient-gold">
              {locale === 'ar' ? 'إلى العالم' : 'of the Desert'}
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
            {locale === 'ar'
              ? 'منذ 1948، نختار أندر المكونات من حول العالم — عود كمبودي معتّق، ورد بلغاري، ومسك أبيض نقي — لنصنع عطوراً تدوم عبر الأجيال.'
              : 'Since 1948, we source the rarest ingredients from around the world — aged Cambodian oud, Bulgarian rose, and pure white musk — to craft fragrances that endure across generations.'}
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:border-gold hover:bg-gold/10"
          >
            {locale === 'ar' ? 'اكتشف القصة' : 'Discover Our Story'}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
