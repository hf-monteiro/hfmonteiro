import { ogImageFiles, renderOgImage } from "@/lib/ogImage";

// Emits static PNGs at /og/<name>.png during `next build` (output: "export").
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return ogImageFiles().map((image) => ({ image }));
}

export function GET(_req: Request, { params }: { params: { image: string } }) {
  return renderOgImage(params.image);
}
