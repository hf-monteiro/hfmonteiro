import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteCopy } from "@/lib/siteCopy";

export default function PtBrLayout({ children }: { children: React.ReactNode }) {
  const copy = getSiteCopy("pt-br");

  return (
    <>
      <Header lang="pt-br" nav={copy.nav} />
      {children}
      <Footer lang="pt-br" nav={copy.nav} footer={copy.footer} />
    </>
  );
}
