"use client";

import { useEffect, useRef, useState } from "react";

// Reads a theme color from the CSS variables generated from lib/palette.js
// ("R G B" triplets) and returns it as hex, which Mermaid expects.
function cssColor(name: string): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
  const hex = raw
    .split(/\s+/)
    .map((n) => Number(n).toString(16).padStart(2, "0"))
    .join("");
  return `#${hex}`;
}

function currentTheme(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

async function getMermaid() {
  const mermaid = (await import("mermaid")).default;
  // Re-initialized on every render so diagrams follow the active theme.
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      darkMode: currentTheme() === "dark",
      background: cssColor("night-950"),
      primaryColor: cssColor("night-900"),
      primaryTextColor: cssColor("night-100"),
      primaryBorderColor: cssColor("night-600"),
      lineColor: cssColor("night-500"),
      secondaryColor: cssColor("night-900"),
      tertiaryColor: cssColor("night-800"),
      nodeBorder: cssColor("night-600"),
      clusterBkg: cssColor("night-950"),
      clusterBorder: cssColor("night-700"),
      titleColor: cssColor("night-300"),
      edgeLabelBackground: cssColor("night-950"),
      fontFamily: "ui-monospace, monospace",
      fontSize: "13px"
    }
  });
  return mermaid;
}

let idCounter = 0;

export default function MermaidChart({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>(null);

  // Track theme switches (ThemeToggle flips data-theme on <html>).
  useEffect(() => {
    setTheme(currentTheme());
    const observer = new MutationObserver(() => setTheme(currentTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ref.current || !theme) return;
    const id = `mermaid-${++idCounter}`;
    getMermaid()
      .then((m) => m.render(id, chart))
      .then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      })
      .catch((e) => setError(String(e)));
  }, [chart, theme]);

  if (error) return null;
  return <div ref={ref} className="overflow-x-auto [&_svg]:mx-auto [&_svg]:min-w-[40rem]" />;
}
