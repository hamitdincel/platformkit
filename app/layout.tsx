import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Platform Brand Kit Dashboard",
  description: "Cyberpunk platform brand kit dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

