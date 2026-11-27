export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-night-700 px-2.5 py-0.5 text-xs text-night-300">
      {children}
    </span>
  );
}
