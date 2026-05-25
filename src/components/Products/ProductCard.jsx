// components/ProductCard.jsx

import { ShoppingBag, Eye, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { addtocart } from "../../features/cart/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleCart = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/siginin");
      return;
    }

    try {
      dispatch(
        addtocart({
          productId: product._id,
          data: product,
        }),
      );

      toast.success("Added to cart 🛒");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div className="group relative w-full">
      {/* IMAGE */}
      <Link to={`/product/${product._id}/${product.category}`}>
        <div
          className="
            relative overflow-hidden rounded-2xl sm:rounded-3xl
            aspect-[4/5]

            bg-gray-100 dark:bg-gray-900
            border border-gray-200 dark:border-gray-800

            transition-all duration-300
            hover:shadow-xl dark:hover:shadow-black/30
          "
        >
          {/* IMAGE */}
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="
              h-full w-full object-cover

              transition-transform duration-700
              group-hover:scale-[1.05]
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-black/0 group-hover:bg-black/10
              transition-all duration-300
            "
          />

          {/* BADGES */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span
                className="
                  px-3 py-1 rounded-full
                  bg-black text-white
                  dark:bg-white dark:text-black

                  text-[10px] font-semibold uppercase
                  shadow-md
                "
              >
                New
              </span>
            )}

            {product.discount && (
              <span
                className="
                  px-3 py-1 rounded-full
                  bg-red-500 text-white

                  text-[10px] font-semibold uppercase
                  shadow-md
                "
              >
                -{product.discount}%
              </span>
            )}
          </div>

          {/* HOVER ACTIONS */}
          <div
            className="
              absolute inset-x-3 bottom-3 z-20

              flex items-center gap-2

              translate-y-5 opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100

              transition-all duration-300
            "
          >
            {/* QUICK ADD */}
            <button
              onClick={handleCart}
              className="
                flex-1 h-11

                rounded-full

                bg-white text-black
                dark:bg-black dark:text-white

                border border-gray-200 dark:border-gray-700

                text-xs sm:text-sm font-semibold

                flex items-center justify-center gap-2

                transition-all duration-300

                hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black

                hover:scale-[1.02]
                hover:shadow-lg

                active:scale-95
              "
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden xs:inline">Quick add</span>
            </button>

            {/* VIEW */}
            <Link
              to={`/product/${product._id}/${product.category}`}
              className="
                h-11 w-11 shrink-0

                grid place-items-center

                rounded-full

                bg-white text-black
                dark:bg-black dark:text-white

                border border-gray-200 dark:border-gray-700

                transition-all duration-300

                hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black

                hover:scale-105
                active:scale-95
              "
            >
              <Eye className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Link>

      {/* INFO */}
      <div className="mt-4 flex items-start justify-between gap-3">
        {/* LEFT */}
        <div className="min-w-0 flex-1">
          {/* BRAND */}
          <p
            className="
              text-[10px] sm:text-[11px]
              uppercase tracking-[0.22em]

              text-gray-500 dark:text-gray-400

              truncate
            "
          >
            {product.brand}
          </p>

          {/* PRODUCT NAME */}
          <Link
            to={`/product/${product._id}/${product.category}`}
            className="
              block mt-1

              text-sm sm:text-base
              font-semibold

              text-gray-900 dark:text-white

              line-clamp-2

              transition-colors duration-200

              hover:text-black/70
              dark:hover:text-white/70
            "
          >
            {product.name}
          </Link>

          {/* RATING */}
          <div
            className="
              mt-2 flex items-center gap-1.5

              text-xs sm:text-sm

              text-gray-500 dark:text-gray-400
            "
          >
            <Star
              className="
                h-3.5 w-3.5

                fill-yellow-400
                text-yellow-400
              "
            />

            <span className="font-medium text-gray-900 dark:text-white">
              {product.rating || 4.5}
            </span>

            <span>
              ({product.reviews || 0})
            </span>
          </div>
        </div>

        {/* PRICE */}
        <div className="shrink-0 text-right">
          <p
            className="
              text-base sm:text-lg
              font-black

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
  );
}

export default ProductCard;