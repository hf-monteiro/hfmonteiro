import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://hfmonteiro.dev"),
  title: "Higor Monteiro | Senior DevOps / Platform Engineer",
  description:
    "Portfolio focused on enterprise AWS platform architecture, advanced cloud networking, EKS, Terraform, GitLab CI/CD, SRE, and regulated SaaS infrastructure."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
