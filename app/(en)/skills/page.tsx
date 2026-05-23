import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Skills",
  intro: "A practical view of the architecture, platform, networking, Kubernetes, automation, and reliability skills I use to deliver enterprise cloud systems."
};

const groups = [
  { title: "Platform Engineering", items: ["Enterprise Infrastructure", "SaaS Platforms", "Regulated Environments", "Infrastructure Reliability", "DevSecOps", "GitOps"] },
  { title: "AWS Architecture", items: ["Multi-account AWS", "Cross-account IAM/STS", "AWS Organizations", "API Gateway", "Lambda", "S3", "ACM"] },
  { title: "Advanced AWS Networking", items: ["PrivateLink", "VPC Endpoint Services", "Interface Endpoints", "Transit Gateway", "Direct Connect", "AWS IPAM", "Hybrid Cloud", "Private EKS"] },
  { title: "DNS & Traffic Architecture", items: ["Route53", "Private Hosted Zones", "ALB", "NLB", "Ingress Controllers", "Nginx", "TLS termination"] },
  { title: "Kubernetes & Service Mesh", items: ["Production Kubernetes", "EKS", "GKE", "Helm", "Istio", "Rancher", "Cluster Troubleshooting", "Zero-downtime Deployments"] },
  { title: "DevOps & CI/CD", items: ["GitLab CI/CD", "GitLab Runners on Kubernetes", "AWS CodePipeline", "AWS CodeBuild", "GitHub Actions", "Quality Gates"] },
  { title: "IaC & Automation", items: ["Terraform", "Terraform Modules", "Ansible", "CloudFormation", "Infrastructure Automation"] },
  { title: "Monitoring & Observability", items: ["Datadog", "CloudWatch", "New Relic", "Dynatrace", "Centralized Logging", "Incident Response", "RCA"] },
  { title: "Security & Secrets", items: ["AWS IAM", "AWS WAFv2", "SSM Parameter Store", "Secrets Manager", "Least Privilege", "Security Hardening"] },
  { title: "Code Quality & Security", items: ["Checkov", "SonarQube", "CI/CD Security Scanning"] },
  { title: "Scripting & Languages", items: ["Bash", "Python"] },
  { title: "Databases", items: ["RDS", "Aurora (PostgreSQL/MySQL)", "MongoDB"] },
  { title: "Streaming & Messaging", items: ["Kafka", "AWS MSK", "Private Connectivity"] },
  { title: "Cloud Platforms", items: ["AWS", "GCP"] },
  { title: "Leadership", items: ["Technical Consulting", "Mentoring", "Platform Ownership", "Architecture Reviews"] }
];

export default function SkillsPage() {
  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{copy.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {groups.map((g) => (
              <Card key={g.title}>
                <h2 className="text-lg font-semibold">{g.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Pill key={i}>{i}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
