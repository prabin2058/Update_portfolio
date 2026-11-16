"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check, Copy, Send, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/common/Container";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/common/SocialIcons";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; text?: string } | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitResult({ success: true, text: "Message sent! I'll get back to you shortly." });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitResult({ success: false, text: "Direct email preferred: " + siteConfig.email });
      }
    } catch {
      setSubmitResult({ success: false, text: "Please email directly at: " + siteConfig.email });
    } finally {
      setIsSubmitting(false);
    }
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline, Bio & Direct Contacts */}
            <div className="lg:col-span-7 space-y-6">
              <MotionWrapper direction="left">
                {/* Live Availability Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for select freelance opportunities</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mt-4 tracking-tight leading-tight">
                  Let’s collaborate on your next{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                    breakthrough product.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                  Whether you have an upcoming mobile app, need full-stack architecture,
                  or want to consult on real-time WebRTC and AI applications, my inbox is open.
                </p>

                {/* Primary Contact Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
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
                <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
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
                <div className="pt-2 flex items-center gap-3">
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
                  {siteConfig.socials.twitter && (
                    <a
                      href={siteConfig.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-slate-700 dark:text-slate-300 shadow-sm"
                      aria-label="Twitter / X profile"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </MotionWrapper>
            </div>

            {/* Right Column: Quick Contact Form */}
            <div className="lg:col-span-5">
              <MotionWrapper direction="right">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-4"
                >
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Quick Inquiry
                  </h3>

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5"
                    >
                      Project Details or Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Brief summary of your project, timeline, or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                  </button>

                  {submitResult && (
                    <p
                      className={`text-xs text-center font-medium mt-2 ${
                        submitResult.success ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500"
                      }`}
                    >
                      {submitResult.text}
                    </p>
                  )}
                </form>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
