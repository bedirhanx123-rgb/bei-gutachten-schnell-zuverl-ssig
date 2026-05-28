import { Phone, Mail, MessageCircle, CalendarClock, Clock, MapPin } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="kontakt" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-cta">Kontakt</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Jetzt Gutachten anfragen</h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Nehmen Sie direkt Kontakt auf – {SITE.name} unterstützt Sie schnell und unkompliziert
              in Offenbach und Rhein-Main.
            </p>

            <div className="mt-8 space-y-3">
              <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:border-cta">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cta text-cta-foreground"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs text-muted-foreground">Telefon (primär)</p>
                  <p className="text-base font-semibold text-primary">{SITE.phoneDisplay}</p>
                </div>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:border-whatsapp">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-whatsapp text-whatsapp-foreground"><MessageCircle className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="text-base font-semibold text-primary">Direkt schreiben</p>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:border-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs text-muted-foreground">E-Mail</p>
                  <p className="text-base font-semibold text-primary">{SITE.email}</p>
                </div>
              </a>
              <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:border-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"><CalendarClock className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs text-muted-foreground">Termin</p>
                  <p className="text-base font-semibold text-primary">Termin buchen</p>
                </div>
              </a>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-cta" /> Schnelle Rückmeldung – meist noch am selben Tag.</li>
              <li className="flex items-center gap-2"><CalendarClock className="h-4 w-4 text-cta" /> Kurzfristige Termine möglich.</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cta" /> Vor-Ort-Besichtigung in {SITE.area}.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] md:p-8">
            <h3 className="text-xl font-semibold text-primary">Kontaktformular</h3>
            <p className="mt-1 text-sm text-muted-foreground">Kurz, unkompliziert. Wir melden uns zurück.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
