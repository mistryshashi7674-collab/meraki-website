"use client";

import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

export default function FloatingSocialButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 flex flex-col gap-4 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      {/* Instagram */}

      <a
        href="https://www.instagram.com/meraki_nandita/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group relative flex items-center justify-end"
      >
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-xl opacity-0 transition-all duration-300 group-hover:right-20 group-hover:opacity-100">
          Follow on Instagram
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
          <FaInstagram size={24} />
        </div>
      </a>

      {/* Pinterest */}

      <a
        href="https://www.pinterest.com/nanditathakur29/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
        className="group relative flex items-center justify-end"
      >
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-xl opacity-0 transition-all duration-300 group-hover:right-20 group-hover:opacity-100">
          Follow on Pinterest
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E60023] text-white shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
          <FaPinterest size={24} />
        </div>
      </a>

      {/* WhatsApp */}

      <a
        href="https://wa.me/918007801123"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative flex items-center justify-end"
      >
        <span className="absolute right-16 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-xl opacity-0 transition-all duration-300 group-hover:right-20 group-hover:opacity-100">
          Chat on WhatsApp
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
          <FaWhatsapp size={24} />
        </div>
      </a>
    </div>
  );
}