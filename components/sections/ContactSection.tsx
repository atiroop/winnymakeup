import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const contactMethods = [
  {
    id: "instagram",
    label: "Instagram",
    value: "@winnymakeup",
    href: "https://instagram.com/winnymakeup",
    description: "Latest work & updates",
    external: true,
  },
  {
    id: "line",
    label: "LINE",
    value: "@winnymakeup",
    href: "https://line.me/ti/p/~winnymakeup",
    description: "Quick bookings & inquiries",
    external: true,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+66 XX XXX XXXX",
    href: "tel:+66000000000",
    description: "Direct call or SMS",
    external: false,
  },
  {
    id: "email",
    label: "Email",
    value: "hello@winnymakeup.net",
    href: "mailto:hello@winnymakeup.net",
    description: "For detailed inquiries",
    external: false,
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Contact"
              subtitle="Available for bridal, editorial, and event bookings across Bangkok and Thailand."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <AnimateOnScroll key={method.id} delay={index * 0.09}>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="block p-6 bg-ivory border border-gold/12 hover:border-gold/35 transition-all duration-300 group"
                >
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
                    {method.label}
                  </p>
                  <p className="font-serif text-lg text-charcoal group-hover:text-gold transition-colors duration-300 mb-1 break-all">
                    {method.value}
                  </p>
                  <p className="font-sans text-xs text-warm-gray">
                    {method.description}
                  </p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll delay={0.2} className="mt-16 pt-12 border-t border-gold/12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                Location
              </p>
              <p className="font-serif text-2xl text-charcoal font-light">
                Bangkok, Thailand
              </p>
              <p className="font-sans text-sm text-warm-gray mt-1.5">
                Available for on-location service nationwide
              </p>
            </div>
            <a
              href="https://instagram.com/winnymakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] tracking-[0.18em] uppercase border border-charcoal text-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-ivory transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
