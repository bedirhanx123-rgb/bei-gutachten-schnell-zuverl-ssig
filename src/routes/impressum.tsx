import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – BAY Gutachten" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function Placeholder({ children = "WIRD ERGÄNZT" }: { children?: React.ReactNode }) {
  return (
    <span className="rounded bg-accent px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-foreground">
      {children}
    </span>
  );
}

function ImpressumPage() {
  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-6 lg:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Impressum</h1>

          <div className="mt-4 rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground">
            <strong className="text-primary">Hinweis (Entwurf):</strong> Diese Seite ist ein
            Entwurf. Mit <Placeholder /> gekennzeichnete Angaben sowie als prüfpflichtig
            markierte Punkte sind vor Veröffentlichung zu vervollständigen bzw. rechtlich
            zu prüfen.
          </div>

          <Section title="Angaben gemäß § 5 DDG">
            <p>BAY Sachverständigenbüro</p>
            <p>Inhaber: Niyazi Yildiz</p>
            <p>
              Rechtsform: Einzelunternehmen e.K.{" "}
              <Placeholder>e.K. – PRÜFPFLICHTIG</Placeholder>
            </p>
            <p>
              Hessenring 7
              <br />
              63071 Offenbach am Main
            </p>
            <p className="text-xs italic text-muted-foreground">
              Adresse wird vor Veröffentlichung final geprüft.
            </p>
          </Section>

          <Section title="Vertreten durch / Inhaber">
            <p>Niyazi Yildiz</p>
          </Section>

          <Section title="Kontakt">
            <p>Telefon: 0178 / 6825246</p>
            <p>
              Festnetz: <Placeholder />
            </p>
            <p>
              E-Mail: bay.hilfe@gmail.com{" "}
              <span className="text-xs italic text-muted-foreground">
                (Geschäftliche E-Mail-Adresse wird ergänzt)
              </span>
            </p>
          </Section>

          <Section title="Registereintrag">
            <p>
              Handelsregister: <Placeholder />
            </p>
            <p>
              Registergericht: <Placeholder />
            </p>
            <p>
              Registernummer: <Placeholder />
            </p>
          </Section>

          <Section title="Umsatzsteuer-ID">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:{" "}
              <Placeholder />
            </p>
          </Section>

          <Section title="Berufsbezeichnung / Tätigkeit">
            <p>Kfz-Sachverständiger / Kfz-Gutachter</p>
            <p className="text-xs italic text-muted-foreground">
              Verliehen in der Bundesrepublik Deutschland.
            </p>
          </Section>

          <Section title="Aufsichtsbehörde / Zuständige Kammer">
            <p>
              <Placeholder>WIRD GEPRÜFT / WIRD ERGÄNZT</Placeholder>
            </p>
          </Section>

          <Section title="Verbraucherstreitbeilegung">
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p className="mt-2 text-xs italic text-muted-foreground">
              Hinweis: Formulierung vor Veröffentlichung anhand des konkreten
              Tätigkeitsumfangs rechtlich prüfen.
            </p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine
              Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs. 1
              DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch
              nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt.
            </p>
          </Section>

          <Section title="Haftung für Links">
            <p>
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter,
              auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
              des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
              privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </Section>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      <div className="mt-2 space-y-1 text-sm text-foreground/80">{children}</div>
    </div>
  );
}
