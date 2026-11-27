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
    "Senior DevOps e Platform Engineer com 15+ anos em infraestrutura, incluindo cerca de 7 anos em plataformas cloud, com foco em plataformas AWS multi-conta, networking híbrido, Kubernetes (Amazon EKS), Infrastructure as Code e Site Reliability Engineering. Atuação hands-on em arquitetura e produção para clientes SaaS dos EUA, incluindo um projeto para o governo americano, e anteriormente em banco digital regulado (16M+ usuários). Padronizei CI/CD levando times de 1 deploy por semana para 2–6 por dia.",
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
    "Padronizei GitLab CI/CD entre times de engenharia: de 1 deploy/semana para 2–6/dia (10–30x).",
    "Liderei a entrega de infraestrutura para um cliente do governo americano em ambiente regulado e de alta segurança.",
    "Operei AWS em produção atendendo 16M+ usuários em banco digital regulado."
  ],
  certsTitle: "Certificações",
  certs: [
    "AWS Certified Advanced Networking – Specialty (2025–2028)",
    "AWS Certified DevOps Engineer – Professional (2024–2027)",
    "AWS Certified Developer – Associate (2023–2027)",
    "AWS Certified Cloud Practitioner (2020–2027)",
    "GCP Professional Cloud Developer (2025–2027)",
    "GCP Professional Cloud Architect (2024–2026)",
    "GitLab Certified Associate (2021)"
  ],
  educationTitle: "Formação",
  education: [
    { degree: "Mestrado em Big Data e Data Intelligence", school: "INSA Barcelona", period: "2019 - 2020" },
    { degree: "Bacharelado em Infraestrutura e Redes de Computadores", school: "Senac RS", period: "2013 - 2017" }
  ],
  languagesTitle: "Idiomas",
  languages: ["Inglês: Fluente", "Português: Nativo", "Espanhol: Avançado"],
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
        "Nginx reverse proxy, terminação TLS e roteamento de tráfego HTTP/S",
        "Arquiteturas de ingress altamente disponíveis com ALB/NLB",
        "Padronização de módulos Terraform em escala"
      ]
    },
    {
      title: "Confiabilidade e Segurança",
      items: [
        "AWS WAFv2, Checkov e SonarQube como gates de segurança no CI/CD",
        "Networking MSK/Kafka e conectividade privada",
        "Observabilidade centralizada com Datadog, CloudWatch, New Relic e Dynatrace",
        "Incident response em produção e root cause analysis",
        "Melhorias de confiabilidade para sistemas AWS distribuídos"
      ]
    }
  ],
  recentTitle: "Experiência Recente em Plataforma e Cloud",
  earlierTitle: "Liderança Anterior em Infraestrutura",
  recentRoles: [
    {
      title: "Senior DevOps Engineer",
      company: "BairesDev",
      period: "Mar 2023 - Presente",
      tags: ["AWS", "Direct Connect", "PrivateLink", "Terraform", "EKS", "GitLab CI/CD", "SRE"],
      items: [
        "Desenhei networking AWS híbrido sobre Direct Connect (DX Gateway, Transit Gateway) com uma VPC centralizada de endpoints PrivateLink, Route 53 Resolver e encaminhamento DNS condicional para conectividade com parceiros.",
        "Construí ambientes AWS multi-conta com módulos Terraform reutilizáveis em dezenas de contas, habilitando provisionamento self-service.",
        "Liderei um time de engenheiros entregando infraestrutura cloud para um cliente do governo americano em ambiente regulado e de alta segurança.",
        "Padronizei GitLab CI/CD entre times de engenharia: de 1 deploy/semana para 2–6/dia (10–30x).",
        "Liderei a migração de monolito para microsserviços em Amazon EKS e ECS.",
        "Reforcei a segurança de serviços públicos com AWS WAFv2 e IAM de menor privilégio.",
        "Responsável pelo ciclo de vida em produção com práticas de SRE: observabilidade com Datadog/CloudWatch, incident response, RCA e post-mortems.",
        "Uso Claude Code diariamente para criação e refatoração de módulos Terraform, design de arquitetura AWS, desenvolvimento de pipelines GitLab CI/CD e troubleshooting em produção."
      ]
    },
    {
      title: "DevOps Engineer",
      company: "BairesDev",
      period: "Feb 2022 - Mar 2023",
      tags: ["EKS", "Argo CD", "GitOps", "Terraform", "Ansible", "RDS/Aurora"],
      items: [
        "Implementei deploys GitOps no Amazon EKS com Argo CD e módulos Terraform reutilizáveis.",
        "Liderei um time DevOps para um cliente americano de alta segurança (mai–jul 2022), padronizando provisionamento com Terraform e Ansible em Windows e Linux.",
        "Construí pipelines GitLab CI e AWS CodePipeline automatizando build, teste e deploy.",
        "Operei clusters RDS e Aurora (PostgreSQL/MySQL) altamente disponíveis com failover automático Multi-AZ."
      ]
    },
    {
      title: "SRE Analyst",
      company: "Banco Inter",
      period: "Sep 2021 - Feb 2022",
      tags: ["AWS", "Financial Services", "EKS", "ECS", "MSK", "Confiabilidade", "16M+ usuários"],
      items: [
        "Operei AWS em produção para um dos maiores bancos digitais do Brasil (16M+ usuários), cobrindo VPC, EKS, ECS, API Gateway, RDS, Lambda e MSK.",
        "Construí pipelines GitLab com análise de qualidade de código e segurança integradas para um SDLC regulado.",
        "Implementei monitoramento, logging e alertas que reduziram o trabalho manual do plantão."
      ]
    },
    {
      title: "Cloud Architect",
      company: "KXC Tecnologia",
      period: "Jun 2020 - Sep 2021",
      tags: ["AWS", "Terraform", "CodePipeline", "CodeDeploy", "Cloud Migration"],
      items: [
        "Arquitetei soluções AWS com Terraform e ferramentas AWS de CI/CD (CodePipeline, CodeDeploy) para clientes corporativos.",
        "Automatizei deploys com AWS CodePipeline, GitHub e GitLab, substituindo releases manuais.",
        "Liderei migrações em larga escala de workloads legados para a AWS."
      ]
    }
  ],
  earlierRoles: [
    {
      title: "Technical Lead",
      company: "Gtek Soluções Tecnológicas",
      period: "Sep 2017 - Jun 2019",
      tags: ["Liderança", "Networking", "Virtualização", "Gestão de Incidentes"],
      items: [
        "Liderei um time técnico, responsável por gestão de incidentes e projetos de virtualização on-premises.",
        "Arquitetei e entreguei projetos de infraestrutura de rede para clientes corporativos."
      ]
    },
    {
      title: "Technical Lead",
      company: "Intranetworks",
      period: "Sep 2014 - Aug 2017",
      tags: ["Liderança", "Data Center", "Networking", "Virtualização"],
      items: [
        "Promovido de Analista de TI a Technical Lead em menos de um ano; liderei o time e a gestão de incidentes.",
        "Desenhei e entreguei projetos de infraestrutura de data center, rede e virtualização."
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
              <div className="mt-3 flex flex-wrap gap-2">
                {copy.certs.map((cert) => (
                  <Pill key={cert}>{cert}</Pill>
                ))}
              </div>
            </Card>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <Card>
                  <h2 className="text-lg font-semibold">{copy.educationTitle}</h2>
                  <ul className="mt-3 space-y-3">
                    {copy.education.map((item) => (
                      <li key={item.degree}>
                        <p className="text-zinc-200">{item.degree}</p>
                        <p className="text-sm text-zinc-400">{item.school} · {item.period}</p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              <Card>
                <h2 className="text-lg font-semibold">{copy.languagesTitle}</h2>
                <ul className="mt-3 space-y-2 text-zinc-300">
                  {copy.languages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>

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
