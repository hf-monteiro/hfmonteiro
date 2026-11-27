import Container from "@/components/Container";
import Pill from "@/components/Pill";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import BulletList from "@/components/BulletList";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { CaseStudy, getCaseStudies } from "@/lib/caseStudies";
import { Lang, langBase } from "@/lib/i18n";

export type CaseStudyListCopy = {
  title: string;
  intro: string;
  read: string;
};

export function CaseStudyListView({ lang, copy: t }: { lang: Lang; copy: CaseStudyListCopy }) {
  const base = langBase(lang);
  const cases = getCaseStudies(lang);

  return (
    <main>
      <Container>
        <section className="pt-14">
          <PageHeader title={t.title} intro={t.intro} />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <a
                key={c.slug}
                href={`${base}/case-studies/${c.slug}`}
                className="group flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-zinc-600 hover:bg-zinc-900/60"
              >
                <h2 className="font-semibold text-zinc-100">{c.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{c.impact[0]}</p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.slice(0, 3).map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                  <span className="mt-4 inline-block text-sm text-zinc-400 group-hover:text-zinc-200">
                    {t.read}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export type CaseStudyCopy = {
  notFound: string;
  backToList: string;
  role: string;
  scope: string;
  focus: string;
  context: string;
  diagram: string;
  diagramHint: string;
  built: string;
  outcomes: string;
  stack: string;
  relatedLabs: string;
  notes: string;
};

export function CaseStudyView({
  lang,
  cs,
  copy: t
}: {
  lang: Lang;
  cs: CaseStudy | undefined;
  copy: CaseStudyCopy;
}) {
  const back = { href: `${langBase(lang)}/case-studies`, label: t.backToList };

  if (!cs) {
    return (
      <main>
        <Container>
          <section className="pt-14">
            <PageHeader title={t.notFound} back={back} />
          </section>
        </Container>
      </main>
    );
  }

  const meta = [
    { label: t.role, value: cs.role },
    { label: t.scope, value: cs.scope },
    { label: t.focus, value: cs.focus.join(" · ") }
  ];

  return (
    <main>
      <Container>
        <article className="pt-14">
          <PageHeader title={cs.title} intro={cs.subtitle} back={back} />

          <dl className="mt-8 grid gap-5 border-y border-zinc-800 py-6 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-xs uppercase tracking-wider text-zinc-400">{m.label}</dt>
                <dd className="mt-1 text-sm text-zinc-200">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 space-y-12">
            <section className="max-w-3xl">
              <h2 className="text-xl font-semibold">{t.context}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{cs.context}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">{t.diagram}</h2>
              <ArchitectureDiagram slug={cs.slug} />
              <p className="mt-2 text-xs text-zinc-400 sm:hidden">{t.diagramHint}</p>
            </section>

            <Section title={t.built}>
              <BulletList items={cs.built} className="max-w-3xl" />
            </Section>

            <Section title={t.outcomes}>
              <BulletList items={cs.outcomes} className="max-w-3xl" />
            </Section>

            {cs.notes?.length ? (
              <Section title={t.notes}>
                <BulletList items={cs.notes} className="max-w-3xl" />
              </Section>
            ) : null}

            <div className="grid gap-12 border-t border-zinc-800 pt-8 sm:grid-cols-2">
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{t.stack}</h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cs.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </section>

              {cs.relatedLabs?.length ? (
                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{t.relatedLabs}</h2>
                  <ul className="mt-3 space-y-1.5">
                    {cs.relatedLabs.map((lab) => (
                      <li key={lab.href}>
                        <a
                          href={lab.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-sm text-zinc-300 hover:text-zinc-100"
                        >
                          {lab.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
