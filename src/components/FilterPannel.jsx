// components/FiltersPanel.jsx

const categories = [
  "Sneakers",
  "Apparel",
  "Accessories",
  "Lifestyle",
  "Electronics",
];

const brands = [
  "Atelier",
  "Northwave",
  "Forme",
  "Halcyon",
  "Studio Nine",
  "Logitech",
];

function FiltersPanel({
  updateParams,
  category,
  brand,
  maxPrice,
  minPrice,
}) {
  // CATEGORY CLICK
  const handleCategory = (value) => {
    updateParams({
      category: value === category ? "" : value,
    });
  };

  // BRAND CLICK
  const handleBrand = (value) => {
    updateParams({
      brand: value === brand ? "" : value,
    });
  };

  // PRICE CHANGE
  const handlePrice = (value) => {
    updateParams({
      maxPrice: value,
    });
  };

  // CLEAR ALL FILTERS
  const clearFilters = () => {
    updateParams({
      category: "",
      brand: "",
      minPrice: "",
      maxPrice: "",
      search: "",
    });
  };

  return (
    <aside
      className="
        w-full
        rounded-3xl
        border
        border-gray-200 dark:border-white/10
        bg-white dark:bg-zinc-900
        p-5 sm:p-6
        space-y-8
        shadow-sm
      "
    >
      {/* CATEGORY */}
      <div>
        <h3
          className="
            mb-4
            text-[11px] sm:text-xs
            uppercase
            tracking-[0.25em]
            font-semibold
            text-gray-500 dark:text-gray-400
          "
        >
          Category
        </h3>

        <ul className="space-y-2">
          {/* ALL PRODUCTS */}
          <li>
            <button
              onClick={() =>
                updateParams({
                  category: "",
                })
              }
              className={`
                w-full text-left
                px-3 py-2.5
                rounded-xl
                text-sm
                transition-all
                ${
                  category === ""
                    ? "bg-black dark:bg-white text-white dark:text-black font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }
              `}
            >
              All Products
            </button>
          </li>

          {/* CATEGORY LIST */}
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => handleCategory(cat)}
                className={`
                  w-full text-left
                  px-3 py-2.5
                  rounded-xl
                  text-sm
                  transition-all
                  ${
                    category === cat
                      ? "bg-black dark:bg-white text-white dark:text-black font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                  }
                `}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* PRICE */}
      <div>
        <h3
          className="
            mb-4
            text-[11px] sm:text-xs
            uppercase
            tracking-[0.25em]
            font-semibold
            text-gray-500 dark:text-gray-400
          "
        >
          Price
        </h3>

        <div className="px-1">
          {/* RANGE */}
          <input
            type="range"
            min="100"
            max="12000"
            step="10"
            value={maxPrice || 500}
            onChange={(e) => handlePrice(e.target.value)}
            className="
              w-full
              accent-black
              dark:accent-white
              cursor-pointer
            "
          />

          {/* PRICE VALUES */}
          <div
            className="
              mt-3
              flex items-center justify-between
              gap-2
              text-[11px] sm:text-xs
              text-gray-500 dark:text-gray-400
            "
          >
            <span>₹100</span>

            <span
              className="
                px-3 py-1
                rounded-full
                bg-gray-100 dark:bg-zinc-800
                text-gray-700 dark:text-gray-200
                font-medium
                whitespace-nowrap
              "
            >
              Under ₹{maxPrice || 500}
            </span>

            <span>₹12000</span>
          </div>
        </div>
      </div>

      {/* BRAND */}
      <div>
        <h3
          className="
            mb-4
            text-[11px] sm:text-xs
            uppercase
            tracking-[0.25em]
            font-semibold
            text-gray-500 dark:text-gray-400
          "
        >
          Brand
        </h3>

        <ul className="space-y-2">
          {brands.map((b) => (
            <li key={b}>
              <label
                className="
                  flex items-center gap-3
                  px-3 py-2.5
                  rounded-xl
                  cursor-pointer
                  hover:bg-gray-100
                  dark:hover:bg-zinc-800
                  transition-all
                "
              >
                <input
                  type="checkbox"
                  checked={brand === b}
                  onChange={() => handleBrand(b)}
                  className="
                    accent-black
                    dark:accent-white
                    w-4 h-4
                  "
                />

                <span
                  className={`
                    text-sm
                    transition-colors
                    ${
                      brand === b
                        ? "font-semibold text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  `}
                >
                  {b}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* CLEAR BUTTON */}
      <button
        onClick={clearFilters}
        className="
          w-full
          py-3
          rounded-2xl
          border
          border-red-200 dark:border-red-500/20
          bg-red-50 dark:bg-red-500/10
          text-xs sm:text-sm
          uppercase
          tracking-[0.2em]
          font-semibold
          text-red-500 dark:text-red-400
          hover:bg-red-500
          hover:text-white
          transition-all
        "
      >
        Clear All Filters
      </button>
    </aside>
  );
}

export default FiltersPanel;