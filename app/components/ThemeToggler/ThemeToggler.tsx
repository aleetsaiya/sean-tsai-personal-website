"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import styles from "./ThemeToggler.module.scss";

export default function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.button}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <LuMoon size={20} /> : <LuSun size={20} />}
    </button>
  );
}
