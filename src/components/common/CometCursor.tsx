"use client";

import { useEffect, useRef, useSyncExternalStore, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";

/**
 * Comet Cursor: a glowing trail that follows the mouse.
 * Ported from the Framer "CometCursor" component into a plain Next.js component
 * (no Framer runtime needed). Draws on two fixed full-screen canvases, never
 * blocks clicks, and sleeps when the mouse stops, the tab is hidden, on touch
 * screens, and for visitors who prefer reduced motion.
 */

type Variant = "sharp" | "soft" | "nebula" | "ghost";

interface Settings {
  blur: number;
  length: number;
  thickness: number;
  headSize: number;
  curve: number;
  smoothing: number;
  brightness: number;
}

interface Point {
  x: number;
  y: number;
}

interface Rgba {
  r: number;
  g: number;
  b: number;
  a: number;
}

const PRESETS: Record<Variant, Settings> = {
  sharp: { blur: 0, length: 20, thickness: 9, headSize: 6, curve: 2, smoothing: 0.45, brightness: 1.1 },
  soft: { blur: 14, length: 28, thickness: 14, headSize: 10, curve: 3, smoothing: 0.32, brightness: 1 },
  nebula: { blur: 30, length: 46, thickness: 24, headSize: 18, curve: 4, smoothing: 0.2, brightness: 1.3 },
  ghost: { blur: 52, length: 64, thickness: 32, headSize: 22, curve: 6, smoothing: 0.12, brightness: 0.7 },
};

const FALLBACK: Rgba = { r: 16, g: 185, b: 129, a: 1 };

/** Accepts "#rgb" or "#rrggbb"; always returns a usable colour. */
function parseHex(input: string, fallback: Rgba): Rgba {
  let hex = input.trim().replace(/^#/, "");
  if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  if (hex.length !== 6) return fallback;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return fallback;
  return { r, g, b, a: 1 };
}

function rgba(color: Rgba, alpha: number): string {
  const a = Math.max(0, Math.min(1, alpha * color.a));
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${a})`;
}

/** Rounds off sharp corners in the trail. */
function smoothPath(source: Point[], iterations: number): Point[] {
  let path = source;
  for (let k = 0; k < iterations; k++) {
    if (path.length < 3) break;
    const out: Point[] = [path[0]];
    for (let i = 1; i < path.length - 1; i++) {
      out.push({
        x: (path[i - 1].x + path[i].x * 2 + path[i + 1].x) / 4,
        y: (path[i - 1].y + path[i].y * 2 + path[i + 1].y) / 4,
      });
    }
    out.push(path[path.length - 1]);
    path = out;
  }
  return path;
}

const subscribe = () => () => {};

interface CometCursorProps {
  variant?: Variant;
  /** Trail colour, "#rrggbb". Defaults to the portfolio emerald. */
  trailColor?: string;
  /** Bright core colour, "#rrggbb". Defaults to a theme-aware mint. */
  coreColor?: string;
  /** Hide the normal arrow cursor. */
  hideCursor?: boolean;
  /** Turn the effect off on touch screens. */
  disableOnTouch?: boolean;
  /** Turn the effect off for visitors who prefer reduced motion. */
  respectReducedMotion?: boolean;
  /** z-index of the canvases. */
  layer?: number;
}

const canvasStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  display: "block",
  pointerEvents: "none",
};

export function CometCursor({
  variant = "soft",
  trailColor = "#10b981",
  coreColor,
  hideCursor = false,
  disableOnTouch = true,
  respectReducedMotion = true,
  layer = 100,
}: CometCursorProps) {
  const { resolvedTheme } = useTheme();
  // Client-only flag without setState-in-effect: false on the server, true in the browser.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const glowRef = useRef<HTMLCanvasElement>(null);
  const coreRef = useRef<HTMLCanvasElement>(null);

  // Light pages need a darker core to stay visible; dark pages use a bright mint.
  const resolvedCore = coreColor ?? (resolvedTheme === "light" ? "#047857" : "#d1fae5");

  useEffect(() => {
    if (!mounted) return;

    const glow = glowRef.current;
    const core = coreRef.current;
    if (!glow || !core) return;
    if (disableOnTouch && window.matchMedia("(pointer: coarse)").matches) return;
    if (respectReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gx = glow.getContext("2d");
    const cx = core.getContext("2d");
    if (!gx || !cx) return;

    const s = PRESETS[variant];
    const trail = parseHex(trailColor, FALLBACK);
    const inner = parseHex(resolvedCore, { r: 209, g: 250, b: 229, a: 1 });

    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let idleFrames = 0;
    let started = false;
    const points: Point[] = [];
    const pos: Point = { x: -400, y: -400 };
    const lead: Point = { x: -400, y: -400 };
    const target: Point = { x: -400, y: -400 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      for (const canvas of [glow, core]) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
      gx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const clearCanvases = () => {
      gx.clearRect(0, 0, width, height);
      cx.clearRect(0, 0, width, height);
    };

    const paint = (
      ctx: CanvasRenderingContext2D,
      composite: GlobalCompositeOperation,
      color: Rgba,
      widthMul: number,
      alphaMul: number,
      headMul: number,
      path: Point[]
    ) => {
      ctx.clearRect(0, 0, width, height);
      if (path.length < 3) return;

      ctx.globalCompositeOperation = composite;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const mid0 = { x: (path[0].x + path[1].x) / 2, y: (path[0].y + path[1].y) / 2 };
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      ctx.lineTo(mid0.x, mid0.y);
      ctx.lineWidth = Math.max(0.15, s.thickness * widthMul);
      ctx.strokeStyle = rgba(color, s.brightness * alphaMul);
      ctx.stroke();

      const n = path.length;
      for (let i = 1; i < n - 1; i++) {
        const t = 1 - i / n;
        const w = s.thickness * widthMul * t;
        if (w < 0.15) continue;
        const prev = path[i - 1];
        const current = path[i];
        const next = path[i + 1];
        const m1 = { x: (prev.x + current.x) / 2, y: (prev.y + current.y) / 2 };
        const m2 = { x: (current.x + next.x) / 2, y: (current.y + next.y) / 2 };
        ctx.beginPath();
        ctx.moveTo(m1.x, m1.y);
        ctx.quadraticCurveTo(current.x, current.y, m2.x, m2.y);
        ctx.lineWidth = w;
        ctx.strokeStyle = rgba(color, t * s.brightness * alphaMul);
        ctx.stroke();
      }

      const r = s.headSize * headMul;
      if (r > 0.6) {
        const head = path[0];
        const gradient = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, r);
        gradient.addColorStop(0, rgba(color, s.brightness * alphaMul));
        gradient.addColorStop(1, rgba(color, 0));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(head.x, head.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      running = false;
      points.length = 0;
      clearCanvases();
    };

    const loop = () => {
      lead.x += (target.x - lead.x) * s.smoothing;
      lead.y += (target.y - lead.y) * s.smoothing;
      pos.x += (lead.x - pos.x) * s.smoothing;
      pos.y += (lead.y - pos.y) * s.smoothing;

      points.unshift({ x: pos.x, y: pos.y });
      while (points.length > s.length) points.pop();

      const path = smoothPath(points, s.curve);
      paint(gx, "lighter", trail, 1, 0.5, 1, path);
      paint(cx, "source-over", inner, 0.34, 1, 0.38, path);

      // The pointer has settled and the trail has fully collapsed:
      // release the animation frame until the next pointer move.
      idleFrames += 1;
      const settled = Math.abs(target.x - pos.x) < 0.2 && Math.abs(target.y - pos.y) < 0.2;
      if (settled && idleFrames > s.length + 12) {
        stop();
        return;
      }
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      idleFrames = 0;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!started) {
        started = true;
        pos.x = lead.x = event.clientX;
        pos.y = lead.y = event.clientY;
      }
      idleFrames = 0;
      start();
    };

    // Nothing runs while the tab is hidden or the window is unfocused.
    const onVisibility = () => {
      if (document.hidden) stop();
    };
    const onBlur = () => stop();

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);

    const previousCursor = document.body.style.cursor;
    if (hideCursor) document.body.style.cursor = "none";

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
      document.body.style.cursor = previousCursor;
    };
  }, [mounted, variant, trailColor, resolvedCore, hideCursor, disableOnTouch, respectReducedMotion]);

  if (!mounted) return null;

  const blur = PRESETS[variant].blur;

  return createPortal(
    <div
      aria-hidden="true"
      data-comet-cursor=""
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: layer }}
    >
      <canvas ref={glowRef} style={{ ...canvasStyle, filter: blur > 0 ? `blur(${blur}px)` : "none" }} />
      <canvas ref={coreRef} style={canvasStyle} />
    </div>,
    document.body
  );
}
