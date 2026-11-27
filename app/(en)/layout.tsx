import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import { getSiteCopy } from "@/lib/siteCopy";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  openGraph: {
    siteName: "hfmonteiro.dev",
    type: "website",
    locale: "en_US",
    images: [ogImageUrl("en")]
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const copy = getSiteCopy("en");

  return (
    <>
      <Header lang="en" nav={copy.nav} theme={copy.theme} />
      <StatusBar copy={copy.status} />
      <div id="main-content" lang="en" tabIndex={-1}>
        {children}
      </div>
      <Footer lang="en" nav={copy.nav} footer={copy.footer} />
    </>
  );
}
