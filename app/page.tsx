import HeroSection from "@/components/sections/HeroSection";
import FeaturedPortfolio from "@/components/sections/FeaturedPortfolio";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BookingCTA from "@/components/sections/BookingCTA";
import ContactSection from "@/components/sections/ContactSection";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HeroSection heroImage={siteConfig.heroImage || undefined} />
      <FeaturedPortfolio />
      <ServicesSection />
      <TestimonialsSection />
      <BookingCTA />
      <ContactSection />
    </>
  );
}
