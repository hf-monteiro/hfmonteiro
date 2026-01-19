import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import { getCaseStudies, getCaseStudy } from "@/lib/caseStudies";

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);

  if (!cs) {
    return (
      <main>
        <Container>
          <section className="py-14">
            <h1 className="text-2xl font-semibold">Case study not found</h1>
            <a className="mt-6 inline-block text-zinc-300 hover:text-zinc-100" href="/case-studies">
              ← Back to Case Studies
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
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="/case-studies">
            ← Back
          </a>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{cs.title}</h1>
          <p className="mt-3 text-zinc-400">{cs.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="mt-10 grid gap-4">
            <Card>
              <h2 className="text-lg font-semibold">Context</h2>
              <p className="mt-2 text-zinc-300">{cs.context}</p>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">What I did</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {cs.whatIDid.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">Outcomes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {cs.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>

            {cs.notes?.length ? (
              <Card>
                <h2 className="text-lg font-semibold">Notes</h2>
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
