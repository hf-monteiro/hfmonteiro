export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="chip rounded-full border px-3 py-1 text-xs">
      {children}
    </span>
  );
}
