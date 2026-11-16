"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TestimonialItem } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Generate initials for avatar fallback
  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between h-full min-w-[280px] sm:min-w-0 snap-center"
    >
      <div>
        {/* Rating stars & quote icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Quote className="w-4 h-4" />
          </div>
        </div>

        {/* Quote content */}
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic font-serif">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-emerald-500/20">
          {initials}
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white">
            {testimonial.author}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {testimonial.role} • <span className="font-medium text-slate-700 dark:text-slate-300">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
