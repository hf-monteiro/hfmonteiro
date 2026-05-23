import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import { getCaseStudies, getCaseStudy } from "@/lib/caseStudies";

export function generateStaticParams() {
  return getCaseStudies("pt-br").map((c) => ({ slug: c.slug }));
}

const copy = {
  notFound: "Projeto nao encontrado",
  backToList: "Voltar para projetos",
  back: "Voltar",
  role: "Papel",
  scope: "Escopo",
  focus: "Foco",
  context: "Contexto",
  impact: "Impacto",
  architecture: "Abordagem de arquitetura",
  whatIDid: "O que eu fiz",
  outcomes: "Resultados",
  stack: "Stack",
  relatedLabs: "Labs relacionados",
  notes: "Notas"
};

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const t = copy;
  const cs = getCaseStudy("pt-br", params.slug);

  if (!cs) {
    return (
      <main>
        <Container>
          <section className="py-14">
            <h1 className="text-2xl font-semibold">{t.notFound}</h1>
            <a className="mt-6 inline-block text-zinc-300 hover:text-zinc-100" href="/pt-br/case-studies">
              ← {t.backToList}
            </a>
          </section>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container>
        <section className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="/pt-br/case-studies">
            ← {t.back}
          </a>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{cs.title}</h1>
          <p className="mt-3 text-zinc-400">{cs.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          <div className="mt-10 grid gap-4">
            <Card>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{t.role}</p>
                  <p className="mt-1 text-zinc-200">{cs.role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{t.scope}</p>
                  <p className="mt-1 text-zinc-200">{cs.scope}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-zinc-500">{t.focus}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cs.focus.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.context}</h2>
              <p className="mt-2 text-zinc-300">{cs.context}</p>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.impact}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {cs.impact.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.architecture}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {cs.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.whatIDid}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {cs.whatIDid.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.outcomes}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {cs.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.stack}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>

            {cs.relatedLabs?.length ? (
              <Card>
                <h2 className="text-lg font-semibold">{t.relatedLabs}</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {cs.relatedLabs.map((lab) => (
                    <a
                      key={lab.href}
                      href={lab.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-zinc-300 hover:text-zinc-100"
                    >
                      {lab.label} →
                    </a>
                  ))}
                </div>
              </Card>
            ) : null}

            {cs.notes?.length ? (
              <Card>
                <h2 className="text-lg font-semibold">{t.notes}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                  {cs.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </Card>
            ) : null}
          </div>
        </section>
      </Container>
    </main>
  );
}
