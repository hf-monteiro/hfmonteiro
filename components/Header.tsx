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
        ? "border-zinc-100 text-zinc-100"
        : "border-transparent text-zinc-400 hover:border-zinc-600 hover:text-zinc-100"
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
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur">
      <Container>
        <div className="flex min-h-20 flex-col items-start justify-center gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full items-center justify-between sm:w-auto">
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
            <div className="sm:hidden">
              <LangSwitch lang={lang} />
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <NavLink href={`${base}/solutions`} label={nav.solutions} active={isActive(`${base}/solutions`)} />
            <NavLink href={`${base}/case-studies`} label={nav.caseStudies} active={isActive(`${base}/case-studies`)} />
            <NavLink href={`${base}/labs`} label={nav.labs} active={isActive(`${base}/labs`)} />
            <NavLink href={`${base}/notes`} label={nav.notes} active={isActive(`${base}/notes`)} />
            <NavLink href={`${base}/skills`} label={nav.skills} active={isActive(`${base}/skills`)} />
            <NavLink href={`${base}/resume`} label={nav.resume} active={isActive(`${base}/resume`)} />
            <NavLink href={`${base}/contact`} label={nav.contact} active={isActive(`${base}/contact`)} />
            <div className="hidden sm:block">
              <LangSwitch lang={lang} />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
