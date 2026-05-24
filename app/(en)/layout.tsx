import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteCopy } from "@/lib/siteCopy";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const copy = getSiteCopy("en");

  return (
    <>
      <Header lang="en" nav={copy.nav} />
      <div id="main-content" lang="en" tabIndex={-1}>
        {children}
      </div>
      <Footer lang="en" nav={copy.nav} footer={copy.footer} />
    </>
  );
}
