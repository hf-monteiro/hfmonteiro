import { execSync } from "child_process";

// Real build metadata for the dashboard status bar, resolved at build time.
// Cloudflare Pages and GitHub Actions expose the commit as env vars; local
// builds fall back to git.
function commitSha(): string {
  const fromEnv = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA;
  if (fromEnv) return fromEnv;
  try {
    return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}

export function getBuildInfo() {
  const sha = commitSha();
  return {
    sha,
    shortSha: sha.slice(0, 7),
    builtAt: new Date().toISOString().slice(0, 10),
    commitUrl: sha ? `https://github.com/hf-monteiro/hfmonteiro/commit/${sha}` : undefined,
    ciUrl: "https://github.com/hf-monteiro/hfmonteiro/actions"
  };
}
