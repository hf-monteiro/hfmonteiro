import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

const copy = {
  title: "Resume",
  intro: "Quick overview + downloadable PDF.",
  summaryTitle: "Summary",
  summaryBody:
    "Senior DevOps Engineer with 10+ years in IT, specialized in AWS/GCP, Terraform, Kubernetes, GitLab CI/CD, and observability. Experienced standardizing pipelines across teams and accelerating release cadence (1/week to 2-6/day).",
  download: "Download PDF",
  contact: "Contact",
  certsTitle: "Certifications",
  certs: [
    "AWS Certified Advanced Networking – Specialty (2025–2028)",
    "AWS Certified DevOps Engineer – Professional (2024–2027)",
    "AWS Certified Developer – Associate (2023–2027)",
    "AWS Certified SysOps Administrator – Associate (2021–2024)",
    "AWS Certified Cloud Practitioner (2020–2027)",
    "GCP Professional Cloud Architect (2024–2026)",
    "GCP Professional Cloud Developer (2025–2027)",
    "Certified SAFe 6 – Practitioner (2024–2025)",
    "GitLab Certified Associate (2021)"
  ]
};

export default function ResumePage() {
  const base = "";

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{copy.intro}</p>

          <div className="mt-8 grid gap-4">
            <Card>
              <h2 className="text-lg font-semibold">{copy.summaryTitle}</h2>
              <p className="mt-2 text-zinc-300">{copy.summaryBody}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary">{copy.download}</Button>
                <Button href={`${base}/contact`} variant="secondary">{copy.contact}</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.certsTitle}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {copy.certs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
