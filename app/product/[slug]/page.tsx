'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Heart,
  Share2,
  ShoppingBag,
  Minus,
  Plus,
  Star,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
  Check,
  ZoomIn,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { t, formatPrice } from '@/lib/i18n';
import { getProductBySlug, getRelatedProducts, getFrequentlyBoughtTogether, products } from '@/lib/products';
import { StarRating } from '@/components/star-rating';
import { ProductCard } from '@/components/product-card';
import { useToast } from '@/hooks/use-toast';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { locale, addToCart, wishlist, toggleWishlist, addRecentlyViewed, recentlyViewed } = useStore();
  const { toast } = useToast();
  const tr = t(locale);console.log("Current locale:", locale);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');console.log("Selected Size:", selectedSize);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      addRecentlyViewed(product.id);
    }
  }, [product, addRecentlyViewed]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-20">
        <p className="font-display text-3xl text-foreground">Product not found</p>
        <Link href="/shop" className="rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground">
          Back to Shop
        </Link>
      </div>
    );
  }

  const inWishlist = wishlist.includes(product.id);
  const related = getRelatedProducts(product);
  const bundle = getFrequentlyBoughtTogether(product);
  const bundleTotal = product.price + bundle.reduce((s, p) => s + p.price, 0);
  const bundleDiscount = Math.round(bundleTotal * 0.8 * 100) / 100;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const specs = [
    { label: tr.product.fragranceFamily, value: tr.common[product.family] },
    { label: tr.product.concentration, value: tr.common[product.concentration] },
    { label: tr.product.gender, value: tr.common[product.gender] },
    { label: tr.product.season, value: tr.common[product.season] },
    { label: tr.product.longevity, value: `${product.longevity}/5` },
    { label: tr.product.projection, value: `${product.projection}/5` },
    { label: tr.product.bottleSize, value: product.sizes.join(', ') },
    { label: 'Country of Origin', value: product.countryOfOrigin },
  ];

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-[1400px] px-4 py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href={`/shop?category=${product.category}`} className="hover:text-gold capitalize">
            {product.category.replace(/-/g, ' ')}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div
              ref={imgRef}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-luxe"
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className={cn(
                  'h-full w-full object-cover transition-transform duration-300',
                  zoom && 'scale-150',
                )}
                style={zoom ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : {}}
              />
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground">
                <ZoomIn className="h-3.5 w-3.5" />
                Hover to zoom
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground">
                <RotateCcw className="h-3.5 w-3.5" />
                360° View
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    'aspect-square overflow-hidden rounded-xl border-2 transition',
                    selectedImage === i ? 'border-gold' : 'border-border hover:border-gold/40',
                  )}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {product.brand}
            </p>
            <h1 className="mt-2 font-serif text-5xl font-semibold tracking-wide text-foreground md:text-6xl">
  {locale === 'ar' ? product.nameAr : product.name}
</h1>

            <div className="mt-4 flex items-center gap-4">
              <StarRating rating={product.rating} size="md" showValue />
              <span className="text-sm text-muted-foreground">
                {product.reviewCount} {tr.product.reviews}
              </span>
            </div>

     <div className="mt-6 flex items-baseline gap-3">
  <span className="font-display text-4xl font-bold text-gold tracking-wide">
    {formatPrice(
      product.purchaseOptions.fullBottle.find(
        (item) => item.size === selectedSize
      )?.price ??
      product.purchaseOptions.decants.find(
        (item) => item.size === selectedSize
      )?.price ??
      product.price,
      locale
    )}
  </span>

  {product.compareAtPrice && (
    
    <>
      <span className="text-lg text-muted-foreground line-through">
        {formatPrice(product.compareAtPrice, locale)}
      </span>

      <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-xs font-semibold text-destructive">
        {Math.round(
          (1 - product.price / product.compareAtPrice) * 100
        )}
        % {tr.common.off}
      </span>
    </>
  )}
</div>

<p className="mt-6 text-base leading-relaxed text-foreground/70">
  {locale === "ar" ? product.descriptionAr : product.description}
</p>
            {/* Notes */}
            <div className="mt-8 space-y-4 rounded-2xl border border-border bg-card/50 p-6">
              <NotesGroup title={tr.product.topNotes} notes={product.notes.top} />
              <NotesGroup title={tr.product.heartNotes} notes={product.notes.heart} />
              <NotesGroup title={tr.product.baseNotes} notes={product.notes.base} />
            </div>

            {/* Size & Quantity */}
            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {tr.product.size}
                </label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'rounded-xl border px-5 py-2.5 text-sm font-medium transition',
                        selectedSize === size
                          ? 'border-gold bg-gold/15 text-gold'
                          : 'border-border text-foreground hover:border-gold/40',
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {tr.product.quantity}
                  </label>
                  <div className="flex items-center gap-1 rounded-full border border-border">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-muted"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-muted"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {tr.product.stockStatus}
                  </label>
                  <p className={cn('flex items-center gap-1.5 text-sm font-medium', product.inStock ? 'text-emerald-500' : 'text-destructive')}>
                    {product.inStock ? (
                      <>
                        <Check className="h-4 w-4" />
                        {product.stockCount <= 5 ? tr.product.onlyLeft.replace('{n}', String(product.stockCount)) : tr.product.inStock}
                      </>
                    ) : (
                      tr.product.outOfStock
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  addToCart(product.id, quantity, selectedSize);
                  toast({ title: 'Added to cart', description: product.name });
                }}
                disabled={!product.inStock}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ShoppingBag className="h-5 w-5" />
                {tr.product.addToCart}
              </button>
              <button
                onClick={() => {
                  toggleWishlist(product.id);
                  toast({ title: inWishlist ? 'Removed from wishlist' : 'Added to wishlist' });
                }}
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-full border border-border transition hover:border-gold',
                  inWishlist && 'border-gold text-gold',
                )}
              >
                <Heart className={cn('h-5 w-5', inWishlist && 'fill-current')} />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  toast({ title: 'Link copied' });
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-border transition hover:border-gold"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: locale === 'ar' ? 'شحن مجاني فوق 200$' : 'Free shipping over $200' },
                { icon: Shield, label: locale === 'ar' ? 'ضمان الأصالة' : 'Authenticity guaranteed' },
                { icon: RotateCcw, label: locale === 'ar' ? 'إرجاع خلال 30 يوم' : '30-day returns' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <item.icon className="h-6 w-6 text-gold" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-16 rounded-2xl border border-border bg-card/50 p-8">
          <h2 className="mb-6 font-display text-2xl font-medium text-foreground">
            {locale === 'ar' ? 'المواصفات' : 'Specifications'}
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
            {specs.map((spec, i) => (
              <div key={i}>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">{spec.label}</p>
                <p className="mt-1 text-sm text-foreground capitalize">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{tr.product.ingredients}</p>
            <p className="mt-1 text-sm text-foreground/70">{product.ingredients.join(', ')}</p>
          </div>
        </div>

        {/* Frequently Bought Together */}
        {bundle.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-medium text-foreground">
              {tr.product.frequentlyBought}
            </h2>
            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card/50 p-6 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3">
                {[product, ...bundle].map((p) => (
                  <Link key={p.id} href={`/product/${p.slug}`} className="group">
                    <div className="h-20 w-20 overflow-hidden rounded-lg">
                      <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-110" />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  {tr.product.buyTogether} · <span className="font-semibold text-destructive">{tr.product.save20}</span>
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                  {formatPrice(bundleDiscount, locale)}
                </p>
                <p className="text-sm text-muted-foreground line-through">{formatPrice(bundleTotal, locale)}</p>
                <button
                  onClick={() => {
                    addToCart(product.id, 1, selectedSize);
                    bundle.forEach((p) => addToCart(p.id));
                    toast({ title: 'Bundle added to cart' });
                  }}
                  className="mt-3 rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  {tr.product.buyTogether}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="mb-6 font-display text-2xl font-medium text-foreground">
            {tr.product.customerReviews}
          </h2>
          {product.reviews.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card/50 p-8 text-center">
              <p className="text-muted-foreground">{tr.product.reviewsEmpty}</p>
              <button className="mt-4 rounded-full border border-gold/40 px-6 py-2.5 text-sm font-medium text-foreground transition hover:bg-gold/10">
                {tr.product.writeReview}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="rounded-2xl border border-border bg-card/50 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-sm font-bold text-primary-foreground">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{review.author}</p>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-emerald-500">
                            <Check className="h-3 w-3" /> Verified Purchase
                          </span>
                        )}
                      </div>
                    </div>
                    <StarRating rating={review.rating} size="sm" />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-medium text-foreground">{review.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{review.body}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{review.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-medium text-foreground">
              {tr.product.relatedProducts}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed */}
        {recentlyViewed.length > 1 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-medium text-foreground">
              {tr.product.recentlyViewed}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {recentlyViewed
                .filter((id) => id !== product.id)
                .slice(0, 4)
              .map((id, i) => {
                const p = products.find((pr) => pr.id === id);
                return p ? <ProductCard key={id} product={p} index={i} /> : null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NotesGroup({ title, notes }: { title: string; notes: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {notes.map((note) => (
          <span
            key={note}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}
