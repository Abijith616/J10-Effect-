import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import { FadeUp, SectionHeading } from "@/components/site/primitives";
import { PROJECTS } from "@/lib/site-data";
import mercedes from "@/assets/work-mercedes.jpg";
import audi from "@/assets/work-audi.jpg";
import elevenlabs from "@/assets/work-elevenlabs.jpg";
import invideo from "@/assets/work-invideo.jpg";

export const WORK_IMAGES = [mercedes, audi, elevenlabs, invideo];

export function FeaturedWork({ withCta = false }: { withCta?: boolean }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Selected work" title="Featured" accent="projects" />
          {withCta && (
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 self-start text-[13px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground md:self-auto"
            >
              View all work
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="grid gap-px border border-border bg-border lg:grid-cols-5">
          <div className="flex flex-col bg-background lg:col-span-2">
            {PROJECTS.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className={`group relative border-b border-border p-7 text-left transition-colors duration-300 last:border-b-0 ${
                  active === i ? "bg-surface" : "hover:bg-surface/50"
                }`}
              >
                {active === i && <span className="absolute inset-y-0 left-0 w-0.5 bg-primary" />}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70">
                      {p.category}
                    </div>
                    <div className="mb-2 font-display text-lg font-semibold">{p.client}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronRight
                    size={15}
                    className={`mt-1 shrink-0 transition-all ${
                      active === i ? "translate-x-0.5 text-primary" : "text-muted-foreground/40"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-surface lg:col-span-3">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={WORK_IMAGES[active]}
                alt={PROJECTS[active].title}
                width={1024}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
            </motion.div>

            <motion.div
              key={`info-${active}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="absolute bottom-0 left-0 p-9"
            >
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                {PROJECTS[active].category}
              </div>
              <h3 className="mb-2 max-w-md font-display text-2xl font-bold leading-snug md:text-3xl">
                {PROJECTS[active].title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {PROJECTS[active].desc}
              </p>
            </motion.div>

            <div className="absolute right-9 top-1/2 -translate-y-1/2">
              <span className="flex h-14 w-14 items-center justify-center border border-border backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-primary/10">
                <Play size={16} className="ml-0.5 text-foreground/70" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}