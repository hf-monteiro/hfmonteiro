import "./globals.css";
import { themeCss } from "@/lib/palette";

export const metadata = {
  metadataBase: new URL("https://hfmonteiro.dev"),
  title: "Higor Monteiro | Senior DevOps / Platform Engineer",
  description:
    "Portfolio focused on enterprise AWS platform architecture, advanced cloud networking, EKS, Terraform, GitLab CI/CD, SRE, and regulated SaaS infrastructure."
};

// Runs before first paint: saved choice, else the OS preference. Prevents a
// flash of the wrong theme on load. ThemeToggle keeps the same localStorage key.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCss }} />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-screen bg-night-950 text-night-100 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-night-100 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-night-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
