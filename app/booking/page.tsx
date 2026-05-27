import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Submit a booking inquiry for bridal, event, or editorial makeup with Winny in Bangkok.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading + info */}
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Booking Inquiry"
              title="Book a Session"
              subtitle="Fill in the form and I'll get back to you within 24 hours."
            />

            <AnimateOnScroll delay={0.2} className="space-y-6 text-sm font-sans">
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-2">
                  Response Time
                </p>
                <p className="text-charcoal/65 leading-relaxed">
                  I reply to all inquiries within 24 hours, usually sooner via
                  LINE.
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-2">
                  What Happens Next
                </p>
                <p className="text-charcoal/65 leading-relaxed">
                  After your inquiry, we&apos;ll schedule a brief consultation call or
                  LINE chat to discuss your vision, confirm availability, and
                  finalize the details.
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-2">
                  Contact Directly
                </p>
                <div className="space-y-1 text-charcoal/65">
                  <p>LINE: @winnymakeup</p>
                  <p>Instagram: @winnymakeup</p>
                  <a
                    href="mailto:hello@winnymakeup.net"
                    className="block hover:text-gold transition-colors"
                  >
                    hello@winnymakeup.net
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: form */}
          <AnimateOnScroll delay={0.15}>
            <BookingForm />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
