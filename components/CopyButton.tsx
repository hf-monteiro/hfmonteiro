"use client";

import { useState } from "react";

export default function CopyButton({ text, label, done }: { text: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          // Clipboard unavailable (e.g. insecure context): the address stays visible to copy by hand.
        }
      }}
      className="rounded border border-night-700 px-1.5 py-0.5 font-mono text-xs text-night-300 transition hover:border-night-600 hover:text-night-100"
    >
      {copied ? done : label}
    </button>
  );
}
