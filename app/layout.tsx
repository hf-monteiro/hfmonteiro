import "./globals.css";

export const metadata = {
  title: "Higor Fernandes Monteiro | Senior DevOps Engineer",
  description:
    "Senior DevOps / Cloud Engineer specialized in AWS, Terraform, GitLab CI/CD, EKS and platform engineering."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
