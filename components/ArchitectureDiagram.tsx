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
flowchart TD
    subgraph CD["Delivery"]
        direction LR
        DEV["Developer\\nMerge Request"] --> GL["GitLab CI/CD\\nPipeline Triggers"]
        GL --> RUNNERS["GitLab Runners\\ninside EKS · IRSA"]
        RUNNERS --> ECR["ECR\\nContainer Images"]
        ECR --> DEPLOY["kubectl / Helm\\nDeploy to EKS"]
    end

    subgraph EKS["Private EKS Cluster"]
        direction LR
        GW["Istio Gateway\\nInbound Routing"] --> VS["VirtualServices\\nmTLS + EnvoyFilters"]
        VS ~~~ KARP["Karpenter\\nNode Provisioning"]
        KARP ~~~ IRSA["OIDC + IRSA\\nPod IAM Roles"]
    end

    CD --> EKS
    EKS --> ALB["ALB / NLB\\nTLS · Private DNS"]
    ALB --> USERS["End Users"]
    EKS --> DD["Datadog\\nAPM · Infra · Alerts"]
    EKS --> CW["CloudWatch\\nLogs · Metrics"]
`,

  "gitlab-cicd-standardization-at-scale": `
flowchart TD
    subgraph PIPE["Shared pipeline"]
        direction LR
        SRC["Source Control\\nBranch + Tag Strategy\\nMR Rules"] --> BUILD["Build + Test\\nShared CI Templates\\nDocker-in-Docker"]
        BUILD --> SCAN["Security Gates\\nSAST · Deps · Secrets\\nCheckov · SonarQube"]
        SCAN --> ARTIFACT["Artifact + Version\\nImage Registry\\nSemantic Versioning"]
    end

    subgraph ENVS["Environment promotion"]
        direction LR
        DEV["Dev\\nAuto on merge"] --> QA["QA\\nAuto promote"]
        QA --> STG["Stage\\nAuto promote"]
        STG -- "manual gate" --> PROD["Production\\nControlled release"]
    end

    PIPE --> ENVS
`,
};

export default function ArchitectureDiagram({ slug }: { slug: string }) {
  const chart = diagrams[slug];
  if (!chart) return null;

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
      <MermaidChart chart={chart} />
    </div>
  );
}
