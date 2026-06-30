const features = [
  {
    icon: "🌿",
    title: "100% Handcrafted",
    description:
      "Every artwork is carefully handmade by Nandita with attention to every detail.",
  },
  {
    icon: "🎨",
    title: "Custom Artwork",
    description:
      "Personalised designs made to match your home, office or gifting needs.",
  },
  {
    icon: "🚚",
    title: "Pan India Delivery",
    description: "Secure packaging and reliable shipping across India.",
  },
  {
    icon: "❤️",
    title: "Made With Love",
    description:
      "Each piece is unique and created to bring warmth and beauty into your space.",
  },
];

export default function WhyChooseMeraki() {
  return (
    <section className="py-16 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-pink-500 font-semibold uppercase tracking-widest">
            WHY MERAKI
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Why Choose
            <br />
            Meraki by Nandita
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Every artwork is thoughtfully handcrafted to transform ordinary
            spaces into beautiful homes filled with personality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
