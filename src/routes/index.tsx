import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin, ShieldCheck, GraduationCap, Clock,
  Car, Scale, FileCheck2, ClipboardList, PhoneCall, Search, FileText, LifeBuoy,
  Wrench, Gauge, History, Camera, ChevronRight, ArrowRight, CheckCircle2,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SiteLayout } from "@/components/site/Layout";
import { PrimaryCTA, WhatsappCTA } from "@/components/site/CTAButtons";
import { ContactSection } from "@/components/site/ContactSection";
import heroImg from "@/assets/hero-gutachter.jpg";
import documentationImg from "@/assets/documentation-flatlay.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kfz-Sachverständiger Offenbach am Main | BAY Gutachten" },
      { name: "description", content: "Unabhängiger Kfz-Sachverständiger in Offenbach am Main. Schaden- und Unfallgutachten für Offenbach, Frankfurt, Hanau und das Rhein-Main-Gebiet. Direkt per Telefon oder WhatsApp." },
      { property: "og:title", content: "Kfz-Sachverständiger Offenbach am Main | BAY Gutachten" },
      { property: "og:description", content: "Unfall- und Schadengutachten in Offenbach und Rhein-Main. Direkt erreichbar per Telefon oder WhatsApp." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "BAY Sachverständigenbüro",
          alternateName: "BAY Gutachten",
          description: "Unabhängiger Kfz-Sachverständiger in Offenbach am Main. Schadengutachten, Unfallgutachten und Fahrzeugbewertung im Rhein-Main-Gebiet.",
          telephone: "+491786825246",
          email: SITE.email,
          areaServed: ["Offenbach am Main", "Frankfurt am Main", "Hanau", "Dreieich", "Mühlheim am Main", "Neu-Isenburg", "Rhein-Main"],
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.street,
            postalCode: "63071",
            addressLocality: "Offenbach am Main",
            addressCountry: "DE",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const trust = [
  { icon: ShieldCheck, title: "Zertifiziert", sub: "Kfz-Sachverständiger" },
  { icon: GraduationCap, title: "Wirtschaftsingenieur", sub: "Schwerpunkt Maschinenbau" },
  { icon: MapPin, title: "Lokal in Offenbach", sub: "Hessenring 7" },
  { icon: Clock, title: "Kurzfristige Termine", sub: "Oft binnen weniger Tage" },
];

const services = [
  { icon: FileCheck2, title: "Unfallgutachten", desc: "Neutrale Bewertung nach einem Unfall – als Grundlage für Versicherung und Anwalt." },
  { icon: Car, title: "Schadengutachten", desc: "Bewertung von Karosserie- und Lackschäden mit klarer Dokumentation." },
  { icon: Gauge, title: "Wertgutachten", desc: "Realistische Einschätzung des aktuellen Fahrzeugwerts." },
  { icon: Wrench, title: "Fahrzeugbewertung", desc: "Bewertung vor Kauf, Verkauf oder Rückgabe – nachvollziehbar und neutral." },
  { icon: History, title: "Oldtimergutachten", desc: "Sachgerechte Bewertung klassischer Fahrzeuge mit Blick fürs Detail." },
  { icon: Camera, title: "Beweissicherung", desc: "Strukturierte Dokumentation des Schadens für spätere Auseinandersetzungen." },
  { icon: Scale, title: "Kasko- & Haftpflichtschäden", desc: "Begutachtung im Versicherungsfall – verständlich aufbereitet." },
  { icon: MapPin, title: "Vor-Ort-Besichtigung", desc: "Auf Wunsch kommen wir zu Ihnen – zuhause, am Unfallort oder zur Werkstatt." },
];

const steps = [
  { icon: PhoneCall, title: "Kontakt aufnehmen", desc: "Rufen Sie an oder schreiben Sie per WhatsApp – gerne mit ersten Fotos." },
  { icon: Search, title: "Schaden begutachten", desc: "Terminvereinbarung kurzfristig – im Büro in Offenbach oder vor Ort." },
  { icon: LifeBuoy, title: "Gutachten erhalten", desc: "Sie bekommen eine klare Dokumentation und wir bleiben für Rückfragen erreichbar." },
];

const reasons = [
  "Objektive Schadenbewertung",
  "Beweissicherung für Versicherung und Anwalt",
  "Realistische Einschätzung der Reparaturkosten",
  "Mögliche Wertminderung dokumentiert",
  "Klare Grundlage für alle Beteiligten",
  "Unabhängig – keine Werkstatt- oder Versicherungsinteressen",
];

const faqs = [
  {
    q: "Wer zahlt den Kfz-Gutachter nach einem Unfall?",
    a: "Bei einem unverschuldeten Unfall trägt in der Regel die gegnerische Haftpflichtversicherung die Kosten für ein unabhängiges Gutachten – auch dann, wenn Sie den Gutachter selbst auswählen. Bei Bagatellschäden oder im Kaskofall ist die Lage anders; wir erklären das im Vorgespräch konkret für Ihren Fall.",
  },
  {
    q: "Wann brauche ich ein Kfz-Gutachten?",
    a: "Immer dann, wenn ein Schaden objektiv dokumentiert oder ein Fahrzeugwert nachvollziehbar bestimmt werden soll – nach einem Unfall, bei Versicherungsfällen oder vor Kauf und Verkauf.",
  },
  {
    q: "Kommen Sie auch zu mir vor Ort?",
    a: "Ja. In Offenbach, Frankfurt, Hanau und im weiteren Rhein-Main-Gebiet ist eine Vor-Ort-Besichtigung in der Regel kurzfristig möglich – zuhause, am Unfallort oder zur Werkstatt.",
  },
  {
    q: "Kann ich Fotos vom Schaden direkt per WhatsApp schicken?",
    a: "Ja, das ist sogar der schnellste Weg für eine erste Einschätzung. Senden Sie uns einfach ein paar Bilder mit kurzer Beschreibung.",
  },
  {
    q: "Für welche Region bieten Sie Gutachten an?",
    a: "Schwerpunkt ist Offenbach am Main und die umliegenden Städte im Rhein-Main-Gebiet – unter anderem Frankfurt, Hanau, Dreieich, Mühlheim und Neu-Isenburg.",
  },
  {
    q: "Wie schnell bekomme ich eine Rückmeldung?",
    a: "In der Regel melden wir uns noch am selben Tag zurück. Telefon und WhatsApp sind tagsüber meist sofort erreichbar.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-cta" />
              Kfz-Sachverständiger · Offenbach am Main
            </span>
            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Unfall oder Fahrzeugschaden?{" "}
              <span className="text-cta">Ihr Kfz-Gutachten in Offenbach & Rhein-Main.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Unabhängig, schnell und unkompliziert. Direkt erreichbar per Telefon
              oder WhatsApp – auch mit ersten Fotos vom Schaden.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCTA className="w-full sm:w-auto" label="Jetzt anrufen" />
              <WhatsappCTA className="w-full sm:w-auto" label="Per WhatsApp anfragen" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {SITE.phoneDisplay} · Offenbach · Frankfurt · Hanau · Rhein-Main
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-cta/10 via-transparent to-brand/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]">
              <img
                src={heroImg}
                alt="Kfz-Sachverständiger bei der Begutachtung eines Fahrzeugschadens"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Ruhig durch die ersten Stunden</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Nach einem Unfall ist man selten in der Stimmung für Formulare und
              Rückfragen. {SITE.name} übernimmt die Bewertung und Dokumentation –
              und erklärt verständlich, was als Nächstes sinnvoll ist.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {[
                "Sie schildern uns kurz, was passiert ist.",
                "Wir vereinbaren zeitnah einen Termin – auch vor Ort.",
                "Sie erhalten ein klares, unabhängiges Gutachten.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cta" /> {s}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCTA label="Jetzt anrufen" />
              <WhatsappCTA label="Per WhatsApp anfragen" />
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { icon: ShieldCheck, t: "Unabhängig & sachlich", d: "Wir bewerten neutral – keine Werkstatt-, keine Versicherungsinteressen." },
              { icon: MapPin, t: "Vor-Ort-Service", d: "Auf Wunsch kommen wir zu Ihnen – am Unfallort, zuhause oder zur Werkstatt." },
              { icon: FileText, t: "Klar dokumentiert", d: "Verständlich aufbereitet, belastbar für Versicherung, Anwalt und Werkstatt." },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
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
                Das passende Gutachten für Ihre Situation – verständlich erklärt.
              </p>
            </div>
            <Link to="/service" className="inline-flex items-center gap-1 text-sm font-semibold text-cta hover:underline">
              Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-5 transition hover:border-cta">
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

      {/* PROCESS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
          <p className="text-sm font-medium text-cta">Ablauf</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">In 3 Schritten zum Gutachten</h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Unkompliziert und persönlich – Sie können sofort starten.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-xl border border-border bg-card p-6">
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
              Ein neutrales Gutachten schafft eine belastbare Grundlage – für Sie,
              Ihre Versicherung, Ihren Anwalt und die Werkstatt.
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

      {/* REGION */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-sm font-medium text-cta">Einsatzgebiet</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Lokal verwurzelt in Offenbach am Main
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Das Büro ist im Hessenring 7 in Offenbach. Vor-Ort-Termine sind im
                gesamten Rhein-Main-Gebiet möglich – kurzfristig und persönlich.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {SITE.cities.map((c) => (
                  <li key={c} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground/80">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={documentationImg}
                alt="Schadenbericht und Smartphone mit Fotos eines Fahrzeugschadens"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
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

function AboutSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-6 lg:py-20">
        <p className="text-sm font-medium text-cta">Über BAY Gutachten</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Technische Expertise mit persönlicher Ansprache
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Hinter {SITE.name} steht ein zertifizierter Kfz-Sachverständiger mit
          ingenieurwissenschaftlichem Hintergrund. Im Mittelpunkt steht eine
          sachliche, verständliche und verlässliche Begutachtung – ohne
          Verkaufsdruck und ohne Schönfärberei.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            { i: ShieldCheck, t: "Zertifiziert", d: "Zertifizierter Kfz-Sachverständiger." },
            { i: GraduationCap, t: "Wirtschaftsingenieur", d: "Schwerpunkt Maschinenbau." },
            { i: ClipboardList, t: "Klar dokumentiert", d: "Verständlich aufbereitet, belastbar." },
            { i: PhoneCall, t: "Persönlich erreichbar", d: "Direkter Draht ohne Hotline." },
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
    </section>
  );
}
