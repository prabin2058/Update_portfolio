export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  shortBio: string;
  statsLine: string;
  favoriteQuote: {
    quote: string;
    author: string;
  };
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  navLinks: NavLink[];
  skills: {
    category: string;
    subtitle: string;
    technologies: {
      name: string;
      iconName?: string;
    }[];
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'Web Development' | 'Data Visualization' | 'Mobile';
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}
