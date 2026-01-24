"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [target, setTarget] = useState("/en");

  useEffect(() => {
    const lang = navigator.language?.toLowerCase() || "en";
    const next = lang.startsWith("pt") ? "/pt-br" : "/en";
    setTarget(next);
    window.location.replace(next);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center">
        <h1 className="text-2xl font-semibold">Select language</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Redirecting to {target}...
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900"
            href="/en"
          >
            English
          </a>
          <a
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900"
            href="/pt-br"
          >
            Portugues (BR)
          </a>
        </div>
      </div>
    </main>
  );
}
