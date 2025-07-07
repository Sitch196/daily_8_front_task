"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageContext } from "../context/LanguageContext";

const Header: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const pathname = usePathname();
  const currentPath = pathname.split("/").slice(2).join("/") || "home";

  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between">
        <div>
          <Link href={`/${language}/home`} className="mr-4">
            Home
          </Link>
          <Link href={`/${language}/about`}>About</Link>
        </div>
        <div>
          <button
            onClick={() => setLanguage("en")}
            className={`mr-2 ${language === "en" ? "font-bold" : ""}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ro")}
            className={language === "ro" ? "font-bold" : ""}
          >
            RO
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
