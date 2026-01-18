export default function Home() {
  const highlights = [
    "AWS • EKS • VPC • PrivateLink • Multi-account",
    "Terraform modules & GitLab CI/CD standardization",
    "Observability, SRE practices & incident management",
    "Security-first automation and platform thinking"
  ];

  const experience = [
    {
      role: "Senior DevOps Engineer",
      company: "BairesDev",
      period: "Feb 2022 — Present",
      bullets: [
        "Designed and automated AWS infrastructure using Terraform across multiple accounts.",
        "Built standardized GitLab CI/CD pipelines for microservices and platform components.",
        "Improved observability and operational reliability with monitoring and alerting best practices."
      ]
    },
    {
      role: "SRE Analyst",
      company: "Banco Inter",
      period: "Sep 2021 — Feb 2022",
      bullets: [
        "Managed AWS cloud environments focused on high availability and resilience.",
        "Supported CI/CD pipelines and enhanced system observability."
      ]
    }
  ];

  const projects = [
    {
      title: "AWS EKS Platform",
      desc: "Reusable Terraform modules for EKS, networking and shared services with enterprise guardrails.",
      tags: ["AWS", "EKS", "Terraform"]
    },
    {
      title: "GitLab CI/CD Standardization",
      desc: "Opinionated CI/CD patterns to reduce duplication, enforce best practices and speed up delivery.",
      tags: ["GitLab", "CI/CD", "DevOps"]
    },
    {
      title: "Observability Improvements",
      desc: "Alerting, metrics and tracing improvements to reduce MTTR and noise.",
      tags: ["SRE", "Observability"]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="flex flex-col gap-8">
          <div>
            <p className="text-sm text-zinc-400">hfmonteiro.dev</p>
            <h1 className="mt-2 text-4xl font-semibold">
              Higor Fernandes Monteiro
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              Senior DevOps / Cloud Engineer
            </p>
            <p className="mt-4 max-w-2xl text-zinc-400">
              I design and operate scalable cloud platforms and CI/CD pipelines,
              focusing on reliability, security and long-term maintainability.
            </p>
          </div>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="font-semibold">Highlights</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-zinc-300">
              {highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </section>
        </header>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-6 grid gap-4">
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <p className="font-semibold">{job.role}</p>
                <p className="text-sm text-zinc-400">
                  {job.company} • {job.period}
                </p>
                <ul className="mt-3 list-disc pl-5 text-zinc-300">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <p className="font-semibold">{p.title}</p>
                <p className="mt-2 text-zinc-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-800 px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-6 flex gap-4">
            <a
              href="mailto:you@example.com"
              className="rounded-xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="rounded-xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="rounded-xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
            >
              GitHub
            </a>
          </div>
        </section>

        <footer className="mt-14 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} hfmonteiro.dev
        </footer>
      </div>
    </main>
  );
}
