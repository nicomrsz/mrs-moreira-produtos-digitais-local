import { SERVICES } from "@/lib/site";

export function Marquee() {
  const items = [...SERVICES, ...SERVICES];
  return (
    <div className="overflow-hidden border-y border-foreground bg-ink py-6 text-ink-foreground" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-display text-4xl uppercase sm:text-5xl">{s.title}</span>
            <span className="text-editorial text-4xl italic text-grey sm:text-5xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
