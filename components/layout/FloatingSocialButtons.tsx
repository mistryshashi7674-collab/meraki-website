"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

export default function FloatingSocialButtons() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  // Hide on product pages
  const isProductPage =
    pathname.startsWith("/mandala-art/") &&
    pathname !== "/mandala-art";

  useEffect(() => {
    if (isProductPage) return;

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [isProductPage]);

  if (isProductPage) return null;

  return (
    <div
      className={`fixed right-5 z-50 flex flex-col gap-4 transition-all duration-500 ${
        visible
          ? "bottom-6 opacity-100 translate-y-0"
          : "pointer-events-none bottom-2 opacity-0 translate-y-10"
      }`}
    >
      {/* Instagram */}

      <a
        href="https://www.instagram.com/meraki_nandita/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end"
      >
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-xl opacity-0 transition-all duration-300 group-hover:right-20 group-hover:opacity-100">
          Follow on Instagram
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-xl transition-all duration-300 group-hover:scale-110">
          <FaInstagram size={24} />
        </div>
      </a>

      {/* Pinterest */}

      <a
        href="https://www.pinterest.com/nanditathakur29/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end"
      >
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-xl opacity-0 transition-all duration-300 group-hover:right-20 group-hover:opacity-100">
          Follow on Pinterest
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E60023] text-white shadow-xl transition-all duration-300 group-hover:scale-110">
          <FaPinterest size={24} />
        </div>
      </a>

      {/* WhatsApp - Desktop Only */}

      <a
        href="https://wa.me/918007801123"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative hidden lg:flex items-center justify-end"
      >
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-xl opacity-0 transition-all duration-300 group-hover:right-20 group-hover:opacity-100">
          Chat on WhatsApp
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 group-hover:scale-110">
          <FaWhatsapp size={24} />
        </div>
      </a>
    </div>
  );
}