import Container from "./Container";
import { Lang, langBase } from "@/lib/i18n";
import { FooterCopy, NavCopy } from "@/lib/siteCopy";

type FooterProps = {
  lang: Lang;
  footer: FooterCopy;
  nav: NavCopy;
};

export default function Footer({ lang, footer, nav }: FooterProps) {
  const base = langBase(lang);
  const links = [
    { href: `${base}/case-studies`, label: nav.caseStudies },
    { href: `${base}/labs`, label: nav.labs },
    { href: `${base}/notes`, label: nav.notes },
    { href: `${base}/resume`, label: nav.resume },
    { href: `${base}/contact`, label: nav.contact }
  ];

  return (
    <footer className="mt-20 border-t border-zinc-800/80">
      <Container>
        <div className="flex flex-col gap-6 py-10 text-sm text-zinc-400 sm:flex-row sm:items-start sm:justify-between">
          <p className="font-medium text-zinc-200">{footer.name}</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <a key={link.href} className="hover:text-zinc-200" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-zinc-800/80 py-6 text-xs text-zinc-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} hfmonteiro.dev</p>
          <p>
            {footer.builtWith} ·{" "}
            <a
              className="hover:text-zinc-200"
              href="https://github.com/hf-monteiro/hfmonteiro"
              target="_blank"
              rel="noreferrer"
            >
              {footer.source} →
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
