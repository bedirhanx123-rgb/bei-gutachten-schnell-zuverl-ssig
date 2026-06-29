import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4"
    >
      <Field label="Name" name="name" required autoComplete="name" />
      <Field
        label="Telefonnummer"
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        hint="Wir rufen zurück – meist noch am selben Tag."
      />
      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-primary" htmlFor="topic">Anliegen</label>
        <select id="topic" name="topic" required className="h-11 rounded-md border border-input bg-background px-3 text-sm">
          <option value="">Bitte wählen</option>
          <option>Unfallgutachten</option>
          <option>Schadengutachten</option>
          <option>Fahrzeugbewertung</option>
          <option>Sonstiges</option>
        </select>
      </div>
      <Field label="E-Mail (optional)" name="email" type="email" autoComplete="email" />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cta px-6 text-sm font-semibold text-cta-foreground shadow-sm transition hover:brightness-110"
      >
        <Send className="h-4 w-4" /> Anfrage senden
      </button>
      <p className="text-xs text-muted-foreground">
        Schneller geht es telefonisch oder per WhatsApp.
      </p>
      {sent && (
        <p className="rounded-md border border-whatsapp/30 bg-whatsapp/10 px-3 py-2 text-sm text-whatsapp">
          Vielen Dank, Ihre Anfrage wurde übermittelt.
        </p>
      )}
    </form>
  );
}

function Field({
  label, name, type = "text", required = false, autoComplete, hint,
}: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; hint?: string }) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-primary" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/40 focus:ring-2"
      />
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
