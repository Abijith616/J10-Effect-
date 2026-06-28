import { motion } from "motion/react";
import { CLIENTS } from "@/lib/site-data";

const ROW = [...CLIENTS, ...CLIENTS];

export function TrustedBy() {
  return (
    <section className="overflow-hidden border-y border-border bg-background py-16">
      <p className="mb-10 px-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by category-defining brands
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-14 whitespace-nowrap"
        >
          {ROW.map((b, i) => (
            <span
              key={i}
              className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-muted-foreground/40 transition-colors hover:text-foreground"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}