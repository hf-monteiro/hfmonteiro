"use client";

import { useEffect, useRef, useState } from "react";
import { night } from "@/lib/palette";

let initialized = false;

async function getMermaid() {
  const mermaid = (await import("mermaid")).default;
  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        darkMode: true,
        background: night[950],
        primaryColor: night[900],
        primaryTextColor: night[100],
        primaryBorderColor: night[600],
        lineColor: night[500],
        secondaryColor: night[900],
        tertiaryColor: night[800],
        nodeBorder: night[600],
        clusterBkg: night[950],
        clusterBorder: night[700],
        titleColor: night[300],
        edgeLabelBackground: night[950],
        fontFamily: "ui-monospace, monospace",
        fontSize: "13px",
      },
    });
    initialized = true;
  }
  return mermaid;
}

let idCounter = 0;

export default function MermaidChart({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const id = `mermaid-${++idCounter}`;
    getMermaid()
      .then((m) => m.render(id, chart))
      .then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      })
      .catch((e) => setError(String(e)));
  }, [chart]);

  if (error) return null;
  return <div ref={ref} className="overflow-x-auto [&_svg]:mx-auto [&_svg]:min-w-[40rem]" />;
}
