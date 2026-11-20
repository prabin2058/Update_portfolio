"use client";

import { ArrowUp, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/common/SocialIcons";
import { siteConfig, whatsappUrl } from "@/data/site";
import { Container } from "@/components/common/Container";
import { CurrentYear } from "@/components/common/CurrentYear";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 py-12 transition-colors duration-200">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <div className="font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>{siteConfig.name}</span>
              <span className="text-slate-400 dark:text-slate-500 font-normal text-sm">
                — {siteConfig.title}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © <CurrentYear /> {siteConfig.name}. Designed & built with Next.js,
              TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* CV, Social Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/Prabin-Karki-CV.pdf"
              download="Prabin-Karki-CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
              aria-label="Download CV as PDF"
              id="footer-download-cv"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  aria-label="GitHub profile"
                  id="footer-github"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  aria-label="LinkedIn profile"
                  id="footer-linkedin"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:text-[#25D366] dark:hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"
                aria-label="Chat on WhatsApp"
                id="footer-whatsapp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Back to top of page"
              id="back-to-top-btn"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
