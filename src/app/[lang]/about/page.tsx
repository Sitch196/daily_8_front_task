"use client";

import React, { useContext } from "react";
import Header from "../../../components/Header";
import { LanguageContext } from "../../../context/LanguageContext";

export default function AboutPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">{t("about.title")}</h1>
        <p>{t("about.content")}</p>
      </main>
    </div>
  );
}
