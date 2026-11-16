"use client";

import { MessageSquareQuote } from "lucide-react";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <MotionWrapper direction="down">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Recommendations</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
              Endorsements & Testimonials
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Feedback from engineering leads, product founders, and cross-functional partners.
            </p>
          </MotionWrapper>
        </div>

        {/* Testimonials Container: Swipeable on mobile, 3-column grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {testimonialsData.map((item, index) => (
            <div key={item.id} className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center">
              <MotionWrapper delay={index * 0.15}>
                <TestimonialCard testimonial={item} />
              </MotionWrapper>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
