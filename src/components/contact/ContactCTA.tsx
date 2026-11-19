"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check, Copy, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { GithubIcon, LinkedinIcon } from "@/components/common/SocialIcons";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 relative">
      {/* Background glow decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[140px] rounded-full" />
      </div>

      <Container>
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 dark:from-slate-900/90 dark:via-slate-950/90 dark:to-slate-900/90 border border-slate-200/80 dark:border-slate-800 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Subtle accent border line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

          <div className="max-w-3xl mx-auto text-center">
            <MotionWrapper direction="up">
              <div className="space-y-6">
                {/* Live Availability Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for select freelance opportunities</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
                  Let’s collaborate on your next{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                    breakthrough product.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                  Whether you have an upcoming mobile app, need full-stack architecture,
                  or want to consult on real-time WebRTC and AI applications, my inbox is open.
                </p>

                {/* Primary Contact Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    id="contact-mailto-btn"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email Directly</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/40 transition-all shadow-sm"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct info badges */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Kathmandu, Nepal (UTC+5:45)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>+977 9803491612</span>
                  </span>
                </div>

                {/* Social profiles */}
                <div className="pt-2 flex items-center justify-center gap-3">
                  <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Connect:
                  </span>
                  {siteConfig.socials.github && (
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-slate-700 dark:text-slate-300 shadow-sm"
                      aria-label="GitHub profile"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {siteConfig.socials.linkedin && (
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-slate-700 dark:text-slate-300 shadow-sm"
                      aria-label="LinkedIn profile"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}
