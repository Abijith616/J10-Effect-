import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — J10Effect" },
      {
        name: "description",
        content:
          "Selected campaigns and brand films from J10Effect — trusted by Mercedes-Benz, Audi, ElevenLabs, and more.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Campaigns that move"
        accent="markets and minds."
        subtitle="A selection of recent projects across automotive, technology, and global brands."
      />
      <FeaturedWork />
      <Testimonials />
      <CtaBand />
    </>
  );
}