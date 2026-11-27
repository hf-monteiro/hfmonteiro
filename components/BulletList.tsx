export default function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`grid gap-2 text-zinc-300 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
