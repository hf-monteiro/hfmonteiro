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
    slug: "gitlab-cicd-standardization-at-scale",
    title: "GitLab CI/CD Standardization at Scale",
    subtitle:
      "From fragmented pipelines to a standardized, scalable CI/CD platform.",
    tags: ["GitLab CI/CD", "DevOps", "Automation", "Governance"],
    context:
      "Multiple development teams were maintaining independent GitLab pipelines with inconsistent stages, naming conventions, and deployment rules. This led to slow delivery, fragile releases, and high operational overhead for DevOps support.",
    whatIDid: [
      "Designed a standardized GitLab CI/CD pipeline model with clear stages, naming conventions, and reusable patterns.",
      "Created shared pipeline templates to eliminate copy/paste across repositories.",
      "Implemented safer deployment workflows with manual production gates and environment-specific rules.",
      "Worked closely with development teams to onboard repositories incrementally without breaking existing delivery."
    ],
    outcomes: [
      "Reduced release cycle time by ~800%, moving from weekly releases to multiple releases per day.",
      "Significantly decreased pipeline maintenance effort and configuration drift.",
      "Improved developer experience by providing a clear, documented CI/CD standard."
    ],
    stack: ["GitLab CI", "Docker", "Terraform", "Kubernetes"]
  },
  {
    slug: "aws-multi-account-platform-terraform",
    title: "AWS Multi-Account Platform with Terraform",
    subtitle:
      "Reusable infrastructure patterns for consistent environments at scale.",
    tags: ["AWS", "Terraform", "Platform Engineering", "IaC"],
    context:
      "The organization required a reliable way to provision and manage multiple AWS environments while enforcing security, networking, and operational standards across accounts.",
    whatIDid: [
      "Designed modular Terraform architecture for networking, compute, and shared services.",
      "Implemented environment separation (DEV, INT, STG, PROD) using consistent patterns.",
      "Applied least-privilege IAM practices and standardized networking components.",
      "Enabled repeatable infrastructure provisioning with minimal manual intervention."
    ],
    outcomes: [
      "Faster and more predictable environment provisioning.",
      "Reduced configuration drift through Infrastructure as Code.",
      "Improved security posture and operational consistency across AWS accounts."
    ],
    stack: ["AWS", "Terraform", "VPC", "IAM", "EKS"]
  },
  {
    slug: "observability-alerting-noise-reduction",
    title: "Observability & Alerting Noise Reduction",
    subtitle:
      "Improving signal-to-noise ratio and operational response.",
    tags: ["Observability", "SRE", "Monitoring", "Alerting"],
    context:
      "Teams were experiencing alert fatigue due to excessive and poorly classified alerts, impacting on-call effectiveness and incident response quality.",
    whatIDid: [
      "Reviewed existing monitors and alerts to identify duplication and low-value signals.",
      "Defined severity levels aligned with real business and operational impact.",
      "Implemented clearer escalation paths and on-call expectations.",
      "Documented operational playbooks to standardize incident response."
    ],
    outcomes: [
      "Significant reduction in alert noise and false positives.",
      "Faster incident triage and improved on-call experience.",
      "More consistent communication during incidents."
    ],
    stack: ["Datadog", "CloudWatch", "Dynatrace", "Runbooks"]
  }
];

export function getCaseStudies() {
  return caseStudies;
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
