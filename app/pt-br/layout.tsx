import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import { getSiteCopy } from "@/lib/siteCopy";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  openGraph: {
    siteName: "hfmonteiro.dev",
    type: "website",
    locale: "pt_BR",
    images: [ogImageUrl("pt-br")]
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function PtBrLayout({ children }: { children: React.ReactNode }) {
  const copy = getSiteCopy("pt-br");

  return (
    <>
      <Header lang="pt-br" nav={copy.nav} />
      <StatusBar copy={copy.status} />
      <div id="main-content" lang="pt-BR" tabIndex={-1}>
        {children}
      </div>
      <Footer lang="pt-br" nav={copy.nav} footer={copy.footer} />
    </>
  );
}
