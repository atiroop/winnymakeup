"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  heroImage?: string;
}

const MARQUEE_ITEMS = [
  "BRIDAL", "PRE-WEDDING", "EDITORIAL",
  "EVENT", "GRADUATION", "HAIR STYLING",
];

const stats = [
  { num: "150+", label: "Brides" },
  { num: "8",    label: "Years" },
  { num: "5★",   label: "Rated" },
];

const floatingTags = ["Bridal", "Editorial", "Event"];

export default function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col">

      {/* ─── Main split ─────────────────────────────── */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* ── Left: Text ─────────────────────────────── */}
        <div className="relative z-10 flex-none md:w-[45%] flex flex-col justify-between
                        px-8 md:px-16 lg:px-20 pt-32 pb-10 md:pt-28 md:pb-14
                        bg-ivory order-2 md:order-1">

          {/* Est. label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-px bg-gold" />
            <span className="font-sans text-[9px] tracking-[0.42em] uppercase text-gold">
              Est. 2015 · Bangkok
            </span>
          </motion.div>

          {/* Core copy */}
          <div className="max-w-md mt-10 mb-auto">

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-sans text-[10px] tracking-[0.38em] uppercase text-warm-gray mb-5"
            >
              Luxury Makeup Artist
            </motion.p>

            {/* Headline — slides up from clip */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.28, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-light text-charcoal leading-[0.88] tracking-tight"
                style={{ fontSize: "clamp(4.5rem, 10vw, 8rem)" }}
              >
                Winny
              </motion.h1>
            </div>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.72, duration: 0.9, ease: "easeOut" }}
              className="w-16 h-px bg-gold origin-left mb-5"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82, duration: 0.8 }}
              className="font-serif text-lg md:text-xl text-warm-gray font-light italic leading-relaxed mb-2"
            >
              Bridal · Editorial · Event Makeup
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.92, duration: 0.8 }}
              className="font-sans text-[10px] tracking-[0.32em] uppercase text-charcoal/35 mb-10"
            >
              Bangkok / Thailand
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.02, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/portfolio"
                className="font-sans text-[10px] tracking-[0.22em] uppercase
                           border border-charcoal text-charcoal px-8 py-3.5
                           hover:bg-charcoal hover:text-ivory transition-all duration-300 text-center"
              >
                View Portfolio
              </Link>
              <Link
                href="/booking"
                className="font-sans text-[10px] tracking-[0.22em] uppercase
                           bg-gold text-ivory px-8 py-3.5
                           hover:bg-gold-dark transition-all duration-300 text-center"
              >
                Book a Session
              </Link>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 pt-8 mt-10 border-t border-charcoal/[0.08]"
          >
            {stats.map(({ num, label }) => (
              <div key={label} className="space-y-1">
                <p className="font-serif text-2xl font-light text-charcoal">{num}</p>
                <p className="font-sans text-[9px] tracking-[0.26em] uppercase text-charcoal/40">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Image ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="flex-1 min-h-[75vw] md:min-h-0 relative order-1 md:order-2 overflow-hidden"
        >
          {/* Hero image or placeholder */}
          {heroImage ? (
            <Image
              src={heroImage}
              alt="Winny Makeup Artist"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/55 via-cream-deep to-taupe/45">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(ellipse at 30% 25%, rgba(232,213,163,0.18) 0%, transparent 55%),
                    radial-gradient(ellipse at 70% 75%, rgba(212,181,168,0.22) 0%, transparent 55%)
                  `,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span
                  className="font-serif font-light text-charcoal/[0.05]"
                  style={{ fontSize: "clamp(10rem, 28vw, 22rem)" }}
                >
                  W
                </span>
              </div>
            </div>
          )}

          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-charcoal/25 to-transparent pointer-events-none" />

          {/* Floating category tags (top-right) */}
          <div className="absolute top-8 right-6 flex flex-col gap-2">
            {floatingTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.12, duration: 0.6 }}
                className="font-sans text-[9px] tracking-[0.22em] uppercase
                           bg-ivory/88 backdrop-blur-sm text-charcoal/65 px-3 py-1.5"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Floating testimonial card (bottom-left) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-8 left-6 max-w-[200px] hidden md:block"
          >
            <div className="bg-ivory/92 backdrop-blur-sm px-4 py-3 border-l-2 border-gold">
              <p className="font-serif text-[11px] italic text-charcoal/70 leading-relaxed">
                "Making every bride feel effortlessly beautiful."
              </p>
            </div>
          </motion.div>

          {/* Scroll hint (bottom-right) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3"
          >
            <div className="w-px h-12 bg-ivory/40" />
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-ivory/50 [writing-mode:vertical-lr]">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Marquee strip ──────────────────────────── */}
      <div className="bg-charcoal overflow-hidden py-[11px] flex-none select-none">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="flex whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center">
              {MARQUEE_ITEMS.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="font-sans text-[9px] tracking-[0.38em] text-ivory/60 px-7">
                    {item}
                  </span>
                  <span className="text-gold/50 text-[8px]">◆</span>
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
