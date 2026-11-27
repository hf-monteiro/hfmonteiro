import Container from "@/components/Container";
import Button from "@/components/Button";
import Panel from "@/components/Panel";
import ServiceList from "@/components/ServiceList";
import { getCaseStudies } from "@/lib/caseStudies";
import { Lang, langBase } from "@/lib/i18n";
import { getNotes } from "@/lib/notes";

// Home page styled as a production dashboard. Every value shown must be real:
// metrics come from the résumé, services are the case studies, events are the
// career timeline (the site-wide StatusBar shows this build's real commit).
export type HomeCopy = {
  name: string;
  title: string;
  meta: string[];
  summary: string;
  buttons: { caseStudies: string; labs: string; resume: string };
  metrics: { label: string; value: string; detail: string }[];
  services: { title: string; health: string; env: string; link: string };
  events: { title: string; items: { when: string; kind: string; text: string }[] };
  stack: { title: string; groups: { label: string; items: string }[] };
  docs: { title: string; link: string };
};

const panelLink = "text-accent hover:text-accent-hover";

export default function HomeView({ lang, copy: t }: { lang: Lang; copy: HomeCopy }) {
  const base = langBase(lang);
  const cases = getCaseStudies(lang);
  const notes = getNotes(lang).slice(0, 3);

  return (
    <main>
      <Container>
        <section className="pb-8 pt-12">
          <p className="font-mono text-sm text-night-400">{t.name}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-3 font-mono text-xs text-night-400">{t.meta.join("  ·  ")}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-night-300">{t.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`${base}/case-studies`} variant="primary">{t.buttons.caseStudies}</Button>
            <Button href={`${base}/labs`} variant="secondary">{t.buttons.labs}</Button>
            <Button href={`${base}/resume`} variant="secondary">{t.buttons.resume}</Button>
          </div>
        </section>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {t.metrics.map((m) => (
              <Panel key={m.label} title={m.label}>
                <p className="text-2xl font-semibold tracking-tight text-highlight">{m.value}</p>
                <p className="mt-1 text-xs text-night-400">{m.detail}</p>
              </Panel>
            ))}
          </div>

          <Panel
            title={t.services.title}
            aside={
              <a className={panelLink} href={`${base}/case-studies`}>
                {t.services.link}
              </a>
            }
          >
            <ServiceList cases={cases} base={base} health={t.services.health} env={t.services.env} />
          </Panel>

          <div className="grid gap-4 lg:grid-cols-5">
            <Panel title={t.events.title} className="lg:col-span-3">
              <ol className="space-y-2.5 font-mono text-xs sm:text-sm">
                {t.events.items.map((e) => (
                  <li key={`${e.when}-${e.text}`} className="grid grid-cols-[2.5rem_3.5rem_1fr] gap-2 sm:grid-cols-[4.5rem_4rem_1fr] sm:gap-3">
                    <span className="text-night-400">{e.when}</span>
                    <span className={e.kind === "cert" ? "text-accent" : "text-success"}>[{e.kind}]</span>
                    <span className="text-night-200">{e.text}</span>
                  </li>
                ))}
              </ol>
            </Panel>

            <Panel title={t.stack.title} className="lg:col-span-2">
              <dl className="space-y-2.5 text-sm">
                {t.stack.groups.map((g) => (
                  <div key={g.label} className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="font-mono text-xs leading-5 text-night-400">{g.label}</dt>
                    <dd className="text-night-200">{g.items}</dd>
                  </div>
                ))}
              </dl>
            </Panel>
          </div>

          <Panel
            title={t.docs.title}
            aside={
              <a className={panelLink} href={`${base}/notes`}>
                {t.docs.link}
              </a>
            }
          >
            <ul className="-my-1 divide-y divide-night-800">
              {notes.map((note) => (
                <li key={note.slug}>
                  <a
                    href={`${base}/notes/${note.slug}`}
                    className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-medium text-night-100 group-hover:text-accent-hover">{note.title}</span>
                    <span className="shrink-0 font-mono text-xs text-night-400">
                      {note.date} · {note.readingTime}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </Container>
    </main>
  );
}
