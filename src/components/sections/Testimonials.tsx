import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/site/primitives";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const [curr, setCurr] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (i: number) => {
    setDir(i > curr ? 1 : -1);
    setCurr((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative border-y border-border bg-surface/40 py-28">
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Client testimonials"
          title="What clients"
          accent="say"
          className="mb-16 text-center [&_span]:justify-center"
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden border border-border bg-background">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <motion.div
              key={curr}
              initial={{ opacity: 0, x: dir * 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 md:p-14"
            >
              <Quote size={28} className="mb-8 text-primary/40" />
              <p className="mb-10 font-display text-xl leading-relaxed text-foreground/90 md:text-2xl">
                {TESTIMONIALS[curr].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border font-display text-lg font-bold text-primary">
                  {TESTIMONIALS[curr].name[0]}
                </div>
                <div>
                  <div className="font-display font-semibold">{TESTIMONIALS[curr].name}</div>
                  <div className="text-sm text-muted-foreground">{TESTIMONIALS[curr].role}</div>
                  <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary/70">
                    {TESTIMONIALS[curr].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-0.5 transition-all duration-300 ${
                    i === curr ? "w-8 bg-primary" : "w-4 bg-border hover:bg-foreground/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(curr - 1)}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-primary/40"
              >
                <ChevronRight size={14} className="rotate-180 text-muted-foreground" />
              </button>
              <button
                onClick={() => go(curr + 1)}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-primary/40"
              >
                <ChevronRight size={14} className="text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}