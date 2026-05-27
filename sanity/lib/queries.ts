import { sanityClient } from "../client";

export async function getAllPortfolioItems() {
  return sanityClient.fetch(
    `*[_type == "portfolio"] | order(_createdAt desc) {
      _id, title, slug, category, occasion, location, date,
      coverImage, description, featured, instagramUrl
    }`
  );
}

export async function getFeaturedPortfolioItems() {
  return sanityClient.fetch(
    `*[_type == "portfolio" && featured == true] | order(_createdAt desc) [0...6] {
      _id, title, slug, category, occasion, location, coverImage, description
    }`
  );
}

export async function getPortfolioItemBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "portfolio" && slug.current == $slug][0] {
      _id, title, slug, category, occasion, location, date,
      coverImage, gallery, description, instagramUrl
    }`,
    { slug }
  );
}

export async function getAllRates() {
  return sanityClient.fetch(
    `*[_type == "rate"] | order(sortOrder asc) {
      _id, title, slug, price, description, includes,
      duration, travelNote, featured, badge, sortOrder
    }`
  );
}
