import Scramble from "@/components/fx/scramble";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8 border-b border-black/15 pb-4 sm:mb-14">
      <h2 className="text-2xl font-bold tracking-tight text-black sm:text-5xl">
        <Scramble text={title} />
      </h2>
    </div>
  );
}
