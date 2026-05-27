import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function BookingCTA() {
  return (
    <section className="py-24 md:py-40 bg-charcoal relative overflow-hidden">
      {/* Decorative radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 50%, rgba(201,168,108,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 50%, rgba(212,181,168,0.05) 0%, transparent 55%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/18 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/18 to-transparent" />

      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center relative">
        <AnimateOnScroll direction="none">
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold mb-7">
            Ready to Book?
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory font-light leading-tight mb-6">
            Let&apos;s Create Your
            <br />
            <em>Perfect Look</em>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="font-sans text-sm text-ivory/45 leading-relaxed mb-12 max-w-sm mx-auto">
            Whether it&apos;s your wedding day, an editorial shoot, or a special
            event — I&apos;m here to make you feel truly beautiful.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="font-sans text-[11px] tracking-[0.18em] uppercase bg-gold text-ivory px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Book a Session
          </Link>
          <Link
            href="/rates"
            className="font-sans text-[11px] tracking-[0.18em] uppercase border border-ivory/18 text-ivory/65 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300"
          >
            View Rates
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
