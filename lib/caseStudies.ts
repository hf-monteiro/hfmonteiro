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
  architecture: string[];
  whatIDid: string[];
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
        "Enterprise SaaS environments needed secure, scalable, and repeatable cloud foundations across multiple AWS accounts, regulated workloads, private connectivity requirements, and distributed engineering teams.",
      architecture: [
        "Designed a multi-account AWS foundation with clear separation between environments and shared platform services.",
        "Used PrivateLink, Interface Endpoints, and VPC Endpoint Services for private producer/consumer service access.",
        "Applied Transit Gateway and Direct Connect patterns for cross-account and hybrid connectivity.",
        "Built Route53 Private Hosted Zone patterns for internal DNS and private service discovery.",
        "Used cross-account IAM role assumption and STS patterns for controlled platform access."
      ],
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
      stack: ["AWS", "Terraform", "PrivateLink", "Transit Gateway", "Direct Connect", "Route53", "IAM", "WAFv2"],
      relatedLabs: [
        { label: "tf-multi-acc", href: "https://github.com/hf-monteiro/tf-multi-acc" },
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
        "Cloud-native workloads needed a reliable Kubernetes platform with private cluster access, standardized deployments, internal traffic routing, and CI/CD workflows that could support frequent releases.",
      architecture: [
        "Operated private EKS platform components for production workloads and internal delivery workflows.",
        "Ran GitLab runners inside Kubernetes to support private deployment paths and controlled AWS access.",
        "Used Istio Gateways and EnvoyFilters for internal traffic management and service communication.",
        "Integrated ALB/NLB, TLS, ingress, and private DNS patterns for service exposure.",
        "Established observability and troubleshooting patterns for cluster and workload reliability."
      ],
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
      stack: ["EKS", "Kubernetes", "Helm", "Istio", "GitLab CI/CD", "ALB", "NLB", "CloudWatch", "Datadog"],
      relatedLabs: [
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
        "Multiple development teams were maintaining independent GitLab pipelines with inconsistent stages, naming conventions, deployment rules, and quality controls. This slowed releases and increased operational risk.",
      architecture: [
        "Created reusable GitLab CI templates for build, test, scan, artifact, and deploy stages.",
        "Defined environment promotion patterns with safer production gates and branch/tag rules.",
        "Integrated security and quality checks into standard delivery workflows.",
        "Designed incremental migration paths so teams could adopt the platform without breaking releases.",
        "Documented conventions, variables strategy, and onboarding paths for development teams."
      ],
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
        "Fundacoes AWS multi-conta com conectividade privada, exposicao segura de servicos e arquitetura Terraform reutilizavel.",
      role: "Cloud Infrastructure Architect / Senior Platform Engineer",
      scope: "SaaS corporativo, workloads regulados, AWS multi-conta",
      focus: ["Networking", "Arquitetura de Plataforma", "Terraform", "Seguranca"],
      impact: [
        "Padronizei fundacoes AWS multi-conta entre ambientes.",
        "Habilitei conectividade privada cross-account sem exposicao publica.",
        "Reduzi drift de infraestrutura com modulos Terraform reutilizaveis."
      ],
      tags: ["AWS", "PrivateLink", "Transit Gateway", "Direct Connect", "Terraform"],
      context:
        "Ambientes SaaS corporativos precisavam de fundacoes cloud seguras, escalaveis e repetiveis entre multiplas contas AWS, workloads regulados, conectividade privada e times de engenharia distribuidos.",
      architecture: [
        "Desenhei uma fundacao AWS multi-conta com separacao clara entre ambientes e servicos compartilhados de plataforma.",
        "Usei PrivateLink, Interface Endpoints e VPC Endpoint Services para acesso privado entre produtores e consumidores de servicos.",
        "Apliquei padroes com Transit Gateway e Direct Connect para conectividade cross-account e hibrida.",
        "Construi padroes de Route53 Private Hosted Zones para DNS interno e descoberta privada de servicos.",
        "Usei IAM/STS cross-account para acesso controlado de plataforma."
      ],
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
      stack: ["AWS", "Terraform", "PrivateLink", "Transit Gateway", "Direct Connect", "Route53", "IAM", "WAFv2"],
      relatedLabs: [
        { label: "tf-multi-acc", href: "https://github.com/hf-monteiro/tf-multi-acc" },
        { label: "infra-modules", href: "https://github.com/hf-monteiro/infra-modules" }
      ]
    },
    {
      slug: "production-eks-platform-gitlab-istio",
      title: "Plataforma EKS em Producao com GitLab CI/CD e Istio",
      subtitle:
        "Operacao de Kubernetes privado com service mesh, runners dentro do cluster e fluxos seguros de entrega.",
      role: "Senior Platform Engineer / Kubernetes Platform Engineer",
      scope: "Kubernetes em producao, EKS privado, plataforma de entrega multi-time",
      focus: ["Kubernetes", "GitLab CI/CD", "Istio", "Confiabilidade"],
      impact: [
        "Melhorei a velocidade de entrega mantendo acesso de producao privado.",
        "Padronizei deploy, ingress e observabilidade para Kubernetes.",
        "Fortaleci a operacao day-2 de workloads EKS em producao."
      ],
      tags: ["EKS", "Kubernetes", "Istio", "GitLab CI/CD", "Engenharia de Plataforma"],
      context:
        "Workloads cloud-native precisavam de uma plataforma Kubernetes confiavel com acesso privado ao cluster, deploys padronizados, roteamento interno e CI/CD para releases frequentes.",
      architecture: [
        "Operei componentes de plataforma EKS privada para workloads de producao e fluxos internos de entrega.",
        "Executei GitLab runners dentro do Kubernetes para suportar deploys privados e acesso AWS controlado.",
        "Usei Istio Gateways e EnvoyFilters para gerenciamento de trafego interno e comunicacao entre servicos.",
        "Integrei ALB/NLB, TLS, ingress e DNS privado para exposicao de servicos.",
        "Estabeleci padroes de observabilidade e troubleshooting para confiabilidade de cluster e workloads."
      ],
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
      stack: ["EKS", "Kubernetes", "Helm", "Istio", "GitLab CI/CD", "ALB", "NLB", "CloudWatch", "Datadog"],
      relatedLabs: [
        { label: "infra-modules", href: "https://github.com/hf-monteiro/infra-modules" },
        { label: "cicd-examples", href: "https://github.com/hf-monteiro/cicd-examples" }
      ]
    },
    {
      slug: "gitlab-cicd-standardization-at-scale",
      title: "Padronizacao de CI/CD no GitLab em escala",
      subtitle:
        "De pipelines fragmentados para uma plataforma CI/CD padronizada e escalavel.",
      role: "DevOps Lead / CI/CD Platform Engineer",
      scope: "Multiplos times de engenharia, plataforma reutilizavel de entrega",
      focus: ["CI/CD", "DevSecOps", "Governanca", "Developer Experience"],
      impact: [
        "Aumentei a frequencia de deploy de releases semanais para multiplos deploys por dia.",
        "Reduzi copy/paste em CI e inconsistencias de release.",
        "Melhorei onboarding de desenvolvedores com padroes claros de entrega."
      ],
      tags: ["GitLab CI/CD", "DevSecOps", "Automacao", "Governanca"],
      context:
        "Varios times mantinham pipelines independentes no GitLab com estagios, convencoes, regras de deploy e controles de qualidade inconsistentes. Isso desacelerava releases e aumentava risco operacional.",
      architecture: [
        "Criei templates reutilizaveis de GitLab CI para build, teste, scan, artefatos e deploy.",
        "Defini padroes de promocao de ambientes com gates de producao e regras por branch/tag.",
        "Integrei verificacoes de seguranca e qualidade aos workflows padrao de entrega.",
        "Desenhei caminhos incrementais de migracao para os times adotarem a plataforma sem quebrar releases.",
        "Documentei convencoes, estrategia de variaveis e onboarding para os times de desenvolvimento."
      ],
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
