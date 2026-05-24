type DiagramNode = {
  label: string;
  detail?: string;
};

const diagrams: Record<string, DiagramNode[]> = {
  "aws-platform-networking-architecture": [
    { label: "AWS Organizations", detail: "multi-account foundation" },
    { label: "Shared networking", detail: "TGW / Direct Connect" },
    { label: "Private services", detail: "PrivateLink / endpoints" },
    { label: "Internal DNS", detail: "Route53 PHZ" },
    { label: "Platform access", detail: "IAM / STS" }
  ],
  "production-eks-platform-gitlab-istio": [
    { label: "GitLab", detail: "pipelines and runners" },
    { label: "Private EKS", detail: "controlled cluster access" },
    { label: "Istio", detail: "service mesh routing" },
    { label: "Ingress", detail: "ALB / NLB / TLS" },
    { label: "Observability", detail: "Datadog / CloudWatch" }
  ],
  "gitlab-cicd-standardization-at-scale": [
    { label: "Source", detail: "merge / tag rules" },
    { label: "Build & test", detail: "reusable templates" },
    { label: "Scan", detail: "quality and security gates" },
    { label: "Promote", detail: "environment controls" },
    { label: "Deploy", detail: "safer release flow" }
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
              <p className="text-sm font-semibold text-zinc-100">{node.label}</p>
              {node.detail ? (
                <p className="mt-2 text-xs text-zinc-500">{node.detail}</p>
              ) : null}
            </div>
            {index < nodes.length - 1 ? (
              <div className="hidden md:block">
                <div className="absolute right-[-0.85rem] top-1/2 h-px w-4 bg-cyan-300/60" />
                <div className="absolute right-[-0.95rem] top-[calc(50%-0.2rem)] h-2 w-2 rotate-45 border-r border-t border-cyan-300/60" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
