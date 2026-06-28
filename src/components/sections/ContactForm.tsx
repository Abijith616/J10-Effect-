import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FadeUp, Eyebrow } from "@/components/site/primitives";
import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "AI Commercial Production",
  "Brand Film",
  "Product Advertising",
  "UGC at Scale",
  "Performance Campaigns",
  "Digital Experience",
  "Other",
];

const inputCls =
  "w-full border border-input bg-surface px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", brand: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", brand: "", service: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section className="relative overflow-hidden py-28 pt-36">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeUp>
            <Eyebrow className="mb-6">Get in touch</Eyebrow>
            <h1 className="text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">
              Let's create <br />
              <span className="text-primary">something iconic.</span>
            </h1>
            <p className="mt-7 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Whether you have a full brief or just a spark of an idea, we turn it
              into a cinematic brand experience the world won't forget.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-5">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-primary/20">
                  <Mail size={15} className="text-primary" />
                </div>
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Email
                  </div>
                  <a href={`mailto:${CONTACT.email}`} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-primary/20">
                  <MapPin size={15} className="text-primary" />
                </div>
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Studio
                  </div>
                  <p className="text-sm text-foreground/80">{CONTACT.studio}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 border border-border bg-surface p-5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p className="text-sm text-muted-foreground">
                We respond to all briefs within{" "}
                <span className="text-foreground">24 hours</span>. No exceptions.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <form onSubmit={submit} className="space-y-4">
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 border border-primary/30 bg-primary/[0.08] p-4 text-sm text-foreground"
                >
                  <CheckCircle2 size={16} className="text-primary" />
                  Brief received — our team will reach out within 24 hours.
                </motion.div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                    placeholder="you@brand.com"
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Brand / company">
                  <input
                    value={form.brand}
                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                    className={inputCls}
                    placeholder="Your brand"
                  />
                </Field>
                <Field label="Service">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={cn(inputCls, "cursor-pointer")}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Project brief">
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={cn(inputCls, "resize-none")}
                  placeholder="Tell us about your project — the more detail, the better."
                />
              </Field>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2.5 bg-primary py-4 text-[13px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send project brief
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Your details are never shared or sold.
              </p>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}