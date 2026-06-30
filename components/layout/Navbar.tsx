import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Meraki by Nandita"
            width={130}
            height={130}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-[15px] font-medium text-stone-700">

          <Link href="/" className="hover:text-pink-600 transition-colors duration-300">
            Home
          </Link>

          <Link href="/shop" className="hover:text-pink-600 transition-colors duration-300">
            Shop
          </Link>

          <Link href="#" className="hover:text-pink-600 transition-colors duration-300">
            Collections
          </Link>

          <Link href="#" className="hover:text-pink-600 transition-colors duration-300">
            About
          </Link>

        </nav>

        {/* WhatsApp */}
        <a
          href="https://wa.me/YOURNUMBER"
          className="text-green-600 hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp size={28} />
        </a>

      </div>
    </header>
  );
}