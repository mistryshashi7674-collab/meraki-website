import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { company } from "@/lib/company";
import { socialLinks } from "@/lib/socialLinks";
import { navigation } from "@/lib/navigation";
import { collections } from "@/lib/collections";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <Image
              src="/images/bwlogo.png"
              alt={company.name}
              width={150}
              height={150}
              priority
              className="h-auto w-auto object-contain"
            />

            <p className="mt-6 leading-8 text-stone-300">
              {company.description}
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href={socialLinks.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E60023]"
              >
                <FaPinterestP />
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>

            <ul className="mt-6 space-y-4 text-stone-300">
              {navigation
                .filter((item) => item.status !== "hidden")
                .map((item) => {
                  if (item.status !== "live") {
                    return (
                      <li
                        key={item.name}
                        className="flex items-center gap-3 opacity-60"
                      >
                        <span>{item.name}</span>

                        {item.status === "coming-soon" && (
                          <span className="rounded-full bg-amber-600 px-2 py-1 text-[10px] font-semibold uppercase">
                            Soon
                          </span>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition hover:text-pink-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Collections */}

          <div>
            <h3 className="text-xl font-semibold">Collections</h3>

            <ul className="mt-6 space-y-5 text-stone-300">
              {collections.map((collection) => {
                if (collection.status !== "live") {
                  return (
                    <li
                      key={collection.title}
                      className="flex items-center gap-3 opacity-60"
                    >
                      <span>{collection.title}</span>

                      <span className="rounded-full bg-amber-600 px-2 py-1 text-[10px] font-semibold uppercase">
                        Soon
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={collection.href}>
                    <Link
                      href={collection.href}
                      className="transition hover:text-pink-400"
                    >
                      {collection.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <div className="mt-6 space-y-6 text-stone-300">
              {/* Address */}

              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-pink-500" />

                <div>
                  {company.city},
                  <br />
                  {company.state}, {company.country}
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-pink-500" />

                <a
                  href={socialLinks.email}
                  className="transition hover:text-pink-400"
                >
                  {company.email}
                </a>
              </div>

              {/* WhatsApp CTA */}

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1EBE5D]"
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
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>

          <p>Handmade with ❤️ in {company.city}</p>
        </div>
      </div>
    </footer>
  );
}
