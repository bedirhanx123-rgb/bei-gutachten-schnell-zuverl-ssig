import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { to: "/service", label: "Unser Service" },
  { to: "/warum-gutachten", label: "Warum ein Gutachten?" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-primary">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/70 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={SITE.phoneHref} className="text-sm font-medium text-foreground/80 hover:text-primary">
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground shadow-sm transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> Jetzt anrufen
          </a>
        </div>

        <button
          aria-label="Menü öffnen"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                activeProps={{ className: "bg-muted text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-cta px-4 py-3 text-sm font-semibold text-cta-foreground"
            >
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
