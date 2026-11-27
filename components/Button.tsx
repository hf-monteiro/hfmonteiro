type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: string | boolean;
};

export default function Button({ href, children, variant = "primary", download }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night-950";
  const styles =
    variant === "primary"
      ? "border-night-100 bg-night-100 text-night-950 hover:bg-white"
      : "border-night-800 bg-night-900/30 text-night-100 hover:border-accent/60 hover:bg-night-900/60";

  return (
    <a className={`${base} ${styles}`} href={href} download={download}>
      {children}
    </a>
  );
}
