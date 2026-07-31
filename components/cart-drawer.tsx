'use client';

import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { t, formatPrice } from '@/lib/i18n';
import { products } from '@/lib/products';

export function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    cartCount,
    locale,
  } = useStore();
  const tr = t(locale);

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-brown/40 backdrop-blur-sm animate-fade-in-slow"
        onClick={() => setCartOpen(false)}
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-card shadow-2xl animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-border p-5">
          <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
            <ShoppingBag className="h-5 w-5 text-gold" />
            {tr.cart.title} ({cartCount})
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <p className="font-display text-lg font-medium">{tr.cart.empty}</p>
              <p className="mt-1 text-sm text-muted-foreground">{tr.cart.emptySubtitle}</p>
            </div>
            <Link
              href="/shop"
              onClick={() => setCartOpen(false)}
              className="mt-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              {tr.cart.continueShopping}
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5">
              <div className="space-y-4">
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  if (!product) return null;
                  return (
                    <div
                      key={`${item.productId}-${item.size}-${item.purchaseType}`}
                      className="flex gap-4 rounded-xl border border-border p-3"
                    >
                      <Link
                        href={`/product/${product.slug}`}
                        onClick={() => setCartOpen(false)}
                        className="h-20 w-20 shrink-0 overflow-hidden rounded-lg"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-gold">
                              {product.brand}
                            </p>
                            <Link
                              href={`/product/${product.slug}`}
                              onClick={() => setCartOpen(false)}
                              className="font-display text-sm font-medium hover:text-gold"
                            >
                              {locale === 'ar' ? product.nameAr : product.name}
                            </Link>
                            <p className="text-xs text-muted-foreground">
                              {item.size} · {item.purchaseType === 'decant' ? 'Decant' : 'Full Bottle'}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.productId, item.size, item.purchaseType)}
                            className="text-muted-foreground transition hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-border">
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.purchaseType, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-muted"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.purchaseType, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-muted"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-display text-sm font-semibold">
                            {formatPrice(item.price * item.quantity, locale)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{tr.cart.subtotal}</span>
                <span className="font-display text-xl font-semibold">
                  {formatPrice(cartSubtotal, locale)}
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className={cn(
                  'mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90',
                )}
              >
                {tr.cart.checkout}
              </Link>
              <Link
                href="/cart"
                onClick={() => setCartOpen(false)}
                className="mt-2 flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-gold hover:text-gold"
              >
                View Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
