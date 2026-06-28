import { FadeUp, SectionHeading } from "@/components/site/primitives";
import { EDGE } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading eyebrow="The J10Effect edge" title="Why brands" accent="choose us" className="mb-16 max-w-2xl" />

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {EDGE.map((w, i) => {
            const Icon = w.icon;
            return (
              <FadeUp key={w.title} delay={(i % 3) * 0.06}>
                <div className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-surface">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center border border-primary/20 transition-colors duration-400 group-hover:border-primary/50">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <div className="h-px w-6 bg-border transition-colors duration-400 group-hover:bg-primary/40" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}