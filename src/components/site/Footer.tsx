import { Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 lg:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold text-primary">{SITE.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Unabhängiger Kfz-Sachverständiger für Offenbach und die Rhein-Main-Region.
            Schnell erreichbar, klar in der Dokumentation, persönlich im Kontakt.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Einsatzgebiet: {SITE.area}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Kontakt</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-foreground/80">
              <Phone className="h-4 w-4" />
              <a href={SITE.phoneHref} className="hover:text-primary">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/impressum" className="text-foreground/80 hover:text-primary">Impressum</Link></li>
            <li><Link to="/datenschutz" className="text-foreground/80 hover:text-primary">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row lg:px-6">
          <p>© {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.</p>
          <p>Kfz-Sachverständiger · Offenbach · Rhein-Main</p>
        </div>
      </div>
    </footer>
  );
}
