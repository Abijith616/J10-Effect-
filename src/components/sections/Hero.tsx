import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { STATS } from "@/lib/site-data";
import ambientVideo from "@/assets/Ambient.mp4";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={ambientVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-16 text-center">
        <h1
          className="text-balance font-bold leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(48px, 9vw, 120px)" }}
        >
          Advertising
          <br />
          <span className="text-primary">at the speed of culture.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
          Brand films, commercials, and campaigns produced at broadcast quality —
          delivered in days, not months.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 bg-primary px-9 py-4 text-[13px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a call
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 border border-border px-9 py-4 text-[13px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary/50">
              <Play size={10} className="ml-0.5 text-primary" />
            </span>
            View portfolio
          </Link>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background px-6 py-5 text-center">
              <div className="font-display text-2xl font-bold">{s.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}