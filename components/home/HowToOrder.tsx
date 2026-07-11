import { MessageCircle, PackageCheck, Palette } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";

const steps = [
  {
    icon: MessageCircle,
    title: "Share Your Idea",
    description:
      "Send us your preferred size, colours, room photo or inspiration on WhatsApp.",
  },
  {
    icon: Palette,
    title: "Approve the Design",
    description:
      "We help refine the details so your artwork feels right for your space.",
  },
  {
    icon: PackageCheck,
    title: "Receive It Safely",
    description:
      "Your handmade piece is carefully packed and shipped anywhere across India.",
  },
];

export default function HowToOrder() {
  const whatsappMessage = encodeURIComponent(
    "Hi Nandita, I would like to discuss a custom artwork for my space.",
  );

  return (
    <section className="bg-[var(--hero-bg)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm">
              Simple, Personal &amp; Handmade
            </span>
            <h2 className="mt-6 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Your Custom Artwork, Made Easy
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
              From your first idea to the final delivery, we make ordering a
              one-of-a-kind piece feel personal and effortless.
            </p>
          </div>
        </FadeUp>

        <Stagger>
          <div className="relative mt-14 grid gap-6 md:grid-cols-3 lg:mt-16">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <StaggerItem key={step.title}>
                  <div className="h-full rounded-[28px] border border-white/80 bg-white/90 p-8 shadow-[0_12px_35px_rgba(236,72,153,0.1)]">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex rounded-2xl bg-pink-100 p-4 text-pink-600">
                        <Icon size={28} aria-hidden="true" />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-pink-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-bold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>

        <FadeUp delay={0.25}>
          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/918007801123?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D] hover:shadow-xl"
            >
              Start a Custom Order on WhatsApp
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
