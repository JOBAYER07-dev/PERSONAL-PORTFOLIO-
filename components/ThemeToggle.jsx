"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // On mount, read saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setIsDark(saved === "dark");
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="btn btn-ghost btn-sm btn-circle"
      aria-label="Toggle theme"
    >
      {isDark ? (
        /* Sun icon — switch to light */
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeWidth={2}
            d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
      ) : (
        /* Moon icon — switch to dark */
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
