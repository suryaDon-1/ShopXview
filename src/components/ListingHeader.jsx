import { Link } from "react-router-dom";

function ListingHeader({
  title = "All Products",
  count = 0,
}) {
  return (
    <div
      className="
        mb-8 sm:mb-10
        rounded-3xl
        border
        border-gray-200 dark:border-white/10
        bg-white dark:bg-zinc-900
        p-5 sm:p-7 lg:p-8
        shadow-sm
      "
    >
      {/* BREADCRUMB */}
      <p
        className="
          flex flex-wrap items-center gap-1
          text-[11px] sm:text-xs
          uppercase
          tracking-[0.22em]
          text-gray-500 dark:text-gray-400
        "
      >
        <Link
          to="/"
          className="
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
        >
          Home
        </Link>

        <span>/</span>

        <span className="text-gray-700 dark:text-gray-300">
          Shop
        </span>
      </p>

      {/* TITLE */}
      <h1
        className="
          mt-3
          font-black
          tracking-tight
          leading-tight
          text-3xl sm:text-4xl lg:text-5xl
          text-gray-900 dark:text-white
          break-words
        "
      >
        {title}
      </h1>

      {/* COUNT */}
      <div
        className="
          mt-4
          inline-flex items-center
          rounded-full
          bg-gray-100 dark:bg-zinc-800
          px-4 py-2
          text-sm
          text-gray-600 dark:text-gray-300
        "
      >
        <span className="font-semibold text-gray-900 dark:text-white mr-1">
          {count}
        </span>

        item{count !== 1 && "s"}
      </div>
    </div>
  );
}

export default ListingHeader;