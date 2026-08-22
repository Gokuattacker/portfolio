"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-white hover:text-zinc-200 transition-colors"
        >
          {siteConfig.name}
          <span className="text-zinc-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-zinc-400 hover:text-white transition-colors md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-black transition-all hover:bg-zinc-200"
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
