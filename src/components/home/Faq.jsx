import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, simply return it in its original packaging for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping usually takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination.",
    },
    {
      question: "Do you offer international warranty?",
      answer:
        "Yes, most of our electronic products come with a 1-year global warranty valid in over 50 countries.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email which you can use to track your package on our website.",
    },
  ];

  return (
    <section className="py-12 bg-base-200 -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 rounded-3xl">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">FAQ</p>
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-2xl"
            >
              <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;