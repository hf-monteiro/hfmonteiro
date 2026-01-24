import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Skills",
  intro: "A practical view of the tools and patterns I use to deliver reliable platforms."
};

const groups = [
  { title: "DevOps & CI/CD", items: ["GitLab CI/CD", "AWS CodePipeline", "AWS CodeBuild", "GitHub Actions"] },
  { title: "IaC & Automation", items: ["Terraform", "Ansible", "CloudFormation"] },
  { title: "Cloud Platforms", items: ["AWS", "GCP"] },
  { title: "Containers & Orchestration", items: ["Kubernetes (EKS, GKE)", "Amazon ECS", "Docker"] },
  { title: "Traffic Management", items: ["Nginx", "HTTP/S routing", "Proxying", "TLS termination"] },
  { title: "Monitoring & Observability", items: ["Datadog", "CloudWatch", "New Relic", "Dynatrace"] },
  { title: "Security & Secrets", items: ["AWS IAM", "AWS WAFv2", "SSM Parameter Store", "Secrets Manager"] },
  { title: "Code Quality & Security", items: ["Checkov", "SonarQube (CI/CD integration)"] },
  { title: "Scripting & Languages", items: ["Bash", "Python"] },
  { title: "Databases", items: ["RDS", "Aurora (PostgreSQL/MySQL)", "MongoDB"] },
  { title: "Streaming & Messaging", items: ["Kafka", "AWS MSK"] },
  { title: "Networking & Systems", items: ["Networking protocols", "Systems administration"] },
  { title: "Methodologies", items: ["Agile", "DevOps", "ITIL", "SDLC"] },
  { title: "Leadership", items: ["Team management", "Mentoring", "Technical consulting"] }
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
