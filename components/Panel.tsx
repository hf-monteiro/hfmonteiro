// Dashboard-style panel: bordered box with a small monospace header row.
export default function Panel({
  title,
  aside,
  children,
  className = ""
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex min-w-0 flex-col rounded-lg border border-night-800 bg-night-900/60 ${className}`}>
      <header className="flex items-center justify-between gap-4 border-b border-night-800 px-4 py-2.5">
        <h2 className="font-mono text-xs uppercase tracking-wider text-night-400">{title}</h2>
        {aside ? <div className="font-mono text-xs">{aside}</div> : null}
      </header>
      <div className="min-w-0 flex-1 p-4">{children}</div>
    </section>
  );
}
