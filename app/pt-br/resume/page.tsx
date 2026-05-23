import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

const copy = {
  title: "Curriculo",
  intro: "Resumo senior de plataforma, arquitetura cloud e confiabilidade de infraestrutura.",
  summaryTitle: "Resumo",
  summaryBody:
    "Senior DevOps / Platform Engineer com 10+ anos de experiencia desenhando e operando infraestrutura cloud-native e arquiteturas de plataforma corporativas em AWS. Especializado em Kubernetes (EKS), Terraform, GitLab CI/CD, AWS networking, PrivateLink, Direct Connect, arquiteturas multi-conta e engenharia de plataforma para ambientes SaaS regulados.",
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
    "Construí padroes de conectividade privada com PrivateLink, Transit Gateway, Direct Connect e Route53 PHZ.",
    "Operei plataformas EKS em producao com GitLab CI/CD, Helm, Istio e ingress privado.",
    "Padronizei workflows GitLab CI/CD, aumentando releases de semanais para multiplos deploys por dia.",
    "Apoiei ambientes AWS de grande escala atendendo 16M+ usuarios em sistemas financeiros regulados.",
    "Melhorei confiabilidade de plataforma com observabilidade, incident response, RCA e runbooks."
  ],
  certsTitle: "Certificacoes",
  certs: [
    "AWS Certified Advanced Networking - Specialty",
    "AWS Certified DevOps Engineer - Professional",
    "AWS Certified Developer - Associate",
    "AWS Certified SysOps Administrator - Associate",
    "AWS Certified Cloud Practitioner",
    "GCP Professional Cloud Architect",
    "GCP Professional Cloud Developer",
    "Certified SAFe 6 - Practitioner",
    "GitLab Certified Associate"
  ],
  architectureTitle: "Experiencia Selecionada em Arquitetura",
  architectureGroups: [
    {
      title: "Plataforma AWS e Networking",
      items: [
        "Arquiteturas SaaS AWS multi-conta",
        "AWS PrivateLink e VPC Endpoint Services",
        "Conectividade hibrida com AWS Direct Connect e Transit Gateway",
        "Padroes de IAM cross-account e federacao STS",
        "Arquiteturas de DNS corporativo com Route53 Private Hosted Zones"
      ]
    },
    {
      title: "Kubernetes e Entrega",
      items: [
        "Ambientes Kubernetes/EKS privados com acesso controlado",
        "Implementacoes de Istio service mesh e roteamento interno",
        "Platform engineering com GitLab CI/CD e GitLab runners em Kubernetes",
        "Arquiteturas de ingress altamente disponiveis com ALB/NLB",
        "Padronizacao de modulos Terraform em escala"
      ]
    },
    {
      title: "Confiabilidade e Seguranca",
      items: [
        "AWS WAF, DevSecOps e hardening de seguranca",
        "Networking MSK/Kafka e conectividade privada",
        "Plataformas centralizadas de observabilidade e monitoramento",
        "Incident response em producao e root cause analysis",
        "Melhorias de confiabilidade para sistemas AWS distribuidos"
      ]
    }
  ],
  recentTitle: "Experiencia Recente em Plataforma e Cloud",
  earlierTitle: "Lideranca Anterior em Infraestrutura",
  recentRoles: [
    {
      title: "DevOps / Platform Engineering",
      company: "BairesDev",
      period: "Feb 2022 - Presente",
      tags: ["AWS", "Terraform", "EKS", "PrivateLink", "Istio", "GitLab CI/CD", "SaaS regulado"],
      items: [
        "Desenhei e implementei arquiteturas de plataforma AWS multi-conta para ambientes SaaS corporativos usando Terraform e boas praticas de Infrastructure as Code.",
        "Arquiteturei networking seguro cross-account com AWS PrivateLink, Transit Gateway, Direct Connect, Route53 Private Hosted Zones, Interface Endpoints e VPC Endpoint Services.",
        "Construi e mantive plataformas EKS em producao com GitLab CI/CD, Helm, Istio, ingress privado, observabilidade e pipelines automatizados.",
        "Desenvolvi modulos Terraform reutilizaveis para networking, EKS, MSK, ingress, WAF, Route53, controles de seguranca cloud e fundacoes de plataforma.",
        "Otimizei pipelines CI/CD entre times de engenharia, aumentando a frequencia de deploy de releases semanais para multiplos deploys por dia.",
        "Atuei em incident response, root cause analysis, troubleshooting de plataforma e melhorias de confiabilidade em sistemas AWS distribuidos."
      ]
    },
    {
      title: "Cloud Reliability e DevOps",
      company: "Banco Inter",
      period: "Sep 2021 - Feb 2022",
      tags: ["AWS", "Financial Services", "EKS", "ECS", "MSK", "Confiabilidade", "16M+ usuarios"],
      items: [
        "Apoiei ambientes AWS de grande escala atendendo 16M+ usuarios com requisitos de alta disponibilidade, seguranca e regulacao financeira.",
        "Gerenciei servicos cloud mission-critical incluindo EKS, ECS, API Gateway, MSK, Lambda, RDS/Aurora, IAM, WAFv2, S3, ALB/NLB e ACM.",
        "Melhorei observabilidade, incident response, pipelines CI/CD e maturidade operacional para sistemas distribuidos em producao."
      ]
    },
    {
      title: "Cloud Architect",
      company: "KXC Tecnologia",
      period: "Jun 2020 - Sep 2021",
      tags: ["AWS", "Terraform", "CodePipeline", "CodeDeploy", "Cloud Migration"],
      items: [
        "Arquiteturei solucoes AWS usando Terraform e servicos AWS de CI/CD, incluindo CodePipeline e CodeDeploy.",
        "Automatizei workflows de deploy com AWS CodePipeline, GitHub e GitLab, reduzindo ciclos de release e melhorando a consistencia de entrega.",
        "Executei projetos de migracao cloud em larga escala e otimizei workloads corporativos para confiabilidade, escalabilidade e eficiencia operacional."
      ]
    }
  ],
  earlierRoles: [
    {
      title: "Tech Lead",
      company: "Gtek Solucoes Tecnologicas",
      period: "Sep 2017 - Jun 2019",
      tags: ["Lideranca", "Networking", "Virtualizacao", "Consultoria"],
      items: [
        "Liderei um time tecnico responsavel por gestao de incidentes, operacao de infraestrutura e projetos de virtualizacao on-premises.",
        "Arquiteturei e executei projetos de infraestrutura de rede para clientes corporativos.",
        "Prestei consultoria de TI e conduzi operacoes de equipe, planejamento de entregas e execucao tecnica."
      ]
    },
    {
      title: "Tech Lead",
      company: "Intranetworks",
      period: "Sep 2014 - Aug 2017",
      tags: ["Lideranca", "Data Center", "Networking", "Virtualizacao"],
      items: [
        "Direcionei operacoes de equipe e gestao de incidentes enquanto entregava projetos de virtualizacao on-premises.",
        "Arquiteturei e gerenciei projetos de infraestrutura de rede em ambientes de clientes.",
        "Desenhei e implementei projetos de infraestrutura de data center, incluindo fundacoes de networking e virtualizacao.",
        "Prestei consultoria de TI e suporte a servicos enquanto gerenciava operacoes de infraestrutura de rede."
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
        {role.items.map((item) => (
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

          <div className="mt-8 grid gap-4">
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
                <Button href="/resume.pdf" variant="primary">{copy.download}</Button>
                <Button href={`${base}/contact`} variant="secondary">{copy.contact}</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.outcomesTitle}</h2>
              <ul className="mt-3 grid gap-2 text-zinc-300 sm:grid-cols-2">
                {copy.outcomes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.certsTitle}</h2>
              <ul className="mt-3 grid gap-2 text-zinc-300 sm:grid-cols-2">
                {copy.certs.map((cert) => (
                  <li key={cert} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div>
              <h2 className="mb-4 text-xl font-semibold">{copy.architectureTitle}</h2>
              <div className="grid gap-4 lg:grid-cols-3">
                {copy.architectureGroups.map((group) => (
                  <Card key={group.title}>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                      {group.items.map((item) => (
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
