"use client";

import { useState } from "react";
import ShimmerText from "@/components/kokonutui/shimmer-text";
import ParticleButton from "@/components/kokonutui/particle-button";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="contact" className="border-t border-black/10">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="kicker">TRANSMISSION // OPEN</p>

        <ShimmerText
          text="OPEN CHANNEL"
          className="text-4xl tracking-tight sm:text-6xl"
        />

        <p className="mx-auto -mt-2 max-w-md text-sm leading-relaxed text-black/60">
          Building AI systems that respect where the data lives.
          If that is your kind of problem, transmit.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ParticleButton
            className="w-full font-mono text-xs tracking-[0.2em] sm:w-auto"
            onClick={() => {
              navigator.clipboard?.writeText(CONTACT.email).catch(() => {});
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            }}
          >
            {copied ? "COPIED ✓" : "COPY EMAIL"}
          </ParticleButton>
          <a
            href={`mailto:${CONTACT.email}`}
            className="w-full border border-black/25 px-6 py-2.5 font-mono text-xs tracking-[0.2em] text-black/80 transition-colors hover:bg-black hover:text-[#f4f2ed] sm:w-auto"
          >
            SEND SIGNAL
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-black/25 px-6 py-2.5 font-mono text-xs tracking-[0.2em] text-black/80 transition-colors hover:bg-black hover:text-[#f4f2ed] sm:w-auto"
          >
            GITHUB //
          </a>
        </div>
      </div>

      <footer className="border-t border-black/10 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 font-mono text-[9px] tracking-[0.22em] text-black/35 sm:flex-row sm:px-8">
          <span>© 2026 SARVESH SINGH — ALL SYSTEMS NOMINAL</span>
          <span>ANIME.JS · MOTION · KOKONUTUI · BKLIT UI</span>
          <span className="text-black/60">S//S — END OF TRANSMISSION ▌</span>
        </div>
      </footer>
    </section>
  );
}
