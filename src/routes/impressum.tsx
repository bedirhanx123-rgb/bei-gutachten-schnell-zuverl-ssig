import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum – BEI Gutachten" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-6 lg:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Impressum</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Dies ist ein Platzhalter. Der finale rechtliche Text wird hier später ergänzt.
          </p>
          <div className="mt-8 space-y-4 text-sm text-foreground/80">
            <p><strong>Anbieter:</strong> BEI Gutachten – Kfz-Sachverständiger</p>
            <p><strong>Anschrift:</strong> Platzhalter Straße 1, 63065 Offenbach am Main</p>
            <p><strong>Telefon:</strong> +49 000 000 00 00</p>
            <p><strong>E-Mail:</strong> kontakt@bei-gutachten.de</p>
            <p><strong>Verantwortlich i.S.d. § 18 MStV:</strong> Platzhalter</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});
