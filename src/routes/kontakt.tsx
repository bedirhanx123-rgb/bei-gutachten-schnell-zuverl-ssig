import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – BAY Gutachten Offenbach" },
      { name: "description", content: "Kontaktieren Sie BAY Gutachten per Telefon, WhatsApp, E-Mail oder Formular. Kurzfristige Termine in Offenbach und Rhein-Main." },
      { property: "og:title", content: "Kontakt – BAY Gutachten" },
      { property: "og:description", content: "Schnell, unkompliziert und persönlich – nehmen Sie direkt Kontakt auf." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-6 lg:py-20">
          <p className="text-sm font-medium text-cta">Kontakt</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">So erreichen Sie uns</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Wählen Sie den Weg, der für Sie am einfachsten ist. Wir melden uns schnellstmöglich zurück.
          </p>
        </div>
      </section>
      <ContactSection />
    </SiteLayout>
  );
}
