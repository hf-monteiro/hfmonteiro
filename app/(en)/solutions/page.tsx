import Container from "@/components/Container";

type Solution = {
  title: string;
  problem: string;
  outcome: string;
  deliverables: string[];
  stack: string[];
};

const solutions: Solution[] = [
  {
    title: "Enterprise AWS Platform Architecture",
    problem:
      "Cloud environments grow across accounts, teams, and products without consistent foundations, guardrails, ownership, or repeatable infrastructure patterns.",
    outcome:
      "A secure, scalable, multi-account AWS platform with reusable Terraform modules and clear operating standards.",
    deliverables: [
      "Multi-account AWS architecture and environment strategy",
      "Terraform module architecture for networking, EKS, Route53, WAF, and shared services",
      "Cross-account IAM/STS access patterns and security guardrails",
      "Platform documentation, handover, and onboarding model"
    ],
    stack: ["AWS", "Terraform", "IAM/STS", "Organizations", "WAFv2", "Route53"]
  },
  {
    title: "Advanced AWS Networking & Private Connectivity",
    problem:
      "Enterprise systems need private service access, hybrid connectivity, and cross-account routing without exposing critical workloads publicly.",
    outcome:
      "A resilient private networking architecture using AWS-native connectivity, DNS, and endpoint patterns.",
    deliverables: [
      "PrivateLink, Interface Endpoint, and VPC Endpoint Service designs",
      "Transit Gateway, Direct Connect, routing, and hybrid connectivity patterns",
      "Route53 Private Hosted Zone architecture and private DNS strategy",
      "Private EKS, MSK/Kafka, ALB/NLB, and internal service connectivity"
    ],
    stack: ["PrivateLink", "TGW", "Direct Connect", "Route53 PHZ", "ALB/NLB", "AWS IPAM"]
  },
  {
    title: "Production Kubernetes Platform Enablement",
    problem:
      "Clusters exist, but private access, deployments, traffic management, observability, and day-2 operations are painful and error-prone.",
    outcome:
      "A production-ready Kubernetes platform with predictable deployments, secure access, and stronger operational reliability.",
    deliverables: [
      "EKS/GKE platform standards, Helm deployment model, namespaces, and RBAC baseline",
      "Istio service mesh, ingress, TLS, EnvoyFilter, ALB/NLB, and internal routing patterns",
      "GitLab runners on Kubernetes and CI/CD promotion workflows",
      "Cluster troubleshooting, observability, and operational runbooks"
    ],
    stack: ["Kubernetes", "EKS/GKE", "Helm", "Istio", "GitLab CI", "Datadog"]
  },
  {
    title: "GitLab CI/CD Platform Engineering",
    problem:
      "Teams ship differently across projects, pipelines are inconsistent, and releases take too long to iterate safely.",
    outcome:
      "A standardized delivery platform that increases deployment frequency while reducing operational risk.",
    deliverables: [
      "Reusable CI templates, conventions, includes, and pipeline rules",
      "Build/Test/Scan/Deploy stages with quality gates",
      "Secure variables, secrets strategy, artifacts, and environment promotion flow",
      "Developer onboarding and platform documentation"
    ],
    stack: ["GitLab CI/CD", "Docker", "SonarQube", "Checkov", "Artifacts", "Environments"]
  },
  {
    title: "Reliability, Observability & Security Hardening",
    problem:
      "Incidents take too long to detect and diagnose, alerts are noisy, and public/private service controls are inconsistent.",
    outcome:
      "Actionable monitoring, faster incident response, stronger service controls, and pragmatic security guardrails.",
    deliverables: [
      "Service health checks, SLO-style monitoring approach, dashboards, and actionable alerts",
      "Incident response, RCA, escalation paths, and reliability playbooks",
      "IAM least-privilege recommendations",
      "WAF baseline rules, secrets strategy, and CI security scanning guidance"
    ],
    stack: ["Datadog", "CloudWatch", "New Relic/Dynatrace", "AWS WAFv2", "IAM", "Secrets Manager"]
  }
];

const copy = {
  title: "Solutions",
  intro:
    "Senior DevOps, Platform Engineering, and Cloud Architecture solutions focused on enterprise AWS platforms, advanced networking, production Kubernetes, delivery velocity, reliability, and security.",
  problem: "Problem",
  outcome: "Outcome",
  deliverables: "Includes",
  ctaTitle: "Need help with enterprise AWS platform work?",
  ctaBody:
    "Send a short description of your current setup and what you want to improve. I will respond with a suggested approach and next steps.",
  ctaContact: "Contact me",
  ctaResume: "View resume"
};

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function Card({ s }: { s: Solution }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-zinc-100">{s.title}</h3>

      <div className="mt-4 grid gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">{copy.outcome}</p>
          <p className="mt-1 text-sm text-zinc-200">{s.outcome}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">{copy.deliverables}</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-200">
            {s.deliverables.slice(0, 2).map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {s.stack.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  const base = "";

  return (
    <main className="py-14">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-zinc-100">{copy.title}</h1>
          <p className="mt-3 text-zinc-300">{copy.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {solutions.map((s) => (
            <Card key={s.title} s={s} />
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-zinc-800 bg-zinc-950/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-100">{copy.ctaTitle}</h2>
          <p className="mt-2 text-zinc-300">{copy.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${base}/contact`}
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:opacity-90"
            >
              {copy.ctaContact}
            </a>
            <a
              href={`${base}/resume`}
              className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/40"
            >
              {copy.ctaResume}
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
