import { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/caseStudies";
import { getNotes } from "@/lib/notes";

const base = "https://hfmonteiro.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudySlugs = getCaseStudies("en").map((c) => c.slug);
  const noteSlugs = getNotes("en").map((n) => ({ slug: n.slug, date: n.date }));

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, priority: 1.0 },
    { url: `${base}/case-studies`, priority: 0.9 },
    { url: `${base}/labs`, priority: 0.8 },
    { url: `${base}/notes`, priority: 0.8 },
    { url: `${base}/resume`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/pt-br`, priority: 0.9 },
    { url: `${base}/pt-br/case-studies`, priority: 0.8 },
    { url: `${base}/pt-br/labs`, priority: 0.7 },
    { url: `${base}/pt-br/notes`, priority: 0.7 },
    { url: `${base}/pt-br/resume`, priority: 0.7 },
    { url: `${base}/pt-br/contact`, priority: 0.6 }
  ].map((r) => ({ ...r, lastModified: new Date() }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudySlugs.flatMap((slug) => [
    { url: `${base}/case-studies/${slug}`, lastModified: new Date(), priority: 0.85 },
    { url: `${base}/pt-br/case-studies/${slug}`, lastModified: new Date(), priority: 0.75 }
  ]);

  const noteRoutes: MetadataRoute.Sitemap = noteSlugs.flatMap(({ slug, date }) => [
    { url: `${base}/notes/${slug}`, lastModified: new Date(date), priority: 0.75 },
    { url: `${base}/pt-br/notes/${slug}`, lastModified: new Date(date), priority: 0.65 }
  ]);

  return [...staticRoutes, ...caseStudyRoutes, ...noteRoutes];
}
