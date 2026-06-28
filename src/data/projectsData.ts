// Define the project type
export type Project = {
  title: string;
  domain: string;
  description: string;
  url: string;
  previewImage?: string;
  role: string;
  accent: string;
  tags: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Zeiko",
    domain: "zeiko.io",
    description:
      "AI customer agents and business tools for small teams that need support, commerce, and operations handled from one system.",
    url: "https://zeiko.io",
    previewImage: "/images/project-previews/zeiko-live.png",
    role: "AI product engineering",
    accent: "from-sky-500 to-blue-700",
    tags: ["Next.js", "AI agents", "Supabase", "Shopify", "Support tooling"],
    highlights: ["Agent workflows", "Customer support", "Business operations"]
  },
  {
    title: "Millennium Marine",
    domain: "millenniummarine.ca",
    description:
      "A Canadian marine manufacturer website for boat models, quote requests, brochures, brand heritage, and build-your-boat discovery.",
    url: "https://millenniummarine.ca",
    previewImage: "/images/project-previews/millennium-live.png",
    role: "Marine manufacturing website",
    accent: "from-cyan-500 to-slate-800",
    tags: ["React", "Brand website", "Model catalog", "Lead generation"],
    highlights: ["Boat models", "Quote flow", "Brand heritage"]
  },
  {
    title: "Salty DNA",
    domain: "saltydna.ca",
    description:
      "An ecommerce storefront for a family-owned apparel brand selling hoodies, tees, hats, accessories, and coastal lifestyle goods.",
    url: "https://saltydna.ca",
    previewImage: "/images/project-previews/saltydna-live.png",
    role: "Ecommerce storefront",
    accent: "from-slate-700 to-teal-600",
    tags: ["Shopify", "Commerce UX", "Apparel", "Catalog"],
    highlights: ["Product catalog", "Brand merchandising", "Checkout path"]
  },
  {
    title: "Lezgo",
    domain: "lezgo.co",
    description:
      "A Curaçao car-rental OTA for comparing agencies, browsing vehicle inventory, and moving from search to reservation quickly.",
    url: "https://lezgo.co",
    previewImage: "/images/project-previews/lezgo-live.png",
    role: "Booking marketplace",
    accent: "from-blue-600 to-orange-500",
    tags: ["Next.js", "Booking UX", "Travel", "Inventory"],
    highlights: ["Rental comparison", "Vehicle discovery", "Reservation flow"]
  },
  {
    title: "Dalias",
    domain: "dalias.com.co",
    description:
      "A Colombian bakery and pastry storefront with a live menu, product categories, WhatsApp ordering, and location-led navigation.",
    url: "https://www.dalias.com.co",
    previewImage: "/images/project-previews/dalias-live.png",
    role: "Restaurant commerce",
    accent: "from-amber-400 to-stone-800",
    tags: ["Next.js", "Menu UX", "WhatsApp orders", "Local commerce"],
    highlights: ["Live menu", "Product categories", "Ordering workflow"]
  }
];
