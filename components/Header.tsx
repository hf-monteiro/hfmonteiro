import Image from "next/image";
import Container from "./Container";
import LangSwitch from "./LangSwitch";
import { Lang } from "@/lib/i18n";
import { NavCopy } from "@/lib/siteCopy";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a className="text-sm text-zinc-300 hover:text-zinc-100" href={href}>
    {label}
  </a>
);

type HeaderProps = {
  lang: Lang;
  nav: NavCopy;
};

export default function Header({ lang, nav }: HeaderProps) {
  const base = lang === "pt-br" ? "/pt-br" : "";
  const homeHref = base || "/";
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href={homeHref} className="flex items-center gap-2 transition hover:opacity-80">
            <Image
              src="/logo.png"
              alt="hfmonteiro.dev"
              width={72}
              height={72}
              priority
            />
            <span className="sr-only">hfmonteiro.dev</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-5">
            <NavLink href={`${base}/solutions`} label={nav.solutions} />
            <NavLink href={`${base}/case-studies`} label={nav.caseStudies} />
            <NavLink href={`${base}/skills`} label={nav.skills} />
            <NavLink href={`${base}/resume`} label={nav.resume} />
            <NavLink href={`${base}/contact`} label={nav.contact} />
            <LangSwitch lang={lang} />
          </nav>
        </div>
      </Container>
    </header>
  );
}
