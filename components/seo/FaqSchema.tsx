const faqs = [
  {
    question: "Do you create custom artwork?",
    answer:
      "Yes. Every artwork can be customised to your preferred size, colours, theme and décor style. We create unique handmade pieces designed especially for your home or office.",
  },
  {
    question: "Do you ship across India?",
    answer:
      "Yes. We offer secure Pan India shipping with careful packaging to ensure your artwork reaches you safely.",
  },
  {
    question: "How long does a custom order take?",
    answer:
      "Most custom artwork is completed within 7 to 21 days depending on the size and complexity of the design.",
  },
  {
    question: "What types of artwork do you create?",
    answer:
      "We specialise in Handmade Mandala Art, Lippan Art, Acrylic Paintings and personalised wall décor.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can order directly through our website or contact us via WhatsApp or Instagram for customised artwork.",
  },
];

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}