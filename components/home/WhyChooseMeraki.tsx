import {
  FaPalette,
  FaRegHeart,
  FaShippingFast,
  FaMedal,
  FaPaintBrush,
  FaHome,
} from "react-icons/fa";

import FadeUp from "@/components/animations/FadeUp";
import Stagger, {
  StaggerItem,
} from "@/components/animations/Stagger";

const features = [
  {
    icon: <FaPalette size={30} />,
    title: "100% Handmade",
    description:
      "Every artwork is carefully handcrafted, ensuring no two pieces are exactly alike.",
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: "Custom Designs",
    description:
      "Choose your preferred colours, size and style to perfectly match your interiors.",
  },
  {
    icon: <FaRegHeart size={30} />,
    title: "Made with Love",
    description:
      "Every brushstroke reflects passion, creativity and attention to the smallest details.",
  },
  {
    icon: <FaShippingFast size={30} />,
    title: "Pan India Shipping",
    description:
      "Secure packaging and reliable delivery so your artwork reaches you safely.",
  },
  {
    icon: <FaHome size={30} />,
    title: "Perfect Home Décor",
    description:
      "Designed to transform living rooms, bedrooms, pooja rooms and offices beautifully.",
  },
  {
    icon: <FaMedal size={30} />,
    title: "Premium Quality",
    description:
      "Only high-quality materials are used for long-lasting beauty and durability.",
  },
];

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
              Every artwork is thoughtfully designed to add warmth,
              personality and timeless beauty to your home.
            </p>

          </div>

        </FadeUp>

        {/* Cards */}

        <Stagger>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (

              <StaggerItem key={feature.title}>

                <div className="group h-full rounded-[28px] border border-stone-200 bg-[var(--surface)] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 hover:shadow-2xl">

                  <div className="inline-flex rounded-2xl bg-pink-100 p-4 text-pink-600 transition duration-300 group-hover:scale-110">

                    {feature.icon}

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                    {feature.description}
                  </p>

                </div>

              </StaggerItem>

            ))}

          </div>

        </Stagger>

      </div>
    </section>
  );
}