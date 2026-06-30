import {
  Brush,
  Palette,
  Heart,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Brush,
    title: "100% Handmade",
    description:
      "Every Mandala artwork is carefully handcrafted by Nandita without using mass-produced designs.",
  },
  {
    icon: Palette,
    title: "Fully Customisable",
    description:
      "Choose your preferred size, colours and design to perfectly match your home décor.",
  },
  {
    icon: Heart,
    title: "Made with Passion",
    description:
      "Each artwork is created with patience, creativity and attention to every small detail.",
  },
  {
    icon: Truck,
    title: "Pan India Shipping",
    description:
      "Secure packaging and reliable delivery ensure your artwork reaches you safely anywhere in India.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Choose Meraki by Nandita?
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Every artwork is thoughtfully designed to create a meaningful
          connection with your space.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-[#FFF9F5] rounded-2xl p-8 text-center shadow hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-5">
                  <Icon
                    size={42}
                    className="text-pink-600"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}