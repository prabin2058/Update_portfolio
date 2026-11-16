"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Smartphone, Database, BarChart3, Code } from "lucide-react";
import { ProjectItem } from "@/types";
import { GithubIcon } from "@/components/common/SocialIcons";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Dynamic gradient styling based on category
  const categoryStyles: Record<string, { bg: string; text: string; gradient: string; icon: typeof Layers }> = {
    Mobile: {
      bg: "bg-blue-500/10 dark:bg-blue-500/20",
      text: "text-blue-600 dark:text-blue-400 border-blue-500/30",
      gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
      icon: Smartphone,
    },
    "Web Development": {
      bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
      text: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
      icon: Code,
    },
    "Data Visualization": {
      bg: "bg-purple-500/10 dark:bg-purple-500/20",
      text: "text-purple-600 dark:text-purple-400 border-purple-500/30",
      gradient: "from-purple-600/20 via-pink-500/10 to-transparent",
      icon: BarChart3,
    },
  };

  const style = categoryStyles[project.category] || {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 border-emerald-500/30",
    gradient: "from-emerald-500/20 to-transparent",
    icon: Database,
  };

  const CategoryIcon = style.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl overflow-hidden bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Visual Cover / Preview Header (No missing image broken icon!) */}
        <div className={`relative h-48 w-full bg-gradient-to-br ${style.gradient} border-b border-slate-200/60 dark:border-slate-800/60 p-6 flex flex-col justify-between overflow-hidden`}>
          {/* Subtle geometric grid background inside card header */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/30 to-transparent pointer-events-none" />

          {/* Top row: Category tag & Featured pill */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${style.bg} ${style.text}`}
            >
              <CategoryIcon className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </span>

            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                Featured
              </span>
            )}
          </div>

          {/* Center visual icon representation */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-white/40 dark:border-slate-700/60 flex items-center justify-center shadow-md text-emerald-500 group-hover:scale-110 transition-transform duration-300">
              <CategoryIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                Interactive Showcase
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                {project.techStack[0]} • {project.techStack[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links Footer */}
      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository</span>
            </a>
          )}
        </div>

        <span className="text-[11px] font-mono text-slate-400">
          ID: {project.id}
        </span>
      </div>
    </motion.div>
  );
}
