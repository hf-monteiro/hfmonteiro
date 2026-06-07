type DiagramNode = {
  label: string;
  detail?: string;
};

const diagrams: Record<string, DiagramNode[]> = {
  "aws-platform-networking-architecture": [
    { label: "AWS Organizations", detail: "management + member accounts, SCPs, cross-account IAM / STS" },
    { label: "Transit Gateway", detail: "spoke VPC attachments, route tables, RAM sharing, Direct Connect integration" },
    { label: "PrivateLink + Endpoints", detail: "VPC Endpoint Services, interface endpoints, NLB-backed producers" },
    { label: "Route53 PHZ", detail: "private DNS zones, resolver rules, cross-account DNS association" },
    { label: "Platform modules", detail: "reusable Terraform for VPC, EKS, WAF, MSK, endpoint services" }
  ],
  "production-eks-platform-gitlab-istio": [
    { label: "GitLab CI/CD", detail: "runners inside EKS, secure AWS access via IRSA, environment promotion" },
    { label: "Private EKS cluster", detail: "private API endpoint, Karpenter node provisioning, OIDC + IRSA" },
    { label: "Istio service mesh", detail: "Gateways, VirtualServices, EnvoyFilters, mTLS between services" },
    { label: "Ingress + TLS", detail: "ALB/NLB integration, ACM certificates, private DNS, Route53 routing" },
    { label: "Observability", detail: "Datadog APM + infra, CloudWatch logs, alerts, incident response" }
  ],
  "gitlab-cicd-standardization-at-scale": [
    { label: "Source control", detail: "branch + tag strategy, merge request rules, protected environments" },
    { label: "Build + test", detail: "shared CI templates, Docker-in-Docker, unit tests, artifact caching" },
    { label: "Security gates", detail: "SAST, dependency scan, secret detection, Checkov, SonarQube" },
    { label: "Artifact + version", detail: "image tagging, registry push, semantic versioning, changelog" },
    { label: "Deploy + promote", detail: "dev → QA → stage → prod, manual gates, rollback strategy" }
  ]
};

export default function ArchitectureDiagram({ slug }: { slug: string }) {
  const nodes = diagrams[slug];
  if (!nodes) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="grid gap-3 md:grid-cols-5">
        {nodes.map((node, index) => (
          <div key={node.label} className="relative">
            <div className="min-h-24 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
              <p className="mb-1 text-xs font-medium text-zinc-600">{index + 1}</p>
              <p className="text-sm font-semibold text-zinc-100">{node.label}</p>
              {node.detail ? (
                <p className="mt-2 text-xs text-zinc-500">{node.detail}</p>
              ) : null}
            </div>
            {index < nodes.length - 1 ? (
              <>
                <div className="hidden md:block">
                  <div className="absolute right-[-0.85rem] top-1/2 h-px w-4 bg-zinc-500/60" />
                  <div className="absolute right-[-0.95rem] top-[calc(50%-0.2rem)] h-2 w-2 rotate-45 border-r border-t border-zinc-500/60" />
                </div>
                <div className="flex justify-center py-2 md:hidden">
                  <div className="h-5 w-px bg-zinc-600" />
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
