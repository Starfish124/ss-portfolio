"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Glyph from "@/components/fx/glyph";
import SectionHeader from "@/components/sections/section-header";
import { PROJECTS, type Project } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

/* No boxes: each system is an open typographic row on a hairline that
 * draws itself in, with a live micro-glyph of what the system does. */
function ProjectRow({ p, i }: { p: Project; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial="out"
      whileInView="in"
      viewport={{ once: true, margin: "-70px 0px" }}
      transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
    >
      {/* the hairline draws across first */}
      <motion.div
        variants={{ out: { scaleX: 0 }, in: { scaleX: 1 } }}
        transition={{ duration: 0.7, ease: EASE }}
        className="h-px origin-left bg-black/15"
      />

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        variants={{ out: { opacity: 0, y: 26 }, in: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: EASE }}
        whileHover="hover"
        whileTap={{ scale: 0.995 }}
        className="grid w-full cursor-pointer grid-cols-[auto_auto_1fr_auto] items-center gap-x-4 py-5 text-left sm:gap-x-7 sm:py-7"
      >
        <span className="stroke-text font-mono text-base font-bold sm:text-2xl">
          {p.idx}
        </span>

        <motion.span
          variants={{ hover: { scale: 1.15, rotate: -3 } }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="inline-flex"
        >
          <Glyph code={p.code} />
        </motion.span>

        <motion.span
          className="min-w-0"
          variants={{ hover: { x: 8 } }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
        >
          <span className="block text-xl font-semibold tracking-tight text-black sm:text-4xl">
            {p.name}
          </span>
          <span className="mt-1 block text-[13px] leading-snug text-black/60 sm:text-[15px]">
            {p.sub}
          </span>
        </motion.span>

        <span className="flex flex-col items-end gap-1 self-start pt-1 text-right sm:self-center sm:pt-0">
          <span className="font-mono text-[9px] tracking-[0.22em] text-black/70">
            {p.cls}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-lg leading-none text-black/40"
          >
            +
          </motion.span>
        </span>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-6 pb-7 sm:grid-cols-[1fr_auto] sm:gap-12 sm:pl-[5.5rem]">
              <div>
                <p className="max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
                  {p.desc}
                </p>
                <p className="mt-4 font-mono text-[10px] tracking-[0.14em] text-black/45">
                  {p.stack.join("  ·  ")}
                </p>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.18em] text-black/40">
                  <span className="blink inline-block h-1 w-1 rounded-full bg-ember" />
                  {p.status}
                </p>
              </div>
              <div className="flex gap-8 sm:flex-col sm:gap-4 sm:text-right">
                {p.metrics.map((m) => (
                  <div key={m.k}>
                    <p className="font-mono text-sm font-semibold text-black">{m.v}</p>
                    <p className="mt-0.5 font-mono text-[8.5px] tracking-[0.14em] text-black/35">
                      {m.k}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {i === PROJECTS.length - 1 && <div className="h-px bg-black/15" />}
    </motion.div>
  );
}

export default function Systems() {
  return (
    <section id="systems" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeader title="SYSTEMS SHIPPED" />
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.code} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
