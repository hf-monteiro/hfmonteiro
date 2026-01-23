import Container from "@/components/Container";

type Solution = {
  title: string;
  problem: string;
  outcome: string;
  deliverables: string[];
  stack: string[];
};

const SOLUTIONS: Solution[] = [
  {
    title: "GitLab CI/CD Standardization (from chaos to repeatable releases)",
    problem:
      "Teams ship differently across projects, pipelines are inconsistent, and releases take too long to iterate safely.",
    outcome:
      "A standardized pipeline blueprint that improves delivery velocity and reduces operational risk.",
    deliverables: [
      "Reusable CI templates (includes), conventions, and pipeline rules",
      "Build/Test/Scan/Deploy stages with quality gates",
      "Secure variables/secrets strategy and environment promotion flow",
      "Docs + onboarding for developers",
    ],
    stack: ["GitLab CI/CD", "Docker", "SonarQube/Checkov", "Artifacts", "Environments"],
  },
  {
    title: "AWS Multi-Account Infrastructure with Terraform (secure foundations)",
    problem:
      "Scaling cloud environments across accounts becomes hard without consistent IaC patterns and guardrails.",
    outcome:
      "Reliable, auditable, and scalable Terraform modules with repeatable environments.",
    deliverables: [
      "Terraform module architecture and environment structure",
      "Networking baseline and account patterns",
      "CI-driven plan/apply workflows and remote state strategy",
      "Operational runbooks + handover",
    ],
    stack: ["AWS", "Terraform", "Ansible", "GitLab CI", "EKS/ECS"],
  },
  {
    title: "Kubernetes Platform Enablement (EKS/GKE) + Delivery Workflows",
    problem:
      "Clusters exist, but deployments, routing, and day-2 operations are painful and error-prone.",
    outcome:
      "A clean delivery path to Kubernetes with predictable deployments and safer operations.",
    deliverables: [
      "Deployment strategy (helm/kustomize), namespaces, RBAC baseline",
      "Ingress/TLS routing patterns and traffic policies",
      "CI/CD to Kubernetes with environment promotions",
      "Observability + operational runbooks",
    ],
    stack: ["Kubernetes", "EKS/GKE", "Nginx", "TLS", "GitLab CI"],
  },
  {
    title: "Observability & Reliability (reduce MTTR)",
    problem:
      "Incidents take too long to detect and diagnose; metrics/logs/traces are fragmented.",
    outcome:
      "Actionable monitoring + alerting that reduces noise and improves response speed.",
    deliverables: [
      "Service health checks, SLO-style monitoring approach",
      "Dashboards for golden signals + actionable alerts",
      "Alert routing/escalation recommendations",
      "Reliability playbooks (incident + RCA)",
    ],
    stack: ["Datadog", "CloudWatch", "New Relic/Dynatrace", "SLO/SLA mindset"],
  },
  {
    title: "Security Hardening for Public Services (practical controls)",
    problem:
      "Public endpoints are exposed without consistent controls, and secrets handling is risky.",
    outcome:
      "Pragmatic security controls aligned with delivery speed and real-world operations.",
    deliverables: [
      "WAF baseline rules and rollout approach",
      "IAM least-privilege recommendations",
      "Secrets strategy (SSM/Secrets Manager) + rotation guidance",
      "CI security scanning integration guidance",
    ],
    stack: ["AWS WAFv2", "IAM", "SSM/Secrets Manager", "Checkov", "CI/CD"],
  },
];

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function Card({ s }: { s: Solution }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-zinc-100">{s.title}</h3>

      <div className="mt-4 grid gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">Problem</p>
          <p className="mt-1 text-sm text-zinc-200">{s.problem}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">Outcome</p>
          <p className="mt-1 text-sm text-zinc-200">{s.outcome}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">Deliverables</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-200">
            {s.deliverables.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {s.stack.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main className="py-14">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-zinc-100">Solutions</h1>
          <p className="mt-3 text-zinc-300">
            Practical DevOps and Cloud solutions focused on delivery speed, reliability, and security —
            designed from real-world experience in AWS/GCP, Terraform, Kubernetes and GitLab CI/CD. :contentReference[oaicite:2]{index=2}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <Card key={s.title} s={s} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-8">
          <h2 className="text-xl font-semibold text-zinc-100">Want help with one of these?</h2>
          <p className="mt-2 text-zinc-300">
            Send a short description of your current setup and what you want to improve. I’ll respond with
            a suggested approach and next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:opacity-90 transition"
            >
              Contact me
            </a>
            <a
              href="/resume"
              className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/40 transition"
            >
              View resume
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}