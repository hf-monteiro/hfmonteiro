import StatusDot from "./StatusDot";
import { CaseStudy } from "@/lib/caseStudies";

// Case studies rendered as monitored "services" (home + projects list).
export default function ServiceList({
  cases,
  base,
  health,
  env,
  detailed = false
}: {
  cases: CaseStudy[];
  base: string;
  health: string;
  env: string;
  detailed?: boolean;
}) {
  return (
    <ul className="-my-1 divide-y divide-night-800">
      {cases.map((c) => (
        <li key={c.slug}>
          <a
            href={`${base}/case-studies/${c.slug}`}
            className="group grid gap-x-6 gap-y-1 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
          >
            <div className="flex min-w-0 items-start gap-3">
              <StatusDot className="mt-1.5 shrink-0" />
              <div className="min-w-0">
                <p className="font-medium text-night-100 group-hover:text-accent-hover">{c.title}</p>
                {detailed ? <p className="mt-1 text-sm leading-6 text-night-400">{c.impact[0]}</p> : null}
                <p className="mt-1 truncate font-mono text-xs text-night-400">{c.tags.slice(0, 4).join(" · ")}</p>
              </div>
            </div>
            <StatusBadges health={health} env={env} className="pl-5 sm:pl-0" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function StatusBadges({ health, env, className = "" }: { health: string; env: string; className?: string }) {
  return (
    <div className={`flex gap-2 font-mono text-xs ${className}`}>
      <span className="rounded border border-success/40 px-1.5 py-0.5 text-success">{health}</span>
      <span className="rounded border border-night-700 px-1.5 py-0.5 text-night-300">{env}</span>
    </div>
  );
}
