import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

// The preview card shown when the site is shared on LinkedIn, WhatsApp, X, Slack...
// Built once at build time.
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stack = ["React", "Next.js", "React Native", "TypeScript", "Django"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#090d16",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(16,185,129,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(6,182,212,0.25), transparent 40%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #10b981, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            P
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8" }}>
            {siteConfig.url.replace(/^https?:\/\/(www\.)?/, "")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 600,
              backgroundImage: "linear-gradient(90deg, #34d399, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {siteConfig.title}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {stack.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                fontSize: 26,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.35)",
                color: "#cbd5e1",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
