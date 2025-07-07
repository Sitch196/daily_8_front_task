"use client";

import { LanguageProvider } from "../../context/LanguageContext";
import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { use } from "react";

export default function LanguageLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: "en" | "ro" }>;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = use(params);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as
      | "en"
      | "ro"
      | null;
    if (savedLanguage && savedLanguage !== lang) {
      const newPath = pathname.replace(`/${lang}/`, `/${savedLanguage}/`);
      router.replace(newPath);
    }
  }, [lang, pathname, router]);

  return <LanguageProvider initialLanguage={lang}>{children}</LanguageProvider>;
}
