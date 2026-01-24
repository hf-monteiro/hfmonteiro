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

  const nextPath = `/${[nextLang, ...rest].join("/")}`;

  return (
    <a
      href={nextPath}
      className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300 hover:text-zinc-100"
    >
      {labelMap[lang]}
    </a>
  );
}
