import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import PortfolioCard from "@/components/ui/PortfolioCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FeaturedPortfolio() {
  const featured = portfolioItems.filter((item) => item.featured).slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Portfolio"
            subtitle="A curated selection of recent work"
          />
          <AnimateOnScroll direction="left">
            <Link
              href="/portfolio"
              className="font-sans text-[11px] tracking-[0.22em] uppercase text-charcoal/55 hover:text-gold transition-colors flex items-center gap-3 group"
            >
              View All Work
              <span className="w-8 h-px bg-charcoal/35 group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featured.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 0.1}>
              <PortfolioCard item={item} priority={index < 2} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
