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
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/images/bwlogo.png"
              alt="Meraki by Nandita"
              width={150}
              height={150}
              priority
              className="h-auto w-auto object-contain"
            />

            <p className="mt-6 leading-8 text-stone-300">
              Handmade Mandala Art, Lippan Art and Acrylic Paintings created
              with passion to make every home beautiful.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.instagram.com/meraki_nandita/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.pinterest.com/nanditathakur29/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#E60023]"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://wa.me/918007801123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] transition hover:scale-110"
              >
                <FaWhatsapp />
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
                <Link href="/" className="transition hover:text-pink-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/mandala-art" className="transition hover:text-pink-400">
                  Mandala Art
                </Link>
              </li>

              <li>
                <Link href="/shop" className="transition hover:text-pink-400">
                  Shop
                </Link>
              </li>

            </ul>

          </div>

          {/* Collections */}

          <div>

            <h3 className="text-xl font-semibold">
              Collections
            </h3>

            <ul className="mt-6 space-y-5 text-stone-300">

              <li>
                <Link
                  href="/mandala-art"
                  className="transition hover:text-pink-400"
                >
                  Mandala Art
                </Link>
              </li>

              <li className="flex items-center gap-3">

                <span>Lippan Art</span>

                <span className="rounded-full bg-amber-600 px-2 py-1 text-[10px] font-semibold uppercase">
                  Soon
                </span>

              </li>

              <li className="flex items-center gap-3">

                <span>Acrylic Paintings</span>

                <span className="rounded-full bg-amber-600 px-2 py-1 text-[10px] font-semibold uppercase">
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

            <div className="mt-6 space-y-6 text-stone-300">

              <div className="flex gap-4">

                <FaMapMarkerAlt className="mt-1 text-pink-500" />

                <div>
                  Chennai,
                  <br />
                  Tamil Nadu, India
                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="mt-1 text-pink-500" />

                <a
                  href="mailto:nandita296@gmail.com"
                  className="transition hover:text-pink-400"
                >
                  Get in Touch
                </a>

              </div>

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

        {/* Divider */}

        <div className="my-14 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-stone-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Meraki by Nandita. All Rights Reserved.
          </p>

          <p>
            Handmade with ❤️ in Chennai
          </p>

        </div>

      </div>
    </footer>
  );
}