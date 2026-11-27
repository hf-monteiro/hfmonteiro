// Page title block. `path` renders a monospace breadcrumb (dashboard style),
// e.g. "projects / eks-platform".
export default function PageHeader({
  title,
  intro,
  back,
  path,
  children
}: {
  title: string;
  intro?: React.ReactNode;
  back?: { href: string; label: string };
  path?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      {back ? (
        <a className="text-sm text-night-400 hover:text-accent-hover" href={back.href}>
          ← {back.label}
        </a>
      ) : null}
      {path ? <p className={`${back ? "mt-4 " : ""}font-mono text-xs text-night-400`}>{path}</p> : null}
      <h1 className={`${back || path ? "mt-2 " : ""}text-3xl font-semibold tracking-tight sm:text-4xl`}>{title}</h1>
      {intro ? <div className="mt-3 text-lg text-night-400">{intro}</div> : null}
      {children}
    </header>
  );
}
