"use client";

import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { TimelineItem } from "@/components/experience/TimelineItem";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 lg:py-32 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <MotionWrapper direction="left">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
              Career Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
              Work Experience & Background
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Track record in production mobile apps, high-throughput REST APIs,
              and cross-functional team engineering.
            </p>
          </MotionWrapper>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <MotionWrapper key={item.id} delay={index * 0.15}>
              <TimelineItem
                experience={item}
                index={index}
                isLast={index === experienceData.length - 1}
              />
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
