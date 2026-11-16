"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ExperienceItem } from "@/types";

interface TimelineItemProps {
  experience: ExperienceItem;
  isLast: boolean;
  index: number;
}

export function TimelineItem({ experience, isLast, index }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 md:gap-8 group">
      {/* Vertical timeline spine & node marker */}
      <div className="flex flex-col items-center">
        {/* Node circle */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-md shadow-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300"
        >
          <Briefcase className="w-5 h-5" />
        </motion.div>

        {/* Connecting vertical line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-emerald-500/60 via-slate-300 dark:via-slate-800 to-transparent my-2" />
        )}
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${isLast ? "pb-0" : "pb-12 md:pb-16"}`}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
        >
          {/* Header: Role, Period, Company */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                0{index + 1} • Milestone
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                {experience.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span>{experience.company}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {experience.company}
                  </span>
                )}
              </div>
            </div>

            {/* Badges: Period & Location */}
            <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-medium">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                <span>{experience.period}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{experience.location}</span>
              </span>
            </div>
          </div>

          {/* Description Bullets */}
          <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {experience.description.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
