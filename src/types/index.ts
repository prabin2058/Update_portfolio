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
  email: string;
  /** Phone number as shown on the site. */
  phone: string;
  whatsapp: {
    /** International format, digits only, no "+" or spaces (Nepal = 977...). */
    number: string;
    /** Pre-filled text in the visitor's WhatsApp chat. */
    message: string;
  };
  socials: {
    github: string;
    linkedin: string;
  };
  navLinks: NavLink[];
  skills: {
    category: string;
    subtitle: string;
    /** Optional looping video shown at the top of the skill card. */
    video?: {
      mp4: string;
      webm?: string;
      poster?: string;
    };
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
  /** Looping preview video for the card header: MP4, optional smaller WebM, and a poster frame. */
  videoUrl?: string;
  videoWebmUrl?: string;
  videoPosterUrl?: string;
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
