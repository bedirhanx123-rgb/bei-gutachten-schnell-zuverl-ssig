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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Telefonnummer" name="phone" type="tel" required />
      </div>
      <Field label="E-Mail" name="email" type="email" required />
      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-primary" htmlFor="topic">Anliegen (optional)</label>
        <select id="topic" name="topic" className="h-11 rounded-md border border-input bg-background px-3 text-sm">
          <option>Bitte wählen</option>
          <option>Unfallgutachten</option>
          <option>Schadengutachten</option>
          <option>Fahrzeugbewertung</option>
          <option>Sonstiges</option>
        </select>
      </div>
      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-primary" htmlFor="message">Nachricht</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Beschreiben Sie kurz Ihr Anliegen."
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cta px-6 text-sm font-semibold text-cta-foreground shadow-sm transition hover:brightness-110"
      >
        <Send className="h-4 w-4" /> Anfrage senden
      </button>
      <p className="text-xs text-muted-foreground">Wir melden uns schnellstmöglich zurück.</p>
      {sent && (
        <p className="rounded-md border border-whatsapp/30 bg-whatsapp/10 px-3 py-2 text-sm text-whatsapp">
          Vielen Dank, Ihre Anfrage wurde übermittelt.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-primary" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none ring-ring/40 focus:ring-2"
      />
    </div>
  );
}
