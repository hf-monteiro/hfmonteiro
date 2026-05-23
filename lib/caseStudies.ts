import { Lang } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  context: string;
  whatIDid: string[];
  outcomes: string[];
  stack: string[];
  notes?: string[];
};

const caseStudiesByLang: Record<Lang, CaseStudy[]> = {
  en: [
    {
      slug: "aws-platform-networking-architecture",
      title: "Enterprise AWS Platform & Networking Architecture",
      subtitle:
        "Multi-account AWS foundations with private connectivity, secure service exposure, and reusable Terraform architecture.",
      tags: ["AWS", "PrivateLink", "Transit Gateway", "Direct Connect", "Terraform"],
      context:
        "Enterprise SaaS environments needed secure, scalable, and repeatable cloud foundations across multiple AWS accounts, regulated workloads, private connectivity requirements, and distributed engineering teams.",
      whatIDid: [
        "Designed multi-account AWS platform patterns using Terraform and Infrastructure as Code best practices.",
        "Architected cross-account networking with AWS PrivateLink, VPC Endpoint Services, Interface Endpoints, Transit Gateway, Direct Connect, and Route53 Private Hosted Zones.",
        "Implemented private service access patterns using cross-account IAM role assumption, STS, private DNS routing, ALB/NLB integrations, and security controls.",
        "Developed reusable Terraform modules for networking, EKS, MSK, ingress, WAF, Route53, endpoint services, and cloud security foundations."
      ],
      outcomes: [
        "Improved consistency and auditability across enterprise AWS environments.",
        "Enabled private, secure connectivity between services and accounts without exposing critical workloads publicly.",
        "Reduced infrastructure drift through standardized Terraform modules and repeatable platform patterns."
      ],
      stack: ["AWS", "Terraform", "PrivateLink", "Transit Gateway", "Direct Connect", "Route53", "IAM", "WAFv2"]
    },
    {
      slug: "production-eks-platform-gitlab-istio",
      title: "Production EKS Platform with GitLab CI/CD and Istio",
      subtitle:
        "Private Kubernetes platform operations with service mesh, runners inside the cluster, and safe delivery workflows.",
      tags: ["EKS", "Kubernetes", "Istio", "GitLab CI/CD", "Platform Engineering"],
      context:
        "Cloud-native workloads needed a reliable Kubernetes platform with private cluster access, standardized deployments, internal traffic routing, and CI/CD workflows that could support frequent releases.",
      whatIDid: [
        "Built and maintained EKS platform components for production workloads, including ingress, private access, observability, and deployment automation.",
        "Implemented GitLab runners running inside Kubernetes environments with secure AWS access patterns.",
        "Designed internal service communication with Istio Gateways, EnvoyFilters, ALB/NLB integrations, TLS, and private DNS strategies.",
        "Supported zero-downtime deployment workflows, cluster troubleshooting, and platform reliability improvements."
      ],
      outcomes: [
        "Improved developer delivery speed while keeping production access private and controlled.",
        "Increased confidence in Kubernetes releases through standardized deployment and observability patterns.",
        "Strengthened day-2 operations for production EKS workloads."
      ],
      stack: ["EKS", "Kubernetes", "Helm", "Istio", "GitLab CI/CD", "ALB", "NLB", "CloudWatch", "Datadog"]
    },
    {
      slug: "gitlab-cicd-standardization-at-scale",
      title: "GitLab CI/CD Standardization at Scale",
      subtitle:
        "From fragmented pipelines to a standardized, scalable CI/CD platform.",
      tags: ["GitLab CI/CD", "DevSecOps", "Automation", "Governance"],
      context:
        "Multiple development teams were maintaining independent GitLab pipelines with inconsistent stages, naming conventions, deployment rules, and quality controls. This slowed releases and increased operational risk.",
      whatIDid: [
        "Designed a standardized GitLab CI/CD pipeline model with reusable templates, secure variables strategy, environment promotion, and quality gates.",
        "Integrated build, test, security scanning, artifact handling, and deployment stages across multiple repositories.",
        "Implemented safer deployment workflows with manual production gates and environment-specific rules.",
        "Worked with engineering teams to onboard repositories incrementally without disrupting delivery."
      ],
      outcomes: [
        "Increased deployment frequency from weekly releases to multiple deployments per day.",
        "Reduced pipeline maintenance effort, copy/paste configuration, and release inconsistency.",
        "Improved developer experience with a clear CI/CD platform standard."
      ],
      stack: ["GitLab CI", "Docker", "Terraform", "Checkov", "SonarQube", "Kubernetes"]
    }
  ],
  "pt-br": [
    {
      slug: "aws-platform-networking-architecture",
      title: "Arquitetura de Plataforma AWS e Networking Corporativo",
      subtitle:
        "Fundacoes AWS multi-conta com conectividade privada, exposicao segura de servicos e arquitetura Terraform reutilizavel.",
      tags: ["AWS", "PrivateLink", "Transit Gateway", "Direct Connect", "Terraform"],
      context:
        "Ambientes SaaS corporativos precisavam de fundacoes cloud seguras, escalaveis e repetiveis entre multiplas contas AWS, workloads regulados, conectividade privada e times de engenharia distribuidos.",
      whatIDid: [
        "Desenhei padroes de plataforma AWS multi-conta usando Terraform e boas praticas de Infrastructure as Code.",
        "Arquiteturei networking cross-account com AWS PrivateLink, VPC Endpoint Services, Interface Endpoints, Transit Gateway, Direct Connect e Route53 Private Hosted Zones.",
        "Implementei padroes de acesso privado a servicos usando IAM/STS cross-account, DNS privado, ALB/NLB e controles de seguranca.",
        "Desenvolvi modulos Terraform reutilizaveis para networking, EKS, MSK, ingress, WAF, Route53, endpoint services e fundacoes de seguranca cloud."
      ],
      outcomes: [
        "Melhorei consistencia e auditabilidade entre ambientes AWS corporativos.",
        "Habilitei conectividade privada e segura entre servicos e contas sem expor workloads criticos publicamente.",
        "Reduzi drift de infraestrutura com modulos Terraform padronizados e padroes de plataforma repetiveis."
      ],
      stack: ["AWS", "Terraform", "PrivateLink", "Transit Gateway", "Direct Connect", "Route53", "IAM", "WAFv2"]
    },
    {
      slug: "production-eks-platform-gitlab-istio",
      title: "Plataforma EKS em Producao com GitLab CI/CD e Istio",
      subtitle:
        "Operacao de Kubernetes privado com service mesh, runners dentro do cluster e fluxos seguros de entrega.",
      tags: ["EKS", "Kubernetes", "Istio", "GitLab CI/CD", "Engenharia de Plataforma"],
      context:
        "Workloads cloud-native precisavam de uma plataforma Kubernetes confiavel com acesso privado ao cluster, deploys padronizados, roteamento interno e CI/CD para releases frequentes.",
      whatIDid: [
        "Construi e mantive componentes de plataforma EKS para workloads em producao, incluindo ingress, acesso privado, observabilidade e automacao de deploy.",
        "Implementei GitLab runners dentro de ambientes Kubernetes com padroes seguros de acesso a AWS.",
        "Desenhei comunicacao interna entre servicos com Istio Gateways, EnvoyFilters, ALB/NLB, TLS e estrategias de DNS privado.",
        "Apoiei deploys zero-downtime, troubleshooting de clusters e melhorias de confiabilidade da plataforma."
      ],
      outcomes: [
        "Melhorei a velocidade de entrega dos desenvolvedores mantendo acesso de producao privado e controlado.",
        "Aumentei a confianca em releases Kubernetes com padroes de deploy e observabilidade.",
        "Fortaleci operacao day-2 para workloads EKS em producao."
      ],
      stack: ["EKS", "Kubernetes", "Helm", "Istio", "GitLab CI/CD", "ALB", "NLB", "CloudWatch", "Datadog"]
    },
    {
      slug: "gitlab-cicd-standardization-at-scale",
      title: "Padronizacao de CI/CD no GitLab em escala",
      subtitle:
        "De pipelines fragmentados para uma plataforma CI/CD padronizada e escalavel.",
      tags: ["GitLab CI/CD", "DevSecOps", "Automacao", "Governanca"],
      context:
        "Varios times mantinham pipelines independentes no GitLab com estagios, convencoes, regras de deploy e controles de qualidade inconsistentes. Isso desacelerava releases e aumentava risco operacional.",
      whatIDid: [
        "Desenhei um modelo padronizado de GitLab CI/CD com templates reutilizaveis, estrategia segura de variaveis, promocao de ambientes e quality gates.",
        "Integrei etapas de build, teste, security scanning, artefatos e deploy entre multiplos repositorios.",
        "Implementei fluxos de deploy mais seguros com gates manuais em producao e regras por ambiente.",
        "Trabalhei com times de engenharia para migrar repositorios de forma incremental sem interromper a entrega."
      ],
      outcomes: [
        "Aumentei a frequencia de deploy de releases semanais para multiplos deploys por dia.",
        "Reduzi esforco de manutencao, copy/paste de configuracao e inconsistencias de release.",
        "Melhorei a experiencia de desenvolvimento com um padrao claro de plataforma CI/CD."
      ],
      stack: ["GitLab CI", "Docker", "Terraform", "Checkov", "SonarQube", "Kubernetes"]
    }
  ]
};

export function getCaseStudies(lang: Lang) {
  return caseStudiesByLang[lang];
}

export function getCaseStudy(lang: Lang, slug: string) {
  return caseStudiesByLang[lang].find((c) => c.slug === slug);
}
