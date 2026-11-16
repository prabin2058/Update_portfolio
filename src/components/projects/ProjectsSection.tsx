"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";

type CategoryFilter = "All" | "Web Development" | "Mobile" | "Data Visualization";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  // Calculate dynamic live counts for filter tabs
  const categoriesWithCounts = useMemo(() => {
    const counts = {
      All: projectsData.length,
      "Web Development": projectsData.filter((p) => p.category === "Web Development").length,
      Mobile: projectsData.filter((p) => p.category === "Mobile").length,
      "Data Visualization": projectsData.filter((p) => p.category === "Data Visualization").length,
    };

    return [
      { id: "All" as CategoryFilter, label: "All", count: counts.All },
      { id: "Web Development" as CategoryFilter, label: "Web Development", count: counts["Web Development"] },
      { id: "Mobile" as CategoryFilter, label: "Mobile", count: counts.Mobile },
      { id: "Data Visualization" as CategoryFilter, label: "Data Visualization", count: counts["Data Visualization"] },
    ];
  }, []);

  // Filter projects by selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 md:py-28 lg:py-32 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <MotionWrapper direction="left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              From real-time doctor tele-consultations to offline local RAG platforms
              and distributed web apps.
            </p>
          </MotionWrapper>

          {/* Filter Tabs with live counts */}
          <MotionWrapper direction="right">
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
              {categoriesWithCounts.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "text-emerald-700 dark:text-emerald-300 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                    id={`filter-tab-${tab.id.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl border border-emerald-500/30"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                    <span
                      className={`relative z-10 text-[11px] font-mono px-1.5 py-0.5 rounded-md ${
                        isActive
                          ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300"
                          : "bg-slate-200/60 dark:bg-slate-800 text-slate-500"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </MotionWrapper>
        </div>

        {/* Project Card Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              No projects found in this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
