import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { normalizeLang } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/siteCopy";

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = normalizeLang(params.lang);
  const copy = getSiteCopy(lang);

  return (
    <>
      <Header lang={lang} nav={copy.nav} />
      {children}
      <Footer lang={lang} nav={copy.nav} footer={copy.footer} />
    </>
  );
}
