import Container from "@/components/Container";
import Pill from "@/components/Pill";
import { getNotes } from "@/lib/notes";

export const metadata = {
  title: "Engineering Notes | Higor Monteiro",
  description:
    "Notas técnicas sobre networking AWS, Kubernetes, platform engineering, Terraform, CI/CD e confiabilidade."
};

const copy = {
  title: "Engineering Notes",
  intro:
    "Notas técnicas curtas sobre networking AWS, Kubernetes, platform engineering, Terraform, CI/CD e confiabilidade.",
  back: "Voltar para início",
  read: "Ler nota →"
};

export default function NotesPage() {
  const notes = getNotes("pt-br");

  return (
    <main>
      <Container>
        <section className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="/pt-br">
            ← {copy.back}
          </a>
          <h1 className="mt-4 text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-300">{copy.intro}</p>

          <div className="mt-8 grid gap-4">
            {notes.map((note) => (
              <a
                key={note.slug}
                href={`/pt-br/notes/${note.slug}`}
                className="rounded-lg border border-zinc-800 bg-zinc-900/25 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/45"
              >
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500">
                  <span>{note.date}</span>
                  <span>{note.readingTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold">{note.title}</h2>
                <p className="mt-3 max-w-3xl text-sm text-zinc-300">{note.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm text-zinc-400 hover:text-zinc-200">
                  {copy.read}
                </span>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
