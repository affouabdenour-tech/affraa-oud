'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Minus, Plus, Trash2, Heart, ShoppingBag, Tag, Gift, Truck, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { t, formatPrice } from '@/lib/i18n';
import { products } from '@/lib/products';
import { useToast } from '@/hooks/use-toast';

export default function CartPage() {
  const {
    locale,
    cart,
    updateQuantity,
    removeFromCart,
    saveForLater,
    moveToCart,
    savedItems,
    removeFromSaved,
    giftWrap,
    setGiftWrap,
    coupon,
    applyCoupon,
    removeCoupon,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTax,
    cartGiftWrapFee,
    cartTotal,
  } = useStore();
  const { toast } = useToast();
  const tr = t(locale);
  const [couponInput, setCouponInput] = useState('');

  if (cart.length === 0 && savedItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 pt-20">
        <div className="relative">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-14 w-14 text-muted-foreground" />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-full bg-gold/10 blur-2xl" />
        </div>
        <div className="text-center">
          <h1 className="font-display text-3xl font-light text-foreground">{tr.cart.empty}</h1>
          <p className="mt-2 text-muted-foreground">{tr.cart.emptySubtitle}</p>
        </div>
        <Link
          href="/shop"
          className="flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold"
        >
          {tr.cart.continueShopping}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-28 pb-20 lg:px-8">
      <h1 className="mb-8 font-display text-4xl font-light text-foreground md:text-5xl">
        {tr.cart.title}
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {cart.length > 0 && (
            <div className="space-y-4">
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <div
                    key={`${item.productId}-${item.size}-${item.purchaseType}`}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-luxe"
                  >
                    <Link href={`/product/${product.slug}`} className="h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-gold">{product.brand}</p>
                          <Link href={`/product/${product.slug}`} className="font-display text-lg font-medium hover:text-gold">
                            {locale === 'ar' ? product.nameAr : product.name}
                          </Link>
                          <p className="text-xs text-muted-foreground">
                            {item.size} · {item.purchaseType === 'decant' ? 'Decant' : 'Full Bottle'}
                          </p>
                        </div>
                        <p className="font-display text-lg font-semibold">
                          {formatPrice(item.price * item.quantity, locale)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 rounded-full border border-border">
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.purchaseType, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.purchaseType, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            onClick={() => saveForLater(item.productId, item.size, item.purchaseType)}
                            className="flex items-center gap-1 text-xs text-muted-foreground transition hover:text-gold"
                          >
                            <Heart className="h-3.5 w-3.5" />
                            {tr.cart.saveForLater}
                          </button>
                          <button
                            onClick={() => removeFromCart(item.productId, item.size, item.purchaseType)}
                            className="flex items-center gap-1 text-xs text-muted-foreground transition hover:text-destructive"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            {tr.cart.remove}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {savedItems.length > 0 && (
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h2 className="mb-4 font-display text-xl font-medium text-foreground">{tr.cart.savedItems}</h2>
              <div className="space-y-3">
                {savedItems.map((saved) => {
                  const product = products.find((p) => p.id === saved.productId);
                  if (!product) return null;
                  return (
                    <div key={saved.productId} className="flex items-center gap-4 rounded-xl border border-border p-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-widest text-gold">{product.brand}</p>
                        <p className="font-display text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {saved.size} · {saved.purchaseType === 'decant' ? 'Decant' : 'Full Bottle'}
                        </p>
                      </div>
                      <span className="font-display text-base font-semibold">{formatPrice(saved.price, locale)}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => moveToCart(saved.productId, saved.size, saved.purchaseType, saved.price)}
                          className="rounded-full bg-brown-rich px-4 py-2 text-xs font-medium text-gold transition hover:bg-gold hover:text-primary-foreground"
                        >
                          {tr.cart.moveToCart}
                        </button>
                        <button
                          onClick={() => removeFromSaved(saved.productId)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
            <div className={cn('flex h-12 w-12 items-center justify-center rounded-full', giftWrap ? 'bg-gold/20 text-gold' : 'bg-muted text-muted-foreground')}>
              <Gift className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">{tr.cart.giftWrap}</p>
              <p className="text-xs text-muted-foreground">{tr.cart.giftWrapDesc}</p>
            </div>
            <span className="text-sm font-semibold text-foreground">{tr.cart.giftWrapPrice}</span>
            <button
              onClick={() => setGiftWrap(!giftWrap)}
              className={cn('relative h-7 w-12 rounded-full transition', giftWrap ? 'bg-gold' : 'bg-muted')}
            >
              <span className={cn('absolute top-1 h-5 w-5 rounded-full bg-white transition', giftWrap ? 'left-6' : 'left-1')} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-luxe">
            <h2 className="mb-4 font-display text-xl font-medium text-foreground">{tr.cart.orderSummary}</h2>

            <div className="mb-4">
              {coupon ? (
                <div className="flex items-center justify-between rounded-xl border border-gold/40 bg-gold/10 px-4 py-3">
                  <span className="flex items-center gap-2 text-sm font-medium text-gold">
                    <Tag className="h-4 w-4" />
                    {coupon}
                  </span>
                  <button onClick={() => removeCoupon()} className="text-xs text-destructive hover:underline">Remove</button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder={tr.cart.coupon}
                    className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-gold"
                  />
                  <button
                    onClick={() => {
                      if (applyCoupon(couponInput)) {
                        toast({ title: 'Coupon applied!' });
                        setCouponInput('');
                      } else {
                        toast({ title: 'Invalid coupon code', variant: 'destructive' });
                      }
                    }}
                    className="rounded-full bg-brown-rich px-5 py-2.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-primary-foreground"
                  >
                    {tr.cart.applyCoupon}
                  </button>
                </div>
              )}
              <p className="mt-2 text-xs text-muted-foreground">Try: AFFRAA10, WELCOME15, GOLD20</p>
            </div>

            <div className="space-y-3 border-t border-border pt-4">
              <SummaryRow label={tr.cart.subtotal} value={formatPrice(cartSubtotal, locale)} />
              {cartDiscount > 0 && <SummaryRow label={tr.cart.discount} value={`-${formatPrice(cartDiscount, locale)}`} highlight />}
              {cartGiftWrapFee > 0 && <SummaryRow label={tr.cart.giftWrapFee} value={formatPrice(cartGiftWrapFee, locale)} />}
              <SummaryRow label={tr.cart.shipping} value={cartShipping === 0 ? tr.checkout.complimentary : formatPrice(cartShipping, locale)} />
              <SummaryRow label={tr.cart.tax} value={formatPrice(cartTax, locale)} />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="font-display text-lg font-medium text-foreground">{tr.cart.total}</span>
              <span className="font-display text-2xl font-bold text-gradient-gold">{formatPrice(cartTotal, locale)}</span>
            </div>

            {cartShipping === 0 && cartSubtotal > 0 && (
              <p className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600">
                <Check className="h-3.5 w-3.5" />
                {tr.cart.freeShipping}
              </p>
            )}

            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-[1.02]"
            >
              {tr.cart.checkout}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Truck className="h-4 w-4" />
              {tr.cart.estimatedShipping}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn('font-medium', highlight ? 'text-destructive' : 'text-foreground')}>{value}</span>
    </div>
  );
}
