'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Send } from 'lucide-react';
import { useStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { navLinks } from '@/lib/data';

export function Footer() {
  const { locale } = useStore();
  const tr = t(locale);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const shopLinks = navLinks.filter((l) => l.href.startsWith('/shop') || l.href === '/brands');
  const aboutLinks = [
    { label: tr.footer.ourStory, href: '/about' },
    { label: tr.footer.sustainability, href: '/about' },
    { label: tr.footer.careers, href: '/about' },
    { label: tr.footer.contact, href: '/contact' },
  ];
  const helpLinks = [
    { label: tr.footer.shipping, href: '/contact' },
    { label: tr.footer.faq, href: '/contact' },
    { label: tr.footer.privacy, href: '/contact' },
    { label: tr.footer.terms, href: '/contact' },
  ];

  return (
    <footer className="relative mt-20 border-t border-border bg-ink text-foreground/80">
      <div className="mx-auto max-w-[1400px] px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold font-display text-lg font-bold text-primary-foreground">
                A
              </span>
              <span className="font-display text-xl font-semibold text-foreground">
                AFFRAA OUD
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/60">
              {tr.footer.tagline}. {locale === 'ar' ? 'عطور نادرة مصنوعة يدوياً بأجود المكونات من حول العالم.' : 'Rare fragrances handcrafted with the finest ingredients from around the world.'}
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition hover:border-gold hover:text-gold"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title={tr.footer.shop} links={shopLinks} locale={locale} />
          <FooterColumn title={tr.footer.about} links={aboutLinks} locale={locale} />
          <FooterColumn title={tr.footer.help} links={helpLinks} locale={locale} />
        </div>

        <div className="mt-12 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {tr.sections.newsletter}
              </h3>
              <p className="mt-1 text-sm text-foreground/60">
                {tr.sections.newsletterSubtitle}
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubscribed(true);
              }}
              className="flex w-full max-w-md gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tr.sections.newsletterPlaceholder}
                className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground outline-none transition focus:border-gold"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                {tr.sections.newsletterCta}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
          {subscribed && (
            <p className="mt-4 text-center text-sm text-gold">{tr.sections.newsletterSuccess}</p>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} AFFRAA OUD. {tr.footer.rights}</p>
          <div className="flex gap-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  locale,
}: {
  title: string;
  links: { label: string; labelAr?: string; href: string }[];
  locale: 'en' | 'ar';
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-sm text-foreground/60 transition hover:text-gold"
            >
              {locale === 'ar' && link.labelAr ? link.labelAr : link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
