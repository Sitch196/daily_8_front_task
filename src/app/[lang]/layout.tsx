"use client";

import { LanguageProvider } from "../../context/LanguageContext";
import { ReactNode } from "react";
import { use } from "react";

export default function LanguageLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: "en" | "ro" }>;
}) {
  const { lang } = use(params);

  return (
    <html lang={lang}>
      <body>
        <LanguageProvider initialLanguage={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
