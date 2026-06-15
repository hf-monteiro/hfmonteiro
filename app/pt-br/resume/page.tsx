import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

export const metadata = {
  title: "Currículo | Higor Monteiro",
  description:
    "Currículo de Senior DevOps e Platform Engineer com foco em arquitetura AWS, EKS, Terraform, GitLab CI/CD e networking cloud."
};

const copy = {
  title: "Currículo",
  intro: "Resumo sênior de plataforma, arquitetura cloud e confiabilidade de infraestrutura.",
  summaryTitle: "Resumo",
  summaryBody:
    "Senior DevOps / Platform Engineer com 10+ anos de experiência desenhando e operando infraestrutura cloud-native e arquiteturas de plataforma corporativas em AWS. Especializado em Kubernetes (EKS), Terraform, GitLab CI/CD, AWS networking, PrivateLink, Direct Connect, arquiteturas multi-conta e engenharia de plataforma para ambientes SaaS regulados.",
  download: "Baixar PDF",
  contact: "Contato",
  positioning: [
    "Senior Platform Engineer",
    "Cloud Infrastructure Architect",
    "AWS Networking Specialist",
    "Kubernetes Platform Engineer",
    "DevOps Lead"
  ],
  outcomesTitle: "Principais Resultados",
  outcomes: [
    "Desenhei arquiteturas AWS multi-conta para ambientes SaaS corporativos.",
    "Construí padrões de conectividade privada com PrivateLink, Transit Gateway, Direct Connect e Route53 PHZ.",
    "Operei plataformas EKS em produção com GitLab CI/CD, Helm, Istio e ingress privado.",
    "Padronizei workflows GitLab CI/CD, aumentando releases de semanais para múltiplos deploys por dia.",
    "Apoiei ambientes AWS de grande escala atendendo 16M+ usuários em sistemas financeiros regulados.",
    "Melhorei confiabilidade de plataforma com observabilidade, incident response, RCA e runbooks."
  ],
  certsTitle: "Certificações",
  certs: [
    "AWS Certified Advanced Networking - Specialty",
    "AWS Certified DevOps Engineer - Professional",
    "GCP Professional Cloud Architect",
    "GCP Professional Cloud Developer",
    "AWS Certified Developer / SysOps / Cloud Practitioner",
    "Certified SAFe 6 - Practitioner / GitLab Certified Associate"
  ],
  architectureTitle: "Experiência Selecionada em Arquitetura",
  architectureGroups: [
    {
      title: "Plataforma AWS e Networking",
      items: [
        "Arquiteturas SaaS AWS multi-conta",
        "AWS PrivateLink e VPC Endpoint Services",
        "Conectividade híbrida com AWS Direct Connect e Transit Gateway",
        "Padrões de IAM cross-account e federação STS",
        "Arquiteturas de DNS corporativo com Route53 Private Hosted Zones"
      ]
    },
    {
      title: "Kubernetes e Entrega",
      items: [
        "Ambientes Kubernetes/EKS privados com acesso controlado",
        "Implementações de Istio service mesh e roteamento interno",
        "Platform engineering com GitLab CI/CD e GitLab runners em Kubernetes",
        "Arquiteturas de ingress altamente disponíveis com ALB/NLB",
        "Padronização de módulos Terraform em escala"
      ]
    },
    {
      title: "Confiabilidade e Segurança",
      items: [
        "AWS WAF, DevSecOps e hardening de segurança",
        "Networking MSK/Kafka e conectividade privada",
        "Plataformas centralizadas de observabilidade e monitoramento",
        "Incident response em produção e root cause analysis",
        "Melhorias de confiabilidade para sistemas AWS distribuídos"
      ]
    }
  ],
  recentTitle: "Experiência Recente em Plataforma e Cloud",
  earlierTitle: "Liderança Anterior em Infraestrutura",
  recentRoles: [
    {
      title: "DevOps / Platform Engineering",
      company: "BairesDev",
      period: "Feb 2022 - Presente",
      tags: ["AWS", "Terraform", "EKS", "PrivateLink", "Istio", "GitLab CI/CD", "SaaS regulado"],
      items: [
        "Desenhei e implementei arquiteturas de plataforma AWS multi-conta para ambientes SaaS corporativos usando Terraform e boas práticas de Infrastructure as Code.",
        "Arquiteturei networking seguro cross-account com AWS PrivateLink, Transit Gateway, Direct Connect, Route53 Private Hosted Zones, Interface Endpoints e VPC Endpoint Services.",
        "Construí e mantive plataformas EKS em produção com GitLab CI/CD, Helm, Istio, ingress privado, observabilidade e pipelines automatizados.",
        "Desenvolvi módulos Terraform reutilizáveis para networking, EKS, MSK, ingress, WAF, Route53, controles de segurança cloud e fundações de plataforma.",
        "Otimizei pipelines CI/CD entre times de engenharia, aumentando a frequência de deploy de releases semanais para múltiplos deploys por dia.",
        "Atuei em incident response, root cause analysis, troubleshooting de plataforma e melhorias de confiabilidade em sistemas AWS distribuídos."
      ]
    },
    {
      title: "Cloud Reliability e DevOps",
      company: "Banco Inter",
      period: "Sep 2021 - Feb 2022",
      tags: ["AWS", "Financial Services", "EKS", "ECS", "MSK", "Confiabilidade", "16M+ usuários"],
      items: [
        "Apoiei ambientes AWS de grande escala atendendo 16M+ usuários com requisitos de alta disponibilidade, segurança e regulação financeira.",
        "Gerenciei serviços cloud mission-critical incluindo EKS, ECS, API Gateway, MSK, Lambda, RDS/Aurora, IAM, WAFv2, S3, ALB/NLB e ACM.",
        "Melhorei observabilidade, incident response, pipelines CI/CD e maturidade operacional para sistemas distribuídos em produção."
      ]
    },
    {
      title: "Cloud Architect",
      company: "KXC Tecnologia",
      period: "Jun 2020 - Sep 2021",
      tags: ["AWS", "Terraform", "CodePipeline", "CodeDeploy", "Cloud Migration"],
      items: [
        "Arquiteturei soluções AWS usando Terraform e serviços AWS de CI/CD, incluindo CodePipeline e CodeDeploy.",
        "Automatizei workflows de deploy com AWS CodePipeline, GitHub e GitLab, reduzindo ciclos de release e melhorando a consistência de entrega.",
        "Executei projetos de migração cloud em larga escala e otimizei workloads corporativos para confiabilidade, escalabilidade e eficiência operacional."
      ]
    }
  ],
  earlierRoles: [
    {
      title: "Tech Lead",
      company: "Gtek Soluções Tecnológicas",
      period: "Sep 2017 - Jun 2019",
      tags: ["Liderança", "Networking", "Virtualização", "Consultoria"],
      items: [
        "Liderei um time técnico responsável por gestão de incidentes, operação de infraestrutura e projetos de virtualização on-premises.",
        "Arquiteturei e executei projetos de infraestrutura de rede para clientes corporativos.",
        "Prestei consultoria de TI e conduzi operações de equipe, planejamento de entregas e execução técnica."
      ]
    },
    {
      title: "Tech Lead",
      company: "Intranetworks",
      period: "Sep 2014 - Aug 2017",
      tags: ["Liderança", "Data Center", "Networking", "Virtualização"],
      items: [
        "Direcionei operações de equipe e gestão de incidentes enquanto entregava projetos de virtualização on-premises.",
        "Arquiteturei e gerenciei projetos de infraestrutura de rede em ambientes de clientes.",
        "Desenhei e implementei projetos de infraestrutura de data center, incluindo fundações de networking e virtualização.",
        "Prestei consultoria de TI e suporte a serviços enquanto gerenciava operações de infraestrutura de rede."
      ]
    }
  ]
};

function RoleCard({
  role,
  compact = false
}: {
  role: {
    title: string;
    company: string;
    period: string;
    tags: string[];
    items: string[];
  };
  compact?: boolean;
}) {
  return (
    <Card>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{role.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{role.company}</p>
        </div>
        <p className="text-sm text-zinc-500">{role.period}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {role.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
      <ul className={`mt-4 list-disc space-y-2 pl-5 text-zinc-300 ${compact ? "text-sm" : ""}`}>
        {role.items.slice(0, compact ? 2 : 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

export default function ResumePage() {
  const base = "/pt-br";

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{copy.intro}</p>

          <div className="mt-8 grid gap-5">
            <Card>
              <h2 className="text-lg font-semibold">{copy.summaryTitle}</h2>
              <p className="mt-2 text-zinc-300">{copy.summaryBody}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {copy.positioning.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white bg-white px-3 py-1 text-xs font-medium text-zinc-950"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary" download="Higor_Monteiro_Resume.pdf">{copy.download}</Button>
                <Button href={`${base}/contact`} variant="secondary">{copy.contact}</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.outcomesTitle}</h2>
              <ul className="mt-3 grid gap-2 text-zinc-300 sm:grid-cols-2">
                {copy.outcomes.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.certsTitle}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {copy.certs.map((cert) => (
                  <Pill key={cert}>{cert}</Pill>
                ))}
              </div>
            </Card>

            <div>
              <h2 className="mb-4 text-xl font-semibold">{copy.architectureTitle}</h2>
              <div className="grid gap-4 lg:grid-cols-3">
                {copy.architectureGroups.map((group) => (
                  <Card key={group.title}>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                      {group.items.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">{copy.recentTitle}</h2>
              <div className="grid gap-4">
                {copy.recentRoles.map((role) => (
                  <RoleCard key={`${role.company}-${role.title}`} role={role} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">{copy.earlierTitle}</h2>
              <div className="grid gap-4">
                {copy.earlierRoles.map((role) => (
                  <RoleCard key={`${role.company}-${role.title}`} role={role} compact />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
