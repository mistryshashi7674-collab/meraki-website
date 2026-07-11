import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import FadeUp from "@/components/animations/FadeUp";

import { company } from "@/lib/company";
import { socialLinks } from "@/lib/socialLinks";
import { navigation } from "@/lib/navigation";
import { collections } from "@/lib/collections";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <FadeUp>

          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1.2fr]">

            {/* Brand */}

            <div>

              <Image
                src="/images/bwlogo.png"
                alt={company.name}
                width={110}
                height={110}
                priority
                className="h-auto w-auto object-contain opacity-95"
              />

              <p className="mt-8 max-w-sm leading-8 text-stone-300">
                Handcrafted wall décor inspired by tradition,
                thoughtfully created to bring warmth,
                elegance and personality to every home.
              </p>

              {/* Social */}

              <div className="mt-10 flex gap-4">

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600"
                >
                  <FaInstagram />
                </a>

                <a
                  href={socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E60023]"
                >
                  <FaPinterestP />
                </a>

                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#25D366] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

            {/* Explore */}

            <div>

              <h3 className="text-xl font-semibold">
                Explore
              </h3>

              <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">

                {/* Navigation */}

                <div>

                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-400">
                    Pages
                  </h4>

                  <ul className="space-y-4">

                    {navigation
                      .filter((item) => item.status !== "hidden")
                      .map((item) => {

                        if (item.status !== "live") {
                          return (
                            <li
                              key={item.name}
                              className="flex items-center gap-3 text-stone-500"
                            >
                              <span>{item.name}</span>

                              <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold text-amber-700">
                                Soon
                              </span>

                            </li>
                          );
                        }

                        return (
                          <li key={item.href}>

                            <Link
                              href={item.href}
                              className="text-stone-300 transition hover:text-pink-400"
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

                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-400">
                    Collections
                  </h4>

                  <ul className="space-y-4">

                    {collections.map((collection) => {

                      if (collection.status !== "live") {
                        return (
                          <li
                            key={collection.title}
                            className="flex items-center gap-3 text-stone-500"
                          >
                            <span>{collection.title}</span>

                            <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold text-amber-700">
                              Soon
                            </span>

                          </li>
                        );
                      }

                      return (
                        <li key={collection.href}>

                          <Link
                            href={collection.href}
                            className="text-stone-300 transition hover:text-pink-400"
                          >
                            {collection.title}
                          </Link>

                        </li>
                      );

                    })}

                  </ul>

                </div>

              </div>

            </div>

            {/* Contact */}

                        <div>

              <h3 className="text-xl font-semibold">
                Get in Touch
              </h3>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <p className="text-lg font-semibold">
                  Need a Custom Artwork?
                </p>

                <p className="mt-3 leading-7 text-stone-300">
                  We'd love to create something unique for your home.
                  Reach out and we'll help you choose the perfect size,
                  colours and design.
                </p>

                {/* Address */}

                <div className="mt-8 flex items-start gap-4">

                  <div className="mt-1 rounded-full bg-pink-600/20 p-2 text-pink-400">
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <p className="font-medium text-white">
                      Location
                    </p>

                    <p className="mt-1 text-sm leading-6 text-stone-300">
                      {company.city},
                      <br />
                      {company.state}, {company.country}
                    </p>

                  </div>

                </div>

                {/* Email */}

                <div className="mt-6 flex items-start gap-4">

                  <div className="mt-1 rounded-full bg-pink-600/20 p-2 text-pink-400">
                    <FaEnvelope />
                  </div>

                  <div>

                    <p className="font-medium text-white">
                      Email
                    </p>

                    <a
                      href={socialLinks.email}
                      className="mt-1 block text-sm text-stone-300 transition hover:text-pink-400"
                    >
                      {company.email}
                    </a>

                  </div>

                </div>

                {/* WhatsApp Button */}

                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D] hover:shadow-xl"
                >
                  <FaWhatsapp />

                  Start Your Custom Order

                </a>

                <p className="mt-4 text-center text-xs text-stone-400">
                  Usually responds within 24 hours
                </p>

              </div>

            </div>

          </div>

        </FadeUp>

        {/* Divider */}

        <div className="my-16 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col gap-6 text-center text-sm text-stone-400 lg:flex-row lg:items-center lg:justify-between">

          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex justify-center gap-8">

            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

          <p>
            Handcrafted with ❤️ in {company.city}
          </p>

        </div>

      </div>

    </footer>
  );
}