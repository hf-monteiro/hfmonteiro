import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

const copy = {
  title: "Resume",
  intro: "Quick overview + downloadable PDF.",
  summaryTitle: "Summary",
  summaryBody:
    "Senior DevOps Engineer with 10+ years in IT focused on AWS platform engineering and CI/CD transformation. I design multi-account foundations, reusable IaC modules, and delivery standards that reduce risk while speeding releases (1/week to 2-6/day). I build secure networking baselines, scalable Kubernetes platforms, and observability guardrails that improve reliability and developer productivity across teams.",
  download: "Download PDF",
  contact: "Contact",
  certsTitle: "Certifications",
  certs: [
    "AWS Certified Advanced Networking – Specialty",
    "AWS Certified DevOps Engineer – Professional",
    "AWS Certified Developer – Associate",
    "AWS Certified SysOps Administrator – Associate",
    "AWS Certified Cloud Practitioner",
    "GCP Professional Cloud Architect",
    "GCP Professional Cloud Developer",
    "Certified SAFe 6 – Practitioner",
    "GitLab Certified Associate"
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
