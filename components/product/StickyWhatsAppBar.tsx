"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  price: number;
  whatsappUrl: string;
};

export default function StickyWhatsAppBar({ price, whatsappUrl }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-white/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 pb-[max(env(safe-area-inset-bottom),1rem)]">
        <div>
          <p className="text-xs uppercase tracking-wider text-[var(--text-light)]">
            Price
          </p>

          <p className="text-2xl font-bold text-[var(--accent)]">
            ₹{price.toLocaleString("en-IN")}
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[var(--success)] px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          <FaWhatsapp size={18} />
          Order Now
        </a>
      </div>
    </div>
  );
}
