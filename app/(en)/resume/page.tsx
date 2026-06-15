import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

export const metadata = {
  title: "Resume | Higor Monteiro",
  description:
    "Senior DevOps and Platform Engineering resume focused on AWS architecture, EKS, Terraform, GitLab CI/CD, and cloud networking.",
  openGraph: {
    title: "Resume | Higor Monteiro",
    description:
      "Senior DevOps and Platform Engineering resume: AWS architecture, EKS, Terraform, GitLab CI/CD, cloud networking.",
    url: "https://hfmonteiro.dev/resume",
    siteName: "hfmonteiro.dev",
    type: "website"
  }
};

const copy = {
  title: "Resume",
  intro: "Senior platform, cloud architecture, and infrastructure reliability overview.",
  summaryTitle: "Summary",
  summaryBody:
    "Senior DevOps Engineer with 15+ years of experience designing, building, and operating production systems. Specialized in AWS, Kubernetes, Infrastructure as Code, and CI/CD automation, with extensive experience supporting large-scale distributed environments for US-based clients. Proven track record designing multi-account AWS environments, improving deployment reliability, automating infrastructure delivery, and leading production incident response.",
  download: "Download PDF",
  contact: "Contact",
  positioning: [
    "Senior Platform Engineer",
    "Cloud Infrastructure Architect",
    "AWS Networking Specialist",
    "Kubernetes Platform Engineer",
    "DevOps Lead"
  ],
  outcomesTitle: "Key Outcomes",
  outcomes: [
    "Designed multi-account AWS platform architectures for enterprise SaaS environments.",
    "Built private connectivity patterns with PrivateLink, Transit Gateway, Direct Connect, and Route53 PHZ.",
    "Operated production EKS platforms with GitLab CI/CD, Helm, Istio, and private ingress patterns.",
    "Reduced release cycle time by 800%, enabling 2–6 daily deployments across engineering teams.",
    "Supported large-scale AWS environments serving 16M+ users in regulated financial systems.",
    "Improved platform reliability through observability, incident response, RCA, and operational runbooks."
  ],
  certsTitle: "Certifications",
  certs: [
    "AWS Certified Advanced Networking – Specialty (2025–2028)",
    "AWS Certified DevOps Engineer – Professional (2024–2027)",
    "AWS Certified Developer – Associate (2023–2027)",
    "AWS Certified SysOps Administrator – Associate (2021–2024)",
    "AWS Certified Cloud Practitioner (2020–2027)",
    "GCP Professional Cloud Architect (2024–2026)",
    "GCP Professional Cloud Developer (2025–2027)",
    "Certified SAFe 6 – Practitioner (2024–2025)",
    "GitLab Certified Associate (2021)"
  ],
  architectureTitle: "Selected Architecture Experience",
  architectureGroups: [
    {
      title: "AWS Platform & Networking",
      items: [
        "Multi-account AWS SaaS platform architectures",
        "AWS PrivateLink and VPC Endpoint Service architectures",
        "Hybrid connectivity using AWS Direct Connect and Transit Gateway",
        "Cross-account IAM and STS federation patterns",
        "Enterprise DNS architectures with Route53 Private Hosted Zones"
      ]
    },
    {
      title: "Kubernetes & Delivery",
      items: [
        "Private Kubernetes/EKS environments with controlled cluster access",
        "Istio service mesh implementations and internal traffic routing",
        "GitLab CI/CD platform engineering and GitLab runners on Kubernetes",
        "Nginx reverse proxy, TLS termination, and HTTP/S traffic routing",
        "Highly available ingress architectures using ALB/NLB",
        "Terraform module standardization at scale"
      ]
    },
    {
      title: "Reliability & Security",
      items: [
        "AWS WAFv2, Checkov, SonarQube integration in CI/CD security gates",
        "MSK/Kafka networking and private connectivity",
        "Centralized observability with Datadog, CloudWatch, New Relic, and Dynatrace",
        "Production incident response and root cause analysis",
        "Reliability improvements for distributed AWS systems"
      ]
    }
  ],
  recentTitle: "Recent Platform & Cloud Experience",
  earlierTitle: "Earlier Infrastructure Leadership",
  recentRoles: [
    {
      title: "DevOps / Platform Engineering",
      company: "BairesDev",
      period: "Feb 2022 - Present",
      tags: ["AWS", "Terraform", "EKS", "PrivateLink", "Istio", "GitLab CI/CD", "Regulated SaaS"],
      items: [
        "Designed and implemented multi-account AWS platform architectures for enterprise SaaS environments using Terraform and Infrastructure as Code best practices.",
        "Architected secure cross-account networking with AWS PrivateLink, Transit Gateway, Direct Connect, Route53 Private Hosted Zones, Interface Endpoints, and VPC Endpoint Services.",
        "Built and maintained production EKS platforms with GitLab CI/CD, Helm, Istio, private ingress, observability, and automated deployment pipelines.",
        "Led monolith-to-microservices migration, improving scalability and high availability across distributed services.",
        "Developed reusable Terraform modules for networking, EKS, MSK, ingress architectures, WAF, Route53, cloud security controls, and platform foundations.",
        "Reduced release cycle time by 800% across engineering teams, enabling 2–6 daily deployments.",
        "Supported RDS and Aurora (PostgreSQL/MySQL) environments with high availability, automated failover, and performance tuning.",
        "Performed production incident response, root cause analysis, platform troubleshooting, and reliability improvements across distributed AWS systems."
      ]
    },
    {
      title: "Cloud Reliability and DevOps",
      company: "Banco Inter",
      period: "Sep 2021 - Feb 2022",
      tags: ["AWS", "Financial Services", "EKS", "ECS", "MSK", "Reliability", "16M+ users"],
      items: [
        "Supported large-scale AWS environments serving 16M+ users with high availability, security, and regulated financial requirements.",
        "Managed mission-critical cloud services including EKS, ECS, API Gateway, MSK, Lambda, RDS/Aurora, IAM, WAFv2, S3, ALB/NLB, and ACM.",
        "Created GitLab pipelines with integrated code quality and security scanning (SAST, dependency scanning, secret detection).",
        "Improved observability, incident response, and operational maturity for distributed production systems."
      ]
    },
    {
      title: "Cloud Architect",
      company: "KXC Tecnologia",
      period: "Jun 2020 - Sep 2021",
      tags: ["AWS", "Terraform", "CodePipeline", "CodeDeploy", "Cloud Migration"],
      items: [
        "Architected AWS solutions using Terraform and AWS CI/CD services including CodePipeline and CodeDeploy.",
        "Automated deployment workflows with AWS CodePipeline, GitHub, and GitLab, reducing release cycles and improving delivery consistency.",
        "Executed large-scale cloud migration projects and optimized enterprise workloads for reliability, scalability, and operational efficiency."
      ]
    }
  ],
  earlierRoles: [
    {
      title: "Tech Lead",
      company: "Gtek Solucoes Tecnologicas",
      period: "Sep 2017 - Jun 2019",
      tags: ["Leadership", "Networking", "Virtualization", "Consulting"],
      items: [
        "Led a technical team responsible for incident management, infrastructure operations, and on-premises virtualization projects.",
        "Architected and executed network infrastructure projects for enterprise customers.",
        "Provided IT consulting services and oversaw team operations, delivery planning, and technical execution."
      ]
    },
    {
      title: "Tech Lead",
      company: "Intranetworks",
      period: "Sep 2014 - Aug 2017",
      tags: ["Leadership", "Data Center", "Networking", "Virtualization"],
      items: [
        "Directed team operations and incident management while delivering on-premises virtualization projects.",
        "Architected and managed network infrastructure projects across customer environments.",
        "Designed and implemented data center infrastructure projects, including networking and virtualization foundations.",
        "Provided IT consulting and service support while managing network infrastructure operations."
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
                <Button href="/contact" variant="secondary">{copy.contact}</Button>
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
