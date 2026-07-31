import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost, Amiri } from 'next/font/google';
import { Providers } from '@/components/providers';
import { AppShell } from '@/components/app-shell';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://affraaoud.example'),
  title: 'AFFRAA OUD — Luxury Perfumes & Oud',
  description:
    'Discover the world of AFFRAA OUD. Exquisite niche perfumes, ultra niche, musk, oud, and bakhoor crafted for the connoisseur.',
  openGraph: {
    title: 'AFFRAA OUD — Luxury Perfumes & Oud',
    description:
      'Exquisite niche perfumes, ultra niche, musk, oud, and bakhoor crafted for the connoisseur.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${jost.variable} ${amiri.variable} font-sans`}
      >
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
