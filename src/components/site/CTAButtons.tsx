import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE, whatsappHref } from "@/lib/site";

export function PrimaryCTA({ className = "", label = "Jetzt sofort anrufen" }: { className?: string; label?: string }) {
  return (
    <a
      href={SITE.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-4 text-base font-semibold text-cta-foreground shadow-[var(--shadow-elevated)] ring-1 ring-cta/20 transition hover:brightness-110 ${className}`}
    >
      <Phone className="h-5 w-5" /> {label}
    </a>
  );
}

export function WhatsappCTA({ className = "", label = "WhatsApp schreiben" }: { className?: string; label?: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-sm transition hover:brightness-110 ${className}`}
    >
      <MessageCircle className="h-5 w-5" /> {label}
    </a>
  );
}

export function TertiaryCTA({ className = "", label = "Gutachten anfragen" }: { className?: string; label?: string }) {
  return (
    <Link
      to="/kontakt"
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-primary transition hover:border-cta hover:text-cta ${className}`}
    >
      <FileText className="h-4 w-4" /> {label}
    </Link>
  );
}
