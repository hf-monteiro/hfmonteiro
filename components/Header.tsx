import Image from "next/image";
import Container from "./Container";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a className="text-sm text-zinc-300 hover:text-zinc-100" href={href}>
    {label}
  </a>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center transition hover:opacity-80">
            <Image
              src="/logo.png"
              alt="hfmonteiro.dev"
              width={48}
              height={48}
              priority
            />
            <span className="sr-only">hfmonteiro.dev</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-5">
            <NavLink href="/case-studies" label="Case Studies" />
            <NavLink href="/skills" label="Skills" />
            <NavLink href="/resume" label="Resume" />
            <NavLink href="/contact" label="Contact" />
          </nav>
        </div>
      </Container>
    </header>
  );
}
