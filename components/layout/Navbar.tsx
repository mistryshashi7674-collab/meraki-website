"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  FaWhatsapp,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";

import { company } from "@/lib/company";
import { socialLinks } from "@/lib/socialLinks";
import { navigation } from "@/lib/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 120
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        } ${
          scrolled
            ? "bg-[var(--surface)] border-b border-[var(--border)] shadow-lg backdrop-blur-xl"
            : "bg-[var(--surface)] border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 lg:px-12">

          {/* Logo */}

          <Link href="/">
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={150}
              height={60}
              priority
              className={`w-[120px] transition-all duration-500 md:w-[150px] ${
                scrolled
                  ? "scale-95"
                  : "scale-100"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 md:flex">

            {navigation
              .filter((item) => item.status !== "hidden")
              .map((item) => {

                const active =
                  pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={
                      item.status === "live"
                        ? item.href
                        : "#"
                    }
                    className={`group relative text-[17px] tracking-[0.04em] transition ${
                      active
                        ? "font-semibold text-pink-600"
                        : "text-[var(--text-primary)] hover:text-pink-600"
                    } ${
                      item.status !== "live"
                        ? "pointer-events-none opacity-60"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">

                      <span>{item.name}</span>

                      {item.status ===
                        "coming-soon" && (
                        <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold text-amber-700">
                          Soon
                        </span>
                      )}

                    </div>

                    {item.status ===
                      "live" && (
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-pink-500 transition-all duration-300 ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    )}

                  </Link>
                );
              })}

          </nav>

          {/* Desktop Right Side */}

          <div className="hidden items-center gap-5 md:flex">

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] transition hover:scale-110 hover:text-pink-600"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href={socialLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] transition hover:scale-110 hover:text-red-600"
            >
              <FaPinterestP size={18} />
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-white transition hover:bg-[#1EBE5D]"
            >
              <FaWhatsapp size={18} />

              <span>WhatsApp</span>

            </a>

          </div>

          {/* Mobile Right Side */}

          <div className="flex items-center gap-3 md:hidden">

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] p-3 text-white"
            >
              <FaWhatsapp size={18} />
            </a>

            <button
              aria-label="Open Menu"
              onClick={() =>
                setMobileMenuOpen(true)
              }
              className="rounded-full border border-stone-200 p-3"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>

          </div>

        </div>

      </header>

            {/* Mobile Overlay */}

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Drawer */}

          <aside
            className={`fixed right-0 top-0 z-50 flex h-screen w-[320px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
              mobileMenuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }`}
          >
            {/* Drawer Header */}

            <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">

              <Image
                src="/images/logo.png"
                alt={company.name}
                width={120}
                height={48}
              />

              <button
                aria-label="Close Menu"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-2 transition hover:bg-stone-100"
              >
                <HiX size={26} />
              </button>

            </div>

            {/* Navigation */}

            <nav className="flex flex-1 flex-col px-6 py-6">

              {navigation
                .filter((item) => item.status !== "hidden")
                .map((item) => {

                  const active =
                    pathname === item.href;

                  if (item.status !== "live") {
                    return (
                      <div
                        key={item.name}
                        className="flex items-center justify-between border-b border-stone-100 py-5 opacity-60"
                      >
                        <span className="text-lg font-medium text-stone-700">
                          {item.name}
                        </span>

                        {item.status ===
                          "coming-soon" && (
                          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                            Soon
                          </span>
                        )}

                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className={`border-b border-stone-100 py-5 text-lg transition ${
                        active
                          ? "font-semibold text-pink-600"
                          : "font-medium text-stone-700 hover:text-pink-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

            </nav>

            {/* Bottom */}

            <div className="border-t border-stone-200 px-6 py-8">

              <div className="mb-8 flex items-center gap-6">

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-stone-600 transition hover:text-pink-600"
                >
                  <FaInstagram size={22} />
                </a>

                <a
                  href={socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="text-stone-600 transition hover:text-red-600"
                >
                  <FaPinterestP size={20} />
                </a>

              </div>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:bg-[#1EBE5D]"
              >
                <FaWhatsapp size={20} />

                Chat on WhatsApp

              </a>

            </div>

          </aside>

        </>
      )}

    </>
  );
}