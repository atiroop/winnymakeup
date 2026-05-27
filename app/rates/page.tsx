import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rates",
  description:
    "Transparent pricing for bridal, event, editorial, and hair styling services in Bangkok.",
};

export default function RatesPage() {
  const sorted = [...services].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services & Pricing"
          title="Rate Card"
          subtitle="All prices include professional makeup and/or hair. Travel surcharge may apply outside Bangkok."
        />
      </div>

      {/* Rate cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((service, index) => (
            <AnimateOnScroll key={service.id} delay={index * 0.08}>
              <div className="bg-ivory border border-gold/12 hover:border-gold/30 transition-colors duration-300 p-8 h-full flex flex-col relative">
                {service.badge && (
                  <span className="absolute top-5 right-5 font-sans text-[10px] tracking-[0.18em] uppercase text-gold border border-gold/30 px-3 py-1">
                    {service.badge}
                  </span>
                )}

                <p className="font-serif text-4xl font-light text-charcoal/8 mb-4 leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="font-serif text-2xl text-charcoal font-light mb-3">
                  {service.title}
                </h2>
                <div className="w-8 h-px bg-gold mb-5" />

                <p className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-gold mt-[7px] flex-none" />
                      <span className="font-sans text-sm text-charcoal/60">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gold/10 mt-auto">
                  <p className="font-sans text-[10px] tracking-wide text-charcoal/35 mb-1">
                    Starting from
                  </p>
                  <p className="font-serif text-3xl text-charcoal font-light mb-1">
                    ฿{formatPrice(service.price)}
                  </p>
                  {service.duration && (
                    <p className="font-sans text-xs text-charcoal/40 tracking-wide mt-2">
                      Duration: {service.duration}
                    </p>
                  )}
                  {service.travelNote && (
                    <p className="font-sans text-xs text-warm-gray/60 mt-2 italic">
                      * {service.travelNote}
                    </p>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Note + CTA */}
        <AnimateOnScroll className="mt-16 text-center">
          <p className="font-serif italic text-warm-gray text-lg mb-8">
            Prices may vary depending on your location and event requirements.
          </p>
          <Link
            href="/booking"
            className="inline-block font-sans text-[11px] tracking-[0.22em] uppercase bg-charcoal text-ivory px-12 py-4 hover:bg-gold transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
