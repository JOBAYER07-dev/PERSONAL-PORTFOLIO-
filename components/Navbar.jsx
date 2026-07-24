"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-md px-6 md:px-16">
      {/* Logo */}
      <div className="navbar-start">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] font-extrabold text-xl tracking-tight text-accent-lime"
        >
          J.
        </Link>
      </div>

      {/* Desktop links */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-1 px-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  pathname === href
                    ? "text-base-content font-medium"
                    : "text-base-content/50 hover:text-base-content"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right — theme toggle + hire me */}
      <div className="navbar-end flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/contact"
          className="btn btn-sm rounded-full bg-accent-lime text-black border-none hover:opacity-85 hidden md:flex"
        >
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="btn btn-ghost btn-sm md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 border-b border-base-300 md:hidden">
          <ul className="menu p-4 gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest ${
                    pathname === href
                      ? "text-base-content font-medium"
                      : "text-base-content/50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
