import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Delivery usually takes 3–7 business days depending on your location.",
    },
    {
      q: "Can I cancel my order?",
      a: "Yes, you can cancel your order before it is shipped from our warehouse.",
    },
    {
      q: "How do I track my order?",
      a: "Once your order is shipped, you will receive a tracking ID via email or SMS.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept UPI, debit/credit cards, net banking, and wallets.",
    },
    {
      q: "What if I receive a damaged product?",
      a: "You can request a replacement or refund within 7 days of delivery with proof of damage.",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* HERO */}
      <section
        className="
          relative overflow-hidden

          py-20 sm:py-24 lg:py-32
          px-4 sm:px-6

          bg-gray-50 dark:bg-zinc-950

          border-b border-gray-200 dark:border-zinc-800
        "
      >
        {/* BLUR */}
        <div
          className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[500px] h-[500px]
            rounded-full
            bg-gray-200/50 dark:bg-white/5
            blur-3xl
            pointer-events-none
          "
        />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* ICON */}
          <div
            className="
              mx-auto
              w-16 h-16 sm:w-20 sm:h-20

              rounded-3xl

              bg-black dark:bg-white

              flex items-center justify-center
            "
          >
            <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white dark:text-black" />
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-8
              text-4xl sm:text-5xl lg:text-7xl
              font-black
              leading-tight
              tracking-tight

              text-black dark:text-white
            "
          >
            Frequently Asked{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Questions
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6 sm:mt-8
              max-w-3xl mx-auto

              text-base sm:text-lg lg:text-xl
              leading-relaxed

              text-gray-600 dark:text-gray-400
            "
          >
            Find answers to common questions about orders, shipping, payments,
            returns, and customer support.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-3xl

                  border border-gray-200 dark:border-zinc-800

                  bg-gray-50 dark:bg-zinc-900

                  transition-all duration-300
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full

                    px-5 sm:px-7
                    py-5 sm:py-6

                    flex items-center justify-between
                    gap-4

                    text-left

                    transition-colors duration-300

                    hover:bg-gray-100
                    dark:hover:bg-zinc-800
                  "
                >
                  <span
                    className="
                      text-sm sm:text-base lg:text-lg
                      font-semibold

                      text-black dark:text-white
                    "
                  >
                    {item.q}
                  </span>

                  <div
                    className="
                      shrink-0

                      w-9 h-9

                      rounded-full

                      bg-white dark:bg-black

                      border border-gray-200 dark:border-zinc-700

                      flex items-center justify-center
                    "
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-black dark:text-white" />
                    ) : (
                      <Plus className="h-4 w-4 text-black dark:text-white" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        px-5 sm:px-7
                        pb-5 sm:pb-6

                        text-sm sm:text-base
                        leading-relaxed

                        text-gray-600 dark:text-gray-400
                      "
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER NOTE */}
        <div
          className="
            mt-12

            rounded-3xl

            border border-gray-200 dark:border-zinc-800

            bg-gray-50 dark:bg-zinc-900

            p-6 sm:p-8

            text-center
          "
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Still have questions? Our support team is always ready to help you.
          </p>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
            Support Hours: Monday – Saturday, 9:00 AM – 7:00 PM
          </p>
        </div>
      </section>
    </div>
  );
}

export default FAQ;