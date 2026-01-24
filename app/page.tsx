import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { langFromAcceptLanguage } from "@/lib/i18n";

export default function Page() {
  const acceptLanguage = headers().get("accept-language");
  const lang = langFromAcceptLanguage(acceptLanguage);
  redirect(`/${lang}`);
}
