import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Skills",
  intro: "Uma visao pratica das ferramentas e padroes que uso para entregar plataformas confiaveis."
};

const groups = [
  { title: "DevOps e CI/CD", items: ["GitLab CI/CD", "AWS CodePipeline", "AWS CodeBuild", "GitHub Actions"] },
  { title: "IaC e Automacao", items: ["Terraform", "Ansible", "CloudFormation"] },
  { title: "Plataformas Cloud", items: ["AWS", "GCP"] },
  { title: "Containers e Orquestracao", items: ["Kubernetes (EKS, GKE)", "Amazon ECS", "Docker"] },
  { title: "Gerenciamento de Trafego", items: ["Nginx", "Roteamento HTTP/S", "Proxy", "Terminacao TLS"] },
  { title: "Monitoramento e Observabilidade", items: ["Datadog", "CloudWatch", "New Relic", "Dynatrace"] },
  { title: "Seguranca e Segredos", items: ["AWS IAM", "AWS WAFv2", "SSM Parameter Store", "Secrets Manager"] },
  { title: "Qualidade e Seguranca de Codigo", items: ["Checkov", "SonarQube (integracao com CI/CD)"] },
  { title: "Scripting e Linguagens", items: ["Bash", "Python"] },
  { title: "Bancos de Dados", items: ["RDS", "Aurora (PostgreSQL/MySQL)", "MongoDB"] },
  { title: "Streaming e Mensageria", items: ["Kafka", "AWS MSK"] },
  { title: "Redes e Sistemas", items: ["Protocolos de rede", "Administracao de sistemas"] },
  { title: "Metodologias", items: ["Agile", "DevOps", "ITIL", "SDLC"] },
  { title: "Lideranca", items: ["Gestao de time", "Mentoria", "Consultoria tecnica"] }
];

export default function SkillsPage() {
  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{copy.intro}</p>

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
