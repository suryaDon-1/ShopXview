import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ShoppingBag, Eye, Star } from "lucide-react";

import { fetchProducts } from "../../features/product/productSlice.js";
import { addtocart } from "../../features/cart/cartSlice.js";
import toast from "react-hot-toast";

function RelatedProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { category, id } = useParams();

  const { products, productsLoading } = useSelector(
    (state) => state.product,
  );

  // FETCH PRODUCTS
  useEffect(() => {
    if (category) {
      dispatch(fetchProducts({ category }));
    }
  }, [dispatch, category]);

  // REMOVE CURRENT PRODUCT
  const relatedProducts =
    products?.filter((product) => product._id !== id) || [];

  // ADD TO CART
  const handleCart = (e, product) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/login");
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
      toast.error("Failed to add product");
    }
  };

  // LOADING
  if (productsLoading) {
    return (
      <div className="mt-20 text-center text-gray-500 dark:text-gray-400">
        Loading related products...
      </div>
    );
  }

  // NO PRODUCTS
  if (relatedProducts.length === 0) {
    return (
      <div className="mt-20 text-center text-gray-500 dark:text-gray-400">
        No related products found
      </div>
    );
  }

  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black dark:text-white">
          You may also like
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
        {relatedProducts.slice(0, 4).map((product) => (
          <div
            key={product._id}
            className="
              group
              rounded-3xl
              transition-all duration-300
            "
          >
            {/* IMAGE */}
            <Link
              to={`/product/${product._id}/${product.category}`}
              className="block"
            >
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-2xl

                  bg-gray-100 dark:bg-zinc-900

                  border border-gray-200 dark:border-zinc-800
                "
              >
                {/* PRODUCT IMAGE */}
                <img
                  src={product.images?.[0]?.url}
                  alt={product.title}
                  className={`
                    h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                    ${product.stock === 0 ? "opacity-60" : ""}
                  `}
                />

                {/* BADGES */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1.5 z-10">
                  {/* DISCOUNT */}
                  {product.discountprice && product.price && (
                    <span
                      className="
                        px-2 py-1
                        text-[9px] sm:text-[10px]
                        font-semibold
                        rounded-md

                        bg-red-500
                        text-white
                      "
                    >
                      -
                      {Math.round(
                        ((product.price - product.discountprice) /
                          product.price) *
                          100,
                      )}
                      %
                    </span>
                  )}

                  {/* SOLD OUT */}
                  {product.stock === 0 && (
                    <span
                      className="
                        px-2 py-1
                        text-[9px] sm:text-[10px]
                        font-semibold
                        rounded-md

                        bg-black dark:bg-white
                        text-white dark:text-black
                      "
                    >
                      Sold out
                    </span>
                  )}
                </div>

                {/* ACTIONS */}
                <div
                  className="
                    absolute
                    left-2 right-2 bottom-2
                    sm:left-3 sm:right-3 sm:bottom-3

                    flex gap-2

                    opacity-100 sm:opacity-0
                    sm:translate-y-3

                    transition-all duration-300

                    sm:group-hover:translate-y-0
                    sm:group-hover:opacity-100
                  "
                >
                  {/* QUICK ADD */}
                  <button
                    onClick={(e) => handleCart(e, product)}
                    className="
                      flex-1
                      h-9 sm:h-10

                      rounded-full

                      bg-white/95 dark:bg-black/90
                      backdrop-blur-md

                      border border-gray-200 dark:border-zinc-700

                      text-[11px] sm:text-xs
                      font-semibold

                      text-black dark:text-white

                      flex items-center justify-center gap-1.5

                      transition-colors duration-300

                      hover:bg-black hover:text-white
                      dark:hover:bg-white dark:hover:text-black
                    "
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span className="hidden xs:block">Quick add</span>
                  </button>

                  {/* VIEW */}
                  <Link
                    to={`/product/${product._id}/${product.category}`}
                    className="
                      h-9 w-9 sm:h-10 sm:w-10
                      shrink-0

                      rounded-full

                      bg-white/95 dark:bg-black/90
                      backdrop-blur-md

                      border border-gray-200 dark:border-zinc-700

                      text-black dark:text-white

                      grid place-items-center

                      transition-colors duration-300

                      hover:bg-black hover:text-white
                      dark:hover:bg-white dark:hover:text-black
                    "
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Link>

            {/* INFO */}
            <div className="mt-3 sm:mt-4 flex items-start justify-between gap-2">
              {/* LEFT */}
              <div className="min-w-0 flex-1">
                {/* BRAND */}
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 truncate">
                  {product.brand}
                </p>

                {/* TITLE */}
                <Link
                  to={`/product/${product._id}/${product.category}`}
                  className="
                    block mt-1

                    text-sm sm:text-base
                    font-semibold

                    text-black dark:text-white

                    truncate

                    transition-colors duration-300

                    hover:text-gray-600
                    dark:hover:text-gray-300
                  "
                >
                  {product.title}
                </Link>

                {/* RATING */}
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />

                  <span className="font-medium text-black dark:text-white">
                    4.5
                  </span>

                  <span>(120)</span>
                </div>
              </div>

              {/* PRICE */}
              <div className="text-right shrink-0">
                <p className="text-sm sm:text-base font-bold text-black dark:text-white">
                  ₹{product.discountprice}
                </p>

                <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 line-through">
                  ₹{product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;