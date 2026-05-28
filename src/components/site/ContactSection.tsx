import { Phone, Mail, MessageCircle, CalendarClock, Zap, MapPin } from "lucide-react";
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
              Antwort garantiert in wenigen Sekunden per Telefon oder WhatsApp.
            </p>

            <div className="mt-8 space-y-3">
              <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-lg border-2 border-cta bg-card p-4 shadow-[var(--shadow-elevated)] transition hover:brightness-[0.98]">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-cta text-cta-foreground"><Phone className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-cta">Jetzt sofort anrufen · empfohlen</p>
                  <p className="truncate text-base font-semibold text-primary">{SITE.phoneDisplay}</p>
                </div>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:border-whatsapp">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-whatsapp text-whatsapp-foreground"><MessageCircle className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">WhatsApp schreiben</p>
                  <p className="text-base font-semibold text-primary">Direkt – auch mit Fotos</p>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:border-primary">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">E-Mail</p>
                  <p className="truncate text-base font-semibold text-primary">{SITE.email}</p>
                </div>
              </a>
              <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-card)] transition hover:border-primary">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground"><CalendarClock className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Termin buchen</p>
                  <p className="text-base font-semibold text-primary">Kurzfristige Termine</p>
                </div>
              </a>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-cta" /> Antwort garantiert in wenigen Sekunden.</li>
              <li className="flex items-center gap-2"><CalendarClock className="h-4 w-4 text-cta" /> Kurzfristige Termine möglich.</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cta" /> Vor-Ort-Besichtigung in {SITE.area}.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] md:p-8">
            <h3 className="text-xl font-semibold text-primary">Kontaktformular</h3>
            <p className="mt-1 text-sm text-muted-foreground">Name, Telefon, Anliegen – mehr brauchen wir nicht.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
