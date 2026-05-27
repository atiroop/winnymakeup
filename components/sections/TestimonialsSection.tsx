import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 text-center">
          <SectionHeading
            eyebrow="Client Stories"
            title="Testimonials"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <AnimateOnScroll key={t.id} delay={index * 0.14}>
              <div className="p-8 border border-gold/12 hover:border-gold/25 transition-colors duration-300 h-full flex flex-col">
                <span className="font-serif text-6xl text-gold/25 leading-none select-none -mb-2">
                  &ldquo;
                </span>
                <p className="font-serif text-[1.05rem] text-charcoal/75 font-light italic leading-relaxed flex-1 mb-8">
                  {t.quote}
                </p>
                <div className="border-t border-gold/10 pt-5">
                  <p className="font-sans text-sm text-charcoal font-medium">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-warm-gray tracking-wide mt-1">
                    {t.occasion}
                    {t.date && ` · ${t.date}`}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
