import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center justify-center gap-1 bg-cta py-3 text-cta-foreground"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-semibold">Anrufen</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-whatsapp py-3 text-whatsapp-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <Link
          to="/kontakt"
          className="flex flex-col items-center justify-center gap-1 bg-primary py-3 text-primary-foreground"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xs font-semibold">Anfrage</span>
        </Link>
      </div>
    </div>
  );
}
