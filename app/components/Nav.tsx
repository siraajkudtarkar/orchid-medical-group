"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Appointments", href: "#scheduling" },
  { label: "Patient Forms", href: "#forms" },
  { label: "Vaccines", href: "#vaccines" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },

];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="Orchid Medical Group — home"
          >
            <Image
              src={logo}
              alt="Orchid Medical Group — Family & Pediatric Medicine, Redlands CA"
              width={320}
              height={120}
              className="h-12 md:h-14 w-auto object-contain flex-shrink-0"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-violet-700 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#scheduling"
              className="ml-2 bg-emerald-600 hover:bg-emerald-800 focus-visible:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Phone CTA for tablet */}
          <div className="hidden md:flex xl:hidden items-center gap-4">
            <a
              href="tel:(909) 894-4887"
              className="text-violet-700 font-semibold text-sm"
              aria-label="Call our office"
            >
              📞 (909) 894-4887
            </a>
            <a
              href="#scheduling"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`xl:hidden overflow-hidden transition-all duration-200 ${
            menuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-700 rounded-lg font-medium text-base transition-colors"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2 pb-3 flex flex-col gap-3">
              <a
                href="tel:(909) 894-4887"
                className="flex items-center justify-center gap-2 border-2 border-violet-600 text-violet-700 font-semibold py-3 rounded-full text-base transition-colors hover:bg-violet-50"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                📞 Call (909) 894-4887
              </a>
              <a
                href="#scheduling"
                className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-800 text-white font-semibold py-3 rounded-full text-base transition-colors"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
