import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/site/primitives";
import { STEPS } from "@/lib/site-data";

export function Process() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/40 py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading eyebrow="How we work" title="A precise" accent="six-step pipeline" className="mb-16 max-w-2xl" />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex flex-col">
              {STEPS.map((s, i) => (
                <button
                  key={s.n}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-5 border-b border-border py-5 text-left transition-colors ${
                    active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`font-mono text-sm transition-colors ${
                      active === i ? "text-primary" : "text-muted-foreground/50"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span className="font-display text-xl font-semibold">{s.label}</span>
                  <span
                    className={`ml-auto h-px bg-primary transition-all duration-400 ${
                      active === i ? "w-10" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden border border-border bg-background p-10 lg:p-14">
              <div className="pointer-events-none absolute -right-10 -top-10 font-display text-[180px] font-bold leading-none text-primary/[0.06]">
                {STEPS[active].n}
              </div>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                  Step {STEPS[active].n}
                </div>
                <h3 className="mb-5 font-display text-4xl font-bold">{STEPS[active].label}</h3>
                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                  {STEPS[active].desc}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}