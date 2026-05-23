import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";
import { getCaseStudies } from "@/lib/caseStudies";

const copy = {
  intro: "Ola, sou o Higor",
  title: "Senior DevOps / Platform Engineer",
  summary:
    "Desenho plataformas AWS corporativas, arquiteturas privadas de networking, ambientes EKS em producao e sistemas de entrega para SaaS regulado e times distribuidos.",
  buttons: {
    caseStudies: "Ver projetos",
    labs: "Infrastructure Labs",
    solutions: "Solucoes",
    resume: "Curriculo"
  },
  pills: ["AWS Architecture", "PrivateLink", "Transit Gateway", "Direct Connect", "Terraform", "EKS", "Istio", "GitLab CI/CD", "SRE"],
  highlights: [
    {
      title: "Plataformas AWS Corporativas",
      desc: "Fundacoes multi-conta, IAM/STS cross-account, DNS privado, guardrails e infraestrutura SaaS regulada."
    },
    {
      title: "Networking Cloud Avancado",
      desc: "PrivateLink, VPC Endpoint Services, Transit Gateway, Direct Connect, Route53 PHZ, conectividade hibrida e acesso privado ao EKS."
    },
    {
      title: "Kubernetes em Producao e Confiabilidade",
      desc: "Operacao de EKS, Istio service mesh, GitLab runners em Kubernetes, observabilidade, incident response e reducao de MTTR."
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
            <Button href={`${base}/solutions`} variant="secondary">{t.buttons.solutions}</Button>
            <Button href={`${base}/resume`} variant="secondary">{t.buttons.resume}</Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.pills.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
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
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50"
              >
                <p className="text-sm text-zinc-500">{c.subtitle}</p>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.slice(0, 4).map((tag) => (
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
