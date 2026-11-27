const dotTone = {
  accent: "bg-accent/80",
  success: "bg-success/80"
};

export default function BulletList({
  items,
  className = "",
  tone = "accent"
}: {
  items: string[];
  className?: string;
  tone?: keyof typeof dotTone;
}) {
  return (
    <ul className={`grid gap-2 text-night-300 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className={`mt-[0.6em] h-1 w-1 shrink-0 rounded-full ${dotTone[tone]}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
