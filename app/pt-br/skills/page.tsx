import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Skills",
  intro: "Uma visao pratica das habilidades de arquitetura, plataforma, networking, Kubernetes, automacao e confiabilidade que uso para entregar sistemas cloud corporativos."
};

const groups = [
  { title: "Platform Engineering", items: ["Enterprise Infrastructure", "SaaS Platforms", "Ambientes Regulados", "Infrastructure Reliability", "DevSecOps", "GitOps"] },
  { title: "Arquitetura AWS", items: ["AWS multi-conta", "IAM/STS cross-account", "AWS Organizations", "API Gateway", "Lambda", "S3", "ACM"] },
  { title: "Networking AWS Avancado", items: ["PrivateLink", "VPC Endpoint Services", "Interface Endpoints", "Transit Gateway", "Direct Connect", "AWS IPAM", "Hybrid Cloud", "Private EKS"] },
  { title: "DNS e Trafego", items: ["Route53", "Private Hosted Zones", "ALB", "NLB", "Ingress Controllers", "Nginx", "Terminacao TLS"] },
  { title: "Kubernetes e Service Mesh", items: ["Production Kubernetes", "EKS", "GKE", "Helm", "Istio", "Rancher", "Troubleshooting de Cluster", "Zero-downtime Deployments"] },
  { title: "DevOps e CI/CD", items: ["GitLab CI/CD", "GitLab Runners em Kubernetes", "AWS CodePipeline", "AWS CodeBuild", "GitHub Actions", "Quality Gates"] },
  { title: "IaC e Automacao", items: ["Terraform", "Modulos Terraform", "Ansible", "CloudFormation", "Infrastructure Automation"] },
  { title: "Monitoramento e Observabilidade", items: ["Datadog", "CloudWatch", "New Relic", "Dynatrace", "Logs Centralizados", "Incident Response", "RCA"] },
  { title: "Seguranca e Segredos", items: ["AWS IAM", "AWS WAFv2", "SSM Parameter Store", "Secrets Manager", "Least Privilege", "Security Hardening"] },
  { title: "Qualidade e Seguranca de Codigo", items: ["Checkov", "SonarQube", "Security Scanning em CI/CD"] },
  { title: "Scripting e Linguagens", items: ["Bash", "Python"] },
  { title: "Bancos de Dados", items: ["RDS", "Aurora (PostgreSQL/MySQL)", "MongoDB"] },
  { title: "Streaming e Mensageria", items: ["Kafka", "AWS MSK", "Conectividade Privada"] },
  { title: "Plataformas Cloud", items: ["AWS", "GCP"] },
  { title: "Lideranca", items: ["Consultoria Tecnica", "Mentoria", "Platform Ownership", "Architecture Reviews"] }
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
