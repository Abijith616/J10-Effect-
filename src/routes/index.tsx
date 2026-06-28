import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Stats } from "@/components/sections/Stats";
import { ServicesList } from "@/components/sections/ServicesList";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <ServicesList withCta limit={6} />
      <FeaturedWork withCta />
      <Process />
      <WhyUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
