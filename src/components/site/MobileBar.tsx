import { Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 shadow-[0_-4px_20px_-8px_rgba(15,23,42,0.18)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 bg-cta px-3 py-3.5 text-cta-foreground"
        >
          <Phone className="h-5 w-5" />
          <span className="text-sm font-semibold leading-tight">Anrufen</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-whatsapp px-3 py-3.5 text-whatsapp-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-semibold leading-tight">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
