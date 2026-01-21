import Image from "next/image";
import Container from "./Container";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    className="text-sm text-zinc-700 hover:text-zinc-950 transition"
    href={href}
  >
    {label}
  </a>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center transition hover:opacity-90">
            <Image
              src="/logo.png"
              alt="hfmonteiro.dev"
              width={52}
              height={52}
              priority
            />
            <span className="sr-only">hfmonteiro.dev</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
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
