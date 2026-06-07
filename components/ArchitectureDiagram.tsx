import MermaidChart from "@/components/MermaidChart";

const diagrams: Record<string, string> = {
  "aws-platform-networking-architecture": `
flowchart TD
    subgraph MGMT["Management Account"]
        ORG["AWS Organizations\\nSCPs · Account Factory"]
    end

    subgraph SEC["Security Account"]
        IAM["IAM Users + Groups\\nCrossAccountRole"]
        CT["CloudTrail\\nCentralized Audit Logs"]
    end

    subgraph SHARED["Shared Account"]
        TGW["Transit Gateway\\nRoute Tables · RAM Sharing"]
        DC["Direct Connect\\nHybrid Connectivity"]
    end

    subgraph WORKLOAD["Workload Accounts (Dev · Stage · Prod)"]
        VPC["VPC\\nPublic + Private Subnets"]
        PL["PrivateLink\\nVPC Endpoint Services"]
        EP["Interface Endpoints\\nSecrets Manager · ECR · S3"]
        PHZ["Route53 PHZ\\nPrivate DNS + Resolver Rules"]
    end

    ORG --> SEC
    ORG --> SHARED
    ORG --> WORKLOAD
    IAM -- "cross-account assume-role" --> WORKLOAD
    TGW -- "VPC attachment" --> VPC
    DC --> TGW
    VPC --> PL
    VPC --> EP
    VPC --> PHZ
`,

  "production-eks-platform-gitlab-istio": `
flowchart LR
    DEV["Developer\\nMerge Request"] --> GL["GitLab CI/CD\\nPipeline Triggers"]
    GL --> RUNNERS["GitLab Runners\\ninside EKS · IRSA"]
    RUNNERS --> ECR["ECR\\nContainer Images"]
    ECR --> DEPLOY["kubectl / Helm\\nDeploy to EKS"]

    subgraph EKS["Private EKS Cluster"]
        KARP["Karpenter\\nNode Provisioning"]
        subgraph ISTIO["Istio Service Mesh"]
            GW["Istio Gateway\\nInbound Routing"]
            VS["VirtualServices\\nmTLS + EnvoyFilters"]
        end
        IRSA["OIDC + IRSA\\nPod IAM Roles"]
    end

    DEPLOY --> EKS
    GW --> ALB["ALB / NLB\\nTLS · Private DNS"]
    ALB --> USERS["End Users"]
    EKS --> DD["Datadog\\nAPM · Infra · Alerts"]
    EKS --> CW["CloudWatch\\nLogs · Metrics"]
`,

  "gitlab-cicd-standardization-at-scale": `
flowchart LR
    SRC["Source Control\\nBranch + Tag Strategy\\nMR Rules"] --> BUILD["Build + Test\\nShared CI Templates\\nDocker-in-Docker"]
    BUILD --> SCAN["Security Gates\\nSAST · Dependency Scan\\nSecret Detection · Checkov · SonarQube"]
    SCAN --> ARTIFACT["Artifact + Version\\nImage Registry\\nSemantic Versioning"]
    ARTIFACT --> DEV["Dev\\nAuto on merge"]
    DEV --> QA["QA\\nAuto promote"]
    QA --> STG["Stage\\nAuto promote"]
    STG -- "manual gate" --> PROD["Production\\nControlled release"]
`,
};

export default function ArchitectureDiagram({ slug }: { slug: string }) {
  const chart = diagrams[slug];
  if (!chart) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/40 p-4">
      <MermaidChart chart={chart} />
    </div>
  );
}
