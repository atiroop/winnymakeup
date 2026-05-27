export interface Testimonial {
  id: string;
  name: string;
  occasion: string;
  quote: string;
  date?: string;
  rating: number;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nattawan P.",
    occasion: "Bridal Makeup",
    quote:
      "Winny made me feel like the most beautiful version of myself on my wedding day. The makeup stayed flawless from morning until the last dance. I've never received so many compliments in my life.",
    date: "March 2024",
    rating: 5,
    location: "Bangkok",
  },
  {
    id: "2",
    name: "Pimchanok S.",
    occasion: "Pre-wedding Photoshoot",
    quote:
      "The most talented makeup artist I've ever worked with. She understood exactly what I wanted from my mood board and brought it to life beautifully. My photos look like they belong in a magazine.",
    date: "January 2024",
    rating: 5,
    location: "Chiang Mai",
  },
  {
    id: "3",
    name: "Somrudee J.",
    occasion: "Gala Event",
    quote:
      "I've booked Winny for three events now and I keep coming back. She's professional, punctual, and the results are consistently stunning. Highly recommend for any special occasion.",
    date: "November 2023",
    rating: 5,
    location: "Bangkok",
  },
];
