'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { getShippingPrice } from "@/lib/shipping";
import {
  ArrowLeft,
  ShoppingBag,
  Truck,
  Building2,
  MapPin,
  User,
} from 'lucide-react';

import { useStore } from '@/lib/store';
import { t, formatPrice } from '@/lib/i18n';
import {
  shippingPrices,
  ShippingCompany,
} from '@/lib/shipping';

export default function CheckoutPage() {
  const { cart, locale } = useStore();

  const tr = t(locale);

  /* ==========================
     Customer
  ========================== */

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  /* ==========================
     Address
  ========================== */

  const [wilaya, setWilaya] = useState('Alger');
  const [commune, setCommune] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  /* ==========================
     Shipping
  ========================== */

  const [shippingCompany, setShippingCompany] =
    useState<ShippingCompany>('yalidine');

  const [deliveryType, setDeliveryType] =
    useState<'home' | 'desk'>('home');

  /* ==========================
     Prices
  ========================== */

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cart]);

  const shippingCost = useMemo(() => {
  return getShippingPrice(
    shippingCompany,
    wilaya,
    deliveryType
  );
}, [shippingCompany, wilaya, deliveryType]);

  const total = subtotal + shippingCost;
    return (
    <div className="min-h-screen bg-background pt-24 pb-20">

      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <Link
          href="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Link>

        <h1 className="mb-10 font-display text-5xl font-semibold">
          Checkout
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* Customer */}

            <section className="rounded-3xl border border-border bg-card p-8">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-display">

                <User className="h-6 w-6 text-gold" />

                Customer Information

              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email (Optional)"
                  className="md:col-span-2 rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                />

              </div>

            </section>

            {/* Address */}

            <section className="rounded-3xl border border-border bg-card p-8">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-display">

                <MapPin className="h-6 w-6 text-gold" />

                Delivery Address

              </h2>

              <div className="space-y-5">

                <select
                  value={wilaya}
                  onChange={(e) => setWilaya(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                >
                  {Object.keys(
                    shippingPrices[shippingCompany]
                  ).map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>

                <input
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                  placeholder="Commune"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                />

                <textarea
                  rows={4}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Full Address"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                />

                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes (Optional)"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                />

              </div>

            </section>

            {/* Shipping Company */}

            <section className="rounded-3xl border border-border bg-card p-8">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-display">

                <Building2 className="h-6 w-6 text-gold" />

                Shipping Company

              </h2>

              <div className="grid gap-4 md:grid-cols-2">

                <button
                  type="button"
                  onClick={() => setShippingCompany("yalidine")}
                  className={`rounded-2xl border p-5 transition ${
                    shippingCompany === "yalidine"
                      ? "border-gold bg-gold/10"
                      : "border-border hover:border-gold"
                  }`}
                >
                  <h3 className="font-semibold">
                    Yalidine Express
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Delivery all over Algeria
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingCompany("worldExpress")}
                  className={`rounded-2xl border p-5 transition ${
                    shippingCompany === "worldExpress"
                      ? "border-gold bg-gold/10"
                      : "border-border hover:border-gold"
                  }`}
                >
                  <h3 className="font-semibold">
                    World Express
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Delivery all over Algeria
                  </p>
                </button>

              </div>

            </section>
                        {/* Delivery Type */}

            <section className="rounded-3xl border border-border bg-card p-8">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-display">

                <Truck className="h-6 w-6 text-gold" />

                Delivery Type

              </h2>

              <div className="grid gap-4 md:grid-cols-2">

                <button
                  type="button"
                  onClick={() => setDeliveryType("home")}
                  className={`rounded-2xl border p-5 transition ${
                    deliveryType === "home"
                      ? "border-gold bg-gold/10"
                      : "border-border hover:border-gold"
                  }`}
                >
                  🏠 Home Delivery
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType("desk")}
                  className={`rounded-2xl border p-5 transition ${
                    deliveryType === "desk"
                      ? "border-gold bg-gold/10"
                      : "border-border hover:border-gold"
                  }`}
                >
                  📦 Stop Desk
                </button>

              </div>

            </section>

          </div>

          {/* RIGHT SIDE */}

          <aside className="sticky top-28 h-fit rounded-3xl border border-border bg-card p-8">

            <h2 className="mb-6 text-2xl font-display">
              Order Summary
            </h2>

            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">
                      {item.quantity} × {item.productId}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {item.size}
                    </p>
                  </div>

                  <span className="font-semibold">
                    {formatPrice(item.price * item.quantity, locale)}
                  </span>
                </div>
              ))}

              <hr className="border-border" />

              <div className="flex justify-between">
                <span>Products</span>
                <span>{formatPrice(subtotal, locale)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-gold font-semibold">
                  {formatPrice(shippingCost, locale)}
                </span>
              </div>

              <hr className="border-border" />

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-gold">
                  {formatPrice(total, locale)}
                </span>

              </div>

              <button
                type="button"
                onClick={() => {
                  const productsText = cart
  .map(
    (item) => `
🛍 Product:
${item.name}

Quantity:
${item.quantity}

Price:
${item.price} DZD
`
  )
  .join("\n----------------------\n");

const message = `
🛍 AFFRAA OUD

========================

${productsText}

========================

Customer:
${fullName}

Phone:
${phone}

Email:
${email}

Wilaya:
${wilaya}

Commune:
${commune}

Address:
${address}

Company:
${shippingCompany}

Delivery:
${deliveryType}

Products Total:
${subtotal}

Shipping:
${shippingCost}

Total:
${total}

Notes:
${notes}
`;

                  window.open(
                    `https://wa.me/213551578373?text=${encodeURIComponent(message)}`,
                    "_blank"
                  );
                }}
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-[#C8A86B] to-[#E8C98A] py-4 text-lg font-bold text-black transition hover:scale-[1.02]"
              >
                Complete Order via WhatsApp
              </button>

            </div>

          </aside>

        </div>

      </div>

    </div>
  );
}