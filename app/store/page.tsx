"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ImageGrain from "@/app/components/ImageGrain";
import FadeUp from "@/app/components/FadeUp";
import { store, STORE_CATEGORIES, wa, waLink, type StoreCategory, type Product } from "@/content/site";

// ─── Cart types ───────────────────────────────────────────────────────────────
type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  qty: number;
};

export default function StorePage() {
  const router = useRouter();

  // Filter state
  const [active, setActive] = useState<StoreCategory>("All");

  // Size selections per product
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>(() =>
    Object.fromEntries(store.products.map((p) => [p.name, p.sizes?.[0] ?? ""]))
  );

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered =
    active === "All"
      ? store.products
      : store.products.filter((p) => p.category === active);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function addToCart(p: Product) {
    const size = selectedSizes[p.name] ?? p.sizes?.[0] ?? "";
    const id = `${p.name}::${size}`;
    setCart((prev) => {
      const ex = prev.find((i) => i.id === id);
      if (ex) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id, name: p.name, size, price: p.price, image: p.image, qty: 1 }];
    });
    setCartOpen(true);
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
    );
  }

  function handleCheckout() {
    setCartOpen(false);
    setCart([]);
    router.push("/");
  }

  return (
    <>
      {/* ── 1. Hero with duotone red treatment ──────────────────────────── */}
      <section id="hero" className="relative overflow-hidden border-b border-white/10 min-h-[50vh] flex items-end">
        <Image
          src={store.hero.image}
          alt={store.hero.imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Red tint layer — gives the image a branded editorial feel */}
        <div className="absolute inset-0 bg-accent/20 tint-red z-[2]" />
        <ImageGrain opacity={0.05} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/88 z-[3]" />
        <div className="relative z-[4] max-w-7xl mx-auto w-full px-4 pb-12 md:px-10 md:pb-16">
          <h1 className="font-display text-[clamp(3.5rem,13vw,8rem)] leading-none text-off-white">
            {store.hero.headline}
          </h1>
          <p className="mt-3 font-body text-sm text-off-white/55 max-w-md">{store.hero.sub}</p>
        </div>
      </section>

      {/* ── 2. Category filter ──────────────────────────────────────────── */}
      <section className="bg-base border-b border-white/10 sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {STORE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`shrink-0 min-h-[44px] px-5 py-2 font-body text-xs uppercase tracking-widest transition-colors ${
                active === cat
                  ? "bg-accent text-off-white"
                  : "bg-surface text-off-white/50 hover:text-off-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── 3. Product grid ─────────────────────────────────────────────── */}
      <FadeUp>
        <section id="products" className="bg-base py-10 md:py-14 px-4 md:px-10 min-h-[55vh]">
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <p className="py-20 text-center font-body text-sm text-off-white/30">
                No products in this category.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.08]">
                {filtered.map((product) => (
                  <div key={product.name} className="bg-base flex flex-col group">
                    {/* Product image — object-contain on off-white background */}
                    <div className="aspect-square relative overflow-hidden bg-[#F5F3EF]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-contain p-5 md:p-8 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-4">
                      <p className="font-body text-[10px] text-off-white/35 uppercase tracking-widest">
                        {product.category}
                      </p>
                      <p className="font-body text-sm md:text-base text-off-white/90 mt-1 font-medium leading-snug flex-1">
                        {product.name}
                      </p>
                      <span className="font-display text-xl text-off-white mt-3 block">
                        {product.priceStr}
                      </span>

                      {/* Size selector */}
                      {product.sizes && product.sizes.length > 0 && (
                        <select
                          value={selectedSizes[product.name] ?? product.sizes[0]}
                          onChange={(e) =>
                            setSelectedSizes((prev) => ({ ...prev, [product.name]: e.target.value }))
                          }
                          aria-label={`Size for ${product.name}`}
                          className="mt-3 w-full bg-surface border border-white/10 text-off-white/70 text-xs py-2.5 px-3 font-body uppercase tracking-wider appearance-none cursor-pointer hover:border-white/25 transition-colors"
                        >
                          {product.sizes.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      )}

                      {/* CTAs */}
                      <div className="mt-3 flex flex-col gap-2">
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full bg-accent py-2.5 font-body text-[11px] uppercase tracking-widest text-off-white hover:bg-accent-hover transition-colors min-h-[40px]"
                        >
                          Add to cart
                        </button>
                        <a
                          href={waLink(
                            wa.messages.order(
                              product.name,
                              selectedSizes[product.name] ?? product.sizes?.[0]
                            )
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center border border-white/15 py-2.5 font-body text-[11px] uppercase tracking-widest text-off-white/50 hover:border-white/30 hover:text-off-white/80 transition-colors"
                        >
                          Order on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </FadeUp>

      {/* ── 4. Info band ────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-white/10 py-7 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-accent text-base shrink-0" aria-hidden>↗</span>
          <p className="font-body text-sm text-off-white/50">{store.note}</p>
        </div>
      </section>

      {/* ── Floating cart button ─────────────────────────────────────────── */}
      {cartCount > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-4 md:right-6 z-30 bg-accent text-off-white flex items-center gap-3 px-5 py-3 font-body text-xs uppercase tracking-widest hover:bg-accent-hover transition-colors"
          aria-label={`Open cart, ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
        >
          Cart
          <span className="bg-off-white text-accent w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0">
            {cartCount}
          </span>
        </button>
      )}

      {/* ── Cart overlay ─────────────────────────────────────────────────── */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setCartOpen(false)}
          aria-hidden
        />
      )}

      {/* ── Cart drawer ──────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-label="Your cart"
        aria-modal="true"
        className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-sm bg-base border-l border-white/10 z-50 flex flex-col ${cartOpen ? "open" : ""}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          <h2 className="font-display text-xl text-off-white">
            Cart{cartCount > 0 ? ` (${cartCount})` : ""}
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="text-off-white/50 hover:text-off-white transition-colors text-xl w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {cart.length === 0 ? (
            <p className="font-body text-sm text-off-white/35 text-center py-12">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-16 h-16 relative bg-[#F5F3EF] shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-1.5" sizes="64px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm text-off-white/90 font-medium leading-snug truncate">{item.name}</p>
                  {item.size && (
                    <p className="font-body text-xs text-off-white/40 mt-0.5">{item.size}</p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="Remove one"
                        className="w-7 h-7 bg-surface text-off-white/60 hover:text-off-white flex items-center justify-center text-sm transition-colors"
                      >
                        −
                      </button>
                      <span className="font-body text-sm text-off-white w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="Add one"
                        className="w-7 h-7 bg-surface text-off-white/60 hover:text-off-white flex items-center justify-center text-sm transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-display text-sm text-off-white">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-white/10 px-5 py-5 space-y-4 shrink-0">
            <div className="flex justify-between items-baseline">
              <span className="font-body text-xs uppercase tracking-widest text-off-white/40">Subtotal</span>
              <span className="font-display text-2xl text-off-white">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="font-body text-xs text-off-white/25 leading-relaxed">
              Pay on pickup. We'll confirm your order via WhatsApp.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-accent py-4 font-body text-xs uppercase tracking-widest text-off-white hover:bg-accent-hover transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
