"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "Do you create custom artwork?",
    answer:
      "Yes. Every artwork can be customised to your preferred size, colours, theme and décor style. We love creating unique pieces that perfectly complement your home or office.",
  },
  {
    question: "Do you ship across India?",
    answer:
      "Absolutely! We carefully package every handmade artwork and offer Pan India shipping to ensure your order reaches you safely and securely.",
  },
  {
    question: "How long does a custom order take?",
    answer:
      "Depending on the size and complexity of the artwork, custom orders usually take between 7 and 21 days to complete.",
  },
  {
    question: "What types of artwork do you create?",
    answer:
      "We specialise in Mandala Art, Lippan Art, Acrylic Paintings and personalised wall décor for homes, offices and gifting.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can browse our artwork on the website or simply contact us via WhatsApp or Instagram. We'll guide you through sizes, customisation options and delivery.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            FAQs
          </span>

          <h2 className="mt-6 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            Everything you need to know before ordering your handmade artwork.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-[var(--surface)] shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-6 text-left transition hover:bg-pink-50"
                >
                  <span className="text-lg font-semibold text-[var(--text-primary)]">
                    {faq.question}
                  </span>

                  <HiChevronDown
                    className={`text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 leading-8 text-[var(--text-secondary)]">
                      {faq.answer}
                    </p>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}