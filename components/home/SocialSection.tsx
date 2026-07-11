import { FaInstagram, FaPinterestP } from "react-icons/fa";

export default function SocialSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        <div className="rounded-[36px] bg-gradient-to-br from-pink-50 via-white to-yellow-50 border border-pink-100 p-10 sm:p-14 shadow-xl">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              Join Our Creative Journey
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Follow Meraki by Nandita
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Discover behind-the-scenes moments, new artwork, work-in-progress
              videos and handmade creations before anyone else.
            </p>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <a
              href="https://www.instagram.com/meraki_nandita/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-pink-600 px-8 py-5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700 hover:shadow-xl sm:w-auto"
            >
              <FaInstagram size={24} />

              Follow on Instagram
            </a>

            <a
              href="https://www.pinterest.com/nanditathakur29/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-red-600 bg-white px-8 py-5 font-semibold text-red-600 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white hover:shadow-xl sm:w-auto"
            >
              <FaPinterestP size={24} />

              Follow on Pinterest
            </a>

          </div>

          {/* Bottom Stats */}

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-pink-100 pt-10 md:grid-cols-4">

            <div className="text-center">

              <h3 className="text-3xl font-bold text-pink-600">
                100+
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Handmade Pieces
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-3xl font-bold text-pink-600">
                100%
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Handmade
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-3xl font-bold text-pink-600">
                Pan India
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Shipping
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-3xl font-bold text-pink-600">
                Custom
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Orders Welcome
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}