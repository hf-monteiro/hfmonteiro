import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";
import { getCaseStudies } from "@/lib/caseStudies";

const copy = {
  intro: "Olá, sou o Higor",
  title: "Senior DevOps / Platform Engineer",
  summary:
    "Desenho plataformas AWS corporativas, arquiteturas privadas de networking, ambientes EKS em produção e sistemas de entrega para SaaS regulado e times distribuídos.",
  buttons: {
    caseStudies: "Ver projetos",
    labs: "Infrastructure Labs",
    resume: "Currículo"
  },
  pills: ["AWS Architecture", "PrivateLink", "EKS", "Terraform", "GitLab CI/CD"],
  proof: [
    { value: "16M+", label: "usuários atendidos" },
    { value: "Multi-conta", label: "plataformas AWS" },
    { value: "Private EKS", label: "operação em produção" },
    { value: "Semanal → diário", label: "aceleração de releases" },
    { value: "AWS ANS", label: "advanced networking certified" }
  ],
  highlights: [
    {
      title: "Plataformas AWS Corporativas",
      desc: "Fundações multi-conta, IAM/STS cross-account, DNS privado, guardrails e infraestrutura SaaS regulada."
    },
    {
      title: "Networking Cloud Avançado",
      desc: "PrivateLink, VPC Endpoint Services, Transit Gateway, Direct Connect, Route53 PHZ, conectividade híbrida e acesso privado ao EKS."
    },
    {
      title: "Kubernetes em Produção e Confiabilidade",
      desc: "Operação de EKS, Istio service mesh, GitLab runners em Kubernetes, observabilidade, incident response e redução de MTTR."
    }
  ],
  featured: {
    title: "Projetos em Destaque",
    link: "Ver todos →"
  }
};

export default function Home() {
  const cases = getCaseStudies("pt-br").slice(0, 2);
  const t = copy;
  const base = "/pt-br";

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
                <p className="text-sm font-semibold text-emerald-200">{item.value}</p>
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
      </Container>
    </main>
  );
}
