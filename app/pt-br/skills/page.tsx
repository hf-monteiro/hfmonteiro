import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Skills",
  intro:
    "Um mapa de capacidades de arquitetura, plataforma, networking, Kubernetes, automacao e confiabilidade que posso liderar em ambientes cloud corporativos.",
  strengthsTitle: "Forcas principais",
  strengths: [
    "Plataformas AWS Corporativas",
    "Networking AWS Avancado",
    "EKS em Producao",
    "Terraform em Escala",
    "Platform Engineering de CI/CD",
    "SRE / Confiabilidade"
  ]
};

const capabilities = [
  {
    title: "Arquitetura de Plataforma AWS",
    level: "Foco principal",
    desc:
      "Fundacoes multi-conta, estrategia de ambientes, guardrails de plataforma, servicos compartilhados, infraestrutura SaaS regulada e modelos operacionais cloud.",
    items: ["AWS multi-conta", "AWS Organizations", "IAM/STS cross-account", "API Gateway", "Lambda", "S3", "ACM", "Enterprise Infrastructure"]
  },
  {
    title: "Networking Cloud Avancado",
    level: "Foco principal",
    desc:
      "Conectividade privada, DNS, roteamento cross-account, networking hibrido e exposicao segura de servicos para workloads AWS.",
    items: ["PrivateLink", "VPC Endpoint Services", "Interface Endpoints", "Transit Gateway", "Direct Connect", "Route53 PHZ", "AWS IPAM", "Hybrid Cloud"]
  },
  {
    title: "Platform Engineering com Kubernetes",
    level: "Experiencia em producao",
    desc:
      "Plataformas EKS/GKE privadas, service mesh, ingress, troubleshooting de cluster, padroes de deploy e operacao day-2.",
    items: ["EKS", "GKE", "Helm", "Istio", "Rancher", "Ingress Controllers", "ALB/NLB", "Zero-downtime Deployments", "Private EKS"]
  },
  {
    title: "Arquitetura Terraform / IaC",
    level: "Foco principal",
    desc:
      "Design de modulos reutilizaveis, composicao por ambiente, automacao de infraestrutura, remote state e workflows consistentes de provisionamento.",
    items: ["Terraform", "Modulos Terraform", "Infrastructure Automation", "CloudFormation", "Ansible", "Remote State", "Padroes de Modulos"]
  },
  {
    title: "CI/CD e DevSecOps",
    level: "Experiencia em producao",
    desc:
      "Plataformas de entrega, templates reutilizaveis, quality gates, security scanning, promocao de ambientes e onboarding de desenvolvedores.",
    items: ["GitLab CI/CD", "GitLab Runners em Kubernetes", "GitHub Actions", "AWS CodePipeline", "AWS CodeBuild", "Checkov", "SonarQube", "Quality Gates"]
  },
  {
    title: "Observabilidade e Confiabilidade",
    level: "Experiencia em producao",
    desc:
      "Monitoramento, higiene de alertas, incident response, root cause analysis, runbooks operacionais e melhorias de confiabilidade para sistemas distribuidos.",
    items: ["Datadog", "CloudWatch", "New Relic", "Dynatrace", "Logs Centralizados", "Incident Response", "RCA", "Runbooks"]
  },
  {
    title: "Seguranca e Compliance",
    level: "Hands-on",
    desc:
      "Controles pragmaticos de seguranca cloud, hardening de IAM, gestao de segredos, baselines de WAF e padroes de infraestrutura sensiveis a compliance.",
    items: ["AWS IAM", "AWS WAFv2", "SSM Parameter Store", "Secrets Manager", "Least Privilege", "Security Hardening", "Ambientes Regulados"]
  },
  {
    title: "Bancos, Mensageria e Servicos de Aplicacao",
    level: "Hands-on",
    desc:
      "Servicos de plataforma para workloads de aplicacao, conectividade privada, bancos gerenciados e infraestrutura orientada a eventos.",
    items: ["RDS", "Aurora PostgreSQL/MySQL", "MongoDB", "Kafka", "AWS MSK", "SQS", "ECS", "Conectividade Privada"]
  },
  {
    title: "Lideranca e Entrega",
    level: "Ownership senior / lead",
    desc:
      "Architecture reviews, consultoria tecnica, mentoria, coordenacao de times, ownership de plataforma e entrega pragmatica entre times de engenharia.",
    items: ["Consultoria Tecnica", "Mentoria", "Platform Ownership", "Architecture Reviews", "Alinhamento com Stakeholders", "Planejamento de Entrega"]
  },
  {
    title: "Fundacoes de Suporte / Legacy",
    level: "Experiencia de suporte",
    desc:
      "Base anterior de infraestrutura que ainda informa decisoes de arquitetura cloud, especialmente em networking, virtualizacao, Windows e operacoes de data center.",
    items: ["Bash", "Python", "Windows Infrastructure", "Virtualizacao On-prem", "Data Center", "Infraestrutura de Rede", "ITIL", "SDLC"]
  }
];

function LevelBadge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-300">
      {children}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-3xl text-zinc-400">{copy.intro}</p>

          <div className="mt-8">
            <h2 className="text-base font-semibold">{copy.strengthsTitle}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {copy.strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-white bg-white px-3 py-1 text-xs font-medium text-zinc-950"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {capabilities.map((capability) => (
              <Card key={capability.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold">{capability.title}</h2>
                  <LevelBadge>{capability.level}</LevelBadge>
                </div>
                <p className="mt-3 text-sm text-zinc-400">{capability.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {capability.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
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
