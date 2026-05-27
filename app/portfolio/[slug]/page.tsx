import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/* ── Static generation ─────────────────────────────────── */

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | Winny Makeup Artist`,
    description: item.description,
  };
}

/* ── Page ───────────────────────────────────────────────── */

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);
  if (!item) notFound();

  const related = portfolioItems
    .filter((i) => i.slug !== slug && i.category === item.category)
    .slice(0, 3);

  const otherRelated = related.length < 3
    ? portfolioItems
        .filter((i) => i.slug !== slug && i.category !== item.category)
        .slice(0, 3 - related.length)
    : [];

  const relatedItems = [...related, ...otherRelated];

  return (
    <main className="bg-ivory min-h-screen">

      {/* ── Hero image ───────────────────────────────── */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-cream-deep">
        {item.coverImage ? (
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${item.placeholderGradient}`}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span
                className="font-serif font-light text-charcoal/[0.06]"
                style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
              >
                W
              </span>
            </div>
          </div>
        )}
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ivory to-transparent" />
      </div>

      {/* ── Content ──────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-8 relative z-10">

        {/* Back link */}
        <AnimateOnScroll className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.22em] uppercase
                       text-charcoal/45 hover:text-gold transition-colors duration-300"
          >
            <span className="w-5 h-px bg-current" />
            Back to Portfolio
          </Link>
        </AnimateOnScroll>

        {/* Category tag */}
        <AnimateOnScroll>
          <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold">
            {item.category}
          </span>
        </AnimateOnScroll>

        {/* Title */}
        <AnimateOnScroll className="mt-3 mb-6">
          <h1 className="font-serif font-light text-charcoal leading-tight"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
            {item.title}
          </h1>
        </AnimateOnScroll>

        {/* Gold rule */}
        <AnimateOnScroll>
          <div className="w-14 h-px bg-gold mb-8" />
        </AnimateOnScroll>

        {/* Meta row */}
        <AnimateOnScroll>
          <dl className="flex flex-wrap gap-x-10 gap-y-3 mb-10">
            {item.occasion && (
              <div>
                <dt className="font-sans text-[9px] tracking-[0.28em] uppercase text-charcoal/35 mb-0.5">Occasion</dt>
                <dd className="font-sans text-sm text-charcoal/70">{item.occasion}</dd>
              </div>
            )}
            {item.location && (
              <div>
                <dt className="font-sans text-[9px] tracking-[0.28em] uppercase text-charcoal/35 mb-0.5">Location</dt>
                <dd className="font-sans text-sm text-charcoal/70">{item.location}</dd>
              </div>
            )}
            <div>
              <dt className="font-sans text-[9px] tracking-[0.28em] uppercase text-charcoal/35 mb-0.5">Service</dt>
              <dd className="font-sans text-sm text-charcoal/70">{item.category}</dd>
            </div>
          </dl>
        </AnimateOnScroll>

        {/* Description */}
        {item.description && (
          <AnimateOnScroll className="mb-12">
            <p className="font-serif text-lg md:text-xl text-warm-gray font-light leading-relaxed max-w-xl">
              {item.description}
            </p>
          </AnimateOnScroll>
        )}

        {/* Gallery (when real images are added) */}
        {item.galleryImages && item.galleryImages.length > 0 && (
          <AnimateOnScroll className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {item.galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${item.title} — photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        )}

        {/* CTA */}
        <AnimateOnScroll className="py-14 border-t border-charcoal/[0.07]">
          <p className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-2">
            Love this look?
          </p>
          <p className="font-sans text-sm text-warm-gray mb-8">
            Book a session and let&apos;s create something beautiful together.
          </p>
          <Link
            href="/booking"
            className="inline-block font-sans text-[10px] tracking-[0.22em] uppercase
                       bg-gold text-ivory px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Book a Session
          </Link>
        </AnimateOnScroll>
      </div>

      {/* ── Related work ─────────────────────────────── */}
      {relatedItems.length > 0 && (
        <section className="py-20 bg-cream/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <AnimateOnScroll className="mb-10">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-2">More Work</p>
              <h2 className="font-serif text-3xl font-light text-charcoal">Related Projects</h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedItems.map((rel) => (
                <AnimateOnScroll key={rel.id}>
                  <Link href={`/portfolio/${rel.slug}`} className="group block">
                    <div className="relative overflow-hidden aspect-[4/5]">
                      {rel.coverImage ? (
                        <Image
                          src={rel.coverImage}
                          alt={rel.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${rel.placeholderGradient}`}>
                          <div className="absolute inset-0 flex items-center justify-center select-none">
                            <span className="font-serif text-[6rem] font-light text-charcoal/[0.07]">W</span>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="font-sans text-[9px] tracking-[0.15em] uppercase bg-ivory/90 backdrop-blur-sm text-charcoal px-3 py-1.5">
                          {rel.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="font-serif text-base text-ivory font-light">{rel.title}</p>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
