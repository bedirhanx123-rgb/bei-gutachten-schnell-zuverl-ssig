import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz – BAY Gutachten" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-6 lg:py-20">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Datenschutz</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Dies ist ein Platzhalter. Der finale Datenschutzhinweis nach DSGVO wird hier später ergänzt.
          </p>
          <p className="mt-6 text-sm text-foreground/80">
            Verantwortlich für die Datenverarbeitung ist BAY Gutachten. Bei Fragen zum
            Datenschutz wenden Sie sich bitte an kontakt@bay-gutachten.de.
          </p>
        </div>
      </section>
    </SiteLayout>
  ),
});
