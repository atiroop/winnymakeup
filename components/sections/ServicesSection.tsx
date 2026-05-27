import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { formatPrice } from "@/lib/utils";

export default function ServicesSection() {
  const featured = services.filter((s) => s.featured);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="Services & Pricing"
            title="Rates"
            subtitle="Transparent pricing for every occasion"
          />
          <AnimateOnScroll direction="left">
            <Link
              href="/rates"
              className="font-sans text-[11px] tracking-[0.22em] uppercase text-charcoal/55 hover:text-gold transition-colors flex items-center gap-3 group"
            >
              Full Rate Card
              <span className="w-8 h-px bg-charcoal/35 group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((service, index) => (
            <AnimateOnScroll key={service.id} delay={index * 0.12}>
              <div className="bg-ivory p-8 border border-gold/12 hover:border-gold/35 transition-colors duration-400 relative h-full flex flex-col">
                {service.badge && (
                  <span className="absolute top-5 right-5 font-sans text-[10px] tracking-[0.18em] uppercase text-gold border border-gold/35 px-3 py-1">
                    {service.badge}
                  </span>
                )}

                <p className="font-serif text-5xl font-light text-charcoal/8 mb-4 leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="font-serif text-2xl text-charcoal font-light mb-3">
                  {service.title}
                </h3>

                <div className="w-8 h-px bg-gold mb-5" />

                <p className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-gold mt-[7px] flex-none" />
                      <span className="font-sans text-sm text-charcoal/60">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between mt-auto pt-6 border-t border-gold/10">
                  <div>
                    <p className="font-sans text-[10px] text-charcoal/35 mb-1 tracking-wide">
                      Starting from
                    </p>
                    <p className="font-serif text-3xl text-charcoal font-light">
                      ฿{formatPrice(service.price)}
                    </p>
                  </div>
                  {service.duration && (
                    <p className="font-sans text-xs text-charcoal/35 tracking-wide">
                      {service.duration}
                    </p>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <Link
            href="/booking"
            className="inline-block font-sans text-[11px] tracking-[0.22em] uppercase bg-charcoal text-ivory px-10 py-4 hover:bg-gold transition-colors duration-300"
          >
            Book a Session
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
