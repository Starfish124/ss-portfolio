import { TICKER } from "@/lib/data";

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {TICKER.map((t) => (
        <span
          key={t}
          className="flex items-center font-mono text-[11px] tracking-[0.3em] text-black/55"
        >
          <span className="px-5">{t}</span>
          <span aria-hidden className="text-black/25">◆</span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-black/10 py-3">
      <div className="marquee-track" style={{ ["--marquee-dur" as string]: "38s" }}>
        <Row />
        <Row />
      </div>
    </div>
  );
}
