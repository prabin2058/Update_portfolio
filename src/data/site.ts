import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Prabin Karki",
  title: "Full Stack & Mobile Engineer",
  shortBio:
    "I build fast, reliable web platforms and cross-platform mobile apps with React, Next.js, React Native and Django.",
  url: "https://www.prabinkarki789.com.np",
  location: {
    city: "Kathmandu",
    country: "Nepal",
  },
  email: "Prabinkarki789@gmail.com",
  phone: "+977 9803491612",
  whatsapp: {
    number: "9779803491612",
    message: "Hi Prabin, I found your portfolio and would like to talk about a project.",
  },
  socials: {
    github: "https://github.com/prabin2058",
    linkedin: "https://www.linkedin.com/in/prabin-karkii/",
  },
  navLinks: [
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    {
      category: "Frontend & Full Stack",
      subtitle: "Web applications, REST APIs & reactive state architecture",
      video: {
        mp4: "/skills/frontend-skill.mp4",
        webm: "/skills/frontend-skill.webm",
        poster: "/skills/frontend-skill-poster.jpg",
      },
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
      video: {
        mp4: "/skills/mobile-skill.mp4",
        webm: "/skills/mobile-skill.webm",
        poster: "/skills/mobile-skill-poster.jpg",
      },
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

/**
 * Opens a WhatsApp chat with Prabin: the WhatsApp app on phones, WhatsApp Web or the
 * desktop app on computers, with the message already typed in.
 */
export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
  siteConfig.whatsapp.message
)}`;
