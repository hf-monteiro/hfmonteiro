import Container from "@/components/Container";
import Pill from "@/components/Pill";
import PageHeader from "@/components/PageHeader";
import Panel from "@/components/Panel";
import { Lang, langBase } from "@/lib/i18n";
import { Note, getNotes } from "@/lib/notes";

// Notes styled as an internal docs/runbook portal. Every figure is derived
// from the notes themselves (dates, reading times, tags, word counts).

const minutes = (readingTime: string) => Number(readingTime.match(/\d+/)?.[0] ?? 0);

const words = (note: Note) =>
  note.sections.reduce((n, s) => n + s.body.join(" ").split(/\s+/).filter(Boolean).length, 0);

// "Environment VPC Pattern" -> "environment-vpc-pattern" (anchor ids for the TOC)
const anchor = (heading: string) =>
  heading
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function Tiles({ tiles }: { tiles: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {tiles.map((tile) => (
        <Panel key={tile.label} title={tile.label}>
          <p className="text-2xl font-semibold tracking-tight text-highlight">{tile.value}</p>
        </Panel>
      ))}
    </div>
  );
}

export type NotesListCopy = {
  title: string;
  intro: string;
  panel: string;
  tiles: { docs: string; readTime: string; latest: string; topics: string };
  columns: { doc: string; topics: string; published: string; read: string };
  min: string;
};

const listCols = "sm:grid-cols-[minmax(0,1fr)_12rem_6.5rem_4rem]";

export function NotesListView({ lang, copy: t }: { lang: Lang; copy: NotesListCopy }) {
  const base = langBase(lang);
  const notes = getNotes(lang);
  const topics = new Set(notes.flatMap((n) => n.tags));
  const latest = notes.map((n) => n.date).sort().pop() ?? "—";
  const total = notes.reduce((n, note) => n + minutes(note.readingTime), 0);

  return (
    <main>
      <Container>
        <section className="pt-12">
          <PageHeader path="hfmonteiro / notes" title={t.title} intro={t.intro} />

          <div className="mt-8 grid gap-4">
            <Tiles
              tiles={[
                { label: t.tiles.docs, value: String(notes.length) },
                { label: t.tiles.readTime, value: `${total} ${t.min}` },
                { label: t.tiles.latest, value: latest },
                { label: t.tiles.topics, value: String(topics.size) }
              ]}
            />

            <Panel title={t.panel}>
              <div className={`hidden gap-4 border-b border-night-800 pb-2 font-mono text-xs uppercase tracking-wider text-night-400 sm:grid ${listCols}`}>
                <span>{t.columns.doc}</span>
                <span>{t.columns.topics}</span>
                <span>{t.columns.published}</span>
                <span>{t.columns.read}</span>
              </div>
              <ul className="divide-y divide-night-800">
                {notes.map((note) => (
                  <li key={note.slug}>
                    <a href={`${base}/notes/${note.slug}`} className={`group grid gap-x-4 gap-y-2 py-3.5 sm:items-start ${listCols}`}>
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-night-400">{note.slug}</p>
                        <h2 className="mt-1 font-medium text-night-100 group-hover:text-accent-hover">{note.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-night-400">{note.excerpt}</p>
                      </div>
                      <p className="font-mono text-xs leading-5 text-night-300 sm:pt-5">{note.tags.slice(0, 3).join(" · ")}</p>
                      <div className="flex gap-3 font-mono text-xs text-night-400 sm:contents">
                        <span className="sm:pt-5">{note.date}</span>
                        <span className="sm:pt-5">
                          {minutes(note.readingTime)} {t.min}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </section>
      </Container>
    </main>
  );
}

export type NoteCopy = {
  notFound: string;
  backToList: string;
  meta: { published: string; readTime: string; words: string; sections: string };
  min: string;
  toc: string;
  topics: string;
};

export function NoteView({ lang, note, copy: t }: { lang: Lang; note: Note | undefined; copy: NoteCopy }) {
  const back = { href: `${langBase(lang)}/notes`, label: t.backToList };

  if (!note) {
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

  const headings = note.sections.map((s) => s.heading).filter((h): h is string => Boolean(h));
  const meta = [
    { label: t.meta.published, value: note.date },
    { label: t.meta.readTime, value: `${minutes(note.readingTime)} ${t.min}` },
    { label: t.meta.words, value: words(note).toLocaleString("en-US") },
    { label: t.meta.sections, value: String(headings.length || note.sections.length) }
  ];

  return (
    <main>
      <Container>
        <article className="pt-12">
          <PageHeader path={`notes / ${note.slug}`} title={note.title} back={back} intro={note.excerpt} />

          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-y border-night-800 py-3 font-mono text-xs">
            {meta.map((m) => (
              <div key={m.label} className="flex gap-2">
                <dt className="text-night-400">{m.label}</dt>
                <dd className="text-night-200">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
            <div className="max-w-3xl space-y-8">
              {note.sections.map((section, index) => (
                <section
                  key={section.heading || index}
                  id={section.heading ? anchor(section.heading) : undefined}
                  className="scroll-mt-28"
                >
                  {section.heading ? <h2 className="text-xl font-semibold">{section.heading}</h2> : null}
                  <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="leading-7 text-night-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside>
              <div className="space-y-4 lg:sticky lg:top-28">
                {headings.length ? (
                  <Panel title={t.toc} className="hidden lg:flex">
                    <ol className="space-y-1.5 text-sm">
                      {headings.map((h) => (
                        <li key={h}>
                          <a className="text-night-300 hover:text-accent-hover" href={`#${anchor(h)}`}>
                            {h}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </Panel>
                ) : null}
                <Panel title={t.topics}>
                  <div className="flex flex-wrap gap-1.5">
                    {note.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </Panel>
              </div>
            </aside>
          </div>
        </article>
      </Container>
    </main>
  );
}
