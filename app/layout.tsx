import "./globals.css";

export const metadata = {
  title: "Higor Monteiro | DevOps / Cloud Engineer",
  description:
    "Case-study driven portfolio: AWS, Terraform, GitLab CI/CD, EKS, and platform engineering."
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
