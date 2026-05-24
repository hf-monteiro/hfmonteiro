import Container from "@/components/Container";
import Pill from "@/components/Pill";
import { getNote, getNotes } from "@/lib/notes";

export function generateStaticParams() {
  return getNotes("en").map((note) => ({ slug: note.slug }));
}

const copy = {
  notFound: "Note not found",
  backToList: "Back to Notes",
  back: "Back"
};

export default function NoteDetail({ params }: { params: { slug: string } }) {
  const note = getNote("en", params.slug);

  if (!note) {
    return (
      <main>
        <Container>
          <section className="py-14">
            <h1 className="text-2xl font-semibold">{copy.notFound}</h1>
            <a className="mt-6 inline-block text-zinc-300 hover:text-zinc-100" href="/notes">
              ← {copy.backToList}
            </a>
          </section>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container>
        <article className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="/notes">
            ← {copy.back}
          </a>

          <header className="mt-4 max-w-3xl">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500">
              <span>{note.date}</span>
              <span>{note.readingTime}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">{note.title}</h1>
            <p className="mt-4 text-lg text-zinc-300">{note.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </header>

          <div className="mt-10 max-w-3xl space-y-8">
            {note.sections.map((section, index) => (
              <section key={section.heading || index}>
                {section.heading ? (
                  <h2 className="text-xl font-semibold">{section.heading}</h2>
                ) : null}
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
