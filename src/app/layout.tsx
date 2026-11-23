import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { CometCursor } from "@/components/common/CometCursor";
import { HashGuard } from "@/components/common/HashGuard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

// Urbanist is a variable font, so every weight (100–900) comes from one file.
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

// Uses the phrases people type into Google: the name, "mobile app developer" and the city.
const defaultTitle = `${siteConfig.name} — Mobile App & Full Stack Developer in ${siteConfig.location.city}`;
// Under ~160 characters, so Google shows it in full.
const description = `Mobile app & full stack developer in ${siteConfig.location.city}, ${siteConfig.location.country}, building fast web platforms and cross-platform apps with React, Next.js, React Native and Django.`;

export const metadata: Metadata = {
  // Lets relative URLs (canonical, Open Graph image) resolve to the live domain.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    siteConfig.name,
    "Full Stack Developer",
    "Mobile App Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Django Developer",
    "TypeScript",
    `Mobile App Developer ${siteConfig.location.city}`,
    `Mobile App Developer ${siteConfig.location.country}`,
    `React Native Developer ${siteConfig.location.country}`,
    `Full Stack Developer ${siteConfig.location.city}`,
    `Freelance Developer ${siteConfig.location.country}`,
    `Software Engineer ${siteConfig.location.city}`,
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // The share image comes from app/opengraph-image.tsx.
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title: defaultTitle,
    description,
    siteName: siteConfig.name,
    firstName: siteConfig.name.split(" ")[0],
    lastName: siteConfig.name.split(" ").slice(1).join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
  },
  // After verifying the domain in Google Search Console, paste the token here:
  // verification: { google: "your-token" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

// Tells Google who this site is about, so the name, role and profiles can show in search.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.title,
  description: siteConfig.shortBio,
  image: `${siteConfig.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    ...(siteConfig.location.city && { addressLocality: siteConfig.location.city }),
    addressCountry: siteConfig.location.country,
  },
  sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
  knowsAbout: siteConfig.skills.flatMap((group) =>
    group.technologies.map((tech) => tech.name)
  ),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${urbanist.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-body tech-grid-bg antialiased selection:bg-emerald-500/20 selection:text-emerald-500">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HashGuard />
          <CometCursor />
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
