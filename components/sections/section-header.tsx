import Scramble from "@/components/fx/scramble";

export default function SectionHeader({
  idx,
  kicker,
  title,
}: {
  idx: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b border-black/15 pb-4 sm:mb-14">
      <div>
        <p className="kicker mb-3">{kicker}</p>
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl">
          <Scramble text={title} />
        </h2>
      </div>
      <span aria-hidden className="stroke-text font-mono text-4xl font-bold sm:text-6xl">
        {idx}
      </span>
    </div>
  );
}
