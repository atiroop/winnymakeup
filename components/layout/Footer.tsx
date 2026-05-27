import Link from "next/link";

const footerLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/rates", label: "Rates" },
  { href: "/booking", label: "Book Now" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-serif text-2xl tracking-[0.22em] text-ivory font-light hover:text-gold transition-colors"
            >
              WINNY
            </Link>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold">
              Luxury Makeup Artist
            </p>
            <p className="font-sans text-sm text-ivory/40 leading-relaxed">
              Bridal · Editorial · Event Makeup
              <br />
              Bangkok, Thailand
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-ivory/30">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-ivory/30">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/winnymakeup"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors duration-300 w-fit"
              >
                Instagram
              </a>
              <span className="font-sans text-sm text-ivory/50">
                LINE: @winnymakeup
              </span>
              <a
                href="mailto:hello@winnymakeup.net"
                className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors duration-300 w-fit"
              >
                hello@winnymakeup.net
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-ivory/25">
            © {new Date().getFullYear()} Winny Makeup Artist. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ivory/20">Bangkok, Thailand</p>
        </div>
      </div>
    </footer>
  );
}
