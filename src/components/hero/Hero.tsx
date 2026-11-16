"use client";

import { ArrowRight, Mail, Sparkles, Quote } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SkillCard } from "@/components/hero/SkillCard";
import { GithubIcon, LinkedinIcon } from "@/components/common/SocialIcons";

export function Hero() {
  return (
    <section
      id="expertise"
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 lg:pb-32 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 dark:bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Availability Status Badge */}
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for select freelance opportunities</span>
            </div>
          </MotionWrapper>

          {/* Headline */}
          <MotionWrapper delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Crafting digital products with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
                precision & soul
              </span>
            </h1>
          </MotionWrapper>

          {/* Short Bio */}
          <MotionWrapper delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.shortBio}
            </p>
          </MotionWrapper>

          {/* Stats Line */}
          <MotionWrapper delay={0.25}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300">
              <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{siteConfig.statsLine}</span>
            </div>
          </MotionWrapper>

          {/* Action Buttons & Quick Socials */}
          <MotionWrapper delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-explore-work-btn"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                id="hero-email-btn"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Get in Touch</span>
              </a>

              <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
                {siteConfig.socials.github && (
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-slate-700 dark:text-slate-300"
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
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-slate-700 dark:text-slate-300"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </MotionWrapper>

          {/* Favorite Quote Banner */}
          <MotionWrapper delay={0.35}>
            <div className="mt-6 max-w-xl mx-auto rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 border border-emerald-500/20 backdrop-blur-sm text-left flex items-start gap-3.5">
              <Quote className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm italic text-slate-700 dark:text-slate-300 font-serif">
                  &ldquo;{siteConfig.favoriteQuote.quote}&rdquo;
                </p>
                <span className="block mt-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  — {siteConfig.favoriteQuote.author}
                </span>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* 2 Skill Cards: Frontend & Mobile */}
        <div className="mt-16 md:mt-24">
          <MotionWrapper delay={0.4}>
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                Engineering Discipline & Tooling
              </h2>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {siteConfig.skills.map((skillGroup, idx) => (
              <SkillCard
                key={skillGroup.category}
                category={skillGroup.category}
                subtitle={skillGroup.subtitle}
                technologies={skillGroup.technologies}
                index={idx}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
