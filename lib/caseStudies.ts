import { Lang } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  scope: string;
  focus: string[];
  impact: string[];
  tags: string[];
  context: string;
  built: string[];
  outcomes: string[];
  stack: string[];
  relatedLabs?: {
    label: string;
    href: string;
  }[];
  notes?: string[];
};

const caseStudiesByLang: Record<Lang, CaseStudy[]> = {
  en: [
    {
      slug: "aws-platform-networking-architecture",
      title: "Enterprise AWS Platform & Networking Architecture",
      subtitle:
        "Multi-account AWS foundations with private connectivity, secure service exposure, and reusable Terraform architecture.",
      role: "Cloud Infrastructure Architect / Senior Platform Engineer",
      scope: "Enterprise SaaS, regulated workloads, multi-account AWS",
      focus: ["Networking", "Platform Architecture", "Terraform", "Security"],
      impact: [
        "Standardized multi-account AWS foundations across environment boundaries.",
        "Enabled private cross-account service connectivity without public exposure.",
        "Reduced infrastructure drift through reusable Terraform platform modules."
      ],
      tags: ["AWS", "PrivateLink", "Transit Gateway", "Direct Connect", "Terraform"],
      context:
        "Enterprise SaaS teams needed secure, repeatable AWS foundations across many accounts, regulated workloads, and private connectivity requirements.",
      built: [
        "Multi-account AWS foundation separating environments from shared platform services, with cross-account IAM/STS access.",
        "Private service access with PrivateLink, VPC Endpoint Services, and Interface Endpoints — no public exposure.",
        "Hybrid and cross-account routing with Transit Gateway and Direct Connect, plus Route53 private DNS.",
        "Reusable Terraform modules for networking, EKS, MSK, ingress, WAF, and security foundations."
      ],
      outcomes: [
        "Consistent, auditable AWS environments across accounts.",
        "Private connectivity between services and accounts without exposing critical workloads.",
        "Less infrastructure drift through standardized Terraform modules."
      ],
      stack: ["AWS", "Terraform", "PrivateLink", "Transit Gateway", "Direct Connect", "Route53", "IAM", "WAFv2"],
      relatedLabs: [
        { label: "aws-tf-multi-acc", href: "https://github.com/hf-monteiro/aws-tf-multi-acc" },
        { label: "infra-modules", href: "https://github.com/hf-monteiro/infra-modules" }
      ]
    },
    {
      slug: "production-eks-platform-gitlab-istio",
      title: "Production EKS Platform with GitLab CI/CD and Istio",
      subtitle:
        "Private Kubernetes platform operations with service mesh, runners inside the cluster, and safe delivery workflows.",
      role: "Senior Platform Engineer / Kubernetes Platform Engineer",
      scope: "Production Kubernetes, private EKS, multi-team delivery platform",
      focus: ["Kubernetes", "GitLab CI/CD", "Istio", "Reliability"],
      impact: [
        "Improved developer delivery speed while keeping production access private.",
        "Standardized Kubernetes deployment, ingress, and observability patterns.",
        "Strengthened day-2 operations for production EKS workloads."
      ],
      tags: ["EKS", "Kubernetes", "Istio", "GitLab CI/CD", "Platform Engineering"],
      context:
        "Cloud-native workloads needed a reliable Kubernetes platform with private cluster access, standardized deployments, and CI/CD built for frequent releases.",
      built: [
        "Private EKS platform components for production: ingress, access, observability, and deployment automation.",
        "GitLab runners inside the cluster with IRSA, keeping deployment paths and AWS access private.",
        "Internal traffic management with Istio Gateways and EnvoyFilters, exposed through ALB/NLB, TLS, and private DNS.",
        "Zero-downtime deployment workflows and cluster troubleshooting runbooks."
      ],
      outcomes: [
        "Faster developer delivery with production access kept private.",
        "More predictable Kubernetes releases through standard deployment and observability patterns.",
        "Stronger day-2 operations for production EKS workloads."
      ],
      stack: ["EKS", "Kubernetes", "Helm", "Istio", "GitLab CI/CD", "ALB", "NLB", "CloudWatch", "Datadog"],
      relatedLabs: [
        { label: "aws-tf-simple-eks", href: "https://github.com/hf-monteiro/aws-tf-simple-eks" },
        { label: "infra-modules", href: "https://github.com/hf-monteiro/infra-modules" },
        { label: "cicd-examples", href: "https://github.com/hf-monteiro/cicd-examples" }
      ]
    },
    {
      slug: "gitlab-cicd-standardization-at-scale",
      title: "GitLab CI/CD Standardization at Scale",
      subtitle:
        "From fragmented pipelines to a standardized, scalable CI/CD platform.",
      role: "DevOps Lead / CI/CD Platform Engineer",
      scope: "Multiple engineering teams, reusable delivery platform",
      focus: ["CI/CD", "DevSecOps", "Governance", "Developer Experience"],
      impact: [
        "Increased deployment frequency from weekly releases to multiple deployments per day.",
        "Reduced copy/paste CI configuration and release inconsistency.",
        "Improved developer onboarding with clear delivery standards."
      ],
      tags: ["GitLab CI/CD", "DevSecOps", "Automation", "Governance"],
      context:
        "Teams maintained independent GitLab pipelines with inconsistent stages, rules, and quality controls, which slowed releases and increased risk.",
      built: [
        "Reusable GitLab CI templates for build, test, security scan, artifact, and deploy stages.",
        "Environment promotion with branch/tag rules and manual production gates.",
        "Security and quality checks (SAST, Checkov, SonarQube) built into every pipeline.",
        "Incremental migration path and onboarding docs so teams adopted it without breaking releases."
      ],
      outcomes: [
        "Deploy frequency from 1/week to 2–6/day (10–30x).",
        "Far less copy/paste pipeline configuration and release inconsistency.",
        "A clear CI/CD standard that simplified developer onboarding."
      ],
      stack: ["GitLab CI", "Docker", "Terraform", "Checkov", "SonarQube", "Kubernetes"],
      relatedLabs: [
        { label: "cicd-examples", href: "https://github.com/hf-monteiro/cicd-examples" },
        { label: "aws-scripts", href: "https://github.com/hf-monteiro/aws-scripts" }
      ]
    }
  ],
  "pt-br": [
    {
      slug: "aws-platform-networking-architecture",
      title: "Arquitetura de Plataforma AWS e Networking Corporativo",
      subtitle:
        "Fundações AWS multi-conta com conectividade privada, exposição segura de serviços e arquitetura Terraform reutilizável.",
      role: "Cloud Infrastructure Architect / Senior Platform Engineer",
      scope: "SaaS corporativo, workloads regulados, AWS multi-conta",
      focus: ["Networking", "Arquitetura de Plataforma", "Terraform", "Segurança"],
      impact: [
        "Padronizei fundações AWS multi-conta entre ambientes.",
        "Habilitei conectividade privada cross-account sem exposição pública.",
        "Reduzi drift de infraestrutura com módulos Terraform reutilizáveis."
      ],
      tags: ["AWS", "PrivateLink", "Transit Gateway", "Direct Connect", "Terraform"],
      context:
        "Times SaaS corporativos precisavam de fundações AWS seguras e repetíveis entre várias contas, workloads regulados e requisitos de conectividade privada.",
      built: [
        "Fundação AWS multi-conta separando ambientes de serviços compartilhados, com acesso IAM/STS cross-account.",
        "Acesso privado a serviços com PrivateLink, VPC Endpoint Services e Interface Endpoints — sem exposição pública.",
        "Roteamento híbrido e cross-account com Transit Gateway e Direct Connect, além de DNS privado no Route53.",
        "Módulos Terraform reutilizáveis para networking, EKS, MSK, ingress, WAF e fundações de segurança."
      ],
      outcomes: [
        "Ambientes AWS consistentes e auditáveis entre contas.",
        "Conectividade privada entre serviços e contas sem expor workloads críticos.",
        "Menos drift de infraestrutura com módulos Terraform padronizados."
      ],
      stack: ["AWS", "Terraform", "PrivateLink", "Transit Gateway", "Direct Connect", "Route53", "IAM", "WAFv2"],
      relatedLabs: [
        { label: "aws-tf-multi-acc", href: "https://github.com/hf-monteiro/aws-tf-multi-acc" },
        { label: "infra-modules", href: "https://github.com/hf-monteiro/infra-modules" }
      ]
    },
    {
      slug: "production-eks-platform-gitlab-istio",
      title: "Plataforma EKS em Produção com GitLab CI/CD e Istio",
      subtitle:
        "Operação de Kubernetes privado com service mesh, runners dentro do cluster e fluxos seguros de entrega.",
      role: "Senior Platform Engineer / Kubernetes Platform Engineer",
      scope: "Kubernetes em produção, EKS privado, plataforma de entrega multi-time",
      focus: ["Kubernetes", "GitLab CI/CD", "Istio", "Confiabilidade"],
      impact: [
        "Melhorei a velocidade de entrega mantendo acesso de produção privado.",
        "Padronizei deploy, ingress e observabilidade para Kubernetes.",
        "Fortaleci a operação day-2 de workloads EKS em produção."
      ],
      tags: ["EKS", "Kubernetes", "Istio", "GitLab CI/CD", "Engenharia de Plataforma"],
      context:
        "Workloads cloud-native precisavam de uma plataforma Kubernetes confiável, com acesso privado ao cluster, deploys padronizados e CI/CD para releases frequentes.",
      built: [
        "Componentes de plataforma EKS privada em produção: ingress, acesso, observabilidade e automação de deploy.",
        "GitLab runners dentro do cluster com IRSA, mantendo deploys e acesso à AWS privados.",
        "Tráfego interno com Istio Gateways e EnvoyFilters, exposto via ALB/NLB, TLS e DNS privado.",
        "Fluxos de deploy zero-downtime e runbooks de troubleshooting de cluster."
      ],
      outcomes: [
        "Entrega mais rápida para os desenvolvedores, com acesso de produção privado.",
        "Releases Kubernetes mais previsíveis com padrões de deploy e observabilidade.",
        "Operação day-2 mais sólida para workloads EKS em produção."
      ],
      stack: ["EKS", "Kubernetes", "Helm", "Istio", "GitLab CI/CD", "ALB", "NLB", "CloudWatch", "Datadog"],
      relatedLabs: [
        { label: "aws-tf-simple-eks", href: "https://github.com/hf-monteiro/aws-tf-simple-eks" },
        { label: "infra-modules", href: "https://github.com/hf-monteiro/infra-modules" },
        { label: "cicd-examples", href: "https://github.com/hf-monteiro/cicd-examples" }
      ]
    },
    {
      slug: "gitlab-cicd-standardization-at-scale",
      title: "Padronização de CI/CD no GitLab em Escala",
      subtitle:
        "De pipelines fragmentados para uma plataforma CI/CD padronizada e escalável.",
      role: "DevOps Lead / CI/CD Platform Engineer",
      scope: "Múltiplos times de engenharia, plataforma reutilizável de entrega",
      focus: ["CI/CD", "DevSecOps", "Governança", "Developer Experience"],
      impact: [
        "Aumentei a frequência de deploy de releases semanais para múltiplos deploys por dia.",
        "Reduzi copy/paste em CI e inconsistências de release.",
        "Melhorei onboarding de desenvolvedores com padrões claros de entrega."
      ],
      tags: ["GitLab CI/CD", "DevSecOps", "Automação", "Governança"],
      context:
        "Os times mantinham pipelines GitLab independentes, com estágios, regras e controles de qualidade inconsistentes, o que desacelerava releases e aumentava o risco.",
      built: [
        "Templates reutilizáveis de GitLab CI para build, teste, security scan, artefatos e deploy.",
        "Promoção de ambientes com regras por branch/tag e gates manuais em produção.",
        "Verificações de segurança e qualidade (SAST, Checkov, SonarQube) em todos os pipelines.",
        "Migração incremental e documentação de onboarding para adoção sem quebrar releases."
      ],
      outcomes: [
        "Frequência de deploy de 1/semana para 2–6/dia (10–30x).",
        "Muito menos configuração copiada entre pipelines e inconsistência de release.",
        "Um padrão claro de CI/CD que simplificou o onboarding de desenvolvedores."
      ],
      stack: ["GitLab CI", "Docker", "Terraform", "Checkov", "SonarQube", "Kubernetes"],
      relatedLabs: [
        { label: "cicd-examples", href: "https://github.com/hf-monteiro/cicd-examples" },
        { label: "aws-scripts", href: "https://github.com/hf-monteiro/aws-scripts" }
      ]
    }
  ]
};

export function getCaseStudies(lang: Lang) {
  return caseStudiesByLang[lang];
}

export function getCaseStudy(lang: Lang, slug: string) {
  return caseStudiesByLang[lang].find((c) => c.slug === slug);
}
