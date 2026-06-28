import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, CONTACT } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A next-generation AI advertising studio crafting cinematic brand
              experiences trusted by global leaders.
            </p>
            <div className="mt-6 flex gap-2.5">
              {["X", "IG", "YT", "LI"].map((s) => (
                <span
                  key={s}
                  className="flex h-9 w-9 items-center justify-center border border-border font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow mb-6 text-muted-foreground">Navigate</div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="eyebrow mb-6 text-muted-foreground">Get in touch</div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-2 font-display text-lg text-foreground transition-colors hover:text-primary"
            >
              {CONTACT.email}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {CONTACT.studio}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © {year} J10Effect. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Advertising studio
          </p>
        </div>
      </div>
    </footer>
  );
}