import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "life-rishi",
    title: "Life Rishi Mobile App",
    description:
      "Production telehealth mobile application featuring real-time 1-on-1 audio/video doctor consultations via Stream Video & WebRTC with Picture-in-Picture (PiP), multi-provider OAuth (Google & Apple), offline-first TanStack Query state, and EAS CI/CD OTA release pipelines.",
    category: "Mobile",
    imageUrl: "/projects/life-rishi.webp",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "WebRTC",
      "Stream Video",
      "TanStack Query",
      "Zod",
    ],
    liveUrl: "https://www.prabinkarki789.com.np",
    githubUrl: "https://github.com/prabin2058",
    featured: true,
  },
  {
    id: "local-rag",
    title: "Local RAG PDF Q&A Platform",
    description:
      "Privacy-first offline Retrieval-Augmented Generation application. Features two-column chat workspace with optimistic updates, local CPU embeddings with sentence-transformers, vector search with ChromaDB, and local LLM inference powered by Ollama.",
    category: "Web Development",
    imageUrl: "/projects/local-rag.webp",
    techStack: [
      "React.js",
      "FastAPI",
      "ChromaDB",
      "Ollama",
      "Tailwind CSS",
      "Zustand",
      "SQLAlchemy",
    ],
    liveUrl: "https://www.prabinkarki789.com.np",
    githubUrl: "https://github.com/prabin2058",
    featured: true,
  },
  {
    id: "qr-branding",
    title: "AgriTrace QR Branding Platform",
    description:
      "Agricultural product traceability and branding web system. Generates dynamic unique QR codes, tracks origin and harvest data, and serves responsive digital product verification landing pages for consumer mobile scanning.",
    category: "Web Development",
    imageUrl: "/projects/qr-branding.webp",
    techStack: [
      "Django",
      "Django REST Framework",
      "React.js",
      "PostgreSQL",
      "Docker",
    ],
    liveUrl: "https://www.prabinkarki789.com.np",
    githubUrl: "https://github.com/prabin2058",
    featured: true,
  },
  {
    id: "ecommerce-fullstack",
    title: "PulseStore E-Commerce Architecture",
    description:
      "Full-stack MERN commerce engine with protected JWT authorization, bcrypt security, dynamic category filtering, cart state management, and optimized MongoDB aggregation schemas.",
    category: "Web Development",
    imageUrl: "/projects/ecommerce.webp",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
    ],
    liveUrl: "https://www.prabinkarki789.com.np",
    githubUrl: "https://github.com/prabin2058",
  },
  {
    id: "telemetry-viz",
    title: "Real-Time Telemetry & Data Dashboard",
    description:
      "High-throughput interactive analytics dashboard with real-time stream metrics, dynamic SVG charts, anomaly threshold alerts, and sub-second data synchronization.",
    category: "Data Visualization",
    imageUrl: "/projects/telemetry.webp",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://www.prabinkarki789.com.np",
    githubUrl: "https://github.com/prabin2058",
  },
];
