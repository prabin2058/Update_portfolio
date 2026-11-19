import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: `Page not found — ${siteConfig.name}`,
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Ambient glow, same as the hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative max-w-2xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs sm:text-sm font-mono font-semibold text-emerald-700 dark:text-emerald-300">
            <Compass className="w-3.5 h-3.5" />
            Error 404
          </span>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
            This page doesn&apos;t exist
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            The link may be broken or the page may have moved. Head back home or jump straight to a
            section.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
            >
              <span>View my work</span>
            </Link>
          </div>

          <nav
            aria-label="Sections"
            className="pt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
          >
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
