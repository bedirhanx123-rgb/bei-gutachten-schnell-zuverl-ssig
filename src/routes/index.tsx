import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, MessageCircle, MapPin, Mail, ShieldCheck, GraduationCap, Clock,
  Car, Scale, FileCheck2, ClipboardList, PhoneCall, Search, FileText, LifeBuoy,
  Wrench, Gauge, History, Camera, Building2, ChevronRight, ArrowRight, CheckCircle2, Zap,
} from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";
import { SiteLayout } from "@/components/site/Layout";
import { PrimaryCTA, WhatsappCTA, TertiaryCTA } from "@/components/site/CTAButtons";
import { ContactSection } from "@/components/site/ContactSection";
import heroImg from "@/assets/hero-gutachter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAY Gutachten – Kfz-Sachverständiger Offenbach & Rhein-Main" },
      { name: "description", content: "Unabhängiger Kfz-Sachverständiger in Offenbach und Rhein-Main. Antwort in Sekunden per Telefon oder WhatsApp. Unfallgutachten, Schadengutachten, Wertgutachten." },
      { property: "og:title", content: "BAY Gutachten – Kfz-Sachverständiger Offenbach & Rhein-Main" },
      { property: "og:description", content: "Professionelle Kfz-Gutachten nach Unfall oder Schaden. Schnell, unabhängig und unkompliziert." },
    ],
  }),
  component: HomePage,
});

const trust = [
  { icon: ShieldCheck, title: "Zertifiziert", sub: "Kfz-Sachverständiger" },
  { icon: GraduationCap, title: "Wirtschaftsingenieur", sub: "Schwerpunkt Maschinenbau" },
  { icon: Zap, title: "Antwort in Sekunden", sub: "Telefon & WhatsApp" },
  { icon: Clock, title: "Kurzfristige Termine", sub: "Oft binnen weniger Tage" },
  { icon: MapPin, title: "Vor-Ort-Service", sub: "Offenbach & Rhein-Main" },
];

const services = [
  { icon: Car, title: "Schadengutachten", desc: "Vollständige Bewertung von Karosserie- und Lackschäden mit klarer Dokumentation." },
  { icon: FileCheck2, title: "Unfallgutachten", desc: "Objektive Begutachtung nach einem Unfall – als Grundlage für Versicherung und Anwalt." },
  { icon: Gauge, title: "Wertgutachten", desc: "Realistische Einschätzung des aktuellen Fahrzeugwerts." },
  { icon: Wrench, title: "Fahrzeugbewertung", desc: "Bewertung vor Kauf, Verkauf oder Rückgabe – nachvollziehbar und neutral." },
  { icon: History, title: "Oldtimergutachten", desc: "Sachgerechte Bewertung klassischer Fahrzeuge mit Blick fürs Detail." },
  { icon: Camera, title: "Beweissicherung", desc: "Strukturierte Dokumentation des Schadens für spätere Auseinandersetzungen." },
  { icon: Scale, title: "Kasko- & Haftpflichtschäden", desc: "Begutachtung im Versicherungsfall – verständlich aufbereitet." },
  { icon: MapPin, title: "Vor-Ort-Besichtigung", desc: "Auf Wunsch kommt der Gutachter zu Ihnen – zuhause oder zur Werkstatt." },
];

const steps = [
  { icon: PhoneCall, title: "Kontakt aufnehmen", desc: "Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie eine kurze Anfrage." },
  { icon: Search, title: "Schaden begutachten lassen", desc: "Flexible und kurzfristige Begutachtung – bei Bedarf auch direkt vor Ort." },
  { icon: LifeBuoy, title: "Gutachten erhalten & unterstützt bleiben", desc: "Sie erhalten eine klare Dokumentation und BAY Gutachten bleibt für Rückfragen erreichbar." },
];

const reasons = [
  "Sicherheit nach einem Unfall",
  "Objektive Schadenbewertung",
  "Beweissicherung",
  "Einschätzung von Reparaturkosten",
  "Mögliche Wertminderung",
  "Klare Grundlage für Versicherung, Anwalt oder Werkstatt",
  "Unabhängige Dokumentation",
];

const faqs = [
  { q: "Wie schnell bekomme ich eine Rückmeldung?", a: "In der Regel antworten wir in wenigen Sekunden bis Minuten – per Telefon oder WhatsApp. Schreiben oder rufen Sie direkt an, gerade nach einem Unfall." },
  { q: "Kommen Sie auch zu mir vor Ort?", a: "Ja. In Offenbach und der Rhein-Main-Region ist eine Vor-Ort-Besichtigung in der Regel kurzfristig möglich – zuhause, am Unfallort oder zur Werkstatt." },
  { q: "Wann brauche ich ein Kfz-Gutachten?", a: "Immer dann, wenn ein Schaden objektiv dokumentiert oder ein Fahrzeugwert nachvollziehbar bestimmt werden soll – nach Unfall, bei Versicherungsfällen oder vor Kauf und Verkauf." },
  { q: "Für welche Region bieten Sie Gutachten an?", a: "Schwerpunkt ist Offenbach und die gesamte Rhein-Main-Region." },
  { q: "Kann ich direkt per WhatsApp schreiben?", a: "Ja, eine Kontaktaufnahme per WhatsApp ist ausdrücklich erwünscht – auch zum Senden erster Fotos des Schadens." },
  { q: "Sind Sie auch nach dem Gutachten erreichbar?", a: "Selbstverständlich. Für Rückfragen von Ihnen, Ihrer Versicherung oder Ihrem Anwalt bleiben wir ansprechbar." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
              Kfz-Sachverständiger · {SITE.area}
            </span>
            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Unfall oder Fahrzeugschaden?{" "}
              <span className="text-cta">Ihr Kfz-Gutachten in Offenbach & Rhein-Main.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Schnell, unabhängig und unkompliziert. Antwort in Sekunden per Telefon oder WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCTA className="w-full sm:w-auto" />
              <WhatsappCTA className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-cta/15 via-transparent to-brand/15 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]">
              <img
                src={heroImg}
                alt="Kfz-Sachverständiger bei der Begutachtung eines Fahrzeugs"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)] md:left-auto md:right-6 md:max-w-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cta/10 text-cta">
                  <Zap className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Direkt erreichbar</p>
                  <p className="text-sm font-semibold text-primary">Antwort in wenigen Sekunden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {trust.map((t) => (
              <li
                key={t.title}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                  <t.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="break-words text-[13px] font-semibold leading-tight text-primary">
                    {t.title}
                  </p>
                  <p className="mt-0.5 break-words text-[11px] leading-snug text-muted-foreground">
                    {t.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUICK HELP */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[1.1fr_1fr] lg:px-6 lg:py-20">
          <div>
            <p className="text-sm font-medium text-cta">Nach einem Unfall</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Schnelle Hilfe nach Unfall oder Schaden</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Nach einem Unfall sind viele Menschen unsicher. {SITE.name} verschafft Ihnen ruhig
              und sachlich Orientierung – mit klarer Begutachtung, verständlicher Dokumentation
              und einer Ansprechperson, die erreichbar bleibt.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {["Sie schildern uns kurz die Situation.", "Wir vereinbaren zeitnah einen Termin – auch vor Ort.", "Sie erhalten ein klares, unabhängiges Gutachten."].map((s) => (
                <li key={s} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cta" /> {s}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCTA />
              <WhatsappCTA />
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Zap, t: "Direkt erreichbar", d: "Antwort garantiert in wenigen Sekunden per Telefon oder WhatsApp." },
              { icon: MapPin, t: "Vor-Ort-Service", d: "Auf Wunsch kommen wir zu Ihnen – zuhause, am Unfallort oder zur Werkstatt." },
              { icon: ShieldCheck, t: "Unabhängig & sachlich", d: "Wir bewerten neutral – ohne Druck, ohne Schönfärberei." },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cta/10 text-cta"><c.icon className="h-5 w-5" /></span>
                <div>
                  <p className="text-base font-semibold text-primary">{c.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="leistungen" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-cta">Leistungen</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Unsere Gutachten im Überblick</h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Verständlich erklärt – das passende Gutachten für Ihre Situation.
              </p>
            </div>
            <Link to="/service" className="inline-flex items-center gap-1 text-sm font-semibold text-cta hover:underline">
              Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-5 transition hover:border-cta hover:shadow-[var(--shadow-card)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-primary group-hover:bg-cta group-hover:text-cta-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-primary">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS – 3 steps */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
          <p className="text-sm font-medium text-cta">Ablauf</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">In 3 klaren Schritten zum Gutachten</h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Unkompliziert, schnell, persönlich – Sie können sofort starten.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-cta px-2.5 py-0.5 text-xs font-semibold text-cta-foreground">
                  Schritt {i + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-brand-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-primary">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-6 lg:py-24">
          <div>
            <p className="text-sm font-medium text-cta">Hintergrund</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Warum ein unabhängiges Kfz-Gutachten wichtig ist</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Ein neutrales Gutachten schafft eine belastbare Grundlage – für Sie, Ihre
              Versicherung, Ihren Anwalt und die Werkstatt.
            </p>
            <Link to="/warum-gutachten" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cta hover:underline">
              Mehr dazu erfahren <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <span className="text-sm text-foreground/85">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <AboutSection />

      {/* FAQ */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-6 lg:py-24">
          <p className="text-sm font-medium text-cta">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Häufige Fragen</h2>
          <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 open:bg-surface">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-primary">
                  {f.q}
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}

function InfoRow({ icon: Icon, label, value, href, external }: { icon: any; label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-primary"><Icon className="h-4 w-4" /></span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium text-primary">{value}</p>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="block">
      {content}
    </a>
  );
}

function AboutSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-6 lg:py-24">
        <div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src={new URL("../assets/portrait-gutachter.jpg", import.meta.url).href}
              alt="Portrait des Kfz-Sachverständigen"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-cta">Über BAY Gutachten</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Technische Expertise mit persönlicher Ansprache</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Hinter {SITE.name} steht ein zertifizierter Kfz-Sachverständiger mit
            ingenieurwissenschaftlichem Hintergrund. Im Mittelpunkt steht eine sachliche,
            verständliche und verlässliche Begutachtung.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { i: ShieldCheck, t: "Zertifiziert", d: "Zertifizierter Kfz-Sachverständiger." },
              { i: GraduationCap, t: "Wirtschaftsingenieur", d: "Schwerpunkt Maschinenbau." },
              { i: ClipboardList, t: "Weiterbildung", d: "Regelmäßige Fortbildungen." },
              { i: PhoneCall, t: "Persönlich erreichbar", d: "Antwort in wenigen Sekunden." },
              { i: Scale, t: "Kanzlei-Kooperation", d: "Zusammenarbeit mit einer Kanzlei." },
              { i: Building2, t: "Lokal verwurzelt", d: "Offenbach & Rhein-Main." },
            ].map((x) => (
              <li key={x.t} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary"><x.i className="h-4 w-4" /></span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-primary">{x.t}</p>
                  <p className="text-xs text-muted-foreground">{x.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
