"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import LangSwitch from "./LangSwitch";
import { Lang } from "@/lib/i18n";
import { NavCopy } from "@/lib/siteCopy";

const NavLink = ({
  href,
  label,
  active
}: {
  href: string;
  label: string;
  active: boolean;
}) => (
  <a
    aria-current={active ? "page" : undefined}
    className={`border-b py-1 text-sm transition ${
      active
        ? "border-[var(--accent)] text-zinc-100"
        : "border-transparent text-zinc-400 hover:border-[var(--border-strong)] hover:text-zinc-100"
    }`}
    href={href}
  >
    {label}
  </a>
);

type HeaderProps = {
  lang: Lang;
  nav: NavCopy;
};

export default function Header({ lang, nav }: HeaderProps) {
  const pathname = usePathname() || "/";
  const base = lang === "pt-br" ? "/pt-br" : "";
  const homeHref = base || "/";
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgb(8_7_12_/_0.78)] backdrop-blur">
      <Container>
        <div className="flex min-h-20 flex-col items-start justify-center gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <a href={homeHref} className="flex items-center gap-2 transition hover:opacity-80">
            <Image
              src="/logo.png"
              alt="hfmonteiro.dev"
              width={64}
              height={64}
              priority
            />
            <span className="sr-only">hfmonteiro.dev</span>
          </a>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <NavLink href={`${base}/solutions`} label={nav.solutions} active={isActive(`${base}/solutions`)} />
            <NavLink href={`${base}/case-studies`} label={nav.caseStudies} active={isActive(`${base}/case-studies`)} />
            <NavLink href={`${base}/labs`} label={nav.labs} active={isActive(`${base}/labs`)} />
            <NavLink href={`${base}/skills`} label={nav.skills} active={isActive(`${base}/skills`)} />
            <NavLink href={`${base}/resume`} label={nav.resume} active={isActive(`${base}/resume`)} />
            <NavLink href={`${base}/contact`} label={nav.contact} active={isActive(`${base}/contact`)} />
            <LangSwitch lang={lang} />
          </nav>
        </div>
      </Container>
    </header>
  );
}
