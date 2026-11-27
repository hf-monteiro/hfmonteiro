import Container from "@/components/Container";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Panel from "@/components/Panel";
import BulletList from "@/components/BulletList";
import { Lang, langBase } from "@/lib/i18n";

type Role = {
  title: string;
  company: string;
  period: string;
  items: string[];
};

export type ResumeCopy = {
  title: string;
  metrics: { label: string; value: string; detail: string }[];
  timelineTitle: string;
  legend: { work: string; study: string };
  current: string;
  units: { y: string; m: string };
  certStatus: { active: string; expires: string; issued: string };
  summaryBody: string;
  download: string;
  contact: string;
  certsTitle: string;
  certs: string[];
  educationTitle: string;
  education: { degree: string; school: string; period: string }[];
  languagesTitle: string;
  languages: string[];
  recentTitle: string;
  earlierTitle: string;
  recentRoles: Role[];
  earlierRoles: Role[];
};

function RoleList({
  roles,
  copy: t,
  compact = false
}: {
  roles: Role[];
  copy: ResumeCopy;
  compact?: boolean;
}) {
  return (
    <ol className="divide-y divide-night-800">
      {roles.map((role) => {
        const span = parsePeriod(role.period);
        return (
          <li
            key={`${role.company}-${role.title}`}
            className="grid gap-x-8 gap-y-2 py-5 first:pt-1 last:pb-1 sm:grid-cols-[9rem_1fr]"
          >
            <div className="font-mono text-xs text-night-400 sm:pt-1">
              <p>{role.period}</p>
              <p className="mt-1 text-night-400">{formatTenure(span, t.units)}</p>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-semibold text-night-100">
                  {role.title} <span className="font-normal text-night-400">· {role.company}</span>
                </h3>
                {span.current ? (
                  <span className="rounded border border-success/40 px-1.5 py-0.5 font-mono text-xs text-success">
                    {t.current}
                  </span>
                ) : null}
              </div>
              <BulletList items={role.items} className={`mt-3 ${compact ? "text-sm" : ""}`} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

// ---- Real-data helpers: everything below is derived from the role/cert dates,
// evaluated at build time (the static export is rebuilt on every deploy).

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, fev: 1, mar: 2, apr: 3, abr: 3, may: 4, mai: 4, jun: 5,
  jul: 6, aug: 7, ago: 7, sep: 8, set: 8, oct: 9, out: 9, nov: 10, dec: 11, dez: 11
};

type Span = { start: number; end: number; current: boolean }; // months since year 0

function toMonth(part: string, edge: "start" | "end"): number | null {
  const [a, b] = part.trim().split(/\s+/);
  if (b && a.slice(0, 3).toLowerCase() in MONTHS) return Number(b) * 12 + MONTHS[a.slice(0, 3).toLowerCase()];
  if (/^\d{4}$/.test(a)) return Number(a) * 12 + (edge === "start" ? 0 : 11);
  return null; // "Present" / "Presente"
}

const NOW = (() => {
  const d = new Date();
  return d.getFullYear() * 12 + d.getMonth();
})();

// "Mar 2023 - Present", "Feb 2022 - Mar 2023", "2019 - 2020"
function parsePeriod(period: string): Span {
  const [from, to = ""] = period.split(/\s+-\s+/);
  const start = toMonth(from, "start") ?? NOW;
  const end = toMonth(to, "end");
  return { start, end: end ?? NOW, current: end === null };
}

function formatTenure(span: Span, units: ResumeCopy["units"]) {
  const months = Math.max(1, span.end - span.start);
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? `${y}${units.y}` : "", m ? `${m}${units.m}` : ""].filter(Boolean).join(" ");
}

// "AWS Certified ... (2025–2028)" → name, validity text, and whether it is active now.
function splitCert(cert: string) {
  const match = cert.match(/^(.*?)\s*\(([^)]+)\)$/);
  if (!match) return { name: cert, years: "", status: "issued" as const };
  const [from, to] = match[2].split(/[–-]/).map((y) => Number(y.trim()));
  const year = Math.floor(NOW / 12);
  // Only the validity years are known, not the month, so a cert ending this
  // year is reported as "expires", never as active.
  const status = !to ? "issued" : from <= year && year < to ? "active" : year === to ? "expires" : "issued";
  return { name: match[1], years: match[2], to, status: status as "active" | "expires" | "issued" };
}

function Timeline({ copy: t }: { copy: ResumeCopy }) {
  const roles = [...t.recentRoles, ...t.earlierRoles];
  const repeated = (company: string) => roles.filter((r) => r.company === company).length > 1;
  const rows = [
    ...roles.map((r) => ({
      // Disambiguate companies with several roles: "BairesDev · Senior".
      label: repeated(r.company) ? `${r.company} · ${r.title.split(" ")[0]}` : r.company,
      detail: `${r.title} · ${r.period}`,
      kind: "work" as const,
      span: parsePeriod(r.period)
    })),
    ...t.education.map((e) => ({
      label: e.school,
      detail: `${e.degree} · ${e.period}`,
      kind: "study" as const,
      span: parsePeriod(e.period)
    }))
  ].sort((a, b) => b.span.start - a.span.start);

  const min = Math.floor(Math.min(...rows.map((r) => r.span.start)) / 12) * 12;
  const max = NOW + 1;
  const pct = (m: number) => ((m - min) / (max - min)) * 100;
  const years: number[] = [];
  for (let y = min / 12; y * 12 <= max; y += 2) years.push(y);

  return (
    <div>
      <ul className="space-y-2.5">
        {rows.map((r) => (
          <li key={r.detail} className="grid items-center gap-x-4 gap-y-1 sm:grid-cols-[11rem_1fr]" title={r.detail}>
            <span className="truncate font-mono text-xs text-night-300">{r.label}</span>
            <div className="relative h-2.5 rounded-sm bg-night-800">
              <div
                className={`absolute inset-y-0 rounded-sm ${
                  r.span.current ? "bg-success" : r.kind === "work" ? "bg-accent/70" : "bg-night-500"
                }`}
                style={{ left: `${pct(r.span.start)}%`, width: `${Math.max(pct(r.span.end) - pct(r.span.start), 0.8)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-2 grid gap-x-4 sm:grid-cols-[11rem_1fr]">
        <div className="hidden sm:block" />
        <div className="relative h-4 font-mono text-[10px] text-night-400">
          {years.map((y) => (
            <span key={y} className="absolute -translate-x-1/2" style={{ left: `${pct(y * 12)}%` }}>
              {y}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-night-400">
        <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-success" />{t.current}</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-accent/70" />{t.legend.work}</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-night-500" />{t.legend.study}</span>
      </div>
    </div>
  );
}

export default function ResumeView({ lang, copy: t }: { lang: Lang; copy: ResumeCopy }) {
  const certs = t.certs.map(splitCert);

  return (
    <main>
      <Container>
        <section className="pt-12">
          <PageHeader path="hfmonteiro / resume" title={t.title} />

          <div className="mt-6 max-w-3xl">
            <p className="leading-7 text-night-300">{t.summaryBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/resume.pdf" variant="primary" download="Higor_Monteiro_Resume.pdf">{t.download}</Button>
              <Button href={`${langBase(lang)}/contact`} variant="secondary">{t.contact}</Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {t.metrics.map((m) => (
                <Panel key={m.label} title={m.label}>
                  <p className="text-2xl font-semibold tracking-tight text-highlight">{m.value}</p>
                  <p className="mt-1 text-xs text-night-400">{m.detail}</p>
                </Panel>
              ))}
            </div>

            <Panel title={t.timelineTitle}>
              <Timeline copy={t} />
            </Panel>

            <Panel title={t.recentTitle}>
              <RoleList roles={t.recentRoles} copy={t} />
            </Panel>

            <Panel title={t.earlierTitle}>
              <RoleList roles={t.earlierRoles} copy={t} compact />
            </Panel>

            <Panel title={t.certsTitle}>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {certs.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between gap-4 border-b border-night-800 py-2.5 text-sm"
                  >
                    <span className="text-night-200">{cert.name}</span>
                    <span className="flex shrink-0 items-center gap-2 font-mono text-xs">
                      <span className="text-night-400">{cert.years}</span>
                      <span
                        className={`rounded border px-1.5 py-0.5 ${
                          cert.status === "active" ? "border-success/40 text-success" : "border-night-700 text-night-400"
                        }`}
                      >
                        {cert.status === "expires" ? `${t.certStatus.expires} ${cert.to}` : t.certStatus[cert.status]}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>

            <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
              <Panel title={t.educationTitle}>
                <ul className="space-y-4">
                  {t.education.map((item) => (
                    <li key={item.degree}>
                      <p className="text-night-200">{item.degree}</p>
                      <p className="mt-0.5 font-mono text-xs text-night-400">
                        {item.school} · {item.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </Panel>
              <Panel title={t.languagesTitle}>
                <ul className="space-y-2">
                  {t.languages.map((item) => {
                    const [name, level] = item.split(/:\s*/);
                    return (
                      <li key={item} className="flex items-center justify-between gap-3">
                        <span className="text-night-200">{name}</span>
                        {level ? (
                          <span className="rounded border border-night-700 px-1.5 py-0.5 font-mono text-xs text-night-300">
                            {level}
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </Panel>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
