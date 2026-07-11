import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--hero-bg)]">
      {/* Background Glow */}

      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold tracking-wide text-pink-700">
              Handmade with ❤️ in Chennai
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-7xl">

              Handmade

              <span className="block text-pink-600">
                Mandala, Lippan
              </span>

              & Acrylic Art

            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg lg:text-xl">
              Transform your walls with handcrafted Mandala Art,
              Lippan Art and Acrylic Paintings that are thoughtfully
              designed to add warmth, elegance and personality to
              every home.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/mandala-art"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700 hover:shadow-xl"
              >
                Explore Collection

                <FaArrowRight />
              </Link>

              <a
                href="https://wa.me/918007801123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#25D366] px-8 py-4 font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
              >
                <FaWhatsapp />

                Custom Artwork
              </a>

            </div>

            {/* Trust Badges */}

            <div className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-5">

              <div className="rounded-full bg-white px-5 py-3 text-sm font-medium shadow-md">
                ✨ Handmade
              </div>

              <div className="rounded-full bg-white px-5 py-3 text-sm font-medium shadow-md">
                🎨 Custom Orders
              </div>

              <div className="rounded-full bg-white px-5 py-3 text-sm font-medium shadow-md">
                🚚 Pan India Shipping
              </div>

              <div className="rounded-full bg-white px-5 py-3 text-sm font-medium shadow-md">
                ⭐ Premium Quality
              </div>

            </div>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-stone-200 pt-8">

              <div>

                <h3 className="text-3xl font-bold text-pink-600">
                  100+
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Happy Customers
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-pink-600">
                  100%
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Handmade
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-pink-600">
                  ★★★★★
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Customer Rating
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-pink-300/20 to-yellow-200/20 blur-2xl" />

            <Image
              src="/images/hero-art.jpg"
              alt="Handmade Mandala Art by Meraki by Nandita"
              width={650}
              height={700}
              priority
              className="relative w-full rounded-[32px] shadow-2xl transition duration-700 hover:scale-[1.02]"
            />

            {/* Floating Card */}

            <div className="absolute bottom-6 left-6 rounded-3xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur">

              <p className="text-xs uppercase tracking-widest text-stone-500">
                Featured
              </p>

              <h3 className="mt-1 text-lg font-bold text-stone-900">
                Custom Mandala Art
              </h3>

              <p className="mt-1 text-sm text-stone-600">
                Designed exclusively for your home.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}