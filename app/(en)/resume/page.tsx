import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

const copy = {
  title: "Resume",
  intro: "Quick overview + downloadable PDF.",
  summaryTitle: "Summary",
  summaryBody:
    "Senior DevOps / Platform Engineer with 10+ years of experience designing and operating cloud-native infrastructure and enterprise platform architectures in AWS. Specialized in Kubernetes (EKS), Terraform, GitLab CI/CD, AWS networking, PrivateLink, Direct Connect, multi-account architectures, and platform engineering for regulated SaaS environments. Proven experience building scalable, secure, highly available infrastructure supporting enterprise applications and distributed engineering teams.",
  download: "Download PDF",
  contact: "Contact",
  certsTitle: "Certifications",
  certs: [
    "AWS Certified Advanced Networking – Specialty",
    "AWS Certified DevOps Engineer – Professional",
    "AWS Certified Developer – Associate",
    "AWS Certified SysOps Administrator – Associate",
    "AWS Certified Cloud Practitioner",
    "GCP Professional Cloud Architect",
    "GCP Professional Cloud Developer",
    "Certified SAFe 6 – Practitioner",
    "GitLab Certified Associate"
  ],
  architectureTitle: "Selected Architecture Experience",
  architecture: [
    "Multi-account AWS SaaS platform architectures",
    "AWS PrivateLink and VPC Endpoint Service architectures",
    "Hybrid connectivity using AWS Direct Connect and Transit Gateway",
    "Private Kubernetes/EKS environments with controlled cluster access",
    "Cross-account IAM and STS federation patterns",
    "Enterprise DNS architectures with Route53 Private Hosted Zones",
    "Istio service mesh implementations and internal traffic routing",
    "GitLab CI/CD platform engineering and GitLab runners on Kubernetes",
    "Highly available ingress architectures using ALB/NLB",
    "Terraform module standardization at scale",
    "AWS WAF, DevSecOps controls, and security hardening",
    "MSK/Kafka networking and private connectivity",
    "Centralized observability, monitoring, incident response, and reliability improvements"
  ],
  rolesTitle: "Experience Focus",
  roles: [
    {
      title: "BairesDev - DevOps / Platform Engineering",
      items: [
        "Designed and implemented multi-account AWS platform architectures for enterprise SaaS environments using Terraform and Infrastructure as Code best practices.",
        "Architected secure cross-account networking with AWS PrivateLink, Transit Gateway, Direct Connect, Route53 Private Hosted Zones, Interface Endpoints, and VPC Endpoint Services.",
        "Built and maintained production EKS platforms with GitLab CI/CD, Helm, Istio, private ingress, observability, and automated deployment pipelines.",
        "Developed reusable Terraform modules for networking, EKS, MSK, ingress architectures, WAF, Route53, cloud security controls, and platform foundations.",
        "Optimized CI/CD pipelines across engineering teams, increasing deployment frequency from weekly releases to multiple deployments per day.",
        "Performed production incident response, root cause analysis, platform troubleshooting, and reliability improvements across distributed AWS systems."
      ]
    },
    {
      title: "Banco Inter - Cloud Reliability and DevOps",
      items: [
        "Supported large-scale AWS environments serving 16M+ users with high availability, security, and regulated financial requirements.",
        "Managed mission-critical cloud services including EKS, ECS, API Gateway, MSK, Lambda, RDS/Aurora, IAM, WAFv2, S3, ALB/NLB, and ACM.",
        "Improved observability, incident response, CI/CD pipelines, and operational maturity for distributed production systems."
      ]
    }
  ]
};

export default function ResumePage() {
  const base = "";

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{copy.intro}</p>

          <div className="mt-8 grid gap-4">
            <Card>
              <h2 className="text-lg font-semibold">{copy.summaryTitle}</h2>
              <p className="mt-2 text-zinc-300">{copy.summaryBody}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary">{copy.download}</Button>
                <Button href={`${base}/contact`} variant="secondary">{copy.contact}</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.certsTitle}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {copy.certs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.architectureTitle}</h2>
              <ul className="mt-3 grid gap-2 text-zinc-300 sm:grid-cols-2">
                {copy.architecture.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {copy.roles.map((role) => (
              <Card key={role.title}>
                <h2 className="text-lg font-semibold">{role.title}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                  {role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
