import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Scale, FileText, Gauge, Camera, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { PrimaryCTA, WhatsappCTA } from "@/components/site/CTAButtons";

export const Route = createFileRoute("/warum-gutachten")({
  head: () => ({
    meta: [
      { title: "Warum ein Kfz-Gutachten? – BEI Gutachten" },
      { name: "description", content: "Ein unabhängiges Kfz-Gutachten schafft Sicherheit nach Unfall oder Schaden. Klar dokumentiert für Versicherung, Anwalt und Werkstatt." },
      { property: "og:title", content: "Warum ein unabhängiges Kfz-Gutachten wichtig ist" },
      { property: "og:description", content: "Objektive Schadenbewertung, Beweissicherung, Einschätzung von Reparaturkosten und Wertminderung." },
    ],
  }),
  component: WhyPage,
});

const points = [
  { icon: ShieldCheck, t: "Sicherheit nach einem Unfall", d: "Sie wissen, woran Sie sind – und welche nächsten Schritte sinnvoll sind." },
  { icon: Gauge, t: "Objektive Schadenbewertung", d: "Eine neutrale Einschätzung statt nur Werkstatt- oder Versicherungsmeinung." },
  { icon: Camera, t: "Beweissicherung", d: "Strukturierte Dokumentation – falls später noch Fragen aufkommen." },
  { icon: FileText, t: "Reparaturkosten realistisch einschätzen", d: "Sie sehen, welcher Aufwand für eine fachgerechte Reparatur erforderlich ist." },
  { icon: Scale, t: "Mögliche Wertminderung", d: "Auch reparierte Fahrzeuge können an Wert verlieren – wir machen das nachvollziehbar." },
  { icon: Users, t: "Klare Grundlage für alle Beteiligten", d: "Versicherung, Anwalt und Werkstatt arbeiten mit derselben sachlichen Basis." },
];

function WhyPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-6 lg:py-20">
          <p className="text-sm font-medium text-cta">Hintergrund</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Warum ein unabhängiges Kfz-Gutachten wichtig ist</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Nach einem Unfall oder Schaden fehlt häufig der Überblick. Ein unabhängiges
            Gutachten schafft eine sachliche Grundlage – für Sie und alle Beteiligten.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCTA />
            <WhatsappCTA />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.t} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-primary"><p.icon className="h-5 w-5" /></span>
                <h2 className="mt-4 text-lg font-semibold text-primary">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="text-xl font-semibold text-primary">Unabhängige Dokumentation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ein Gutachten von BEI Gutachten ist nachvollziehbar aufgebaut, klar verständlich
              und nicht an einzelne Interessen gebunden. So bleibt die Bewertung belastbar –
              auch wenn später Fragen aufkommen.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
              {["Unabhängig erstellt", "Klar strukturiert", "Verständlich formuliert", "Belastbar dokumentiert"].map((x) => (
                <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cta" /> {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}
