# hfmonteiro.dev

[![CI](https://github.com/hf-monteiro/hfmonteiro/actions/workflows/ci.yml/badge.svg)](https://github.com/hf-monteiro/hfmonteiro/actions/workflows/ci.yml)

Personal portfolio of **Higor Monteiro**, Senior DevOps / Platform Engineer. Live at **[hfmonteiro.dev](https://hfmonteiro.dev)**.

The site is designed like a **production environment dashboard**: a global status bar with the deployed commit, metric tiles, case studies shown as monitored services, a Backstage-style repository catalog, and a career timeline. Every number shown is real: it comes from the résumé, the GitHub API, or the build itself.

Built with Next.js 14 (App Router, static export), TypeScript and Tailwind CSS, in English and Brazilian Portuguese, with dark and light themes.

## Pages

| Page | What it shows |
|---|---|
| **Home** | Metric tiles, case studies as "services", career event log, tech stack, recent notes |
| **Projects** | Case studies with context, Mermaid architecture diagram, what was built, outcomes, related labs |
| **Labs** | Catalog of GitHub repositories with language and last-push date fetched from the GitHub API at build time, filterable by kind |
| **Notes** | Technical notes as a docs portal: index, reading stats, table of contents |
| **Resume** | Career timeline chart, roles with computed tenure, certifications with validity status, downloadable PDF |
| **Contact** | Ticket-style request form (opens a pre-filled email), contact endpoints, live local time |

## Local development

Requires Node.js 18.17 or newer (CI builds with Node 24).

```bash
npm install
npm run dev         # http://localhost:3000
npm run build       # static export to out/
npm run typecheck   # tsc --noEmit (run after a build, which generates next-env.d.ts)
```

Don't run `npm run build` while `npm run dev` is running: both write to `.next/`. Stop the dev server first, and delete `.next/` before restarting it.

There is no test suite. The build, the type-check and CI are the checks.

## Project structure

```
app/
  (en)/          English routes, served at /
  pt-br/         Portuguese routes, served at /pt-br
  og/[image]/    Build-time social preview images (/og/*.png)
  layout.tsx     Theme variables and pre-paint theme script
  sitemap.ts     Hand-maintained sitemap
components/
  views/         One layout per page, shared by both languages
  ...            UI pieces (Panel, StatusBar, ThemeToggle, LabsCatalog, ...)
lib/
  caseStudies.ts Case study content (en + pt-br)
  notes.ts       Notes content (en + pt-br)
  siteCopy.ts    Navigation, footer, status bar and theme labels
  palette.js     Color palette for both themes
  buildInfo.ts   Deployed commit and build date
  github.ts      Build-time GitHub API call for the Labs catalog
public/
  resume.pdf     Downloadable résumé
```

Each page exists twice, once per language, but the markup lives in a single shared view in `components/views/`. A page file only holds its metadata and a typed `copy` object with the text. Layout changes go in the view; text changes go in both language files.

## Editing content

- **Case study:** add an entry to both the `en` and `pt-br` arrays in `lib/caseStudies.ts` with the same `slug`. Optionally add a Mermaid diagram keyed by that slug in `components/ArchitectureDiagram.tsx`. The page, its social preview image and its sitemap entry are generated automatically.
- **Note:** add an entry to both arrays in `lib/notes.ts`. Word count, reading stats and the table of contents are derived from it.
- **Lab:** add an entry to the `sections` list in both `app/(en)/labs/page.tsx` and `app/pt-br/labs/page.tsx`. Language and last-push date come from GitHub automatically.
- **Résumé:** replace `public/resume.pdf` (keep the filename), then update the text in both `resume/page.tsx` files. Keep role periods as `Mon YYYY - Mon YYYY` and certifications as `Name (YYYY–YYYY)`: the timeline, tenure and certification status are computed from them.
- **New page:** add it under both `app/(en)/` and `app/pt-br/` with the same path, and add it to `app/sitemap.ts`.

## Theming

Colors are defined once in `lib/palette.js` with a dark and a light theme. Tailwind classes (`night-*`, `accent`, `success`, ...) read CSS variables generated from it, so every component switches with the theme. The theme follows the visitor's system preference until they choose one with the header toggle, and that choice is saved in the browser.

## Deployment and CI

- **Deploy:** Cloudflare Pages builds and publishes every push automatically through its Git integration (build command `npm run build`, output `out/`). Pushes to `main` go to production.
- **CI:** [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pushes and pull requests to `main`: build, type-check, a link check over the built site (lychee), and Lighthouse. CI reports problems but does not block the Cloudflare deploy.

## Notes for AI assistants

[`CLAUDE.md`](CLAUDE.md) holds detailed architecture and conventions for Claude Code.
