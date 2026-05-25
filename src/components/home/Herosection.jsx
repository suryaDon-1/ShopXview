import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <section
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        pt-6 lg:pt-10
      "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-5 lg:gap-6
        "
      >
        {/* MAIN HERO */}
        <div
          className="
            lg:col-span-8
            relative overflow-hidden
            rounded-3xl
            min-h-[500px] sm:min-h-[580px] lg:min-h-[650px]
            group
            border border-gray-200 dark:border-white/10
            shadow-sm
          "
        >
          {/* IMAGE */}
          <img
            src="https://images.pexels.com/photos/8580765/pexels-photo-8580765.jpeg"
            alt="Fashion Collection"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              group-hover:scale-105
              transition-transform duration-700
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/90
              via-black/40
              to-transparent
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10
              flex flex-col justify-end
              h-full
              p-6 sm:p-10 lg:p-14
              text-white
            "
          >
            <span
              className="
                uppercase
                tracking-[0.3em]
                text-[11px] sm:text-xs
                font-medium
                text-white/80
              "
            >
              FW · Volume 04
            </span>

            <h1
              className="
                mt-4
                text-4xl sm:text-5xl lg:text-7xl
                font-black
                leading-[0.95]
                tracking-tight
                max-w-4xl
              "
            >
              Considered objects, made to outlast trends.
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm sm:text-base lg:text-lg
                leading-relaxed
                text-white/80
              "
            >
              Our 2026 collection is built around a
              single idea: fewer pieces, designed to
              be worn for years.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-8
                flex flex-col sm:flex-row
                gap-4
                w-full sm:w-auto
              "
            >
              <Link
                to="/shop"
                className="
                  inline-flex items-center justify-center gap-2
                  h-12 sm:h-13
                  px-6
                  rounded-full
                  bg-white
                  text-black
                  text-sm font-semibold
                  transition-all duration-300
                  hover:bg-black
                  hover:text-white
                  hover:border-white
                  border border-transparent
                  group/button
                "
              >
                Shop Collection

                <ArrowRight
                  className="
                    w-4 h-4
                    transition-transform
                    group-hover/button:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/shop?category=Apparel"
                className="
                  inline-flex items-center justify-center
                  h-12 sm:h-13
                  px-6
                  rounded-full
                  border border-white/20
                  bg-white/10
                  backdrop-blur-md
                  text-sm font-semibold
                  text-white
                  transition-all duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                Explore Apparel
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div
          className="
            lg:col-span-4
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-1
            gap-5
          "
        >
          {/* CARD 1 */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              min-h-[280px]
              sm:min-h-[320px]
              group
              border border-gray-200 dark:border-white/10
              shadow-sm
            "
          >
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1974&auto=format&fit=crop"
              alt="MacBook Pro M4"
              className="
                absolute inset-0
                w-full h-full
                object-cover
                group-hover:scale-110
                transition-transform duration-700
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-black/80
                via-black/30
                to-transparent
              "
            />

            <div
              className="
                relative z-10
                flex flex-col justify-between
                h-full
                p-6
                text-white
              "
            >
              <span
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  text-white/80
                "
              >
                Editor&apos;s Pick
              </span>

              <div>
                <h3
                  className="
                    text-2xl sm:text-3xl
                    font-bold
                    leading-tight
                    max-w-xs
                  "
                >
                  MacBook Pro M4 Edition.
                </h3>

                <Link
                  to="/shop?brand=Macbook"
                  className="
                    mt-5
                    inline-flex items-center gap-2
                    text-sm font-medium
                    group/link
                  "
                >
                  Discover

                  <ArrowRight
                    className="
                      w-4 h-4
                      transition-transform
                      group-hover/link:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              min-h-[280px]
              sm:min-h-[320px]
              group
              border border-gray-200 dark:border-white/10
              shadow-sm
            "
          >
            <img
              src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1974&auto=format&fit=crop"
              alt="Samsung Galaxy S24 Ultra"
              className="
                absolute inset-0
                w-full h-full
                object-cover
                group-hover:scale-110
                transition-transform duration-700
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-black/80
                via-black/30
                to-transparent
              "
            />

            <div
              className="
                relative z-10
                flex flex-col justify-between
                h-full
                p-6
                text-white
              "
            >
              <span
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  text-white/80
                "
              >
                Limited Drop
              </span>

              <div>
                <h3
                  className="
                    text-2xl sm:text-3xl
                    font-bold
                    leading-tight
                    max-w-xs
                  "
                >
                  Samsung Galaxy S24 Ultra.
                </h3>

                <Link
                  to="/shop?brand=Samsung"
                  className="
                    mt-5
                    inline-flex items-center gap-2
                    text-sm font-medium
                    group/link
                  "
                >
                  Shop Now

                  <ArrowRight
                    className="
                      w-4 h-4
                      transition-transform
                      group-hover/link:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;