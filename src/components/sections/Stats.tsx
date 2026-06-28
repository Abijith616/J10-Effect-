import { FadeUp } from "@/components/site/primitives";
import { STATS } from "@/lib/site-data";

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {STATS.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08}>
            <div className="bg-background px-6 py-12 text-center md:py-16">
              <div className="font-display text-4xl font-bold text-primary md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
                {s.label}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}