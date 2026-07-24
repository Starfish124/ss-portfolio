"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "#<>/*+=÷×01";

/**
 * Decodes text with a glyph-scramble sweep when it enters the viewport.
 * Renders the real text for SSR/no-JS/reduced-motion.
 */
export default function Scramble({
  text,
  className,
  delay = 0,
  speed = 26,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    let started = false;

    const run = () => {
      const total = text.length * speed + 320;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / total);
        const reveal = Math.floor(p * text.length);
        let out = text.slice(0, reveal);
        for (let i = reveal; i < text.length; i++) {
          out +=
            text[i] === " "
              ? " "
              : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        el.textContent = out;
        if (p < 1) raf = requestAnimationFrame(tick);
        else el.textContent = text;
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          timer = setTimeout(run, delay);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      io.disconnect();
    };
  }, [text, delay, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text}
    </span>
  );
}
