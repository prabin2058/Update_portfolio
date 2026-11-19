"use client";

import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { SkillCard } from "@/components/hero/SkillCard";
import TextPressure from "@/components/TextPressure/TextPressure";
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
              <span>Available for freelance work</span>
            </div>
          </MotionWrapper>

          {/* Intro + role */}
          <MotionWrapper delay={0.1}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading tracking-tight text-slate-700 dark:text-slate-200">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                {siteConfig.name}
              </span>
            </p>
            {/* Role with React Bits TextPressure (renders the page's <h1>). Font size follows the box width: 28 characters → width / 14. */}
            <div className="relative mx-auto mt-6 w-full max-w-4xl aspect-[14/1] text-slate-900 dark:text-white">
              <TextPressure
                text="Full Stack & Mobile Engineer"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                radius={0.5}
                smoothing={0.5}
                idle="wave"
                idleSpeed={1}
                clickRipple={true}
                strokeColor="#ff0000"
                strokeWidth={3}
                minFontSize={24}
              />
            </div>
          </MotionWrapper>

          {/* One-line summary */}
          <MotionWrapper delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              {siteConfig.shortBio}
            </p>
          </MotionWrapper>

          {/* Action Buttons & Quick Socials */}
          <MotionWrapper delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-explore-work-btn"
              >
                <span>View My Work</span>
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
                video={skillGroup.video}
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
