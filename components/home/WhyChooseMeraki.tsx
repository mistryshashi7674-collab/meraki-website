import { features } from "@/lib/features";
import FadeUp from "@/components/animations/FadeUp";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";

export default function WhyChooseMeraki() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}

        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              Why Choose Meraki?
            </span>

            <h2 className="mt-6 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Handmade Art That Tells Your Story
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              Every artwork is thoughtfully designed to add warmth, personality
              and timeless beauty to your home.
            </p>
          </div>
        </FadeUp>

        {/* Cards */}

        <Stagger>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <StaggerItem key={feature.title}>
                  <div className="group h-full rounded-[28px] border border-stone-200 bg-[var(--surface)] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 hover:shadow-2xl">
                    <div className="inline-flex rounded-2xl bg-pink-100 p-4 text-pink-600 transition duration-300 group-hover:scale-110">
                      <Icon size={34} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
