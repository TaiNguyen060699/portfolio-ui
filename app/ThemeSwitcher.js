/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    localStorage.setItem('theme', 'light')
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <button onClick={toggleTheme}>
        {theme === "dark" && (
          <img src="./day-mode.png" className='w-5 h-5' alt="light-icon" />
        )}

        {theme === "light" && (
          <img src="./dark.png" className='w-5 h-5' alt="dark-icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
