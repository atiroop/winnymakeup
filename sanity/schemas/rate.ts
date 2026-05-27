export const rateSchema = {
  name: "rate",
  title: "Rate Card",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R: any) => R.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "price", title: "Price (THB)", type: "number" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "includes",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "duration", title: "Duration", type: "string" },
    { name: "travelNote", title: "Travel Note", type: "string" },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "badge", title: "Badge (e.g. Popular)", type: "string" },
    { name: "sortOrder", title: "Sort Order", type: "number" },
  ],
  orderings: [{ title: "Sort Order", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "price" },
    prepare: ({ title, subtitle }: any) => ({ title, subtitle: subtitle ? `฿${subtitle.toLocaleString()}` : "" }),
  },
};
