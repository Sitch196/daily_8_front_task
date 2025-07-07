"use client";

import { LanguageProvider } from "../../context/LanguageContext";
import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: "en" | "ro" };
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as
      | "en"
      | "ro"
      | null;
    if (savedLanguage && savedLanguage !== params.lang) {
      const newPath = pathname.replace(
        `/${params.lang}/`,
        `/${savedLanguage}/`
      );
      router.replace(newPath);
    }
  }, [params.lang, pathname, router]);

  return (
    <html lang={params.lang}>
      <body>
        <LanguageProvider initialLanguage={params.lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
