"use client";

import { usePathname } from "next/navigation";
import { Lang, otherLang } from "@/lib/i18n";

const labelMap: Record<Lang, string> = {
  en: "PT-BR",
  "pt-br": "EN"
};

export default function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() || "/";
  const nextLang = otherLang(lang);

  const segments = pathname.split("/").filter(Boolean);
  const rest = segments[0] === "en" || segments[0] === "pt-br"
    ? segments.slice(1)
    : segments;

  const restPath = rest.join("/");
  const nextPath = nextLang === "en"
    ? `/${restPath}`.replace(/\/$/, "") || "/"
    : `/${[nextLang, ...rest].join("/")}`;

  return (
    <a
      href={nextPath}
      className="rounded-md border border-night-800 px-2 py-1 text-xs font-medium text-night-300 transition hover:border-accent/60 hover:text-accent-hover"
    >
      {labelMap[lang]}
    </a>
  );
}
