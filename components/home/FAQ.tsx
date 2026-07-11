"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import FadeUp from "@/components/animations/FadeUp";
import { faqs } from "@/lib/faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}

        <FadeUp>
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
        </FadeUp>

        {/* Accordion */}

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeUp key={faq.question} delay={index * 0.08}>
                <div className="overflow-hidden rounded-3xl border border-stone-200 bg-[var(--surface)] shadow-sm transition-all duration-300 hover:shadow-lg">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-6 text-left transition hover:bg-pink-50"
                  >
                    <span className="pr-4 text-lg font-semibold text-[var(--text-primary)]">
                      {faq.question}
                    </span>

                    <HiChevronDown
                      className={`flex-shrink-0 text-2xl transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
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
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}