import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeUp, SectionHeading } from "@/components/site/primitives";
import { SERVICES } from "@/lib/site-data";

export function ServicesList({
  withCta = false,
  limit,
}: {
  withCta?: boolean;
  limit?: number;
}) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="What we do" title="Capabilities" accent="end to end" />
          {withCta && (
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 self-start text-[13px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground md:self-auto"
            >
              All services
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeUp key={svc.title} delay={(i % 3) * 0.06}>
                <div className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-surface">
                  <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="mb-6 flex h-11 w-11 items-center justify-center border border-primary/20 transition-colors duration-400 group-hover:border-primary/50">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold">{svc.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}