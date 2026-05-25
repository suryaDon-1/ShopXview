import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import FiltersPanel from "../components/FilterPannel.jsx";
import ListingHeader from "../components/ListingHeader.jsx";
import ProductCard from "../components/Products/ProductCard.jsx";

import { fetchProducts } from "../features/product/productSlice.js";

function Shop() {
  const dispatch = useDispatch();

  const { products, loading, error, pages } = useSelector(
    (state) => state.product
  );

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // URL PARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const brand = searchParams.get("brand") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const currentPage = Number(searchParams.get("page")) || 1;

  // FETCH PRODUCTS
  useEffect(() => {
    dispatch(
      fetchProducts({
        search,
        category,
        brand,
        minPrice,
        maxPrice,
        page: currentPage,
      })
    );
  }, [
    dispatch,
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    currentPage,
  ]);

  // UPDATE FILTERS
  const updateParams = (newParams) => {
    const params = Object.fromEntries(searchParams.entries());

    if ("category" in newParams) {
      newParams.category
        ? (params.category = newParams.category)
        : delete params.category;
    }

    if ("brand" in newParams) {
      newParams.brand
        ? (params.brand = newParams.brand)
        : delete params.brand;
    }

    if ("minPrice" in newParams) {
      newParams.minPrice
        ? (params.minPrice = newParams.minPrice)
        : delete params.minPrice;
    }

    if ("maxPrice" in newParams) {
      newParams.maxPrice
        ? (params.maxPrice = newParams.maxPrice)
        : delete params.maxPrice;
    }

    if ("search" in newParams) {
      newParams.search
        ? (params.search = newParams.search)
        : delete params.search;
    }

    // RESET PAGE
    params.page = 1;

    setSearchParams(params);
  };

  // PAGINATION
  const goToPage = (newPage) => {
    const params = Object.fromEntries(searchParams.entries());

    params.page = newPage;

    setSearchParams(params);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        min-h-screen

        bg-white dark:bg-black

        text-black dark:text-white

        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* HEADER */}
        <ListingHeader
          title="All Products"
          count={products?.length || 0}
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mt-8">
          {/* DESKTOP FILTERS */}
          <aside className="hidden lg:block lg:col-span-3">
            <div
              className="
                sticky top-24

                rounded-3xl

                border border-gray-200 dark:border-zinc-800

                bg-gray-50 dark:bg-zinc-950

                p-6
              "
            >
              <FiltersPanel
                updateParams={updateParams}
                category={category}
                brand={brand}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
            </div>
          </aside>

          {/* PRODUCTS */}
          <section className="lg:col-span-9">
            {/* TOP BAR */}
            <div
              className="
                flex items-center justify-between

                mb-6 pb-5

                border-b border-gray-200 dark:border-zinc-800
              "
            >
              {/* MOBILE FILTER BUTTON */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="
                  lg:hidden

                  h-11 px-5

                  rounded-full

                  border border-gray-300 dark:border-zinc-700

                  bg-white dark:bg-zinc-950

                  text-sm font-medium

                  flex items-center gap-2

                  transition-all duration-300

                  hover:bg-gray-100
                  dark:hover:bg-zinc-900
                "
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>

              {/* PRODUCTS COUNT */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {products?.length || 0} Products Found
              </p>
            </div>

            {/* LOADING */}
            {loading ? (
              <div
                className="
                  min-h-[300px]

                  flex items-center justify-center
                "
              >
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="
                      h-12 w-12

                      rounded-full

                      border-4 border-gray-300 dark:border-zinc-700
                      border-t-black dark:border-t-white

                      animate-spin
                    "
                  />

                  <p className="text-gray-500 dark:text-gray-400">
                    Loading products...
                  </p>
                </div>
              </div>
            ) : error ? (
              // ERROR
              <div
                className="
                  min-h-[300px]

                  rounded-3xl

                  border border-red-200 dark:border-red-900/40

                  bg-red-50 dark:bg-red-500/10

                  flex items-center justify-center

                  p-6
                "
              >
                <p className="text-red-600 dark:text-red-400">
                  Error: {error}
                </p>
              </div>
            ) : products?.length === 0 ? (
              // EMPTY
              <div
                className="
                  min-h-[300px]

                  rounded-3xl

                  border border-gray-200 dark:border-zinc-800

                  bg-gray-50 dark:bg-zinc-950

                  flex items-center justify-center

                  p-6
                "
              >
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  No products found matching your filters.
                </p>
              </div>
            ) : (
              <>
                {/* PRODUCTS GRID */}
                <div
                  className="
                    grid

                    grid-cols-2
                    md:grid-cols-2
                    xl:grid-cols-3

                    gap-4 sm:gap-5 lg:gap-6
                  "
                >
                  {products.map((p) => (
                    <ProductCard
                      key={p._id || p.id}
                      product={p}
                    />
                  ))}
                </div>

                {/* PAGINATION */}
                {pages > 1 && (
                  <div
                    className="
                      mt-12 sm:mt-16

                      flex items-center justify-center gap-3 sm:gap-5

                      flex-wrap
                    "
                  >
                    {/* PREV */}
                    <button
                      disabled={currentPage === 1}
                      onClick={() => goToPage(currentPage - 1)}
                      className="
                        h-11 sm:h-12
                        px-4 sm:px-5

                        rounded-full

                        border border-gray-300 dark:border-zinc-700

                        bg-white dark:bg-zinc-950

                        text-sm font-medium

                        flex items-center gap-2

                        transition-all duration-300

                        hover:bg-gray-100
                        dark:hover:bg-zinc-900

                        disabled:opacity-40
                        disabled:cursor-not-allowed
                      "
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Prev
                    </button>

                    {/* PAGE */}
                    <div
                      className="
                        h-11 sm:h-12
                        px-5 sm:px-6

                        rounded-full

                        border border-gray-300 dark:border-zinc-700

                        bg-gray-50 dark:bg-zinc-950

                        text-sm font-semibold

                        flex items-center justify-center
                      "
                    >
                      Page {currentPage} of {pages}
                    </div>

                    {/* NEXT */}
                    <button
                      disabled={currentPage === pages}
                      onClick={() => goToPage(currentPage + 1)}
                      className="
                        h-11 sm:h-12
                        px-4 sm:px-5

                        rounded-full

                        border border-gray-300 dark:border-zinc-700

                        bg-white dark:bg-zinc-950

                        text-sm font-medium

                        flex items-center gap-2

                        transition-all duration-300

                        hover:bg-gray-100
                        dark:hover:bg-zinc-900

                        disabled:opacity-40
                        disabled:cursor-not-allowed
                      "
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      <div
        className={`
          fixed inset-0 z-50 lg:hidden
          transition-all duration-300
          ${
            mobileFiltersOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setMobileFiltersOpen(false)}
          className="
            absolute inset-0
            bg-black/50
            backdrop-blur-sm
          "
        />

        {/* DRAWER */}
        <div
          className={`
            absolute top-0 left-0

            h-full w-[85%] max-w-sm

            bg-white dark:bg-black

            border-r border-gray-200 dark:border-zinc-800

            overflow-y-auto

            transition-transform duration-300

            ${
              mobileFiltersOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          {/* HEADER */}
          <div
            className="
              flex items-center justify-between

              px-5 py-5

              border-b border-gray-200 dark:border-zinc-800
            "
          >
            <h2 className="text-lg font-bold">
              Filters
            </h2>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="
                h-10 w-10

                rounded-full

                border border-gray-300 dark:border-zinc-700

                flex items-center justify-center

                hover:bg-gray-100
                dark:hover:bg-zinc-900

                transition-colors duration-300
              "
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* FILTER CONTENT */}
          <div className="p-5">
            <FiltersPanel
              updateParams={updateParams}
              category={category}
              brand={brand}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;