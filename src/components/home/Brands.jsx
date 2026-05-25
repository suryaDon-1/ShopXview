import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "Sony",
    products: 120,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    link: "/shop?brand=sony",
  },
  {
    name: "Boat",
    products: 90,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    link: "/shop?brand=boat",
  },
  {
    name: "Samsung",
    products: 200,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    link: "/shop?brand=samsung",
  },
  {
    name: "Logitech",
    products: 80,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    link: "/shop?brand=Logitech",
  },
];

export default function BrandSection() {
  return (
    <section
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        mt-16 sm:mt-20
      "
    >
      {/* HEADER */}
      <div
        className="
          flex flex-col sm:flex-row
          sm:items-end sm:justify-between
          gap-5
          mb-8 sm:mb-10
        "
      >
        {/* LEFT */}
        <div>
          <p
            className="
              text-[11px] sm:text-xs
              uppercase
              tracking-[0.25em]
              font-semibold
              text-gray-500 dark:text-gray-400
            "
          >
            Brands
          </p>

          <h2
            className="
              mt-3
              text-3xl sm:text-4xl lg:text-5xl
              font-black
              tracking-tight
              leading-tight
              text-gray-900 dark:text-white
            "
          >
            Shop by Brand
          </h2>
        </div>

        {/* VIEW ALL */}
        <Link
          to="/shop"
          className="
            inline-flex items-center gap-2
            text-sm font-semibold
            text-gray-700 dark:text-gray-300
            hover:text-black dark:hover:text-white
            transition-colors
            group
            w-fit
          "
        >
          View All

          <ArrowRight
            className="
              w-4 h-4
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5 lg:gap-6
        "
      >
        {brands.map((brand, index) => (
          <Link
            key={index}
            to={brand.link}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              aspect-[4/5]
              border
              border-gray-200 dark:border-white/10
              bg-gray-100 dark:bg-zinc-900
              shadow-sm
            "
          >
            {/* IMAGE */}
            <img
              src={brand.image}
              alt={brand.name}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/90
                via-black/30
                to-transparent
              "
            />

            {/* CONTENT */}
            <div
              className="
                absolute inset-x-0 bottom-0
                p-5 sm:p-6
                flex items-end justify-between
                gap-4
                text-white
              "
            >
              {/* TEXT */}
              <div className="min-w-0">
                <h3
                  className="
                    text-xl sm:text-2xl
                    font-bold
                    tracking-tight
                    truncate
                  "
                >
                  {brand.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs sm:text-sm
                    text-white/80
                  "
                >
                  {brand.products}+ products
                </p>
              </div>

              {/* ARROW */}
              <div
                className="
                  shrink-0
                  flex items-center justify-center
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  bg-white/15
                  backdrop-blur-md
                  transition-all duration-300
                  group-hover:bg-white
                  group-hover:text-black
                  group-hover:scale-110
                "
              >
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* HOVER SHADOW */}
            <div
              className="
                absolute inset-0
                rounded-3xl
                ring-0 ring-black/5 dark:ring-white/10
                group-hover:ring-4
                transition-all duration-300
              "
            />
          </Link>
        ))}
      </div>
    </section>
  );
}