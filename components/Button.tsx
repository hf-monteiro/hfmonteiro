type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition";
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
