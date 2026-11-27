import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { getCaseStudies } from "@/lib/caseStudies";
import { Lang, langBase } from "@/lib/i18n";
import { getNotes } from "@/lib/notes";
import { formatDate } from "@/lib/utils";

export type HomeCopy = {
  intro: string;
  title: string;
  summary: string;
  buttons: { caseStudies: string; labs: string; resume: string };
  proof: { value: string; label: string }[];
  about: { text: string; link: string };
  featured: { title: string; link: string };
  notes: { title: string; link: string };
};

const linkCard =
  "group rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-zinc-600 hover:bg-zinc-900/60";

export default function HomeView({ lang, copy: t }: { lang: Lang; copy: HomeCopy }) {
  const base = langBase(lang);
  const cases = getCaseStudies(lang);
  const notes = getNotes(lang).slice(0, 2);

  return (
    <main>
      <Container>
        <section className="pb-6 pt-16 sm:pt-20">
          <p className="text-sm text-zinc-400">{t.intro}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{t.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`${base}/case-studies`} variant="primary">{t.buttons.caseStudies}</Button>
            <Button href={`${base}/labs`} variant="secondary">{t.buttons.labs}</Button>
            <Button href={`${base}/resume`} variant="secondary">{t.buttons.resume}</Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-zinc-800 pt-6 sm:grid-cols-5">
            {t.proof.map((item) => (
              <div key={item.value}>
                <dt className="text-base font-semibold text-zinc-100">{item.value}</dt>
                <dd className="mt-1 text-xs text-zinc-400">{item.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="space-y-16">
          <Section
            title={t.featured.title}
            aside={
              <a className="text-sm text-zinc-400 hover:text-zinc-200" href={`${base}/case-studies`}>
                {t.featured.link}
              </a>
            }
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <a key={c.slug} href={`${base}/case-studies/${c.slug}`} className={linkCard}>
                  <h3 className="font-semibold text-zinc-100">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{c.subtitle}</p>
                </a>
              ))}
            </div>
          </Section>

          <Section
            title={t.notes.title}
            aside={
              <a className="text-sm text-zinc-400 hover:text-zinc-200" href={`${base}/notes`}>
                {t.notes.link}
              </a>
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {notes.map((note) => (
                <a key={note.slug} href={`${base}/notes/${note.slug}`} className={linkCard}>
                  <p className="text-xs text-zinc-400">
                    {formatDate(note.date)} · {note.readingTime}
                  </p>
                  <h3 className="mt-2 font-semibold text-zinc-100">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{note.excerpt}</p>
                </a>
              ))}
            </div>
          </Section>

          <section className="max-w-2xl border-t border-zinc-800 pt-8">
            <p className="leading-7 text-zinc-400">
              {t.about.text}{" "}
              <a className="whitespace-nowrap text-zinc-200 hover:text-white" href={`${base}/notes/about-me`}>
                {t.about.link}
              </a>
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
