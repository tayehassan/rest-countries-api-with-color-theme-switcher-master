"use client";
import { MoonIcon } from "@heroicons/react/24/outline";
import { MoonIcon as MoonSolid } from "@heroicons/react/24/solid";

export default function Header() {
  function toggleDarkMode() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      console.log(localStorage.theme);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme === "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
  }
  return (
    <header
      onClick={toggleDarkMode}
      className={`fixed z-10 flex h-20 w-full items-center justify-between bg-element-color px-10 md:px-20`}
    >
      <h1 className="text-lg font-black md:text-3xl">Where in the world?</h1>
      <button className="flex gap-2">
        <MoonIcon className="size-5 dark:hidden" />
        <MoonSolid className="hidden size-5 dark:block" />
        <span className="text-base font-semibold">Dark Mode</span>
      </button>
    </header>
  );
}
