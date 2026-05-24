type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";
  const styles =
    variant === "primary"
      ? "border-zinc-800 bg-zinc-950 hover:bg-zinc-900"
      : "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60";

  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}
