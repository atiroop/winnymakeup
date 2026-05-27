"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  heroImage?: string;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* ── Text column ─────────────────────────────── */}
      <div className="relative z-10 flex-none md:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-36 md:py-24 bg-ivory order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-md"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold mb-7"
          >
            Luxury Makeup Artist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="font-serif text-7xl md:text-8xl lg:text-[6.5rem] font-light text-charcoal leading-none mb-7"
          >
            Winny
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
            className="w-14 h-px bg-gold origin-left mb-7"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="font-serif text-xl md:text-2xl text-warm-gray font-light italic mb-3"
          >
            Bridal · Editorial · Event Makeup
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="font-sans text-[11px] tracking-[0.28em] uppercase text-charcoal/40 mb-12"
          >
            Bangkok / Thailand
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/portfolio"
              className="font-sans text-[11px] tracking-[0.18em] uppercase border border-charcoal text-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-ivory transition-all duration-300 text-center"
            >
              View Portfolio
            </Link>
            <Link
              href="/booking"
              className="font-sans text-[11px] tracking-[0.18em] uppercase bg-gold text-ivory px-8 py-3.5 hover:bg-gold-dark transition-all duration-300 text-center"
            >
              Book a Session
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-10 left-8 md:left-16 lg:left-20 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-gold/40" />
          <p className="font-sans text-[10px] text-charcoal/30 tracking-widest uppercase">
            Making You Feel Beautiful
          </p>
        </motion.div>
      </div>

      {/* ── Image column ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="flex-1 min-h-[65vw] md:min-h-0 relative order-1 md:order-2 overflow-hidden"
      >
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
              <span className="font-serif font-light text-charcoal/[0.05]" style={{ fontSize: "clamp(12rem, 30vw, 24rem)" }}>
                W
              </span>
            </div>
          </div>
        )}

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3"
        >
          <div className="w-px h-14 bg-charcoal/20" />
          <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-charcoal/35 [writing-mode:vertical-lr]">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
