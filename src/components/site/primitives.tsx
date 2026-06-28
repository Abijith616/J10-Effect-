import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export function FadeUp({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="h-px w-6 bg-primary" />
      <span className="eyebrow text-primary">{children}</span>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  className,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  className?: string;
}) {
  return (
    <FadeUp className={className}>
      <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
      <h2 className="text-balance text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
        {title}
        {accent ? <span className="text-primary"> {accent}</span> : null}
      </h2>
    </FadeUp>
  );
}