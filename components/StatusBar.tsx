import Container from "./Container";
import StatusDot from "./StatusDot";
import { getBuildInfo } from "@/lib/buildInfo";
import { StatusCopy } from "@/lib/siteCopy";

// Site-wide "production dashboard" status strip. The commit and build date are
// real (see lib/buildInfo.ts); keep anything added here truthful.
const link = "text-accent hover:text-accent-hover";

export default function StatusBar({ copy: t }: { copy: StatusCopy }) {
  const build = getBuildInfo();

  return (
    <div className="border-b border-night-800 bg-night-900/60">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 font-mono text-xs text-night-400">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="whitespace-nowrap text-night-300">{t.env}</span>
            <span className="flex items-center gap-2 whitespace-nowrap text-success">
              <StatusDot />
              {t.operational}
            </span>
          </div>
          {build.shortSha ? (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 whitespace-nowrap">
              <span>
                {t.deployed}{" "}
                <a className={link} href={build.commitUrl} target="_blank" rel="noreferrer">
                  {build.shortSha}
                </a>
              </span>
              <span>
                {t.built} {build.builtAt}
              </span>
              <a className={link} href={build.ciUrl} target="_blank" rel="noreferrer">
                CI →
              </a>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
