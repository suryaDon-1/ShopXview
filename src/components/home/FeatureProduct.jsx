import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { ArrowRight, Star } from "lucide-react";
import { fetchProducts } from "../../features/product/productSlice.js";

export default function FeaturedProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const featuredProducts = products?.slice(0, 4) || [];

  const handleViewDetails = (category) => {
    navigate(
      `/shop?category=${encodeURIComponent(category)}`
    );
  };

  return (
    <section
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        mt-16 sm:mt-20 lg:mt-24
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
            Featured
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
            Best Sneakers
          </h2>
        </div>

        {/* SHOP ALL */}
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
          Shop All

          <ArrowRight
            className="
              w-4 h-4
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* LOADING */}
      {loading && (
        <div
          className="
            flex items-center justify-center
            py-16
            text-gray-500 dark:text-gray-400
          "
        >
          Loading products...
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div
          className="
            rounded-2xl
            border border-red-200 dark:border-red-500/20
            bg-red-50 dark:bg-red-500/10
            p-4
            text-red-500 dark:text-red-400
          "
        >
          Failed to load products
        </div>
      )}

      {/* PRODUCTS GRID */}
      {!loading && !error && (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6 lg:gap-7
          "
        >
          {featuredProducts.map((product) => (
            <div
              key={product._id || product.id}
              className="group"
            >
              {/* CARD */}
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200 dark:border-white/10
                  bg-white dark:bg-zinc-900
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-xl
                "
              >
                {/* IMAGE SECTION */}
                <div
                  className="
                    relative
                    overflow-hidden
                    bg-gray-100 dark:bg-zinc-800
                    aspect-[4/5]
                  "
                >
                  <img
                    src={
                      product.images?.[0]?.url ||
                      "/placeholder.png"
                    }
                    alt={product.name}
                    className="
                      w-full h-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/0
                      group-hover:bg-black/10
                      transition-all duration-300
                    "
                  />

                  {/* BADGES */}
                  <div
                    className="
                      absolute top-4 left-4
                      flex flex-col gap-2
                    "
                  >
                    {product.isNew && (
                      <span
                        className="
                          px-3 py-1
                          rounded-full
                          bg-black dark:bg-white
                          text-white dark:text-black
                          text-[10px]
                          font-semibold
                          uppercase
                        "
                      >
                        New
                      </span>
                    )}

                    {product.discount && (
                      <span
                        className="
                          px-3 py-1
                          rounded-full
                          bg-red-500
                          text-white
                          text-[10px]
                          font-semibold
                          uppercase
                        "
                      >
                        -{product.discount}%
                      </span>
                    )}

                    {product.soldOut && (
                      <span
                        className="
                          px-3 py-1
                          rounded-full
                          bg-gray-700 dark:bg-zinc-700
                          text-white
                          text-[10px]
                          font-semibold
                          uppercase
                        "
                      >
                        Sold Out
                      </span>
                    )}
                  </div>

                  {/* BUTTON */}
                  <div
                    className="
                      absolute inset-x-4 bottom-4
                      opacity-100 sm:opacity-0
                      translate-y-0 sm:translate-y-4
                      sm:group-hover:opacity-100
                      sm:group-hover:translate-y-0
                      transition-all duration-300
                    "
                  >
                    <button
                      onClick={() =>
                        handleViewDetails(
                          product.category
                        )
                      }
                      className="
                        w-full h-11
                        rounded-full
                        bg-white dark:bg-black
                        text-black dark:text-white
                        text-sm font-semibold
                        flex items-center justify-center gap-2
                        transition-all duration-300
                        hover:bg-black
                        hover:text-white
                        dark:hover:bg-white
                        dark:hover:text-black
                      "
                    >
                      Explore More

                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-4 sm:p-5">
                  <div
                    className="
                      flex items-start justify-between
                      gap-4
                    "
                  >
                    {/* LEFT */}
                    <div className="min-w-0">
                      {/* BRAND */}
                      <div
                        className="
                          flex items-center gap-1.5
                          text-[11px]
                          uppercase
                          tracking-[0.22em]
                          text-gray-500 dark:text-gray-400
                        "
                      >
                        <Star className="w-3 h-3 fill-current" />

                        <span className="truncate">
                          {product.brand}
                        </span>
                      </div>

                      {/* PRODUCT NAME */}
                      <Link
                        to={`/product/${
                          product._id || product.id
                        }`}
                        className="
                          block
                          mt-2
                          text-sm sm:text-base
                          font-semibold
                          text-gray-900 dark:text-white
                          line-clamp-2
                          hover:text-gray-600
                          dark:hover:text-gray-300
                          transition-colors
                        "
                      >
                        {product.name}
                      </Link>
                    </div>

                    {/* PRICE */}
                    <div className="text-right shrink-0">
                      <p
                        className="
                          text-base sm:text-lg
                          font-bold
                          text-gray-900 dark:text-white
                        "
                      >
                        ₹{product.price}
                      </p>

                      {product.oldPrice && (
                        <p
                          className="
                            text-xs
                            text-gray-400 dark:text-gray-500
                            line-through
                          "
                        >
                          ₹{product.oldPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}