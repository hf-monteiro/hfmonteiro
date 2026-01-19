import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800/80">
      <Container>
        <div className="py-10 text-sm text-zinc-400">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-semibold text-zinc-200">Higor Monteiro</p>
              <p className="mt-2 max-w-md">
                Senior DevOps / Cloud Engineer — AWS, Terraform, GitLab CI/CD, EKS.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a className="hover:text-zinc-200" href="/case-studies">Case Studies</a>
              <a className="hover:text-zinc-200" href="/skills">Skills</a>
              <a className="hover:text-zinc-200" href="/resume">Resume</a>
              <a className="hover:text-zinc-200" href="/contact">Contact</a>
            </div>
          </div>
          <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} hfmonteiro.dev</p>
        </div>
      </Container>
    </footer>
  );
}
