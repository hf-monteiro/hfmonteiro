import Container from "@/components/Container";
import Pill from "@/components/Pill";
import { getCaseStudies } from "@/lib/caseStudies";

const copy = {
  title: "Projects",
  intro:
    "Architecture-focused case studies covering enterprise AWS platforms, private networking, production Kubernetes, CI/CD standardization, and reliability.",
  back: "Back to home",
  read: "View project →",
  role: "Role",
  scope: "Scope",
  impact: "Impact"
};

export default function CaseStudiesPage() {
  const t = copy;
  const base = "";
  const cases = getCaseStudies("en");

  return (
    <main>
      <Container>
        <section className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href={`${base}/`}>
            ← {t.back}
          </a>
          <h1 className="mt-4 text-3xl font-semibold">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-300">{t.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cases.map((c) => (
              <a
                key={c.slug}
                href={`${base}/case-studies/${c.slug}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50"
              >
                <p className="text-sm text-zinc-500">{c.subtitle}</p>
                <h2 className="mt-2 text-lg font-semibold">{c.title}</h2>
                <div className="mt-4 grid gap-2 text-sm text-zinc-400">
                  <p><span className="text-zinc-200">{t.role}:</span> {c.role}</p>
                  <p><span className="text-zinc-200">{t.scope}:</span> {c.scope}</p>
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{t.impact}</p>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                    {c.impact.slice(0, 2).map((impact) => (
                      <li key={impact} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.slice(0, 6).map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm text-zinc-400 hover:text-zinc-200">
                  {t.read}
                </span>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
