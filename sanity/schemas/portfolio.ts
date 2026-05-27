export const portfolioSchema = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R: any) => R.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (R: any) => R.required() },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Bridal",
          "Pre-wedding",
          "Fashion",
          "Event",
          "Graduation",
          "Hair Styling",
        ],
      },
    },
    { name: "occasion", title: "Occasion", type: "string" },
    { name: "location", title: "Location", type: "string" },
    { name: "date", title: "Date", type: "date" },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    { name: "description", title: "Description", type: "text" },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "instagramUrl", title: "Instagram URL", type: "url" },
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "category" },
  },
};
