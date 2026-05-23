import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Skills",
  intro:
    "A capability map of the architecture, platform, networking, Kubernetes, automation, and reliability work I can own across enterprise cloud environments.",
  strengthsTitle: "Core strengths",
  strengths: [
    "Enterprise AWS Platforms",
    "Advanced AWS Networking",
    "Production EKS",
    "Terraform at Scale",
    "CI/CD Platform Engineering",
    "SRE / Reliability"
  ]
};

const capabilities = [
  {
    title: "AWS Platform Architecture",
    level: "Primary focus",
    desc:
      "Multi-account foundations, environment strategy, platform guardrails, shared services, regulated SaaS infrastructure, and enterprise cloud operating models.",
    items: ["Multi-account AWS", "AWS Organizations", "Cross-account IAM/STS", "API Gateway", "Lambda", "S3", "ACM", "Enterprise Infrastructure"]
  },
  {
    title: "Advanced Cloud Networking",
    level: "Primary focus",
    desc:
      "Private connectivity, DNS, cross-account routing, hybrid networking, and secure service exposure for AWS workloads.",
    items: ["PrivateLink", "VPC Endpoint Services", "Interface Endpoints", "Transit Gateway", "Direct Connect", "Route53 PHZ", "AWS IPAM", "Hybrid Cloud"]
  },
  {
    title: "Kubernetes Platform Engineering",
    level: "Production experience",
    desc:
      "Private EKS/GKE platforms, service mesh, ingress, cluster troubleshooting, deployment standards, and day-2 operations.",
    items: ["EKS", "GKE", "Helm", "Istio", "Rancher", "Ingress Controllers", "ALB/NLB", "Zero-downtime Deployments", "Private EKS"]
  },
  {
    title: "Terraform / IaC Architecture",
    level: "Primary focus",
    desc:
      "Reusable module design, environment composition, infrastructure automation, remote-state patterns, and consistent provisioning workflows.",
    items: ["Terraform", "Terraform Modules", "Infrastructure Automation", "CloudFormation", "Ansible", "Remote State", "Module Standards"]
  },
  {
    title: "CI/CD & DevSecOps",
    level: "Production experience",
    desc:
      "Delivery platforms, reusable pipeline templates, quality gates, security scanning, environment promotion, and developer onboarding.",
    items: ["GitLab CI/CD", "GitLab Runners on Kubernetes", "GitHub Actions", "AWS CodePipeline", "AWS CodeBuild", "Checkov", "SonarQube", "Quality Gates"]
  },
  {
    title: "Observability & Reliability",
    level: "Production experience",
    desc:
      "Monitoring, alert hygiene, incident response, root cause analysis, operational runbooks, and reliability improvements for distributed systems.",
    items: ["Datadog", "CloudWatch", "New Relic", "Dynatrace", "Centralized Logging", "Incident Response", "RCA", "Runbooks"]
  },
  {
    title: "Security & Compliance",
    level: "Hands-on",
    desc:
      "Pragmatic cloud security controls, IAM hardening, secrets management, WAF baselines, and compliance-aware infrastructure patterns.",
    items: ["AWS IAM", "AWS WAFv2", "SSM Parameter Store", "Secrets Manager", "Least Privilege", "Security Hardening", "Regulated Environments"]
  }
];

const supporting = ["RDS", "Aurora", "MongoDB", "Kafka", "AWS MSK", "SQS", "ECS", "Bash", "Python", "Technical Consulting", "Mentoring"];

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
                  {capability.items.slice(0, 6).map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-base font-semibold">Supporting experience</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {supporting.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
