import Reveal from "@/components/fx/reveal";
import SectionHeader from "@/components/sections/section-header";
import { Area, AreaChart } from "@/components/charts/area-chart";
import { Bar } from "@/components/charts/bar";
import BarChart from "@/components/charts/bar-chart";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { Grid } from "@/components/charts/grid";
import { Ring } from "@/components/charts/ring";
import { RingCenter } from "@/components/charts/ring-center";
import RingChart from "@/components/charts/ring-chart";
import { ChartTooltip } from "@/components/charts/tooltip";
import { XAxis } from "@/components/charts/x-axis";

/*
 * Every number here is real: shipped test counts at their merge dates,
 * and timings measured on live runs. Monochrome ink palette validated
 * (dataviz six-checks, light pearl surface): CVD ΔE 18.0, contrast ≥3:1.
 */

const INK = "#111111";
const INK_2 = "#565656";
const INK_3 = "#8a8a8a";
const EMBER = "#b45a1e";

// cumulative green tests at real merge checkpoints (July 2026)
const TESTS_OVER_TIME = [
  { date: new Date("2026-07-01"), tests: 0 },
  { date: new Date("2026-07-04"), tests: 63 },
  { date: new Date("2026-07-08"), tests: 63 },
  { date: new Date("2026-07-14"), tests: 559 },
  { date: new Date("2026-07-16"), tests: 593 },
  { date: new Date("2026-07-20"), tests: 593 },
  { date: new Date("2026-07-23"), tests: 763 },
  { date: new Date("2026-07-24"), tests: 786 },
];

const TESTS_BY_SYSTEM = [
  { name: "GT-CODE", tests: 553 },
  { name: "GT-ASSURE", tests: 105 },
  { name: "STRIDE", tests: 65 },
  { name: "GLASSBOX", tests: 63 },
];

const RATIOS = [
  { label: "LOCAL RUNTIME", value: 8, maxValue: 11, color: EMBER },
  { label: "PBC AUTO MATCH", value: 12, maxValue: 14, color: INK_2 },
  { label: "BLUEPRINT LAYERS", value: 7, maxValue: 7, color: INK_3 },
];

const TILES = [
  { v: "≈90 s", k: "CONTROL FINDING DRAFTED AND CITED" },
  { v: "~11 min", k: "FULL 10 CONTROL TEST RUN" },
  { v: "12/14", k: "PBC ITEMS AUTO MATCHED" },
  { v: "0", k: "UNVERIFIED NUMBERS SHIPPED" },
];

function ChartBlock({
  title,
  sub,
  note,
  children,
}: {
  title: string;
  sub: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-black/20 pt-5">
      <p className="kicker">{title}</p>
      <p className="mt-1 mb-5 text-sm text-black/60">{sub}</p>
      {children}
      <p className="mt-4 font-mono text-[9px] tracking-[0.16em] text-black/35">
        {note}
      </p>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeader title="THE NUMBERS" />

      {/* headline numbers — the corporate story, straight from live runs */}
      <Reveal className="mb-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {TILES.map((t) => (
          <div key={t.k} className="border-t border-black/20 pt-5">
            <p className="holo-text font-mono text-xl font-bold tabular-nums sm:text-3xl">
              {t.v}
            </p>
            <p className="kicker mt-2">{t.k}</p>
          </div>
        ))}
      </Reveal>

      <div className="space-y-14">
        <ChartBlock
          title="TESTS GREEN OVER JULY"
          sub="Shipped test counts at their real merge checkpoints."
          note="GT CODE 553 · GT ASSURE 105 · STRIDE 65 · GLASSBOX 63"
        >
          <AreaChart data={TESTS_OVER_TIME} aspectRatio="16 / 7">
            <Grid horizontal numTicksRows={4} />
            <Area
              dataKey="tests"
              fill={EMBER}
              stroke={EMBER}
              fillOpacity={0.14}
              strokeWidth={2}
            />
            <XAxis numTicks={4} />
            <ChartTooltip />
          </AreaChart>
        </ChartBlock>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          <ChartBlock
            title="TEST SUITE BY SYSTEM"
            sub="Where the 786 green tests live."
            note="COUNTED AT THE LAST GREEN RUN OF EACH SUITE"
          >
            <BarChart data={TESTS_BY_SYSTEM} xDataKey="name" aspectRatio="16 / 9" barGap={0.35}>
              <Grid horizontal numTicksRows={4} />
              <Bar dataKey="tests" fill={INK} lineCap={4} />
              <BarXAxis />
              <ChartTooltip showCrosshair={false} />
            </BarChart>
          </ChartBlock>

          <ChartBlock
            title="COVERAGE RATIOS"
            sub="How much of the month runs without the cloud."
            note="LOCAL RUNTIME 8/11 SYSTEMS · PBC AUTO MATCH 12/14 · BLUEPRINT LAYERS 7/7"
          >
            <div className="mx-auto aspect-square w-full max-w-72">
              <RingChart data={RATIOS} strokeWidth={11} ringGap={7} baseInnerRadius={52}>
                <Ring index={0} color={EMBER} />
                <Ring index={1} color={INK_2} />
                <Ring index={2} color={INK_3} />
                <RingCenter defaultLabel="RATIOS" />
              </RingChart>
            </div>
            {/* direct legend — identity never rides on color alone */}
            <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1">
              {RATIOS.map((r) => (
                <span key={r.label} className="flex items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-black/55">
                  <span className="inline-block h-2 w-2" style={{ background: r.color }} />
                  {r.label} {r.value}/{r.maxValue}
                </span>
              ))}
            </div>
          </ChartBlock>
        </div>
      </div>

      <p className="mt-10 font-mono text-[10px] leading-relaxed tracking-wider text-black/35">
        Every number on this page is a real count or a measured run.
      </p>
    </section>
  );
}
