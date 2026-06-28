import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const mark = size === "sm" ? 26 : size === "lg" ? 40 : 32;
  const text =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)}>
      <span
        className="relative flex items-center justify-center"
        style={{ width: mark, height: mark }}
        aria-hidden
      >
        <span
          className="absolute border border-primary/30"
          style={{ width: mark, height: mark, transform: "rotate(45deg)" }}
        />
        <span
          className="absolute border-2 border-primary"
          style={{ width: mark * 0.66, height: mark * 0.66, transform: "rotate(45deg)" }}
        />
        <span
          className="absolute bg-primary"
          style={{ width: mark * 0.26, height: mark * 0.26 }}
        />
      </span>
      <span
        className={cn(
          "font-display font-bold uppercase tracking-[0.16em] text-foreground",
          text,
        )}
      >
        J10<span className="text-primary">Effect</span>
      </span>
    </Link>
  );
}