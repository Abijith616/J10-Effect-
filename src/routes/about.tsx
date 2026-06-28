import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AboutContent } from "@/components/sections/AboutContent";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — J10Effect" },
      {
        name: "description",
        content:
          "J10Effect is an advertising studio combining human creative direction with modern production to deliver broadcast-grade work at speed.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A new kind of"
        accent="advertising studio."
        subtitle="Human creative direction, generative production, and a relentless standard of finish — under one roof."
      />
      <AboutContent />
      <CtaBand />
    </>
  );
}