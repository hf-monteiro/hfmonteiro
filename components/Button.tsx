type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: string | boolean;
};

export default function Button({ href, children, variant = "primary", download }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";
  const styles =
    variant === "primary"
      ? "border-zinc-200 bg-zinc-100 text-zinc-950 hover:bg-white"
      : "border-zinc-800 bg-zinc-900/30 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900/60";

  return (
    <a className={`${base} ${styles}`} href={href} download={download}>
      {children}
    </a>
  );
}
