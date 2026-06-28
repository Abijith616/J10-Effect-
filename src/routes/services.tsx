import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ServicesList } from "@/components/sections/ServicesList";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — J10Effect" },
      {
        name: "description",
        content:
          "From commercials and brand films to performance campaigns and digital experiences — the full J10Effect capability stack.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Everything you need to"
        accent="advertise at the frontier."
        subtitle="A single studio for the entire creative pipeline — strategy, production, and delivery, engineered around your brand."
      />
      <ServicesList />
      <Process />
      <CtaBand />
    </>
  );
}