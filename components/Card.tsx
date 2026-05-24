export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="surface rounded-lg border p-5">
      {children}
    </div>
  );
}
