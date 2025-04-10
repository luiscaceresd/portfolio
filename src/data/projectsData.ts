// Define the project type
export type Project = {
  title: string;
  description: string;
  getImageSrc: () => string;
  url: string;
  tags: string[];
};

// Sample project data
export const projects: Project[] = [
  {
    title: "Blockchain Kickstarter",
    description: "Decentralized crowdfunding platform built on Ethereum with smart contracts",
    getImageSrc: () => "/images/photo2.png",
    url: "https://github.com/yourusername/blockchain-kickstarter",
    tags: ["React", "Solidity", "Web3.js", "Ethereum"]
  },
  {
    title: "React Reservations Engine",
    description: "A responsive restaurant reservation system with real-time availability",
    getImageSrc: () => "/images/photo3.png",
    url: "https://github.com/yourusername/react-reservations",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "AI Image Generator",
    description: "Web application that generates custom images using machine learning models",
    getImageSrc: () => "/images/photo1.png",
    url: "https://github.com/yourusername/ai-image-generator",
    tags: ["Python", "React", "TensorFlow", "Flask"]
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with payment processing and inventory management",
    getImageSrc: () => "/images/photo4.png",
    url: "https://github.com/yourusername/ecommerce-platform",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"]
  }
]; 