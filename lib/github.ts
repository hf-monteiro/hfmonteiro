// Build-time GitHub metadata for the Labs catalog (one API call per build).
// Failures are non-fatal: the page renders without the live columns.
export type RepoStats = { language: string | null; pushedAt: string };

const OWNER = "hf-monteiro";

export async function getRepoStats(): Promise<Record<string, RepoStats>> {
  try {
    const res = await fetch(`https://api.github.com/users/${OWNER}/repos?per_page=100`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
      },
      cache: "force-cache",
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) return {};
    const repos: { name: string; language: string | null; pushed_at: string }[] = await res.json();
    return Object.fromEntries(repos.map((r) => [r.name, { language: r.language, pushedAt: r.pushed_at }]));
  } catch {
    return {};
  }
}

// "https://github.com/hf-monteiro/infra-modules" -> "infra-modules"
export function repoName(href: string): string | null {
  const m = href.match(/github\.com\/[^/]+\/([^/?#]+)/);
  return m ? m[1] : null;
}
