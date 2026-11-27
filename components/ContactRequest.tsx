"use client";

import { useState } from "react";

export type RequestCopy = {
  type: string;
  types: string[];
  name: string;
  company: string;
  message: string;
  placeholder: string;
  submit: string;
  hint: string;
};

const field =
  "w-full rounded-md border border-night-700 bg-night-950 px-3 py-2 text-sm text-night-100 placeholder:text-night-500 focus:border-accent focus:outline-none";
const label = "font-mono text-xs uppercase tracking-wider text-night-400";

// Ticket-style request form. There is no backend: submitting opens the
// visitor's email client with a structured subject and body.
export default function ContactRequest({ email, copy: t }: { email: string; copy: RequestCopy }) {
  const [type, setType] = useState(t.types[0]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const subject = `[${type}] ${[name, company].filter(Boolean).join(" — ")}`.trim();
  const body = [message, "", [name, company].filter(Boolean).join(" · ")].join("\n").trim();
  const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
      className="space-y-4"
    >
      <fieldset>
        <legend className={label}>{t.type}</legend>
        <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs">
          {t.types.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setType(option)}
              aria-pressed={type === option}
              className={`rounded border px-2 py-1 transition ${
                type === option
                  ? "border-accent/60 bg-accent/10 text-accent"
                  : "border-night-700 text-night-300 hover:border-night-600 hover:text-night-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={label}>{t.name}</span>
          <input className={`mt-2 ${field}`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="block">
          <span className={label}>{t.company}</span>
          <input
            className={`mt-2 ${field}`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
          />
        </label>
      </div>

      <label className="block">
        <span className={label}>{t.message}</span>
        <textarea
          className={`mt-2 min-h-32 ${field}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.placeholder}
          required
        />
      </label>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg border border-night-100 bg-night-100 px-5 py-2.5 text-sm font-medium text-night-950 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night-950"
        >
          {t.submit}
        </button>
        <p className="text-xs text-night-400">{t.hint}</p>
      </div>
    </form>
  );
}
