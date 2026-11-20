"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { siteConfig } from "@/data/site";

// FormSubmit (https://formsubmit.co) forwards every message to this inbox.
// The /ajax/ endpoint answers with JSON, so the visitor stays on the page.
// The plain endpoint is the fallback if JavaScript is switched off.
const RECEIVER = siteConfig.email.toLowerCase();
const FORM_ACTION = `https://formsubmit.co/${RECEIVER}`;
const FORM_AJAX = `https://formsubmit.co/ajax/${RECEIVER}`;

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; reason?: string };

const fieldClass =
  "w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:opacity-60";
const labelClass = "block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1.5";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const sending = status.state === "sending";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot: real visitors never see this field, bots fill it in.
    // Pretend it worked so bots learn nothing, but send nothing.
    if (data._honey) {
      setStatus({ state: "success" });
      form.reset();
      return;
    }

    setStatus({ state: "sending" });

    try {
      const visitor = String(data.name ?? "").trim().slice(0, 80);
      const response = await fetch(FORM_AJAX, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Portfolio message from ${visitor || "a visitor"}` }),
      });

      const result: { success?: boolean | string; message?: string } = await response.json().catch(() => ({}));
      const failed = !response.ok || result.success === false || result.success === "false";

      if (failed) {
        // FormSubmit says why, e.g. "This form needs Activation...". Visitors can't fix that,
        // but the site owner can read it in the browser console (and in the dev-only note below).
        const reason = result.message ?? `HTTP ${response.status}`;
        console.warn("[ContactForm] FormSubmit did not accept the message:", reason);
        setStatus({ state: "error", reason });
        return;
      }

      setStatus({ state: "success" });
      form.reset();
    } catch (error) {
      console.warn("[ContactForm] Could not reach FormSubmit:", error);
      setStatus({ state: "error" });
    }
  };

  return (
    <form
      action={FORM_ACTION}
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-4"
    >
      <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Send me a message</h3>

      {/* FormSubmit settings (also used by the no-JavaScript fallback) */}
      <input type="hidden" name="_subject" value="New message from your portfolio" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          disabled={sending}
          placeholder="Enter Your Name..."
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          maxLength={120}
          autoComplete="email"
          disabled={sending}
          placeholder="Enter Your Email..."
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Project Details or Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          maxLength={2000}
          disabled={sending}
          placeholder="Brief summary of your project, timeline, or inquiry..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full py-3 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/20 transition-all"
      >
        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        <span>{sending ? "Sending..." : "Send Message"}</span>
      </button>

      <div aria-live="polite" className="min-h-5">
        {status.state === "success" && (
          <p
            role="status"
            className="flex items-start gap-2 text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400"
          >
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
            <span>Thanks! Your message is on its way. I&apos;ll reply to your email soon.</span>
          </p>
        )}
        {status.state === "error" && (
          <p
            role="alert"
            className="flex items-start gap-2 text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400"
          >
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>
              Sorry, that didn&apos;t send. Please email me directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                {siteConfig.email}
              </a>
              .
            </span>
          </p>
        )}
        {status.state === "error" && status.reason && process.env.NODE_ENV === "development" && (
          <p className="mt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            Dev note (only shown on localhost): {status.reason}
          </p>
        )}
      </div>
    </form>
  );
}
