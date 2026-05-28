import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 shadow-[0_-4px_20px_-8px_rgba(15,23,42,0.18)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 bg-cta px-2 py-2.5 text-cta-foreground"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[13px] font-semibold leading-tight">Anrufen</span>
          <span className="text-[10px] font-medium opacity-90 leading-tight">Antwort in Sekunden</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 bg-whatsapp px-2 py-2.5 text-whatsapp-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[13px] font-semibold leading-tight">WhatsApp</span>
          <span className="text-[10px] font-medium opacity-90 leading-tight">Antwort in Sekunden</span>
        </a>
        <Link
          to="/kontakt"
          className="flex flex-col items-center justify-center gap-0.5 bg-primary px-2 py-2.5 text-primary-foreground"
        >
          <FileText className="h-5 w-5" />
          <span className="text-[13px] font-semibold leading-tight">Anfrage</span>
          <span className="text-[10px] font-medium opacity-80 leading-tight">Formular</span>
        </Link>
      </div>
    </div>
  );
}
