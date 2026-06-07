"use client";

import { useEffect, useRef, useState } from "react";

let initialized = false;

async function getMermaid() {
  const mermaid = (await import("mermaid")).default;
  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        darkMode: true,
        background: "#09090b",
        primaryColor: "#27272a",
        primaryTextColor: "#f4f4f5",
        primaryBorderColor: "#3f3f46",
        lineColor: "#71717a",
        secondaryColor: "#18181b",
        tertiaryColor: "#3f3f46",
        nodeBorder: "#3f3f46",
        clusterBkg: "#18181b",
        clusterBorder: "#3f3f46",
        edgeLabelBackground: "#09090b",
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
  return <div ref={ref} className="overflow-x-auto [&_svg]:max-w-full" />;
}
