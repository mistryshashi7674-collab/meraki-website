import Image from "next/image";
import {
  FaHeart,
  FaPalette,
  FaLeaf,
} from "react-icons/fa";

import FadeUp from "@/components/animations/FadeUp";
import SlideIn from "@/components/animations/SlideIn";

export default function MeetArtist() {
  return (
    <section className="bg-[#FFF9F5] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <SlideIn direction="left">

            <div className="relative">

              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-pink-200/30 to-yellow-200/30 blur-3xl" />

              <Image
                src="/images/nandita.jpg"
                alt="Artist Nandita"
                width={700}
                height={800}
                className="relative rounded-[36px] shadow-2xl object-cover"
              />

              {/* Floating Card */}

              <div className="absolute bottom-8 left-8 rounded-3xl bg-white/95 px-6 py-5 shadow-2xl backdrop-blur">

                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  Artist
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Nandita
                </h3>

                <p className="text-sm text-stone-500">
                  Founder • Meraki by Nandita
                </p>

              </div>

            </div>

          </SlideIn>

          {/* RIGHT CONTENT */}

          <div>

            <FadeUp>

              <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
                Meet the Artist
              </span>

            </FadeUp>

            <FadeUp delay={0.1}>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[var(--text-primary)] lg:text-5xl">

                Every Artwork Begins
                <br />

                <span className="text-pink-600">
                  With a Story.
                </span>

              </h2>

            </FadeUp>

            <FadeUp delay={0.2}>

              <p className="mt-8 text-lg leading-8 text-[var(--text-secondary)]">

                Hi, I’m <strong>Nandita</strong>, the artist behind
                <strong> Meraki by Nandita.</strong>

                My journey started with a simple love for colours,
                patterns and handmade creations.

                Today, every Mandala, Lippan Art and Acrylic Painting
                is carefully handcrafted with patience,
                creativity and attention to every tiny detail.

              </p>

            </FadeUp>

            <FadeUp delay={0.3}>

              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">

                I believe beautiful art doesn’t just decorate a wall—
                it creates warmth, starts conversations and becomes
                part of your family’s story.

                That’s why every artwork is created as if it were
                going into my own home.

              </p>

            </FadeUp>

            {/* VALUES */}

            <div className="mt-12 space-y-6">

              <FadeUp delay={0.4}>

                <div className="flex items-start gap-5">

                  <div className="rounded-2xl bg-pink-100 p-4 text-pink-600">
                    <FaPalette size={24} />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Handcrafted Excellence
                    </h3>

                    <p className="mt-2 leading-7 text-[var(--text-secondary)]">
                      Every piece is individually handcrafted instead
                      of mass produced.
                    </p>

                  </div>

                </div>

              </FadeUp>

              <FadeUp delay={0.5}>

                <div className="flex items-start gap-5">

                  <div className="rounded-2xl bg-yellow-100 p-4 text-yellow-600">
                    <FaHeart size={24} />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Made with Passion
                    </h3>

                    <p className="mt-2 leading-7 text-[var(--text-secondary)]">
                      Every brushstroke reflects love, patience and
                      creativity.
                    </p>

                  </div>

                </div>

              </FadeUp>

              <FadeUp delay={0.6}>

                <div className="flex items-start gap-5">

                  <div className="rounded-2xl bg-green-100 p-4 text-green-600">
                    <FaLeaf size={24} />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Custom Made For You
                    </h3>

                    <p className="mt-2 leading-7 text-[var(--text-secondary)]">
                      Every artwork can be personalised to suit your
                      home, colours and style.
                    </p>

                  </div>

                </div>

              </FadeUp>

            </div>

            {/* QUOTE */}

            <FadeUp delay={0.8}>

              <div className="mt-12 rounded-[28px] border border-pink-100 bg-white p-8 shadow-lg">

                <p className="text-xl italic leading-9 text-stone-700">

                  “I don’t just paint artwork.

                  I create pieces that become a part of someone’s
                  home, memories and everyday life.”

                </p>

                <p className="mt-6 font-semibold text-pink-600">
                  — Nandita
                </p>

              </div>

            </FadeUp>

          </div>

        </div>

      </div>
    </section>
  );
}
