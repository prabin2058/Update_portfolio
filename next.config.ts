import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    // Read at build time (not during prerender); the footer corrects it in the browser.
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
  },
  cacheComponents: true,
  partialPrefetching: true,
  // Friendly URLs: /projects, /contact... jump to the matching section of the one-page site.
  async redirects() {
    return ["expertise", "projects", "experience", "contact"].map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: false,
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
