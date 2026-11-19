"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, CheckCircle2 } from "lucide-react";

interface SkillCardProps {
  category: string;
  subtitle: string;
  video?: {
    mp4: string;
    webm?: string;
    poster?: string;
  };
  technologies: {
    name: string;
    iconName?: string;
  }[];
  index: number;
}

export function SkillCard({
  category,
  subtitle,
  video,
  technologies,
  index,
}: SkillCardProps) {
  const isFrontend = category.toLowerCase().includes("front");

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="relative group rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-lg hover:shadow-2xl dark:hover:shadow-emerald-950/20 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300"
    >
      {/* Subtle top corner gradient highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-tr-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      {/* Optional looping video, edge to edge at the top of the card (same as project cards) */}
      {video && (
        <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 aspect-[16/10] overflow-hidden rounded-t-3xl border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-950">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={`${category} preview animation`}
          >
            {video.webm && <source src={video.webm} type="video/webm" />}
            <source src={video.mp4} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Card Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
          {isFrontend ? (
            <Code2 className="w-6 h-6" />
          ) : (
            <Smartphone className="w-6 h-6" />
          )}
        </div>
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            0{index + 1} / Discipline
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            {category}
          </h3>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        {subtitle}
      </p>

      {/* Tech Badges Grid */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
