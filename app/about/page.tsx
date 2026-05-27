import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Winny — a luxury makeup artist based in Bangkok specialising in bridal, editorial, and event makeup.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-16 md:py-24">
            {/* Portrait placeholder */}
            <AnimateOnScroll direction="right">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/45 via-cream-deep to-taupe/35">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 14px,
                        rgba(201,168,108,0.06) 14px,
                        rgba(201,168,108,0.06) 15px
                      )`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="font-serif font-light text-charcoal/[0.06] text-[20rem] leading-none">
                      W
                    </span>
                  </div>
                </div>
                {/* Replace with: <Image src="/images/about.jpg" alt="Winny" fill className="object-cover" /> */}
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <div className="space-y-8">
              <SectionHeading
                eyebrow="About"
                title="Meet Winny"
                subtitle="Bangkok's luxury makeup artist"
              />

              <div className="space-y-5 font-sans text-sm text-charcoal/70 leading-relaxed">
                <AnimateOnScroll delay={0.1}>
                  <p>
                    With over a decade of experience in professional makeup artistry,
                    Winny brings a unique blend of technical precision and artistic vision
                    to every look she creates. Trained in both classic beauty and
                    contemporary editorial techniques, her work spans bridal ceremonies,
                    fashion editorials, and high-profile events across Thailand and beyond.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.15}>
                  <p>
                    Winny believes that exceptional makeup is more than technique —
                    it&apos;s about understanding each client&apos;s unique beauty and
                    bringing out their most confident, radiant self. Every appointment
                    begins with a conversation, ensuring each look is as individual as
                    the person wearing it.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                  <p>
                    Fluent in Thai and English, Winny works with brides, models,
                    celebrities, and everyday clients who want to look and feel their
                    absolute best — whether for a once-in-a-lifetime wedding or a
                    spontaneous night out.
                  </p>
                </AnimateOnScroll>
              </div>

              <AnimateOnScroll delay={0.25} className="flex gap-6">
                <Link
                  href="/portfolio"
                  className="font-sans text-[11px] tracking-[0.18em] uppercase border border-charcoal text-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-ivory transition-all duration-300"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/booking"
                  className="font-sans text-[11px] tracking-[0.18em] uppercase bg-gold text-ivory px-8 py-3.5 hover:bg-gold-dark transition-all duration-300"
                >
                  Book Now
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials / stats */}
      <div className="bg-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "10+", label: "Years Experience" },
              { stat: "500+", label: "Happy Clients" },
              { stat: "200+", label: "Weddings" },
              { stat: "50+", label: "Editorial Projects" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="space-y-2">
                  <p className="font-serif text-4xl md:text-5xl text-charcoal font-light">
                    {item.stat}
                  </p>
                  <div className="w-6 h-px bg-gold mx-auto" />
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-warm-gray">
                    {item.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-24 md:py-32 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <AnimateOnScroll direction="none">
            <span className="font-serif text-5xl text-gold/25 select-none">&ldquo;</span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="font-serif text-2xl md:text-3xl text-charcoal font-light italic leading-relaxed -mt-3">
              My work is about more than makeup. It&apos;s about creating a moment where
              you look in the mirror and feel completely, effortlessly yourself.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="mt-6">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold">
              — Winny
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
