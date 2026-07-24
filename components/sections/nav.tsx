"use client";

import { motion, useScroll, useSpring } from "motion/react";

const LINKS = [
  { href: "#systems", label: "SYSTEMS" },
  { href: "#deck", label: "DECK" },
  { href: "#impact", label: "IMPACT" },
  { href: "#arsenal", label: "ARSENAL" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[oklch(0.965_0.006_90/0.8)] backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-black">
          <span className="blink inline-block h-1.5 w-1.5 bg-ember" />
          SS
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] tracking-[0.28em] text-black/50 transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="font-mono text-[10px] tracking-[0.28em] text-black/50">
          JUL 2026
        </div>
      </div>
      <motion.div className="h-px origin-left bg-ember" style={{ scaleX: progress }} />
    </header>
  );
}
