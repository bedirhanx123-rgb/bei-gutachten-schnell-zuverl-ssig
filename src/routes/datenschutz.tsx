import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – BAY Gutachten" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function Placeholder({ children = "WIRD ERGÄNZT" }: { children?: React.ReactNode }) {
  return (
    <span className="rounded bg-accent px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-foreground">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      <div className="mt-2 space-y-2 text-sm text-foreground/80">{children}</div>
    </div>
  );
}

function DatenschutzPage() {
  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-6 lg:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-4 rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground">
            <strong className="text-primary">Hinweis (Entwurf):</strong> Diese
            Datenschutzerklärung ist ein Entwurf. Mit <Placeholder /> gekennzeichnete
            Angaben sind vor Veröffentlichung zu vervollständigen. Zusätzliche Dienste
            (Hosting, externe Schriftarten, Maps, Tracking) sind nur aufzunehmen, wenn
            sie tatsächlich eingebunden werden.
          </div>

          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              BAY Sachverständigenbüro
              <br />
              Inhaber: Niyazi Yildiz
              <br />
              Hessenring 7, 63071 Offenbach am Main
              <br />
              Telefon: 0178 / 6825246
              <br />
              E-Mail: bay.hilfe@gmail.com
            </p>
            <p className="text-xs italic text-muted-foreground">
              Adresse und geschäftliche E-Mail-Adresse werden vor Veröffentlichung
              final geprüft bzw. ergänzt.
            </p>
          </Section>

          <Section title="2. Allgemeine Hinweise zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzerinnen und Nutzer
              grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen
              Website sowie unserer Inhalte und Leistungen erforderlich ist. Die
              Verarbeitung erfolgt regelmäßig nur nach Einwilligung der betroffenen
              Person oder in den Fällen, in denen eine vorherige Einwilligung aus
              tatsächlichen Gründen nicht eingeholt werden kann und die Verarbeitung
              der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
          </Section>

          <Section title="3. Zugriffsdaten / Server-Logfiles">
            <p>
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter technisch
              erforderliche Zugriffsdaten in sogenannten Server-Logfiles
              verarbeitet. Dazu können gehören: IP-Adresse, Datum und Uhrzeit des
              Zugriffs, aufgerufene Seite, übertragene Datenmenge, Referrer-URL sowie
              Informationen zu Browser und Betriebssystem.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an einem sicheren und stabilen Betrieb der Website).
            </p>
            <p>
              Hosting-Anbieter: <Placeholder />
            </p>
          </Section>

          <Section title="4. Kontaktaufnahme per Telefon oder E-Mail">
            <p>
              Wenn Sie uns telefonisch oder per E-Mail kontaktieren, werden Ihre
              Angaben (z.B. Name, Telefonnummer, E-Mail-Adresse, Inhalt der Anfrage)
              ausschließlich zur Bearbeitung Ihrer Anfrage und für den Fall von
              Anschlussfragen gespeichert.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung oder
              Durchführung eines Vertrags) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
            </p>
          </Section>

          <Section title="5. Kontaktformular">
            <p>
              Auf unserer Website wird ein Kontaktformular angeboten. Die von Ihnen
              im Formular eingegebenen Daten (Name, Telefonnummer, Anliegen, optional
              E-Mail-Adresse) werden ausschließlich zur Bearbeitung Ihrer Anfrage
              verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f
              DSGVO.
            </p>
            <p className="text-xs italic text-muted-foreground">
              Hinweis: Sobald ein Versand-Dienstleister (z.B. E-Mail-Service)
              eingebunden wird, ist dieser hier zu ergänzen. <Placeholder />
            </p>
          </Section>

          <Section title="6. Kontakt über WhatsApp">
            <p>
              Auf unserer Website befindet sich ein Link, der eine Kontaktaufnahme
              über den Messaging-Dienst WhatsApp ermöglicht (Anbieter: WhatsApp
              Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland). Erst durch das aktive Anklicken des Links und die Nutzung von
              WhatsApp werden personenbezogene Daten (insbesondere Ihre Mobilnummer
              sowie die übermittelten Nachrichteninhalte) an WhatsApp übertragen.
            </p>
            <p>
              Die Verarbeitung durch WhatsApp erfolgt auf Grundlage der dortigen
              Datenschutzbestimmungen. Auf Inhalt und Umfang dieser Verarbeitung
              haben wir keinen Einfluss. Rechtsgrundlage für die durch uns
              veranlasste Bereitstellung des Kontaktwegs ist Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an einer einfachen Kontaktaufnahme).
            </p>
            <p>
              Eine Datenübermittlung in Drittländer (insbesondere USA) kann nicht
              ausgeschlossen werden. Wenn Sie dies vermeiden möchten, nutzen Sie
              bitte einen der anderen angebotenen Kontaktwege (Telefon oder
              E-Mail).
            </p>
          </Section>

          <Section title="7. Rechtsgrundlagen der Verarbeitung">
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
              Einwilligung einholen, dient Art. 6 Abs. 1 lit. a DSGVO als
              Rechtsgrundlage. Bei der Verarbeitung zur Erfüllung eines Vertrags ist
              Art. 6 Abs. 1 lit. b DSGVO Rechtsgrundlage. Soweit eine Verarbeitung
              zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, dient
              Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage. Ist die Verarbeitung
              zur Wahrung berechtigter Interessen erforderlich, dient Art. 6 Abs. 1
              lit. f DSGVO als Rechtsgrundlage.
            </p>
          </Section>

          <Section title="8. Speicherdauer">
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Zweck der
              Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen. Insbesondere handels- und steuerrechtliche
              Aufbewahrungsfristen (regelmäßig 6 bzw. 10 Jahre) bleiben unberührt.
            </p>
          </Section>

          <Section title="9. Empfänger von Daten / Dienstleister">
            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur,
              soweit dies zur Vertragserfüllung erforderlich ist, gesetzlich
              vorgeschrieben ist oder Sie eingewilligt haben. Eingesetzte
              Auftragsverarbeiter (z.B. Hosting-Anbieter) verarbeiten Daten
              ausschließlich auf Grundlage entsprechender Verträge nach Art. 28
              DSGVO.
            </p>
            <p>
              Übersicht eingesetzter Dienstleister: <Placeholder />
            </p>
          </Section>

          <Section title="10. Betroffenenrechte">
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO),</li>
              <li>auf Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
              <li>auf Löschung Ihrer Daten (Art. 17 DSGVO),</li>
              <li>auf Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
              <li>auf Datenübertragbarkeit (Art. 20 DSGVO),</li>
              <li>auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO),</li>
              <li>
                erteilte Einwilligungen mit Wirkung für die Zukunft jederzeit zu
                widerrufen (Art. 7 Abs. 3 DSGVO).
              </li>
            </ul>
          </Section>

          <Section title="11. Recht auf Beschwerde bei einer Aufsichtsbehörde">
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über
              die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
              Zuständig ist in der Regel die Aufsichtsbehörde Ihres gewöhnlichen
              Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
              Verstoßes.
            </p>
          </Section>

          <Section title="12. Aktualität dieser Datenschutzerklärung">
            <p>
              Stand dieser Datenschutzerklärung: <Placeholder>Datum WIRD ERGÄNZT</Placeholder>.
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </Section>

          <div className="mt-10 rounded-md border border-dashed border-border bg-surface p-4 text-xs text-muted-foreground">
            <strong className="text-primary">Interner TODO-Hinweis:</strong> Bitte vor
            Veröffentlichung prüfen: Hosting-Anbieter, externe Dienste, Cookies,
            Tracking, Kontaktformular-Versand, Maps, WhatsApp, Terminbuchung,
            eingebundene Schriftarten.
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
