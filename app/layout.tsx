import "./globals.css";

export const metadata = {
  title: "Higor Monteiro | Senior DevOps / Platform Engineer",
  description:
    "Portfolio focused on enterprise AWS platform architecture, advanced cloud networking, EKS, Terraform, GitLab CI/CD, SRE, and regulated SaaS infrastructure."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
