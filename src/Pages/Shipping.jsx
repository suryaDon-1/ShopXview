import React from "react";
import {
  Truck,
  Clock3,
  PackageCheck,
  BadgeIndianRupee,
  AlertCircle,
} from "lucide-react";

function Shipping() {
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
            <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-white dark:text-black" />
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
            Shipping{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Policy
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
            We work hard to deliver your orders quickly, safely, and reliably
            across all locations with smooth tracking and secure packaging.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* DELIVERY TIME */}
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
              <Clock3 className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Delivery Time
            </h2>

            <ul className="mt-5 space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Metro Cities: 3–5 business days
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Other Locations: 5–7 business days
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                Remote Areas: 7–10 business days
              </li>
            </ul>
          </div>

          {/* SHIPPING CHARGES */}
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
              <BadgeIndianRupee className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Shipping Charges
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
              Enjoy free shipping on all orders above ₹999. A small delivery fee
              may apply to orders below this amount depending on your location.
            </p>
          </div>

          {/* ORDER TRACKING */}
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
              <PackageCheck className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Order Tracking
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
              Once your order has been shipped, you’ll receive a tracking ID via
              email or SMS so you can monitor your delivery status in real time.
            </p>
          </div>

          {/* PROCESSING */}
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
              <Truck className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Order Processing
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
              All orders are processed within 1–3 business days before dispatch.
              Orders placed on weekends or holidays may require additional
              processing time.
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
              Delivery times may vary during festivals, sales events, weather
              conditions, or high-demand seasons.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shipping;