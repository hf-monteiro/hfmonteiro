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
    className={`shrink-0 rounded-md px-2 py-1 text-sm transition ${
      active ? "bg-zinc-800/70 text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
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

  const links = [
    { href: `${base}/case-studies`, label: nav.caseStudies },
    { href: `${base}/labs`, label: nav.labs },
    { href: `${base}/notes`, label: nav.notes },
    { href: `${base}/resume`, label: nav.resume },
    { href: `${base}/contact`, label: nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 sm:flex-nowrap">
          <a href={homeHref} className="shrink-0 transition hover:opacity-80">
            <Image src="/logo.png" alt="hfmonteiro.dev" width={36} height={36} priority />
          </a>

          <div className="sm:order-last">
            <LangSwitch lang={lang} />
          </div>

          <nav className="-mx-2 flex w-full items-center sm:mx-0 sm:ml-auto sm:w-auto sm:gap-x-2">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
