import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Winny for bridal, event, and editorial makeup bookings in Bangkok.",
};

const contactMethods = [
  {
    id: "instagram",
    label: "Instagram",
    value: "@winnymakeup",
    href: "https://instagram.com/winnymakeup",
    description: "Browse my latest work and send a DM",
    external: true,
  },
  {
    id: "line",
    label: "LINE",
    value: "@winnymakeup",
    href: "https://line.me/ti/p/~winnymakeup",
    description: "Fastest response — ideal for bookings",
    external: true,
  },
  {
    id: "phone",
    label: "Phone / SMS",
    value: "+66 XX XXX XXXX",
    href: "tel:+66000000000",
    description: "Available Mon–Sat, 9am–7pm",
    external: false,
  },
  {
    id: "email",
    label: "Email",
    value: "hello@winnymakeup.net",
    href: "mailto:hello@winnymakeup.net",
    description: "For detailed inquiries and packages",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact"
            subtitle="Reach out to discuss your event, request a quote, or simply say hello."
          />
        </div>
      </div>

      {/* Contact cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {contactMethods.map((method, index) => (
            <AnimateOnScroll key={method.id} delay={index * 0.1}>
              <a
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block p-8 border border-gold/12 hover:border-gold/35 bg-ivory transition-all duration-300 group h-full"
              >
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-4">
                  {method.label}
                </p>
                <p className="font-serif text-xl text-charcoal font-light group-hover:text-gold transition-colors duration-300 mb-2 break-all">
                  {method.value}
                </p>
                <p className="font-sans text-xs text-warm-gray leading-relaxed">
                  {method.description}
                </p>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Location + hours */}
        <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-14 bg-cream border border-gold/10">
          <div>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-4">
              Location
            </p>
            <p className="font-serif text-3xl text-charcoal font-light mb-3">
              Bangkok, Thailand
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              On-location service available across Bangkok.
              <br />
              Nationwide travel available upon request.
            </p>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-4">
              Availability
            </p>
            <p className="font-serif text-3xl text-charcoal font-light mb-3">
              By Appointment
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              Monday – Sunday
              <br />
              Early morning slots available for brides
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="text-center mt-16">
          <p className="font-serif italic text-warm-gray text-lg mb-8">
            Ready to get started?
          </p>
          <Link
            href="/booking"
            className="inline-block font-sans text-[11px] tracking-[0.22em] uppercase bg-charcoal text-ivory px-12 py-4 hover:bg-gold transition-colors duration-300"
          >
            Submit a Booking Inquiry
          </Link>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
