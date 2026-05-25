import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

function About() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="
          relative
          py-20 sm:py-24 lg:py-32
          px-4 sm:px-6
          bg-gray-50 dark:bg-zinc-950
          border-b border-gray-200 dark:border-zinc-800
        "
      >
        {/* BACKGROUND BLUR */}
        <div
          className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[500px] h-[500px]
            bg-gray-200/40 dark:bg-white/5
            blur-3xl rounded-full
            pointer-events-none
          "
        />

        <div className="relative max-w-6xl mx-auto text-center">
          {/* SMALL TAG */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full

              border border-gray-300 dark:border-zinc-700

              bg-white/80 dark:bg-zinc-900/70
              backdrop-blur-md

              text-xs sm:text-sm
              font-medium

              text-gray-700 dark:text-gray-300
            "
          >
            <Sparkles className="h-4 w-4" />
            Premium Lifestyle Brand
          </div>

          {/* HEADING */}
          <h1
            className="
              mt-6
              text-4xl sm:text-5xl lg:text-7xl
              font-black
              leading-tight
              tracking-tight

              text-black dark:text-white
            "
          >
            Built for People Who Value{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Quality & Simplicity
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
            ShopX is a modern lifestyle brand focused on premium essentials.
            We create products that are minimal, durable, and thoughtfully
            designed for everyday living.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-10
              flex flex-col sm:flex-row
              items-center justify-center
              gap-4
            "
          >
            <Link
              to="/shop"
              className="
                w-full sm:w-auto
                px-8 py-4

                rounded-full

                bg-black dark:bg-white
                text-white dark:text-black

                text-sm sm:text-base
                font-semibold

                transition-colors duration-300

                hover:bg-gray-800
                dark:hover:bg-gray-200
              "
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="
                w-full sm:w-auto
                px-8 py-4

                rounded-full

                border border-gray-300 dark:border-zinc-700

                bg-white dark:bg-zinc-900

                text-black dark:text-white

                text-sm sm:text-base
                font-semibold

                transition-colors duration-300

                hover:bg-gray-100
                dark:hover:bg-zinc-800
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4">
              Our Story
            </p>

            <h2
              className="
                text-3xl sm:text-4xl lg:text-5xl
                font-black
                leading-tight

                text-black dark:text-white
              "
            >
              Simplicity Meets Long-Term Quality
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              ShopX started with one simple idea — everyday products should feel
              premium without becoming overly complicated.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              We noticed that many brands focus only on aesthetics or only on
              durability. Rarely both. That inspired us to create products that
              balance modern design with practical everyday use.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Today, ShopX serves customers who value timeless style,
              sustainability, and products designed to last for years — not just
              seasons.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section
        className="
          py-16 sm:py-20 lg:py-28
          px-4 sm:px-6

          bg-gray-50 dark:bg-zinc-950

          border-y border-gray-200 dark:border-zinc-800
        "
      >
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-4">
              Our Values
            </p>

            <h2
              className="
                text-3xl sm:text-4xl lg:text-5xl
                font-black

                text-black dark:text-white
              "
            >
              What Drives Us Forward
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
            {/* CARD 1 */}
            <div
              className="
                rounded-3xl
                p-6 sm:p-8

                border border-gray-200 dark:border-zinc-800

                bg-white dark:bg-zinc-900

                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-xl
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

              <h3 className="mt-6 text-xl font-bold text-black dark:text-white">
                Quality First
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                We never compromise on craftsmanship, materials, or long-term
                durability.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="
                rounded-3xl
                p-6 sm:p-8

                border border-gray-200 dark:border-zinc-800

                bg-white dark:bg-zinc-900

                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-xl
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
                <Sparkles className="h-6 w-6 text-white dark:text-black" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-black dark:text-white">
                Minimal Design
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                Clean, timeless products designed to fit naturally into everyday
                life.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="
                rounded-3xl
                p-6 sm:p-8

                border border-gray-200 dark:border-zinc-800

                bg-white dark:bg-zinc-900

                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-xl
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
                <HeartHandshake className="h-6 w-6 text-white dark:text-black" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-black dark:text-white">
                Customer Focus
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                Every decision we make is centered around delivering a better
                customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;