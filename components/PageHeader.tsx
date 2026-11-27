export default function PageHeader({
  title,
  intro,
  back
}: {
  title: string;
  intro?: React.ReactNode;
  back?: { href: string; label: string };
}) {
  return (
    <header className="max-w-3xl">
      {back ? (
        <a className="text-sm text-zinc-400 hover:text-zinc-200" href={back.href}>
          ← {back.label}
        </a>
      ) : null}
      <h1 className={`${back ? "mt-4 " : ""}text-3xl font-semibold tracking-tight sm:text-4xl`}>{title}</h1>
      {intro ? <div className="mt-3 text-lg text-zinc-400">{intro}</div> : null}
    </header>
  );
}
