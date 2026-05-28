import { Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";

export function PrimaryCTA({ className = "", label = "Jetzt anrufen" }: { className?: string; label?: string }) {
  return (
    <a
      href={SITE.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-cta px-6 py-3.5 text-base font-semibold text-cta-foreground shadow-[var(--shadow-elevated)] transition hover:brightness-110 ${className}`}
    >
      <Phone className="h-5 w-5" /> {label}
    </a>
  );
}

export function WhatsappCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-whatsapp/30 bg-whatsapp/10 px-6 py-3.5 text-base font-semibold text-whatsapp transition hover:bg-whatsapp/15 ${className}`}
    >
      <MessageCircle className="h-5 w-5" /> WhatsApp schreiben
    </a>
  );
}
