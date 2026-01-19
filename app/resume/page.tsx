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
                Senior DevOps / Cloud Engineer with 15 years in IT, focused on AWS platforms,
                Terraform automation, GitLab CI/CD, and reliability practices.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary">Download PDF</Button>
                <Button href="/contact" variant="secondary">Contact</Button>
              </div>

              <p className="mt-4 text-sm text-zinc-500">
                Put your resume PDF at <code className="text-zinc-300">public/resume.pdf</code>.
              </p>
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
