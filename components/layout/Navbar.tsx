"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/rates", label: "Rates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ivory/96 backdrop-blur-sm shadow-sm border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl tracking-[0.22em] font-light text-charcoal hover:text-gold transition-colors duration-300"
        >
          WINNY
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-gold"
                  : "text-charcoal/55 hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="font-sans text-[11px] tracking-[0.18em] uppercase bg-charcoal text-ivory px-6 py-2.5 hover:bg-gold transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 flex flex-col gap-[5px] cursor-pointer"
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5 h-px bg-charcoal origin-center transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-charcoal origin-center transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-ivory/97 border-t border-gold/10"
          >
            <div className="flex flex-col px-6 py-8 gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[11px] tracking-[0.22em] uppercase ${
                    pathname === link.href ? "text-gold" : "text-charcoal/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="font-sans text-[11px] tracking-[0.18em] uppercase bg-charcoal text-ivory px-6 py-4 text-center mt-2 hover:bg-gold transition-colors"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
