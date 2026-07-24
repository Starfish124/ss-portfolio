"use client";

import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

/**
 * anime.js scroll reveal: staggers direct children (or a selector)
 * up+in the first time the wrapper enters the viewport.
 */
export default function Reveal({
  children,
  className,
  selector,
  y = 26,
  step = 90,
  startDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  selector?: string;
  y?: number;
  step?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = selector
      ? Array.from(el.querySelectorAll<HTMLElement>(selector))
      : (Array.from(el.children) as HTMLElement[]);
    if (targets.length === 0) return;

    for (const t of targets) t.style.opacity = "0";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate(targets, {
          opacity: [0, 1],
          translateY: [y, 0],
          duration: 950,
          delay: stagger(step, { start: startDelay }),
          ease: "outExpo",
        });
        io.disconnect();
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [selector, y, step, startDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
