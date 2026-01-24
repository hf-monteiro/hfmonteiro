export const LANGS = ["en", "pt-br"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export function normalizeLang(value?: string | null): Lang {
  if (!value) return DEFAULT_LANG;
  const lower = value.toLowerCase();
  if (lower === "pt" || lower === "pt-br" || lower === "pt_br") return "pt-br";
  if (lower === "en" || lower === "en-us" || lower === "en_us") return "en";
  return DEFAULT_LANG;
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "pt-br" : "en";
}

export function langFromAcceptLanguage(header?: string | null): Lang {
  if (!header) return DEFAULT_LANG;
  const lower = header.toLowerCase();
  if (lower.includes("pt-br") || lower.includes("pt")) return "pt-br";
  return "en";
}
