import "./globals.css";

export const metadata = {
  title: "Higor Monteiro | Senior DevOps / Platform Engineer",
  description:
    "Portfolio focused on enterprise AWS platform architecture, advanced cloud networking, EKS, Terraform, GitLab CI/CD, SRE, and regulated SaaS infrastructure."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-zinc-100 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#15121d]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
