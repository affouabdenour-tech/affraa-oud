'use client';

import Link from 'next/link';
import { ArrowRight, Award, Globe, Leaf, Sparkles } from 'lucide-react';
import { useStore } from '@/lib/store';
import { categories } from '@/lib/data';

export default function AboutPage() {
  const { locale } = useStore();

  const featuredCategories = [
    categories.find((c) => c.id === 'niche-perfumes'),
    categories.find((c) => c.id === 'arabian-perfumes'),
    categories.find((c) => c.id === 'dupes'),
    categories.find((c) => c.id === 'bakhoor'),
  ].filter(Boolean);

  return (
    <div className="pt-20">
      {/* Hero Introduction */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/85 via-brown/60 to-brown/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold animate-fade-in">
              {locale === 'ar' ? 'قصتنا' : 'Our Story'}
            </p>
            <h1 className="mt-6 font-display text-5xl font-light leading-tight text-foreground md:text-6xl lg:text-7xl animate-slide-up">
              {locale === 'ar' ? 'إرث من' : 'A Legacy of'}{' '}
              <span className="text-gradient-gold">
                {locale === 'ar' ? 'العطر' : 'Scent'}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-foreground/70 lg:mx-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {locale === 'ar'
                ? 'منذ 1948، تخلق أفرا عود عطوراً استثنائية تجمع بين التراث العربي الأصيل وأجود المكونات العالمية. كل تركيبة تحكي قصة من قصص الأرض والذاكرة، وتحمل بصمة حرفية تمتد لأجيال.'
                : 'Since 1948, AFFRAA OUD has crafted extraordinary fragrances that bridge authentic Arabian heritage with the finest global ingredients. Each composition tells a story of land and memory, carrying the mark of craftsmanship passed down through generations.'}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Link
                href="/shop"
                className="group flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-105"
              >
                {locale === 'ar' ? 'استكشف المجموعة' : 'Explore the Collection'}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm transition hover:border-gold hover:bg-gold/10"
              >
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block animate-scale-in" style={{ animationDelay: '400ms' }}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/30618765/pexels-photo-30618765.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AFFRAA OUD luxury perfume"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-2xl font-light text-foreground">AFFRAA OUD</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    {locale === 'ar' ? 'فن العطر الفاخر' : 'The Art of Luxury Perfume'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-gradient-warm py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {locale === 'ar' ? 'البداية' : 'The Beginning'}
            </p>
            <h2 className="mt-4 font-display text-3xl font-light text-foreground md:text-4xl">
              {locale === 'ar' ? 'من قلب الصحراء' : 'From the Heart of the Desert'}
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <p className="text-base leading-relaxed text-foreground/70">
              {locale === 'ar'
                ? 'بدأت القصة في قلب الجزيرة العربية عام 1948 عندما قرر المؤسس، عطار شاب شغوف، أن يجمع بين أجود أنواع العود والمسك من المنطقة وأرقى المكونات العالمية. سافر عبر الصحاري والجبال بحثاً عن أندر المواد العطرية، وأسس داراً أصبحت اليوم من أعرق دور العطور في العالم.'
                : 'The story began in the heart of the Arabian Peninsula in 1948 when the founder, a young perfumer with a passion for the craft, decided to unite the finest oud and musk from the region with the most exquisite global ingredients. He traveled across deserts and mountains in search of the rarest aromatic materials, founding a house that would become one of the most prestigious in the world.'}
            </p>
            <p className="text-base leading-relaxed text-foreground/70">
              {locale === 'ar'
                ? 'اليوم، تواصل أفرا عود تقليدها العطري مع أكثر من 200 تركيبة في مجموعتها، كل واحدة تحكي قصة من قصص الأرض والذاكرة. من العود الكمبودي المعتق إلى الورد البلغاري، نختار كل مكون بعناية فائقة لنضمن أعلى معايير الجودة والأصالة.'
                : 'Today, AFFRAA OUD continues its olfactory tradition with over 200 compositions in its collection, each telling a story of land and memory. From aged Cambodian oud to Bulgarian rose, we select every ingredient with meticulous care to ensure the highest standards of quality and authenticity.'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {locale === 'ar' ? 'تصفح حسب الفئة' : 'Browse by Category'}
            </p>
            <h2 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">
              {locale === 'ar' ? 'الفئات المميزة' : 'Featured Categories'}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              {locale === 'ar'
                ? 'اكتشف عوالم العطر المختلفة — لكل فئة هويتها وروحها.'
                : 'Discover distinct worlds of fragrance — each category carries its own identity and spirit.'}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {featuredCategories.map((cat, i) => (
              <Link
                key={cat!.id}
                href={`/category/${cat!.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-luxe transition-all duration-500 hover:shadow-gold hover:border-gold/40 animate-fade-in"
                style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cat!.image}
                    alt={cat!.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 transition-all duration-500 group-hover:from-gold/10 group-hover:to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-medium text-foreground transition-colors group-hover:text-gold">
                      {locale === 'ar' ? cat!.nameAr : cat!.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-2 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                      {cat!.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                      {locale === 'ar' ? 'تصفح الآن' : 'Shop Now'}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {locale === 'ar' ? 'قيمنا' : 'Our Values'}
            </p>
            <h2 className="mt-3 font-display text-3xl font-light text-foreground md:text-4xl">
              {locale === 'ar' ? 'ما يميزنا' : 'What Sets Us Apart'}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: locale === 'ar' ? 'حرفية استثنائية' : 'Master Craftsmanship', desc: locale === 'ar' ? 'كل عطر يُصنع يدوياً بواسطة عطّارين خبراء.' : 'Each fragrance handcrafted by master perfumers.' },
              { icon: Globe, title: locale === 'ar' ? 'مكونات عالمية' : 'Global Sourcing', desc: locale === 'ar' ? 'أندر المكونات من حول العالم.' : 'The rarest ingredients from around the world.' },
              { icon: Leaf, title: locale === 'ar' ? 'استدامة' : 'Sustainability', desc: locale === 'ar' ? 'ممارسات صديقة للبيئة في كل مرحلة.' : 'Eco-conscious practices at every stage.' },
              { icon: Sparkles, title: locale === 'ar' ? 'أصالة مضمونة' : 'Guaranteed Authenticity', desc: locale === 'ar' ? 'كل زجاجة بشهادة أصالة.' : 'Every bottle with a certificate of authenticity.' },
            ].map((value, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-8 text-center shadow-luxe transition hover:shadow-gold hover:border-gold/40 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold/15 transition group-hover:bg-gradient-gold/30">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            {locale === 'ar' ? 'ابدأ رحلتك العطرية' : 'Begin Your Olfactory Journey'}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            {locale === 'ar'
              ? 'استكشف مجموعتنا الكاملة من العطور الفاخرة.'
              : 'Explore our complete collection of luxury fragrances.'}
          </p>
          <Link
            href="/shop"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-105"
          >
            {locale === 'ar' ? 'استكشف المجموعة' : 'Explore the Collection'}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
