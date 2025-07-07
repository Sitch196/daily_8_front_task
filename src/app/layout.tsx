import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dayily 8 Task",
  description: "A Next.js app with multi-language support",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { lang: "en" | "ro" };
}) {
  const lang = params?.lang || "en";

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
