import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-gray-200 dark:border-white/10
        bg-white dark:bg-zinc-950
        transition-colors
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-12 sm:py-16
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10 lg:gap-14
            mb-12 sm:mb-14
          "
        >
          {/* LEFT */}
          <div className="lg:col-span-5">
            {/* LOGO */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <span
                className="
                  h-11 w-11
                  rounded-2xl
                  bg-black dark:bg-white
                  text-white dark:text-black
                  grid place-items-center
                  font-black text-lg
                  shadow-md
                  transition-transform
                  group-hover:scale-105
                "
              >
                S
              </span>

              <div>
                <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
                  ShopX
                </h2>

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Premium Store
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-md
                text-sm sm:text-base
                leading-relaxed
                text-gray-600 dark:text-gray-400
              "
            >
              Considered objects for everyday wear. Designed in small batches,
              made to last a decade.
            </p>

            {/* NEWSLETTER */}
            {/* NEWSLETTER */}
            <form
              className="
    mt-8
    flex flex-col sm:flex-row
    w-full max-w-md
    gap-3
  "
            >
              {/* INPUT */}
              <input
                type="email"
                placeholder="Enter your email"
                className="
      w-full
      h-12
      px-4
      rounded-full

      bg-gray-100 dark:bg-gray-900
      border border-gray-200 dark:border-gray-800

      text-gray-900 dark:text-white
      text-sm

      outline-none
      transition-all duration-200

      focus:ring-2
      focus:ring-black
      dark:focus:ring-white/40
    "
              />

              {/* BUTTON */}
              <button
                className="
      w-full sm:w-auto
      shrink-0

      h-12
      px-6
      rounded-full

      bg-black
      dark:bg-white

      text-white
      dark:text-black

      text-sm font-medium

      flex items-center justify-center gap-2

      transition-all duration-200

      hover:opacity-80
      hover:scale-[1.02]

      active:scale-[0.97]

      focus:outline-none
      focus:ring-2
      focus:ring-black
      dark:focus:ring-white/40

      group
    "
              >
                Subscribe
                <ArrowUpRight
                  className="
        h-4 w-4
        transition-transform
        group-hover:translate-x-0.5
      "
                />
              </button>
            </form>
          </div>

          {/* LINKS */}
          <div
            className="
              lg:col-span-7
              grid
              grid-cols-2 sm:grid-cols-3
              gap-8 sm:gap-10
            "
          >
            {[
              {
                title: "Shop",
                links: [
                  {
                    name: "New arrivals",
                    path: "/shop?filter=new",
                  },
                  {
                    name: "Electronics",
                    path: "/shop?category=Electronics",
                  },
                  {
                    name: "Sneakers",
                    path: "/shop?category=sneakers",
                  },
                ],
              },
              {
                title: "Help",
                links: [
                  { name: "Shipping", path: "/shipping" },
                  { name: "Returns", path: "/returns" },
                  { name: "FAQ", path: "/faq" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About", path: "/about" },
                  { name: "Careers", path: "/careers" },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                {/* TITLE */}
                <h4
                  className="
                    mb-4
                    text-[11px] sm:text-xs
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    text-gray-500 dark:text-gray-400
                  "
                >
                  {section.title}
                </h4>

                {/* LINKS */}
                <ul className="space-y-3">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="
                          inline-block
                          relative
                          text-sm
                          text-gray-600 dark:text-gray-400
                          hover:text-black
                          dark:hover:text-white
                          transition-colors
                          after:absolute
                          after:left-0
                          after:-bottom-0.5
                          after:h-[1px]
                          after:w-0
                          after:bg-black
                          dark:after:bg-white
                          after:transition-all
                          after:duration-300
                          hover:after:w-full
                        "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-6 sm:pt-8
            border-t
            border-gray-200 dark:border-white/10
            flex flex-col md:flex-row
            items-center justify-between
            gap-5
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-center md:text-left
              text-xs sm:text-sm
              text-gray-500 dark:text-gray-400
            "
          >
            © 2026 ShopX. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-3">
            {[FiInstagram, FiTwitter, FiYoutube].map((Icon, i) => (
              <button
                key={i}
                className="
                    h-11 w-11
                    rounded-full
                    border
                    border-gray-200 dark:border-white/10
                    bg-white dark:bg-zinc-900
                    grid place-items-center
                    text-gray-600 dark:text-gray-400
                    transition-all
                    duration-200
                    hover:bg-black
                    dark:hover:bg-white
                    hover:text-white
                    dark:hover:text-black
                    hover:scale-110
                    active:scale-95
                  "
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
