'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { locale } = useStore();
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const inputClass = 'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold';

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-28 pb-20 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {locale === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
        </p>
        <h1 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">
          {locale === 'ar' ? 'نحن هنا من أجلك' : 'We Are Here for You'}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {locale === 'ar'
            ? 'فريق خدمة العملاء لدينا متاح لمساعدتك في أي استفسار.'
            : 'Our client service team is available to assist you with any inquiry.'}
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="space-y-6">
          {[
            { icon: Mail, title: 'Email', value: 'clients@maisonlumiere.com' },
            { icon: Phone, title: 'Phone', value: '+971 4 123 4567' },
            { icon: MapPin, title: 'Address', value: 'Dubai Design District, UAE' },
            { icon: Clock, title: 'Hours', value: 'Sat–Thu, 10AM–8PM GST' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-luxe">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold/20">
                <item.icon className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">{item.title}</p>
                <p className="mt-1 text-sm text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast({ title: 'Message sent!', description: 'We will respond within 24 hours.' });
            }}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-luxe md:p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <input className={inputClass} placeholder="First Name" required />
              <input className={inputClass} placeholder="Last Name" required />
            </div>
            <input className={inputClass} type="email" placeholder="Email" required />
            <input className={inputClass} placeholder="Subject" required />
            <textarea className={inputClass} rows={6} placeholder="Your message" required />
            <button
              type="submit"
              disabled={sent}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-[1.02] disabled:opacity-50"
            >
              {sent ? 'Sent' : 'Send Message'}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
