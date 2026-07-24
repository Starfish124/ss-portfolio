"use client";

import {
  motion,
  type MotionValue,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/data";

/*
 * The one continuous animation: a 3D-rendered processor package that
 * decomposes as you scroll. The lid comes off (classical shell), the CPU
 * die lifts (engine room), the NPU core grid is exposed beneath, and its
 * cores — one per project — deploy outward into the index that follows.
 * Pure CSS 3D driven by scroll progress; no WebGL, phone-first.
 */

const CORES = [...PROJECTS.map((p) => p.code), "S//S"];

function Caption({
  p,
  range,
  kicker,
  line,
}: {
  p: MotionValue<number>;
  range: [number, number];
  kicker: string;
  line: string;
}) {
  const [a, b] = range;
  const opacity = useTransform(p, [a, a + 0.04, b - 0.04, b], [0, 1, 1, 0]);
  const y = useTransform(p, [a, b], [14, -14]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 bottom-0">
      <p className="kicker">{kicker}</p>
      <p className="mt-2 max-w-md text-lg font-medium leading-snug text-black/80 sm:text-xl">
        {line}
      </p>
    </motion.div>
  );
}

function CoreTile({ p, i }: { p: MotionValue<number>; i: number }) {
  const angle = (i / CORES.length) * Math.PI * 2 + 0.35;
  const dist = 230 + (i % 3) * 60;
  const x = useTransform(p, [0.74, 0.97], [0, Math.cos(angle) * dist]);
  const y = useTransform(p, [0.74, 0.97], [0, Math.sin(angle) * dist]);
  const rotate = useTransform(p, [0.74, 0.97], [0, i % 2 ? 110 : -110]);
  const z = useTransform(p, [0.6, 0.74], [4, 26 + (i % 4) * 8]);
  const opacity = useTransform(p, [0.9, 0.99], [1, 0]);
  return (
    <motion.span
      style={{ x, y, rotate, z, opacity, transformStyle: "preserve-3d" }}
      className="flex items-center justify-center bg-neutral-900 shadow-[0_1px_0_rgb(255_255_255/0.25)_inset]"
    >
      <span className="font-mono text-[5.5px] tracking-wider text-white/75 sm:text-[7px]">
        {CORES[i]}
      </span>
    </motion.span>
  );
}

export default function Decomposition() {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  // stable driver value; ?p=0..1 freezes the rig at a stage (debug/screenshots)
  const p = useMotionValue(0);
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("p");
    const q = raw === null ? NaN : Number(raw);
    if (Number.isFinite(q) && q >= 0) {
      p.set(Math.min(1, q));
      return;
    }
    p.set(spring.get());
    return spring.on("change", (v) => p.set(v));
  }, [spring, p]);

  // whole-rig attitude drifts as you descend — the continuous 3D feel
  const rigRotateX = useTransform(p, [0, 1], [56, 38]);
  const rigRotateZ = useTransform(p, [0, 1], [40, 70]);
  const rigScale = useTransform(p, [0, 0.12, 1], [0.92, 1, 1.06]);
  // once the headline dissolves, the rig rises to own the empty stage
  const rigY = useTransform(p, [0.08, 0.42], ["0svh", "-13svh"]);

  // layer separations
  const lidZ = useTransform(p, [0.14, 0.34], [34, 230]);
  const lidOpacity = useTransform(p, [0.44, 0.56], [1, 0]);
  const dieZ = useTransform(p, [0.34, 0.52], [16, 150]);
  const dieOpacity = useTransform(p, [0.52, 0.62], [1, 0]);
  const substrateZ = useTransform(p, [0.3, 0.55], [0, -34]);
  const pinsZ = useTransform(p, [0.3, 0.55], [-6, -96]);
  const pinsOpacity = useTransform(p, [0.3, 0.55], [0.9, 0.5]);
  const npuOpacity = useTransform(p, [0.5, 0.6], [0, 1]);
  const shadowScale = useTransform(p, [0.14, 0.6], [1, 1.5]);
  const shadowOpacity = useTransform(p, [0.14, 0.6], [0.16, 0.07]);

  // headline block dissolves as the teardown begins
  const nameOpacity = useTransform(p, [0.06, 0.15], [1, 0]);
  const nameY = useTransform(p, [0.06, 0.15], [0, -46]);
  const cueOpacity = useTransform(p, [0.02, 0.08], [1, 0]);
  const railScale = { scaleY: p };

  return (
    <div ref={track} className="relative h-[520vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        {/* headline */}
        <motion.div
          style={{ opacity: nameOpacity, y: nameY }}
          className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8 sm:pt-28"
        >
          <p className="kicker mb-4">
            SYS.PORTFOLIO // BUILD 2026.07 // ONE MONTH OF OUTPUT
          </p>
          <h1 className="text-[15vw] font-bold leading-[0.88] tracking-tight text-black sm:text-8xl">
            SARVESH
            <br />
            <span className="stroke-text">SINGH</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg">
            AI systems engineer. Eleven systems shipped in thirty days — this
            is the processor that month ran on. Scroll to take it apart.
          </p>
        </motion.div>

        {/* 3D stage */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ perspective: 1400 }}
        >
          <motion.div
            style={{
              rotateX: rigRotateX,
              rotateZ: rigRotateZ,
              scale: rigScale,
              y: rigY,
              transformStyle: "preserve-3d",
            }}
            className="relative mt-[26svh] h-[min(66vw,320px)] w-[min(66vw,320px)] sm:mt-[18svh]"
          >
            {/* ground shadow */}
            <motion.div
              style={{ scale: shadowScale, opacity: shadowOpacity, z: -120 }}
              className="absolute inset-[-12%] rounded-full bg-black blur-2xl"
            />

            {/* pin field */}
            <motion.div
              style={{
                z: pinsZ,
                opacity: pinsOpacity,
                backgroundImage:
                  "radial-gradient(circle, rgb(0 0 0 / 0.55) 1.5px, transparent 1.5px)",
                backgroundSize: "9% 9%",
                backgroundPosition: "4.5% 4.5%",
              }}
              className="absolute inset-[7%]"
            />

            {/* substrate */}
            <motion.div
              style={{ z: substrateZ, transformStyle: "preserve-3d" }}
              className="absolute inset-0 border border-black/25 bg-[#e9e6de] shadow-[0_0_0_1px_rgb(255_255_255/0.5)_inset]"
            >
              <span className="absolute bottom-[4%] left-[5%] font-mono text-[7px] tracking-[0.2em] text-black/40">
                S//S PKG · 2026.07
              </span>
              <span className="absolute right-[5%] top-[4%] font-mono text-[7px] tracking-[0.2em] text-black/40">
                NL
              </span>
              {/* edge traces */}
              <span
                aria-hidden
                className="absolute inset-x-[6%] top-[10%] h-px bg-black/15"
              />
              <span
                aria-hidden
                className="absolute inset-x-[6%] bottom-[10%] h-px bg-black/15"
              />
            </motion.div>

            {/* NPU core grid — exposed beneath the CPU die */}
            <motion.div
              style={{ z: 8, opacity: npuOpacity, transformStyle: "preserve-3d" }}
              className="absolute inset-[24%]"
            >
              <div
                className="grid h-full w-full grid-cols-4 grid-rows-3 gap-[4%]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {CORES.map((c, i) => (
                  <CoreTile key={c} p={p} i={i} />
                ))}
              </div>
            </motion.div>

            {/* CPU die */}
            <motion.div
              style={{ z: dieZ, opacity: dieOpacity }}
              className="pearl-metal absolute inset-[26%] border border-black/30 shadow-lg"
            >
              <span className="absolute inset-0 flex items-center justify-center font-mono text-[8px] tracking-[0.3em] text-black/55 sm:text-[10px]">
                CPU · SGX-1
              </span>
              <span aria-hidden className="absolute inset-[8%] border border-black/10" />
            </motion.div>

            {/* heat-spreader lid */}
            <motion.div
              style={{ z: lidZ, opacity: lidOpacity }}
              className="pearl-metal absolute inset-[10%] border border-black/25 shadow-xl"
            >
              <span aria-hidden className="pearl-iridescent absolute inset-0 opacity-60" />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] tracking-[0.34em] text-black/60 sm:text-[11px]">
                S//S CORE
              </span>
              <span className="absolute bottom-[6%] right-[7%] font-mono text-[6.5px] tracking-[0.2em] text-black/40 sm:text-[8px]">
                11 SYSTEMS / 30 DAYS
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* stage captions */}
        <div className="absolute inset-x-0 bottom-14 z-10 mx-auto w-full max-w-6xl px-5 sm:bottom-16 sm:px-8">
          <div className="relative h-24">
            <Caption
              p={p}
              range={[0.14, 0.32]}
              kicker="STAGE 01 // LID OFF"
              line="The classical shell comes away. Underneath, the month is machinery."
            />
            <Caption
              p={p}
              range={[0.34, 0.5]}
              kicker="STAGE 02 // CPU RAISED"
              line="Deterministic core: interlocks, provenance checks, hash-chained audit."
            />
            <Caption
              p={p}
              range={[0.52, 0.72]}
              kicker="STAGE 03 // NPU EXPOSED"
              line="The neural engine — eleven cores, all running on hardware I control."
            />
            <Caption
              p={p}
              range={[0.74, 0.97]}
              kicker="STAGE 04 // CORES DEPLOYED"
              line="Every core is a shipped system. The index follows."
            />
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="kicker">SCROLL TO DECOMPOSE</span>
          <span className="relative block h-8 w-px overflow-hidden bg-black/15">
            <motion.span
              className="absolute left-0 top-0 h-3 w-px bg-black"
              animate={{ y: [-12, 32] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>

        {/* progress rail */}
        <div className="absolute bottom-6 right-4 top-20 w-px bg-black/10 sm:right-6">
          <motion.div style={railScale} className="h-full w-px origin-top bg-black" />
        </div>
      </div>
    </div>
  );
}
