export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  occasion?: string;
  location?: string;
  coverImage?: string;
  placeholderGradient: string;
  description?: string;
  featured: boolean;
  instagramUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Timeless Bridal",
    slug: "timeless-bridal",
    category: "Bridal",
    occasion: "Wedding Day",
    location: "Bangkok",
    placeholderGradient: "from-dusty-rose/50 via-cream to-taupe/20",
    description:
      "Soft, luminous bridal makeup that photographs beautifully and stays flawless all day.",
    featured: true,
  },
  {
    id: "2",
    title: "Garden Romance",
    slug: "garden-romance",
    category: "Pre-wedding",
    occasion: "Pre-wedding Photoshoot",
    location: "Chiang Mai",
    placeholderGradient: "from-gold-light/40 via-ivory to-cream-deep",
    description:
      "Natural, dewy makeup crafted for an outdoor garden photoshoot.",
    featured: true,
  },
  {
    id: "3",
    title: "Editorial Glam",
    slug: "editorial-glam",
    category: "Fashion",
    occasion: "Magazine Editorial",
    location: "Bangkok",
    placeholderGradient: "from-taupe/40 via-cream to-warm-gray/20",
    description:
      "Bold, editorial makeup inspired by high-fashion magazines.",
    featured: true,
  },
  {
    id: "4",
    title: "Gala Evening",
    slug: "gala-evening",
    category: "Event",
    occasion: "Charity Gala",
    location: "Bangkok",
    placeholderGradient: "from-cream-deep via-dusty-rose/30 to-gold-light/20",
    description:
      "Sophisticated evening makeup for a high-profile charity gala.",
    featured: true,
  },
  {
    id: "5",
    title: "Graduation Glory",
    slug: "graduation-glory",
    category: "Graduation",
    occasion: "University Graduation",
    location: "Bangkok",
    placeholderGradient: "from-ivory via-gold-light/30 to-cream",
    description:
      "Fresh, polished makeup for a memorable graduation day.",
    featured: false,
  },
  {
    id: "6",
    title: "Boho Braids",
    slug: "boho-braids",
    category: "Hair Styling",
    occasion: "Destination Wedding",
    location: "Koh Samui",
    placeholderGradient: "from-warm-gray/20 via-cream to-dusty-rose/30",
    description:
      "Romantic bohemian braided hair styling for a beachside ceremony.",
    featured: false,
  },
  {
    id: "7",
    title: "Monochrome Bride",
    slug: "monochrome-bride",
    category: "Bridal",
    occasion: "Chinese Tea Ceremony",
    location: "Bangkok",
    placeholderGradient: "from-cream-deep via-taupe/20 to-cream",
    description:
      "Elegant, refined makeup for a traditional Chinese wedding ceremony.",
    featured: false,
  },
  {
    id: "8",
    title: "Party Glam",
    slug: "party-glam",
    category: "Event",
    occasion: "New Year's Eve Party",
    location: "Bangkok",
    placeholderGradient: "from-gold-light/40 via-cream to-dusty-rose/20",
    description:
      "Glamorous festive makeup perfect for a night to remember.",
    featured: false,
  },
];

export const portfolioCategories = [
  "All",
  "Bridal",
  "Pre-wedding",
  "Fashion",
  "Event",
  "Graduation",
  "Hair Styling",
];
