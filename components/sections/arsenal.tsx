import Reveal from "@/components/fx/reveal";
import SectionHeader from "@/components/sections/section-header";
import { ARSENAL } from "@/lib/data";

export default function Arsenal() {
  return (
    <section id="arsenal" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeader idx="04" kicker="STACK // BATTLE-TESTED" title="THE ARSENAL" />
      <div className="space-y-10">
        {ARSENAL.map((g) => (
          <Reveal key={g.group} selector="[data-chip]" step={30}>
            <p className="kicker mb-3">{g.group}</p>
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
              {g.items.map((item, i) => (
                <span key={item} data-chip className="inline-flex items-baseline gap-x-3">
                  <span className="text-xl font-medium tracking-tight text-black/80 transition-colors hover:text-black sm:text-2xl">
                    {item}
                  </span>
                  {i < g.items.length - 1 && (
                    <span aria-hidden className="font-mono text-sm text-black/25">/</span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
