import { ImageResponse } from "next/og";
import { getCaseStudies, getCaseStudy } from "@/lib/caseStudies";
import { LANGS, Lang } from "@/lib/i18n";
import { themes } from "@/lib/palette";

// Preview images are always rendered in the dark theme.
const { night, accent } = themes.dark;

// Build-time Open Graph images, emitted as static PNGs by app/og/[image]/route.tsx:
//   /og/site-<lang>.png         site-wide default
//   /og/<case-study-slug>-<lang>.png
export const ogSize = { width: 1200, height: 630 };

type OgImageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

const site: Record<Lang, OgImageProps> = {
  en: {
    eyebrow: "Higor Monteiro",
    title: "Senior DevOps / Platform Engineer",
    subtitle:
      "Enterprise AWS platforms, advanced cloud networking, production EKS, Terraform, and GitLab CI/CD.",
    tags: ["AWS", "PrivateLink", "EKS", "Terraform"]
  },
  "pt-br": {
    eyebrow: "Higor Monteiro",
    title: "Senior DevOps / Platform Engineer",
    subtitle:
      "Plataformas AWS corporativas, networking cloud avançado, EKS em produção, Terraform e GitLab CI/CD.",
    tags: ["AWS", "PrivateLink", "EKS", "Terraform"]
  }
};

const projectLabel: Record<Lang, string> = { en: "Project", "pt-br": "Projeto" };

export function ogImageUrl(lang: Lang, caseStudySlug?: string) {
  return `/og/${caseStudySlug ?? "site"}-${lang}.png`;
}

export function ogImageFiles() {
  return LANGS.flatMap((lang) => [
    ogImageUrl(lang),
    ...getCaseStudies(lang).map((c) => ogImageUrl(lang, c.slug))
  ]).map((url) => url.replace("/og/", ""));
}

function getOgImage(file: string): OgImageProps {
  const lang = LANGS.find((l) => file.endsWith(`-${l}.png`));
  if (!lang) throw new Error(`Unknown OG image: ${file}`);

  const name = file.slice(0, -`-${lang}.png`.length);
  if (name === "site") return site[lang];

  const cs = getCaseStudy(lang, name);
  if (!cs) throw new Error(`Unknown OG image: ${file}`);
  return {
    eyebrow: `${projectLabel[lang]} · Higor Monteiro`,
    title: cs.title,
    subtitle: cs.subtitle,
    tags: cs.tags
  };
}

export function renderOgImage(file: string) {
  const { eyebrow, title, subtitle, tags = [] } = getOgImage(file);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: night[950],
          color: night[100],
          borderTop: `8px solid ${accent}`
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: night[400], letterSpacing: 1 }}>{eyebrow}</div>
          <div style={{ marginTop: 24, fontSize: title.length > 48 ? 60 : 72, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.4, color: night[300] }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {tags.slice(0, 4).map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 20px",
                  border: `2px solid ${night[700]}`,
                  borderRadius: 999,
                  fontSize: 22,
                  color: night[300]
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 28, color: night[400] }}>hfmonteiro.dev</div>
        </div>
      </div>
    ),
    ogSize
  );
}
