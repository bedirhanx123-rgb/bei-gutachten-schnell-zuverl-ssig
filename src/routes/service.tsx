import { createFileRoute } from "@tanstack/react-router";
import { Car, FileCheck2, Gauge, Wrench, History, Camera, Scale, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { PrimaryCTA, WhatsappCTA } from "@/components/site/CTAButtons";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Unser Service – BEI Gutachten Offenbach" },
      { name: "description", content: "Schadengutachten, Unfallgutachten, Wertgutachten, Oldtimergutachten und Vor-Ort-Besichtigung in Offenbach und Rhein-Main." },
      { property: "og:title", content: "Unser Service – BEI Gutachten" },
      { property: "og:description", content: "Leistungen eines unabhängigen Kfz-Sachverständigen für Privatpersonen, Werkstätten, Autohäuser und Anwälte." },
    ],
  }),
  component: ServicePage,
});

const services = [
  { icon: FileCheck2, title: "Unfallgutachten", desc: "Vollständige, neutrale Begutachtung nach einem Unfall – als Grundlage für Versicherung, Anwalt und Werkstatt." },
  { icon: Car, title: "Schadengutachten", desc: "Detaillierte Bewertung von Karosserie-, Lack- und Strukturschäden mit klarer Dokumentation." },
  { icon: Gauge, title: "Wertgutachten", desc: "Realistische Einschätzung des aktuellen Fahrzeugwerts – nachvollziehbar belegt." },
  { icon: Wrench, title: "Fahrzeugbewertung", desc: "Sachliche Bewertung vor Kauf, Verkauf, Leasingrückgabe oder im familiären Übergang." },
  { icon: History, title: "Oldtimergutachten", desc: "Bewertung klassischer Fahrzeuge mit Blick für Originalität, Zustand und Marktwert." },
  { icon: Camera, title: "Beweissicherung", desc: "Strukturierte Dokumentation des Schadens, falls später Fragen oder Streitigkeiten auftreten." },
  { icon: Scale, title: "Kasko- & Haftpflichtschäden", desc: "Begutachtung im Versicherungsfall – verständlich aufbereitet und vollständig." },
  { icon: MapPin, title: "Vor-Ort-Besichtigung", desc: "Auf Wunsch kommen wir zu Ihnen – zuhause, am Unfallort oder zur Werkstatt." },
];

function ServicePage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
          <p className="text-sm font-medium text-cta">Unser Service</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Leistungen eines unabhängigen Kfz-Sachverständigen</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Verständlich erklärt, sachlich bewertet, klar dokumentiert. Für Privatpersonen,
            Werkstätten, Autohäuser und Anwälte in Offenbach und Rhein-Main.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCTA />
            <WhatsappCTA />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:border-cta">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-primary"><s.icon className="h-5 w-5" /></span>
                <h2 className="mt-4 text-lg font-semibold text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}
