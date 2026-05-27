export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  price: number;
  currency: string;
  description: string;
  includes: string[];
  duration?: string;
  travelNote?: string;
  featured: boolean;
  sortOrder: number;
  badge?: string;
}

export const services: ServiceItem[] = [
  {
    id: "1",
    title: "Bridal Makeup",
    slug: "bridal-makeup",
    price: 5500,
    currency: "THB",
    description:
      "Complete wedding day makeup with pre-wedding consultation and trial included.",
    includes: [
      "Pre-wedding consultation",
      "Trial makeup session",
      "Wedding day makeup",
      "Touch-up essentials kit",
      "Up to 4 hours of service",
    ],
    duration: "2–3 hours",
    travelNote: "Travel surcharge applies outside Bangkok",
    featured: true,
    sortOrder: 1,
    badge: "Popular",
  },
  {
    id: "2",
    title: "Pre-wedding Makeup",
    slug: "pre-wedding-makeup",
    price: 4500,
    currency: "THB",
    description:
      "Photogenic, long-lasting makeup crafted for pre-wedding photoshoots.",
    includes: [
      "Consultation call",
      "Makeup for photoshoot",
      "On-location service available",
      "Up to 3 hours",
    ],
    duration: "1.5–2 hours",
    featured: true,
    sortOrder: 2,
  },
  {
    id: "3",
    title: "Makeup + Hair Package",
    slug: "makeup-hair-package",
    price: 6500,
    currency: "THB",
    description:
      "The complete beauty package — full makeup and hair styling in one seamless session.",
    includes: [
      "Full makeup application",
      "Complete hair styling",
      "Pre-event consultation",
      "Touch-up kit",
    ],
    duration: "2.5–3.5 hours",
    featured: true,
    sortOrder: 3,
    badge: "Best Value",
  },
  {
    id: "4",
    title: "Event Makeup",
    slug: "event-makeup",
    price: 3000,
    currency: "THB",
    description:
      "Polished, photo-ready makeup for galas, parties, and special occasions.",
    includes: [
      "Full makeup application",
      "False lash application",
      "Up to 2 hours",
    ],
    duration: "1–1.5 hours",
    featured: false,
    sortOrder: 4,
  },
  {
    id: "5",
    title: "Graduation Makeup",
    slug: "graduation-makeup",
    price: 2800,
    currency: "THB",
    description:
      "Fresh, radiant makeup to look and feel your best on graduation day.",
    includes: [
      "Full makeup application",
      "Natural lash enhancement",
      "Up to 1.5 hours",
    ],
    duration: "1–1.5 hours",
    featured: false,
    sortOrder: 5,
  },
  {
    id: "6",
    title: "Hair Styling",
    slug: "hair-styling",
    price: 1800,
    currency: "THB",
    description:
      "Expert hair styling — updos, braids, waves, or any look you envision.",
    includes: [
      "Styling consultation",
      "Professional updo or blowout",
      "Finishing spray & accessories",
    ],
    duration: "1–1.5 hours",
    featured: false,
    sortOrder: 6,
  },
];
