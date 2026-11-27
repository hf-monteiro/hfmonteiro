// Single source of truth for site colors, in two themes.
//
// - tailwind.config.js exposes them as role-named classes (`night-*`, `accent`,
//   `accent-hover`, `highlight`, `success`) that read CSS variables, so every
//   class switches with the theme.
// - app/layout.tsx emits those CSS variables from `themes` (`:root` = dark,
//   `[data-theme="light"]` = light).
// - Mermaid reads the live CSS variables; the OG images use `themes.dark`.
//
// The neutral scale is semantic, not literal: 950 is always the page background
// and 100 the strongest text, so in light mode the scale is inverted. Use 400+
// for readable small text; 500 is decorative only (fails contrast).

const dark = {
  night: {
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
  },
  accent: "#6ea8fe",
  accentHover: "#9ec5ff",
  success: "#3fb950"
};

const light = {
  night: {
    50: "#000000",
    100: "#111318",
    200: "#1f2228",
    300: "#353943",
    400: "#5b6170",
    500: "#8b909c",
    600: "#a9adb7",
    700: "#cfd2d9",
    800: "#e3e5ea",
    900: "#f1f2f5",
    950: "#fbfbfc"
  },
  // Darker accents: the dark-theme shades fail contrast on a light background.
  accent: "#2563eb",
  accentHover: "#1d4ed8",
  success: "#1a7f37"
};

const themes = { dark, light };

const hexToRgb = (hex) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(" ");

// CSS custom properties for one theme, as "R G B" triplets (Tailwind alpha support).
function cssVars(theme) {
  const vars = Object.entries(theme.night).map(([k, v]) => `--night-${k}: ${hexToRgb(v)};`);
  vars.push(
    `--accent: ${hexToRgb(theme.accent)};`,
    `--accent-hover: ${hexToRgb(theme.accentHover)};`,
    `--success: ${hexToRgb(theme.success)};`
  );
  return vars.join(" ");
}

const themeCss = [
  `:root { ${cssVars(dark)} color-scheme: dark; }`,
  `[data-theme="light"] { ${cssVars(light)} color-scheme: light; }`
].join("\n");

const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

// Tailwind color config: every class resolves through the CSS variables.
const tailwindColors = {
  night: Object.fromEntries(Object.keys(dark.night).map((k) => [k, v(`night-${k}`)])),
  accent: { DEFAULT: v("accent"), hover: v("accent-hover") },
  highlight: v("night-100"),
  success: v("success")
};

module.exports = { themes, themeCss, tailwindColors };
