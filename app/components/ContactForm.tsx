"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type ContactFormProps = {
  recipientEmail: string;
};

export default function ContactForm({ recipientEmail }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Tour inquiry from ${name || "website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    // Sin backend por ahora: abre el cliente de correo del visitante con
    // todo prellenado. Si más adelante agregas un endpoint de envío,
    // reemplaza esto por un fetch a tu API.
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm text-stone-800 outline-none focus:border-[#D9A441] focus:ring-1 focus:ring-[#D9A441]"
            placeholder="Your name"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm text-stone-800 outline-none focus:border-[#D9A441] focus:ring-1 focus:ring-[#D9A441]"
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message">
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm text-stone-800 outline-none focus:border-[#D9A441] focus:ring-1 focus:ring-[#D9A441]"
            placeholder="Tell us about the trip you're planning..."
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9A441] px-5 py-3.5 text-sm font-bold text-[#3B2921] transition hover:bg-[#C99531] sm:w-auto"
      >
        <Send size={17} />
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
        {label}
      </span>
      {children}
    </label>
  );
}
