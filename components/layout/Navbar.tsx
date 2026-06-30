import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Meraki by Nandita"
            width={90}
            height={90}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
          <Link href="/" className="hover:text-amber-700 transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-amber-700 transition">
            Shop
          </Link>

          <a href="#" className="hover:text-amber-700 transition">
            Collections
          </a>

          <a href="#" className="hover:text-amber-700 transition">
            About
          </a>
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/YOURNUMBER"
          className="text-green-600 hover:scale-110 transition"
        >
          <FaWhatsapp size={28} />
        </a>

      </div>
    </header>
  );
}