import { FadeUp, SectionHeading } from "@/components/site/primitives";
import { EDGE, STATS } from "@/lib/site-data";

const PRINCIPLES = [
  {
    n: "01",
    title: "Craft over volume",
    desc: "AI lets us move fast, but every frame still passes through human art direction. Speed never costs us the finish.",
  },
  {
    n: "02",
    title: "Strategy first",
    desc: "We start with the business outcome and work backwards to the creative — never the other way around.",
  },
  {
    n: "03",
    title: "Single accountability",
    desc: "One studio owns the brief from concept to delivery. No handoffs, no finger-pointing, no quality drift.",
  },
];

export function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our story"
                title="An AI studio built to"
                accent="a broadcast standard."
                className="mb-8"
              />
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  J10Effect was founded on a simple conviction: modern
                  production technology would not replace great advertising — it would
                  let a small, obsessive team produce it at a scale and speed
                  the industry had never seen.
                </p>
                <p>
                  Today we partner with global brands across automotive,
                  technology, and consumer markets, delivering cinematic
                  commercials and brand films that hold their own against
                  traditional studios at a fraction of the timeline.
                </p>
                <p>
                  Every project is led by human creative direction and
                  finished to the standard our clients — from luxury
                  automotive to frontier AI labs — demand.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-px border border-border bg-border">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-background p-8">
                    <div className="font-display text-4xl font-bold text-primary">
                      {s.value}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-surface/40 py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <SectionHeading eyebrow="How we think" title="Operating" accent="principles" className="mb-16 max-w-2xl" />
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.08}>
                <div className="h-full bg-background p-9">
                  <div className="mb-6 font-display text-5xl font-bold text-primary/15">
                    {p.n}
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <SectionHeading eyebrow="What sets us apart" title="The J10Effect" accent="edge" className="mb-16 max-w-2xl" />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {EDGE.map((w, i) => {
              const Icon = w.icon;
              return (
                <FadeUp key={w.title} delay={(i % 3) * 0.06}>
                  <div className="h-full bg-background p-8">
                    <div className="mb-6 flex h-9 w-9 items-center justify-center border border-primary/20">
                      <Icon size={15} className="text-primary" />
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
    </>
  );
}