import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function ResumePage() {
  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">Resume</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Quick overview + downloadable PDF.
          </p>

          <div className="mt-8 grid gap-4">
            <Card>
              <h2 className="text-lg font-semibold">Summary</h2>
              <p className="mt-2 text-zinc-300">
                Senior DevOps Engineer with 10+ years in IT, specialized in AWS/GCP, Terraform,
                Kubernetes, GitLab CI/CD, and observability. Experienced standardizing pipelines across
                teams and accelerating release cadence (1/week → 2–6/day).
              </p>


              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary">Download PDF</Button>
                <Button href="/contact" variant="secondary">Contact</Button>
              </div>

            </Card>

            <Card>
              <h2 className="text-lg font-semibold">Certifications</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                <li>AWS Certified Developer</li>
                <li>AWS Certified SysOps Administrator</li>
                <li>AWS Certified Cloud Practitioner</li>
                <li>GitLab / Microsoft certifications</li>
              </ul>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
