import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* Top */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/images/logo.png"
              alt="Meraki by Nandita"
              width={170}
              height={70}
              className="brightness-0 invert"
            />

            <p className="mt-6 leading-8 text-stone-300">
              Handmade Mandala Art, Lippan Art and Acrylic Paintings
              thoughtfully created to make every home beautiful.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.instagram.com/meraki_nandita/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.pinterest.com/nanditathakur29/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-red-600"
              >
                <FaPinterestP size={20} />
              </a>

              <a
                href="https://wa.me/918007801123"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] p-3 transition hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-stone-300">

              <li>
                <Link href="/" className="hover:text-pink-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-pink-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-pink-400">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-pink-400">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Collections */}

          <div>

            <h3 className="text-xl font-semibold">
              Collections
            </h3>

            <ul className="mt-6 space-y-4 text-stone-300">

              <li>
                <Link
                  href="/mandala-art"
                  className="hover:text-pink-400"
                >
                  Mandala Art
                </Link>
              </li>

              <li className="flex items-center gap-2 opacity-70">

                Lippan Art

                <span className="rounded-full bg-amber-600 px-2 py-1 text-[10px] uppercase">
                  Soon
                </span>

              </li>

              <li className="flex items-center gap-2 opacity-70">

                Acrylic Paintings

                <span className="rounded-full bg-amber-600 px-2 py-1 text-[10px] uppercase">
                  Soon
                </span>

              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-stone-300">

              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-pink-500" />

                <span>
                  Chennai, Tamil Nadu
                  <br />
                  India
                </span>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="mt-1 text-pink-500" />

                <a
                  href="mailto:hello@merakinandita.in"
                  className="hover:text-pink-400"
                >
                  hello@merakinandita.in
                </a>

              </div>

              <div>

                <a
                  href="https://wa.me/918007801123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  <FaWhatsapp />

                  Chat on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-stone-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Meraki by Nandita. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}