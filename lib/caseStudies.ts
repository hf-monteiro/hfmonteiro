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

export const caseStudies: CaseStudy[] = [
  {
    slug: "eks-platform-multiaccount",
    title: "EKS Platform on AWS (Multi-account)",
    subtitle: "Terraform modules + standardized networking patterns for scalable delivery.",
    tags: ["AWS", "EKS", "Terraform", "Networking"],
    context:
      "Multiple environments and teams needed a consistent, repeatable platform to deploy microservices safely across AWS accounts.",
    whatIDid: [
      "Designed modular Terraform structure for VPC, EKS, endpoints, and shared services.",
      "Defined environment patterns (DEV/INT/STG/PROD) and reusable CI/CD workflows.",
      "Established guardrails (least privilege IAM, controlled ingress, standardized observability hooks)."
    ],
    outcomes: [
      "Faster environment provisioning and consistent infrastructure across accounts.",
      "Reduced manual steps and configuration drift via IaC standards.",
      "Improved operational reliability through consistent monitoring/alerting patterns."
    ],
    stack: ["EKS", "VPC", "PrivateLink", "Terraform", "GitLab CI/CD"]
  },
  {
    slug: "gitlab-cicd-standardization",
    title: "GitLab CI/CD Standardization at Scale",
    subtitle: "From copy/paste pipelines to reusable patterns and safer deploy workflows.",
    tags: ["GitLab", "CI/CD", "DevOps", "Governance"],
    context:
      "Teams maintained many repositories with inconsistent pipeline conventions, causing frequent breakage and slow updates.",
    whatIDid: [
      "Created a standard pipeline structure with clear stages and rules for MR/default branch.",
      "Introduced reusable templates/patterns to reduce duplication across repos.",
      "Implemented safer deploy conventions (manual prod, controlled applies, clear job naming)."
    ],
    outcomes: [
      "Less pipeline drift and fewer “special snowflake” repos.",
      "Easier rollout of improvements across multiple services.",
      "Reduced DevOps bottleneck by giving teams a clear standard."
    ],
    stack: ["GitLab CI", "Docker", "Terraform", "Runners"]
  },
  {
    slug: "observability-noise-reduction",
    title: "Observability: Reducing Noise Without Missing Incidents",
    subtitle: "Alert hygiene, severity model, and operational playbooks.",
    tags: ["SRE", "Observability", "Dynatrace", "Datadog"],
    context:
      "Alert fatigue was impacting response quality. The goal was higher signal-to-noise and clearer escalation paths.",
    whatIDid: [
      "Defined severity levels and escalation rules aligned with real operational impact.",
      "Reviewed monitors/alerts to eliminate duplicates and tune thresholds.",
      "Created playbooks and documentation to standardize incident response."
    ],
    outcomes: [
      "Lower alert noise and improved on-call experience.",
      "Faster triage and more consistent response.",
      "Better stakeholder communication through consistent severity definitions."
    ],
    stack: ["Dynatrace", "Datadog", "Runbooks"]
  }
];

export function getCaseStudies() {
  return caseStudies;
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
