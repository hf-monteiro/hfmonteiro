"use client";

import { useState } from "react";

export type CatalogRow = {
  title: string;
  repo: string;
  desc: string;
  kind: string;
  links: { label: string; href: string }[];
  languages: string[];
  pushedAt?: string;
  legacy: boolean;
};

export type CatalogLabels = {
  all: string;
  columns: { repo: string; kind: string; language: string; updated: string; lifecycle: string };
  lifecycle: { active: string; legacy: string };
};

const cols = "sm:grid-cols-[minmax(0,1fr)_6rem_8rem_6.5rem_4.5rem]";
const link = "text-accent hover:text-accent-hover";

// Backstage-style software catalog with kind filters. Rows are computed on the
// server (including build-time GitHub data); this component only filters.
export default function LabsCatalog({ rows, labels: t }: { rows: CatalogRow[]; labels: CatalogLabels }) {
  const kinds = Array.from(new Set(rows.map((r) => r.kind)));
  const [kind, setKind] = useState<string | null>(null);
  const visible = kind ? rows.filter((r) => r.kind === kind) : rows;

  return (
    <div>
      <div className="flex flex-wrap gap-2 font-mono text-xs" role="group">
        {[null, ...kinds].map((k) => (
          <button
            key={k ?? "all"}
            type="button"
            onClick={() => setKind(k)}
            aria-pressed={kind === k}
            className={`rounded border px-2 py-1 transition ${
              kind === k
                ? "border-accent/60 bg-accent/10 text-accent"
                : "border-night-700 text-night-300 hover:border-night-600 hover:text-night-100"
            }`}
          >
            {k ?? t.all} <span className="text-night-400">{k ? rows.filter((r) => r.kind === k).length : rows.length}</span>
          </button>
        ))}
      </div>

      <div className={`mt-4 hidden gap-4 border-b border-night-800 pb-2 font-mono text-xs uppercase tracking-wider text-night-400 sm:grid ${cols}`}>
        <span>{t.columns.repo}</span>
        <span>{t.columns.kind}</span>
        <span>{t.columns.language}</span>
        <span>{t.columns.updated}</span>
        <span>{t.columns.lifecycle}</span>
      </div>

      <ul className="divide-y divide-night-800">
        {visible.map((r) => (
          <li key={r.repo} className={`grid gap-x-4 gap-y-2 py-3.5 sm:items-start ${cols}`}>
            <div className="min-w-0">
              <p className="font-mono text-sm">
                {r.links.length === 1 ? (
                  <a className={link} href={r.links[0].href} target="_blank" rel="noreferrer">
                    {r.repo}
                  </a>
                ) : (
                  <span className="text-night-200">
                    {r.repo}
                    <span className="mt-0.5 flex gap-3 sm:ml-3 sm:mt-0 sm:inline-flex">
                      {r.links.map((l) => (
                        <a key={l.href} className={`text-xs ${link}`} href={l.href} target="_blank" rel="noreferrer">
                          {l.label} →
                        </a>
                      ))}
                    </span>
                  </span>
                )}
              </p>
              <p className="mt-1 font-medium text-night-100">{r.title}</p>
              <p className="mt-0.5 text-sm leading-6 text-night-400">{r.desc}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:contents">
              <span className="text-night-300 sm:pt-1">{r.kind}</span>
              <span className="text-night-300 sm:pt-1">{r.languages.length ? r.languages.join(", ") : "—"}</span>
              <span className="text-night-400 sm:pt-1">{r.pushedAt ?? "—"}</span>
              <span className="sm:pt-0.5">
                <span
                  className={`inline-block rounded border px-1.5 py-0.5 ${
                    r.legacy ? "border-night-700 text-night-400" : "border-success/40 text-success"
                  }`}
                >
                  {r.legacy ? t.lifecycle.legacy : t.lifecycle.active}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
