import Counter from "@/components/fx/counter";
import Reveal from "@/components/fx/reveal";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="border-t border-black/20 pt-5">
            <Counter
              value={s.value}
              suffix={s.suffix}
              className="holo-text font-mono text-4xl font-bold tabular-nums sm:text-6xl"
            />
            <p className="kicker mt-3">{s.label}</p>
            <p className="mt-1 font-mono text-[10px] text-black/35">{s.note}</p>
          </div>
        ))}
      </Reveal>
      <p className="mt-6 font-mono text-[10px] tracking-wider text-black/35">
        TEST COUNT = GT-CODE 553 · GT ASSURE 105 · GLASSBOX 63 · STRIDE 65 — ALL GREEN AT LAST RUN
      </p>
    </section>
  );
}
