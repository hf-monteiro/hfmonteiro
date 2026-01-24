import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Skills",
  intro: "Uma visao pratica das ferramentas e padroes que uso para entregar plataformas confiaveis."
};

const groups = [
  { title: "Cloud (AWS)", items: ["VPC", "IAM", "EKS", "MSK", "RDS/Aurora", "PrivateLink", "Route 53", "CloudWatch"] },
  { title: "IaC", items: ["Terraform", "Design de modulos", "Padroes de state", "Ambientes", "Estrutura GitOps"] },
  { title: "CI/CD", items: ["GitLab CI", "Runners no Kubernetes", "Templates", "Rules/Approvals", "Artifacts/Reports"] },
  { title: "Observabilidade", items: ["Dynatrace", "Datadog", "Estrategia de alertas", "Fundamentos de tracing", "Runbooks"] },
  { title: "SRE / Ops", items: ["Resposta a incidentes", "Escalacao", "Postmortems", "Guardrails de confiabilidade"] }
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
