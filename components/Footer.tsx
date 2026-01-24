import Container from "./Container";
import { Lang } from "@/lib/i18n";
import { FooterCopy, NavCopy } from "@/lib/siteCopy";

type FooterProps = {
  lang: Lang;
  footer: FooterCopy;
  nav: NavCopy;
};

export default function Footer({ lang, footer, nav }: FooterProps) {
  const base = lang === "pt-br" ? "/pt-br" : "";
  return (
    <footer className="mt-16 border-t border-zinc-800/80">
      <Container>
        <div className="py-10 text-sm text-zinc-400">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-semibold text-zinc-200">{footer.name}</p>
              <p className="mt-2 max-w-md">{footer.blurb}</p>
            </div>
            <div className="flex flex-col gap-2">
              <a className="hover:text-zinc-200" href={`${base}/case-studies`}>{nav.caseStudies}</a>
              <a className="hover:text-zinc-200" href={`${base}/skills`}>{nav.skills}</a>
              <a className="hover:text-zinc-200" href={`${base}/resume`}>{nav.resume}</a>
              <a className="hover:text-zinc-200" href={`${base}/contact`}>{nav.contact}</a>
            </div>
          </div>
          <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} hfmonteiro.dev</p>
        </div>
      </Container>
    </footer>
  );
}
