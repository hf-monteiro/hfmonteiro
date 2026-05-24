type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";
  const styles =
    variant === "primary"
      ? "border-[var(--accent)] bg-[var(--accent)] text-[#15121d] hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)]"
      : "border-[var(--border)] bg-[rgb(18_16_26_/_0.45)] text-zinc-100 hover:border-[var(--border-strong)] hover:bg-[rgb(23_20_33_/_0.78)]";

  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}
