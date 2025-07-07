"use client";

import React, { useContext } from "react";
import Header from "../../../components/Header";
import { LanguageContext } from "../../../context/LanguageContext";
import { use } from "react";

export default function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "ro" }>;
}) {
  const { t } = useContext(LanguageContext);
  const { lang } = use(params);

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">{t("home.title")}</h1>
        <p>{t("home.content")}</p>
        <p>Current language: {lang}</p> {/* Example usage */}
      </main>
    </div>
  );
}
