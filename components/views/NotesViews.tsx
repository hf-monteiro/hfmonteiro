import Container from "@/components/Container";
import Pill from "@/components/Pill";
import PageHeader from "@/components/PageHeader";
import { Lang, langBase } from "@/lib/i18n";
import { Note, getNotes } from "@/lib/notes";
import { formatDate } from "@/lib/utils";

export type NotesListCopy = {
  title: string;
  intro: string;
  read: string;
};

export function NotesListView({ lang, copy: t }: { lang: Lang; copy: NotesListCopy }) {
  const base = langBase(lang);

  return (
    <main>
      <Container>
        <section className="pt-14">
          <PageHeader title={t.title} intro={t.intro} />

          <ul className="mt-10 max-w-3xl divide-y divide-zinc-800 border-t border-zinc-800">
            {getNotes(lang).map((note) => (
              <li key={note.slug}>
                <a href={`${base}/notes/${note.slug}`} className="group block py-6">
                  <p className="text-xs text-zinc-400">
                    {formatDate(note.date)} · {note.readingTime}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-100 group-hover:text-white">{note.title}</h2>
                  <p className="mt-2 leading-7 text-zinc-400">{note.excerpt}</p>
                  <span className="mt-3 inline-block text-sm text-zinc-400 group-hover:text-zinc-200">{t.read}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}

export type NoteCopy = {
  notFound: string;
  backToList: string;
};

export function NoteView({ lang, note, copy: t }: { lang: Lang; note: Note | undefined; copy: NoteCopy }) {
  const back = { href: `${langBase(lang)}/notes`, label: t.backToList };

  if (!note) {
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

  return (
    <main>
      <Container>
        <article className="max-w-3xl pt-14">
          <PageHeader
            title={note.title}
            back={back}
            intro={
              <>
                <p className="text-sm text-zinc-400">
                  {formatDate(note.date)} · {note.readingTime}
                </p>
                <p className="mt-3">{note.excerpt}</p>
              </>
            }
          />
          <div className="mt-5 flex flex-wrap gap-1.5">
            {note.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          <div className="mt-10 space-y-8 border-t border-zinc-800 pt-8">
            {note.sections.map((section, index) => (
              <section key={section.heading || index}>
                {section.heading ? <h2 className="text-xl font-semibold">{section.heading}</h2> : null}
                <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-zinc-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </Container>
    </main>
  );
}
