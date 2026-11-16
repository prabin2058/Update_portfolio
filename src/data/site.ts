import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Prabin Karki",
  title: "Full Stack & Mobile Engineer",
  shortBio:
    "Full Stack & Mobile Engineer with a passion for building resilient web platforms and fluid cross-platform mobile apps. Specialized in React, React Native, Next.js, and Django, with hands-on experience in real-time WebRTC communications and local AI/RAG systems.",
  statsLine: "Engineered scalable mobile & full-stack systems with 10k+ interactions.",
  favoriteQuote: {
    quote:
      "Simplicity is prerequisite for reliability. Make it work, make it right, make it fast.",
    author: "Edsger W. Dijkstra",
  },
  email: "Prabinkarki789@gmail.com",
  socials: {
    github: "https://github.com/prabin2058",
    linkedin: "https://linkedin.com/in/prabinkarki", // TODO: Update if specific LinkedIn handle differs
    twitter: "https://x.com",
  },
  navLinks: [
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    {
      category: "Frontend & Full Stack",
      subtitle: "Web applications, REST APIs & reactive state architecture",
      technologies: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Django & DRF" },
        { name: "FastAPI & Node.js" },
      ],
    },
    {
      category: "Mobile & Real-Time Engineering",
      subtitle: "Cross-platform mobile apps, WebRTC & native device integrations",
      technologies: [
        { name: "React Native" },
        { name: "Expo & EAS" },
        { name: "WebRTC & Stream" },
        { name: "TanStack Query" },
        { name: "FCM & Push Notifications" },
        { name: "PostgreSQL & MongoDB" },
      ],
    },
  ],
};
