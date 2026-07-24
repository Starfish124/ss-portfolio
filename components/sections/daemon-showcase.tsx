"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/sections/section-header";

const APPS = [
  "VITALS",
  "POV CAM",
  "HANDS",
  "JARVIS",
  "DATA FLOW",
  "HARDWARE",
  "PHASES",
];

const CONSOLE_LINES = [
  "watching your disk die one gigabyte at a time, sir.",
  "ears: DJI MIC MINI — healthy · wake word armed",
  "mind: claude — full machine access, three memory tiers",
  "voice: kokoro bm_fable @ 1.04× — comms filter engaged",
  "hands: pinch-hold 200ms → 7-way radial menu",
  "link: GLS → PI → DMN — all channels nominal",
];

const FACTS = [
  "5 LAUNCHD AGENTS",
  "AMBER CRT REMOTE",
  "TAILSCALE MESH",
  "NETMIND · SELF-IMPROVING",
  "FORGE · 3D EDITOR",
  "WORLD · NEWS GLOBE",
  "SWIFT DAEMON",
  "iOS CLIENT",
  "WAKE-WORD ALWAYS ON",
];

export default function DaemonShowcase() {
  const [app, setApp] = useState(3);
  const [tape, setTape] = useState({ line: 0, chars: 0 });
  const [clock, setClock] = useState("--:--:--");
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(
      () => setClock(new Date().toTimeString().slice(0, 8)),
      1000
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setApp((a) => (a + 1) % APPS.length), 2600);
    return () => clearInterval(t);
  }, []);

  // type the current line out; once complete, rest, then advance
  useEffect(() => {
    if (tape.chars < CONSOLE_LINES[tape.line].length) {
      const t = setInterval(
        () => setTape((s) => ({ ...s, chars: s.chars + 1 })),
        26
      );
      return () => clearInterval(t);
    }
    const t = setTimeout(
      () =>
        setTape((s) => ({ line: (s.line + 1) % CONSOLE_LINES.length, chars: 0 })),
      2100
    );
    return () => clearTimeout(t);
  }, [tape]);

  const typed = CONSOLE_LINES[tape.line].slice(0, tape.chars);

  return (
    <section id="deck" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeader idx="02" kicker="LIVE TRANSCRIPT // FAITHFUL RE-CREATION" title="THE DAEMON DECK" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
        {/* app rail — plain type, active line indented */}
        <div>
          <p className="kicker mb-4">SHELL · {clock}</p>
          {APPS.map((a, i) => (
            <motion.button
              key={a}
              type="button"
              onClick={() => setApp(i)}
              animate={{ x: i === app ? 14 : 0, opacity: i === app ? 1 : 0.35 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="block cursor-pointer py-1 font-mono text-sm tracking-[0.22em] text-black"
            >
              <span className="mr-3 text-black/35">0{i + 1}</span>
              {a}
              {i === app && <span className="caret ml-1" />}
            </motion.button>
          ))}
        </div>

        {/* jarvis console — open transcript */}
        <div className="flex min-h-44 flex-col">
          <p className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-black/70">
            <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-black" />
            JARVIS — LIVE
          </p>
          <p className="caret text-xl font-medium leading-relaxed text-black/85 sm:text-3xl">
            “{typed}”
          </p>
          <p className="mt-auto pt-6 font-mono text-[9px] tracking-[0.22em] text-black/40">
            SEE · HEAR · SPEAK — THE REAL SHELL RUNS ON THE PI 5 + MAC MINI
          </p>
        </div>
      </div>

      {/* draggable fact strip — flick it */}
      <div ref={dragRef} className="mt-12 overflow-hidden border-y border-black/10 py-3">
        <motion.div
          drag="x"
          dragConstraints={dragRef}
          dragElastic={0.08}
          className="flex w-max cursor-grab items-center gap-10 active:cursor-grabbing"
        >
          {FACTS.map((f) => (
            <span
              key={f}
              className="whitespace-nowrap font-mono text-[11px] tracking-[0.28em] text-black/60"
            >
              {f}
            </span>
          ))}
        </motion.div>
        <p className="mt-2 font-mono text-[8.5px] tracking-[0.3em] text-black/30">
          ⇠ DRAG ⇢
        </p>
      </div>
    </section>
  );
}
