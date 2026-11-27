// Single source of truth for site colors. Used by tailwind.config.js (as the
// `night-*`, `accent`, `highlight` and `success` classes) and by code that needs
// raw hex values: Mermaid diagrams and the build-time OG images.
//
// Direction: neutral graphite with one muted blue accent. Color marks only what
// is interactive; everything else is greyscale.

// Neutral scale (cool graphite). Use 400+ for readable text; 500 is too
// low-contrast for small text, keep it decorative.
const night = {
  50: "#ffffff",
  100: "#f3f4f6",
  200: "#e3e5ea",
  300: "#cdd0d8",
  400: "#a0a5b3",
  500: "#6b7080",
  600: "#4b4f59",
  700: "#33363e",
  800: "#23252b",
  900: "#131418",
  950: "#0a0b0d"
};

// Roles: accent = interactive (links, active nav, bullets, focus, hovers),
// highlight = data/code (stats, repo names), success = health/status (green).
const accent = { DEFAULT: "#6ea8fe", hover: "#9ec5ff" };
const highlight = night[100];
const success = "#3fb950";

module.exports = { night, accent, highlight, success };
