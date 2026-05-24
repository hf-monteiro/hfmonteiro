export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/25 p-5">
      {children}
    </div>
  );
}
