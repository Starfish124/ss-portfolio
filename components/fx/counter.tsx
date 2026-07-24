"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";

/** anime.js count-up that fires when scrolled into view. */
export default function Counter({
  value,
  suffix = "",
  className,
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const state = { n: 0 };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate(state, {
          n: value,
          duration,
          ease: "outExpo",
          onUpdate: () => {
            el.textContent = `${Math.round(state.n)}${suffix}`;
          },
        });
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
