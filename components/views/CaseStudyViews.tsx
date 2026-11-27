import Container from "@/components/Container";
import Pill from "@/components/Pill";
import Panel from "@/components/Panel";
import PageHeader from "@/components/PageHeader";
import BulletList from "@/components/BulletList";
import ServiceList, { StatusBadges } from "@/components/ServiceList";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { CaseStudy, getCaseStudies } from "@/lib/caseStudies";
import { Lang, langBase } from "@/lib/i18n";

export type CaseStudyListCopy = {
  title: string;
  intro: string;
  panel: string;
  health: string;
  env: string;
};

export function CaseStudyListView({ lang, copy: t }: { lang: Lang; copy: CaseStudyListCopy }) {
  return (
    <main>
      <Container>
        <section className="pt-12">
          <PageHeader path="hfmonteiro / projects" title={t.title} intro={t.intro} />
          <Panel title={t.panel} className="mt-8">
            <ServiceList cases={getCaseStudies(lang)} base={langBase(lang)} health={t.health} env={t.env} detailed />
          </Panel>
        </section>
      </Container>
    </main>
  );
}

export type CaseStudyCopy = {
  notFound: string;
  backToList: string;
  health: string;
  env: string;
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
          <section className="pt-12">
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
        <article className="pt-12">
          <PageHeader path={`projects / ${cs.slug}`} title={cs.title} intro={cs.subtitle} back={back}>
            <StatusBadges health={t.health} env={t.env} className="mt-4" />
          </PageHeader>

          <div className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {meta.map((m) => (
                <Panel key={m.label} title={m.label}>
                  <p className="text-sm leading-6 text-night-200">{m.value}</p>
                </Panel>
              ))}
            </div>

            <Panel title={t.context}>
              <p className="max-w-3xl leading-7 text-night-300">{cs.context}</p>
            </Panel>

            <Panel title={t.diagram}>
              <ArchitectureDiagram slug={cs.slug} />
              <p className="mt-2 text-xs text-night-400 sm:hidden">{t.diagramHint}</p>
            </Panel>

            <div className="grid gap-4 lg:grid-cols-2">
              <Panel title={t.built}>
                <BulletList items={cs.built} />
              </Panel>
              <Panel title={t.outcomes}>
                <BulletList items={cs.outcomes} tone="success" />
              </Panel>
            </div>

            {cs.notes?.length ? (
              <Panel title={t.notes}>
                <BulletList items={cs.notes} className="max-w-3xl" />
              </Panel>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <Panel title={t.stack}>
                <div className="flex flex-wrap gap-1.5">
                  {cs.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </Panel>

              {cs.relatedLabs?.length ? (
                <Panel title={t.relatedLabs}>
                  <ul className="space-y-1.5">
                    {cs.relatedLabs.map((lab) => (
                      <li key={lab.href}>
                        <a
                          href={lab.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-sm text-accent hover:text-accent-hover"
                        >
                          {lab.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </Panel>
              ) : null}
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
