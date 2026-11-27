import ResumeView, { ResumeCopy } from "@/components/views/ResumeView";

export const metadata = {
  title: "Currículo | Higor Monteiro",
  description:
    "Currículo de Senior DevOps e Platform Engineer com foco em arquitetura AWS, EKS, Terraform, GitLab CI/CD e networking cloud."
};

const copy: ResumeCopy = {
  title: "Currículo",
  summaryBody:
    "Senior DevOps e Platform Engineer com 15+ anos em infraestrutura, incluindo cerca de 7 anos em plataformas cloud, com foco em plataformas AWS multi-conta, networking híbrido, Kubernetes (Amazon EKS), Infrastructure as Code e Site Reliability Engineering. Atuação hands-on em arquitetura e produção para clientes SaaS dos EUA, incluindo um projeto para o governo americano, e anteriormente em banco digital regulado (16M+ usuários). Padronizei CI/CD levando times de 1 deploy por semana para 2–6 por dia.",
  download: "Baixar PDF",
  contact: "Contato",
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
  recentTitle: "Experiência Recente em Plataforma e Cloud",
  earlierTitle: "Liderança Anterior em Infraestrutura",
  recentRoles: [
    {
      title: "Senior DevOps Engineer",
      company: "BairesDev",
      period: "Mar 2023 - Presente",
      items: [
        "Desenhei networking AWS híbrido sobre Direct Connect e Transit Gateway, com uma VPC centralizada de endpoints PrivateLink e Route 53 Resolver para conectividade com parceiros.",
        "Construí ambientes AWS multi-conta com módulos Terraform reutilizáveis em dezenas de contas, habilitando provisionamento self-service.",
        "Liderei um time de engenheiros entregando infraestrutura cloud para um cliente do governo americano em ambiente regulado e de alta segurança.",
        "Padronizei GitLab CI/CD entre times de engenharia: de 1 deploy/semana para 2–6/dia (10–30x).",
        "Liderei a migração de monolito para microsserviços em Amazon EKS e ECS, e sou responsável pela produção com práticas de SRE: observabilidade, incident response e post-mortems."
      ]
    },
    {
      title: "DevOps Engineer",
      company: "BairesDev",
      period: "Feb 2022 - Mar 2023",
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
      items: [
        "Liderei um time técnico, responsável por gestão de incidentes e projetos de virtualização on-premises.",
        "Arquitetei e entreguei projetos de infraestrutura de rede para clientes corporativos."
      ]
    },
    {
      title: "Technical Lead",
      company: "Intranetworks",
      period: "Sep 2014 - Aug 2017",
      items: [
        "Promovido de Analista de TI a Technical Lead em menos de um ano; liderei o time e a gestão de incidentes.",
        "Desenhei e entreguei projetos de infraestrutura de data center, rede e virtualização."
      ]
    }
  ]
};

export default function ResumePage() {
  return <ResumeView lang="pt-br" copy={copy} />;
}
