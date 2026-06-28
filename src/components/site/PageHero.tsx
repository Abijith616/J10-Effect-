import { FadeUp, Eyebrow } from "@/components/site/primitives";

export function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border pb-20 pt-40">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <FadeUp>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            {title}
            {accent ? <span className="text-primary"> {accent}</span> : null}
          </h1>
          {subtitle ? (
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </FadeUp>
      </div>
    </section>
  );
}