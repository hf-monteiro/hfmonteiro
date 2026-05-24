import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";
import { getCaseStudies } from "@/lib/caseStudies";
import { getNotes } from "@/lib/notes";

const copy = {
  intro: "Hi, I’m Higor",
  title: "Senior DevOps / Platform Engineer",
  summary:
    "I design enterprise AWS platforms, private networking architectures, production EKS environments, and delivery systems for regulated SaaS and distributed engineering teams.",
  buttons: {
    caseStudies: "View Projects",
    labs: "Infrastructure Labs",
    resume: "Resume"
  },
  pills: ["AWS Architecture", "PrivateLink", "EKS", "Terraform", "GitLab CI/CD"],
  proof: [
    { value: "16M+", label: "users supported" },
    { value: "Multi-account", label: "AWS platforms" },
    { value: "Private EKS", label: "production operations" },
    { value: "Weekly → daily", label: "release acceleration" },
    { value: "AWS ANS", label: "advanced networking certified" }
  ],
  highlights: [
    {
      title: "Enterprise AWS Platforms",
      desc: "Multi-account foundations, cross-account IAM/STS, private DNS, guardrails, and regulated SaaS infrastructure."
    },
    {
      title: "Advanced Cloud Networking",
      desc: "PrivateLink, VPC Endpoint Services, Transit Gateway, Direct Connect, Route53 PHZ, hybrid connectivity, and private EKS access."
    },
    {
      title: "Production Kubernetes & Reliability",
      desc: "EKS operations, Istio service mesh, GitLab runners on Kubernetes, observability, incident response, and MTTR reduction."
    }
  ],
  featured: {
    title: "Featured Projects",
    link: "See all →"
  },
  notes: {
    title: "Recent Notes",
    link: "Read all →"
  }
};

export default function Home() {
  const cases = getCaseStudies("en").slice(0, 2);
  const notes = getNotes("en").slice(0, 2);
  const t = copy;
  const base = "";

  return (
    <main>
      <Container>
        <section className="py-14">
          <p className="text-sm text-zinc-400">{t.intro}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            {t.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`${base}/case-studies`} variant="primary">{t.buttons.caseStudies}</Button>
            <Button href={`${base}/labs`} variant="secondary">{t.buttons.labs}</Button>
            <Button href={`${base}/resume`} variant="secondary">{t.buttons.resume}</Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.pills.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          <div className="mt-10 grid gap-3 border-y border-zinc-800 py-5 sm:grid-cols-5">
            {t.proof.map((item) => (
              <div key={item.value}>
                <p className="text-sm font-semibold text-zinc-200">{item.value}</p>
                <p className="mt-1 text-xs text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 pb-14 sm:grid-cols-3">
          {t.highlights.map((b) => (
            <Card key={b.title}>
              <h2 className="text-lg font-semibold">{b.title}</h2>
              <p className="mt-2 text-zinc-400">{b.desc}</p>
            </Card>
          ))}
        </section>

        <section className="pb-14">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-base font-semibold">{t.featured.title}</h2>
            <a className="text-sm text-zinc-400 hover:text-zinc-200" href={`${base}/case-studies`}>
              {t.featured.link}
            </a>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cases.map((c) => (
              <a
                key={c.slug}
                href={`${base}/case-studies/${c.slug}`}
                className="rounded-lg border border-zinc-800 bg-zinc-900/25 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/45"
              >
                <p className="text-sm text-zinc-500">{c.subtitle}</p>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{c.impact[0]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.slice(0, 3).map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="pb-14">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-base font-semibold">{t.notes.title}</h2>
            <a className="text-sm text-zinc-400 hover:text-zinc-200" href={`${base}/notes`}>
              {t.notes.link}
            </a>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {notes.map((note) => (
              <a
                key={note.slug}
                href={`${base}/notes/${note.slug}`}
                className="rounded-lg border border-zinc-800 bg-zinc-900/25 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/45"
              >
                <p className="text-xs text-zinc-500">{note.date} · {note.readingTime}</p>
                <h3 className="mt-2 text-lg font-semibold">{note.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{note.excerpt}</p>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
