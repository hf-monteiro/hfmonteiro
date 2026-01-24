import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import { Lang, LANGS, normalizeLang } from "@/lib/i18n";

const copy = {
  en: {
    title: "Skills",
    intro: "A practical view of the tools and patterns I use to deliver reliable platforms."
  },
  "pt-br": {
    title: "Skills",
    intro: "Uma visao pratica das ferramentas e padroes que uso para entregar plataformas confiaveis."
  }
};

const groupsByLang: Record<Lang, { title: string; items: string[] }[]> = {
  en: [
    { title: "Cloud (AWS)", items: ["VPC", "IAM", "EKS", "MSK", "RDS/Aurora", "PrivateLink", "Route 53", "CloudWatch"] },
    { title: "IaC", items: ["Terraform", "Module design", "State patterns", "Environments", "GitOps-friendly structure"] },
    { title: "CI/CD", items: ["GitLab CI", "Runners on Kubernetes", "Templates", "Rules/Approvals", "Artifacts/Reports"] },
    { title: "Observability", items: ["Dynatrace", "Datadog", "Alerting strategy", "Tracing basics", "Runbooks"] },
    { title: "SRE / Ops", items: ["Incident response", "Escalation", "Postmortems", "Reliability guardrails"] }
  ],
  "pt-br": [
    { title: "Cloud (AWS)", items: ["VPC", "IAM", "EKS", "MSK", "RDS/Aurora", "PrivateLink", "Route 53", "CloudWatch"] },
    { title: "IaC", items: ["Terraform", "Design de modulos", "Padroes de state", "Ambientes", "Estrutura GitOps"] },
    { title: "CI/CD", items: ["GitLab CI", "Runners no Kubernetes", "Templates", "Rules/Approvals", "Artifacts/Reports"] },
    { title: "Observabilidade", items: ["Dynatrace", "Datadog", "Estrategia de alertas", "Fundamentos de tracing", "Runbooks"] },
    { title: "SRE / Ops", items: ["Resposta a incidentes", "Escalacao", "Postmortems", "Guardrails de confiabilidade"] }
  ]
};

export default function SkillsPage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  const t = copy[lang];
  const groups = groupsByLang[lang];

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{t.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {groups.map((g) => (
              <Card key={g.title}>
                <h2 className="text-lg font-semibold">{g.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Pill key={i}>{i}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
