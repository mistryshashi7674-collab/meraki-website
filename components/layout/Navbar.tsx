"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaPinterestP } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Mandala Art", href: "/mandala-art" },
  { name: "Lippan Art", href: "/lippan-art" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled ? "bg-[#F6F2EB]/95 backdrop-blur-lg shadow-md" : "bg-[#F6F2EB]"
      } border-b border-stone-200`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5 lg:px-12 transition-all duration-300">
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Meraki by Nandita"
            width={150}
            height={60}
            priority
            className={`transition-all duration-500 ${
              scrolled ? "scale-95" : "scale-100"
            }`}
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group text-[17px] tracking-[0.04em] transition-all duration-300 ${
                  active
                    ? "text-pink-600 font-semibold"
                    : "text-stone-700 font-medium hover:text-pink-600"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-pink-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}

        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-pink-600 transition duration-300 hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-red-600 transition duration-300 hover:scale-110"
          >
            <FaPinterestP size={18} />
          </a>

          <a
            href="https://wa.me/918007801123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-white shadow-sm transition-all duration-300 hover:bg-[#1EBE5D] hover:shadow-lg"
          >
            <FaWhatsapp size={18} />

            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
