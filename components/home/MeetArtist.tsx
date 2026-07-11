import Image from "next/image";
import { FaPalette, FaHeart, FaLeaf } from "react-icons/fa";

export default function MeetArtist() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Artist Image */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-r from-pink-200/30 to-yellow-100/30 blur-3xl" />

            <Image
              src="/images/nandita.jpg"
              alt="Nandita - Founder of Meraki by Nandita"
              width={650}
              height={750}
              className="relative w-full rounded-[32px] shadow-2xl object-cover"
            />

            {/* Floating Card */}

            <div className="absolute bottom-6 left-6 rounded-3xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur">

              <p className="text-xs uppercase tracking-widest text-stone-500">
                Founder
              </p>

              <h3 className="mt-1 text-xl font-bold text-stone-900">
                Nandita
              </h3>

              <p className="text-sm text-stone-600">
                Artist • Creator • Dreamer
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              Meet the Artist
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[var(--text-primary)] lg:text-5xl">
              Every artwork begins with a blank canvas and a heartfelt story.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-secondary)]">
              Hi, I'm <strong>Nandita</strong>, the artist behind
              <strong> Meraki by Nandita</strong>.
              Every Mandala, Lippan Art and Acrylic Painting is lovingly
              handcrafted with patience, creativity and attention to detail.
            </p>

            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              My passion is creating artwork that transforms ordinary walls into
              meaningful spaces filled with warmth, elegance and personality.
              Every piece is unique, thoughtfully designed and can be customised
              to match your home and your story.
            </p>

            {/* Values */}

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-5">

                <div className="rounded-2xl bg-pink-100 p-4 text-pink-600">
                  <FaPalette size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-xl text-stone-900">
                    Handcrafted Excellence
                  </h3>

                  <p className="mt-2 text-[var(--text-secondary)] leading-7">
                    Every artwork is individually handcrafted rather than mass
                    produced, making each creation truly one of a kind.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-2xl bg-yellow-100 p-4 text-yellow-600">
                  <FaHeart size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-xl text-stone-900">
                    Created with Love
                  </h3>

                  <p className="mt-2 text-[var(--text-secondary)] leading-7">
                    Every detail is carefully painted with patience, passion and
                    dedication so your artwork becomes part of your home's story.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-2xl bg-green-100 p-4 text-green-600">
                  <FaLeaf size={22} />
                </div>

                <div>

                  <h3 className="font-bold text-xl text-stone-900">
                    Custom Designed
                  </h3>

                  <p className="mt-2 text-[var(--text-secondary)] leading-7">
                    Looking for something unique? I happily create personalised
                    artwork in your preferred colours, size and style.
                  </p>

                </div>

              </div>

            </div>

            {/* Quote */}

            <div className="mt-12 rounded-[28px] border border-pink-100 bg-pink-50 p-8">

              <p className="text-lg italic leading-8 text-stone-700">
                "Art has the power to turn a house into a home. My goal is to
                create pieces that make people smile every time they walk into a
                room."
              </p>

              <p className="mt-5 font-semibold text-pink-600">
                — Nandita
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}