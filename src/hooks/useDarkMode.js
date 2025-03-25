"use client";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedMode = localStorage.getItem("darkMode");

    setDarkMode(storedMode ? JSON.parse(storedMode) : prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return { darkMode, toggleDarkMode: () => setDarkMode((prev) => !prev) };
}
