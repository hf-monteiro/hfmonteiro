// Unboxed page section with a top divider; the default building block for
// reading content. Use Card only for things that stand apart (links, callouts).
export default function Section({
  title,
  aside,
  children
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-zinc-800 pt-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {aside}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
