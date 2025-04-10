// Define the project type
export type Project = {
  title: string;
  description: string;
  getImageSrc: () => string;
  url: string;
  tags: string[];
};

// Project data
export const projects: Project[] = [
  {
    title: "Lezgo - Car Rental OTA",
    description: "Built a scalable Car Rental OTA using Next.js 15, React, Supabase, Prisma, and PostgreSQL, with Zod validation and ACLs.",
    getImageSrc: () => "/images/photo2.png",
    url: "https://lezgo.co",
    tags: ["Next.js", "React", "Supabase", "Prisma", "PostgreSQL"]
  },
  {
    title: "Bric AI - Business Manager",
    description: "AI business manager with natural SQL queries, form builder, and comprehensive business tools built with Next.js, Turbo repo, and Supabase.",
    getImageSrc: () => "/images/photo3.png",
    url: "https://lezgo-bric.vercel.app/",
    tags: ["Next.js", "Shadcn", "Supabase", "Vercel AI SDK", "Drizzle"]
  },
  {
    title: "Compa.Chat - AI Therapist",
    description: "Created an AI-powered therapy chatbot with Vercel AI SDK and OpenAI, featuring real-time response streaming and secure data handling.",
    getImageSrc: () => "/images/photo1.png",
    url: "https://www.compa.chat/",
    tags: ["Next.js", "Next Auth", "OpenAI", "PostgreSQL", "Vercel"]
  },
  {
    title: "Elemental Arena - 3D Game",
    description: "Developing an interactive 3D game using Three.js and Next.js, with real-time rendering and scalable architecture leveraging Grok 3 (xAI).",
    getImageSrc: () => "/images/photo4.png",
    url: "https://elemental-arena.vercel.app",
    tags: ["Three.js", "Next.js", "Grok 3", "Vercel", "3D Rendering"]
  }
]; 