import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — J10Effect" },
      {
        name: "description",
        content:
          "Start a project with J10Effect. Send a brief and our team responds within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ContactForm />;
}