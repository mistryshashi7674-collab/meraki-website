import Image from "next/image";
import Link from "next/link";

import FadeUp from "@/components/animations/FadeUp";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import { collections } from "@/lib/collections";

export default function FeaturedCollections() {
  return (
    <section className="bg-[var(--surface)] py-20 lg:py-28">

      <div className="mx-auto max-w-7xl px-6">

        <FadeUp>

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              Handmade Collections
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Explore Our Collections
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every artwork is handcrafted with love, making each piece unique
              and timeless.
            </p>

          </div>

        </FadeUp>

        <Stagger>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            {collections.map((item) => (

              <StaggerItem key={item.title}>

                {item.status === "live" ? (

                  <Link
                    href={item.href}
                    className="group block overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                  >

                    <div className="overflow-hidden">

                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                    </div>

                    <div className="p-8">

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-gray-600">
                        {item.description}
                      </p>

                      <div className="mt-8 inline-flex items-center rounded-full border border-pink-600 px-5 py-2 font-semibold text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                        Explore Collection →
                      </div>

                    </div>

                  </Link>

                ) : (

                  <div className="group overflow-hidden rounded-[32px] bg-white shadow-lg">

                    <div className="relative overflow-hidden">

                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="h-96 w-full object-cover opacity-70"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">

                        <span className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-xl">
                          Coming Soon
                        </span>

                      </div>

                    </div>

                    <div className="p-8">

                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-gray-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                )}

              </StaggerItem>

            ))}

          </div>

        </Stagger>

      </div>

    </section>
  );
}