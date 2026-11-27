// Status is never conveyed by color alone: always pair the dot with a text label.
export default function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative inline-flex h-2 w-2 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40 motion-reduce:hidden" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
    </span>
  );
}
