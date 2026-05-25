import React from "react";
import {
  RotateCcw,
  ShieldCheck,
  Package,
  CreditCard,
  AlertCircle,
} from "lucide-react";

function Returns() {
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
            <RotateCcw className="h-8 w-8 sm:h-10 sm:w-10 text-white dark:text-black" />
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
            Returns &{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Refund Policy
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
            We want you to love your purchase. If you’re not completely
            satisfied, we offer a simple and transparent return and refund
            process.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* RETURN ELIGIBILITY */}
          <div
            className="
              rounded-3xl
              p-6 sm:p-8

              border border-gray-200 dark:border-zinc-800

              bg-gray-50 dark:bg-zinc-900
            "
          >
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-black dark:bg-white

                flex items-center justify-center
              "
            >
              <ShieldCheck className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Return Eligibility
            </h2>

            <ul className="mt-5 space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Item must be unused and in original condition
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Original packaging should remain intact
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Return request must be made within 7 days
              </li>
            </ul>
          </div>

          {/* NON RETURNABLE */}
          <div
            className="
              rounded-3xl
              p-6 sm:p-8

              border border-gray-200 dark:border-zinc-800

              bg-gray-50 dark:bg-zinc-900
            "
          >
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-black dark:bg-white

                flex items-center justify-center
              "
            >
              <Package className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Non-Returnable Items
            </h2>

            <ul className="mt-5 space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Gift cards
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Discounted clearance products
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Personalized or custom-made products
              </li>
            </ul>
          </div>

          {/* REFUND PROCESS */}
          <div
            className="
              rounded-3xl
              p-6 sm:p-8

              border border-gray-200 dark:border-zinc-800

              bg-gray-50 dark:bg-zinc-900
            "
          >
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-black dark:bg-white

                flex items-center justify-center
              "
            >
              <CreditCard className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Refund Process
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
              Once your return is received and inspected, we’ll notify you
              regarding approval status. Approved refunds are processed within
              5–7 business days to your original payment method.
            </p>
          </div>

          {/* HOW TO RETURN */}
          <div
            className="
              rounded-3xl
              p-6 sm:p-8

              border border-gray-200 dark:border-zinc-800

              bg-gray-50 dark:bg-zinc-900
            "
          >
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-black dark:bg-white

                flex items-center justify-center
              "
            >
              <RotateCcw className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              How to Request a Return
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
              Contact our support team with your order ID and reason for the
              return request. Our team will guide you through each step of the
              process.
            </p>
          </div>
        </div>

        {/* NOTE */}
        <div
          className="
            mt-10

            rounded-3xl

            border border-yellow-200 dark:border-yellow-900/40

            bg-yellow-50 dark:bg-yellow-500/10

            p-5 sm:p-6

            flex items-start gap-4
          "
        >
          <div
            className="
              shrink-0

              w-12 h-12

              rounded-2xl

              bg-black dark:bg-white

              flex items-center justify-center
            "
          >
            <AlertCircle className="h-5 w-5 text-white dark:text-black" />
          </div>

          <div>
            <h3 className="font-bold text-black dark:text-white">
              Important Note
            </h3>

            <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Shipping charges are non-refundable unless the product received is
              defective or an incorrect item was delivered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Returns;