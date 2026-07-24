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
              className="holo-text font-mono text-3xl font-bold tabular-nums sm:text-6xl"
            />
            <p className="kicker mt-3">{s.label}</p>
          </div>
        ))}
      </Reveal>
      <p className="mt-6 font-mono text-[10px] tracking-wider text-black/35">
        553 + 105 + 63 + 65 tests, all green at last run.
      </p>
    </section>
  );
}
