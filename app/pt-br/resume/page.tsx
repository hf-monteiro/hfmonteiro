import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

const copy = {
  title: "Curriculo",
  intro: "Visao rapida + PDF para download.",
  summaryTitle: "Resumo",
  summaryBody:
    "Senior DevOps Engineer com 10+ anos em TI, especializado em AWS/GCP, Terraform, Kubernetes, GitLab CI/CD e observabilidade. Experiencia em padronizar pipelines entre times e acelerar a cadencia de releases (1/semana para 2-6/dia).",
  skillsTitle: "Skills",
  skills: [
    { label: "DevOps e CI/CD", items: ["GitLab CI/CD", "AWS CodePipeline", "AWS CodeBuild", "GitHub Actions"] },
    { label: "IaC e Automacao", items: ["Terraform", "Ansible", "CloudFormation"] },
    { label: "Plataformas Cloud", items: ["AWS", "GCP"] },
    { label: "Containers e Orquestracao", items: ["Kubernetes (EKS, GKE)", "Amazon ECS", "Docker"] },
    { label: "Gerenciamento de Trafego", items: ["Nginx", "Roteamento HTTP/S", "Proxy", "Terminacao TLS"] },
    { label: "Monitoramento e Observabilidade", items: ["Datadog", "CloudWatch", "New Relic", "Dynatrace"] },
    { label: "Seguranca e Segredos", items: ["AWS IAM", "AWS WAFv2", "SSM Parameter Store", "Secrets Manager"] },
    { label: "Qualidade e Seguranca de Codigo", items: ["Checkov", "SonarQube (integracao com CI/CD)"] },
    { label: "Scripting e Linguagens", items: ["Bash", "Python"] },
    { label: "Bancos de Dados", items: ["RDS", "Aurora (PostgreSQL/MySQL)", "MongoDB"] },
    { label: "Streaming e Mensageria", items: ["Kafka", "AWS MSK"] },
    { label: "Redes e Sistemas", items: ["Protocolos de rede", "Administracao de sistemas"] },
    { label: "Metodologias", items: ["Agile", "DevOps", "ITIL", "SDLC"] },
    { label: "Lideranca", items: ["Gestao de time", "Mentoria", "Consultoria tecnica"] }
  ],
  download: "Baixar PDF",
  contact: "Contato",
  certsTitle: "Certificacoes",
  certs: [
    "AWS Certified Advanced Networking – Specialty (2025–2028)",
    "AWS Certified DevOps Engineer – Professional (2024–2027)",
    "AWS Certified Developer – Associate (2023–2027)",
    "AWS Certified SysOps Administrator – Associate (2021–2024)",
    "AWS Certified Cloud Practitioner (2020–2027)",
    "GCP Professional Cloud Architect (2024–2026)",
    "GCP Professional Cloud Developer (2025–2027)",
    "Certified SAFe 6 – Practitioner (2024–2025)",
    "GitLab Certified Associate (2021)"
  ]
};

export default function ResumePage() {
  const base = "/pt-br";

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{copy.intro}</p>

          <div className="mt-8 grid gap-4">
            <Card>
              <h2 className="text-lg font-semibold">{copy.summaryTitle}</h2>
              <p className="mt-2 text-zinc-300">{copy.summaryBody}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary">{copy.download}</Button>
                <Button href={`${base}/contact`} variant="secondary">{copy.contact}</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.skillsTitle}</h2>
              <div className="mt-4 grid gap-4 text-sm text-zinc-300">
                {copy.skills.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs uppercase tracking-wider text-zinc-400">{group.label}</p>
                    <p className="mt-1">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.certsTitle}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {copy.certs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
