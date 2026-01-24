import Container from "@/components/Container";
import Pill from "@/components/Pill";
import { getCaseStudies } from "@/lib/caseStudies";

const copy = {
  title: "Estudos de Caso",
  intro:
    "Uma selecao de projetos reais focados em velocidade de entrega, confiabilidade e engenharia de plataforma pragmatica.",
  back: "Voltar para o inicio",
  read: "Ler estudo de caso →"
};

export default function CaseStudiesPage() {
  const t = copy;
  const base = "/pt-br";
  const cases = getCaseStudies("pt-br");

  return (
    <main>
      <Container>
        <section className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href={base}>
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
