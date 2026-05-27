"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import PortfolioCard from "@/components/ui/PortfolioCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function PortfolioPageClient() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Page header */}
      <div className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Work"
          title="Portfolio"
          subtitle="A curated collection of makeup artistry and hair styling"
        />
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-ivory/96 backdrop-blur-sm border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide py-4">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans text-[11px] tracking-[0.18em] uppercase whitespace-nowrap pb-0.5 border-b transition-colors duration-300 ${
                  active === cat
                    ? "text-gold border-gold"
                    : "text-charcoal/45 border-transparent hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          >
            {filtered.map((item, index) => (
              <AnimateOnScroll key={item.id} delay={Math.min(index * 0.05, 0.3)}>
                <PortfolioCard item={item} priority={index < 4} />
              </AnimateOnScroll>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-serif text-xl text-warm-gray italic">
              No items in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
