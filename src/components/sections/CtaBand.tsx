import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          Let's create something <span className="text-primary">iconic.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Whether you have a full brief or just a spark of an idea, we turn it
          into a cinematic brand experience the world won't forget.
        </p>
        <Link
          to="/contact"
          className="group mt-10 inline-flex items-center gap-2.5 bg-primary px-9 py-4 text-[13px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start a project
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}