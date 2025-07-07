"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ro";
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage: Language;
}

const translations: { [key in Language]: any } = {
  en: require("../locales/en/translations.json"),
  ro: require("../locales/ro/translations.json"),
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  initialLanguage,
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && ["en", "ro"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let result = translations[language];
    for (const k of keys) {
      result = result?.[k] || "";
    }
    return result || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
