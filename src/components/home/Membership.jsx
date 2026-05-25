
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Membership() {
  return (
    <section
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        mt-16 sm:mt-20 lg:mt-24
      "
    >
      <div
        className="
          relative overflow-hidden
          rounded-3xl
          border
          border-gray-200 dark:border-white/10
          bg-white dark:bg-zinc-900
          text-black dark:text-white
          shadow-sm
          transition-colors
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              relative z-10
              p-6 sm:p-10 lg:p-16
              flex flex-col justify-center
            "
          >
            {/* LABEL */}
            <span
              className="
                text-[11px] sm:text-xs
                uppercase
                tracking-[0.25em]
                font-medium
                text-gray-500 dark:text-gray-400
              "
            >
              Membership
            </span>

            {/* TITLE */}
            <h3
              className="
                mt-4
                text-3xl sm:text-4xl lg:text-5xl
                font-black
                tracking-tight
                leading-[1.05]
                text-gray-900 dark:text-white
                max-w-xl
              "
            >
              Lumen Circle.
              <br />
              Early access to drops.
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-lg
                text-sm sm:text-base
                leading-relaxed
                text-gray-600 dark:text-gray-300
              "
            >
              Join free to get first dibs on
              limited releases, member-only
              colorways, and complimentary
              repairs.
            </p>

            {/* FEATURES */}
            <div
              className="
                mt-6
                flex flex-wrap
                gap-3
              "
            >
              {[
                "Exclusive Drops",
                "Priority Access",
                "Free Repairs",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-4 py-2
                    rounded-full
                    text-xs sm:text-sm
                    font-medium
                    border
                    border-gray-200 dark:border-white/10
                    bg-gray-100 dark:bg-zinc-800
                    text-gray-700 dark:text-gray-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <Link
              to="/shop"
              className="
                mt-8
                inline-flex items-center justify-center gap-2
                h-12
                px-6
                rounded-full
                w-fit
                bg-black dark:bg-white
                text-white dark:text-black
                text-sm font-semibold
                transition-all duration-300
                hover:bg-gray-800
                dark:hover:bg-gray-200
                hover:scale-[1.02]
                active:scale-[0.98]
                group
              "
            >
              Join the Circle

              <ArrowRight
                className="
                  w-4 h-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              min-h-[300px]
              sm:min-h-[400px]
              lg:min-h-full
            "
          >
            <img
              src="https://images.unsplash.com/photo-1756277558413-aa1c8c011a71"
              alt="Membership"
              className="
                absolute inset-0
                h-full w-full
                object-cover
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/30
                via-black/10
                to-transparent
                dark:from-black/50
              "
            />

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                bottom-5 left-5 right-5
                sm:bottom-8 sm:left-8 sm:right-auto
                backdrop-blur-xl
                bg-white/10
                border border-white/10
                rounded-2xl
                p-4 sm:p-5
                text-white
                max-w-xs
              "
            >
              <p
                className="
                  text-xs uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                Member Benefit
              </p>

              <h4
                className="
                  mt-2
                  text-lg sm:text-xl
                  font-bold
                "
              >
                Early access to every new drop.
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  text-white/80
                  leading-relaxed
                "
              >
                Be first in line before public
                release launches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Membership;