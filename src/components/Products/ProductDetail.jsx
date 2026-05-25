import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../features/product/productSlice.js";
import RelatedProducts from "./RelatedProducts.jsx";
import { addtocart } from "../../features/cart/cartSlice.js";
import toast from "react-hot-toast";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";

function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, category } = useParams();

  const { user } = useSelector((state) => state.auth);

  const { productDetails, productLoading } = useSelector(
    (state) => state.product,
  );

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  // ADD TO CART
  const handleCart = (productDetails) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/siginin");
      return;
    }

    try {
      dispatch(
        addtocart({
          productId: productDetails._id,
          data: productDetails,
        }),
      );

      toast.success("Added to cart 🛒");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add to cart");
    }
  };

  // BUY NOW
  const handleBuyNow = (product) => {
    if (!user) {
      toast.error("Please login buy Product");
      navigate("/siginin");
      return;
    }

    navigate("/checkout", {
      state: {
        selectedProducts: [
          {
            product,
            quantity: 1,
          },
        ],
        selectedTotal: product.discountprice || product.price,
      },
    });
  };

  // LOADING
  if (productLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
        <p className="text-base sm:text-lg font-semibold text-black dark:text-white">
          Loading product...
        </p>
      </div>
    );
  }

  // NOT FOUND
  if (!productDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
        <p className="text-base sm:text-lg font-semibold text-black dark:text-white">
          No product found
        </p>
      </div>
    );
  }

  const images = productDetails.images || [];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14">
          {/* LEFT */}
          <div className="xl:col-span-7">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-[90px_1fr] gap-4 sm:gap-5">
              {/* THUMBNAILS */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide pb-1">
                {images.map((img, index) => (
                  <button
                    key={img._id || index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      shrink-0
                      w-16 h-16 sm:w-20 sm:h-20
                      rounded-2xl overflow-hidden
                      border-2 transition-all duration-300
                      bg-white dark:bg-zinc-900
                      ${
                        selectedImage === index
                          ? "border-black dark:border-white scale-105"
                          : "border-gray-200 dark:border-zinc-700 opacity-70 hover:opacity-100"
                      }
                    `}
                  >
                    <img
                      src={img.url}
                      alt="product"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* MAIN IMAGE */}
              <div
                className="
                  relative overflow-hidden rounded-3xl
                  border border-gray-200 dark:border-zinc-800
                  bg-gray-100 dark:bg-zinc-900
                  aspect-square
                  w-full
                "
              >
                <img
                  src={images[selectedImage]?.url}
                  alt={productDetails.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="xl:col-span-5">
            <div className="xl:sticky xl:top-24">
              {/* BRAND */}
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                {productDetails.brand}
              </p>

              {/* TITLE */}
              <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black leading-tight tracking-tight text-black dark:text-white">
                {productDetails.title}
              </h1>

              {/* RATING */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500" />
                  ))}
                </div>

                <span className="font-semibold text-sm sm:text-base">4.8</span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  • 312 reviews
                </span>
              </div>

              {/* PRICE */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-black dark:text-white">
                  ₹{productDetails.discountprice}
                </span>

                <span className="text-base sm:text-lg line-through text-gray-400 dark:text-gray-500">
                  ₹{productDetails.price}
                </span>

                <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold">
                  Save{" "}
                  {Math.round(
                    ((productDetails.price - productDetails.discountprice) /
                      productDetails.price) *
                      100,
                  )}
                  %
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
                {productDetails.description}
              </p>

              {/* META */}
              <div className="mt-6 space-y-3">
                <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                  <span className="font-semibold text-black dark:text-white">
                    Category:
                  </span>

                  <span className="text-gray-600 dark:text-gray-300">
                    {productDetails.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                  <span className="font-semibold text-black dark:text-white">
                    Stock:
                  </span>

                  <span className="text-gray-600 dark:text-gray-300">
                    {productDetails.stock} Available
                  </span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* ADD TO CART */}
                <button
                  onClick={() => handleCart(productDetails)}
                  className="
      w-full h-14 sm:h-15

      rounded-2xl

      bg-black dark:bg-white
      text-white dark:text-black

      border border-black dark:border-white

      text-sm sm:text-base
      font-semibold
      tracking-wide

      transition-colors duration-300

      hover:bg-white hover:text-black
      dark:hover:bg-black dark:hover:text-white

      active:scale-[0.98]

      flex items-center justify-center

      shadow-sm
    "
                >
                  Add to Cart
                </button>

                {/* BUY NOW */}
                <button
                  onClick={() => handleBuyNow(productDetails)}
                  className="
      w-full h-14 sm:h-15

      rounded-2xl

      bg-blue-600 dark:bg-blue-500
      text-white

      border border-blue-600 dark:border-blue-500

      text-sm sm:text-base
      font-semibold
      tracking-wide

      transition-colors duration-300

      hover:bg-blue-700
      dark:hover:bg-blue-600

      active:scale-[0.98]

      flex items-center justify-center

      shadow-sm
    "
                >
                  Buy Now
                </button>
              </div>

              {/* FEATURES */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-zinc-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* SHIPPING */}
                  <div
                    className="
                      rounded-2xl p-4
                      border border-gray-200 dark:border-zinc-800
                      bg-gray-50 dark:bg-zinc-900
                      transition-all duration-300
                      hover:shadow-lg
                      hover:-translate-y-1
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          w-11 h-11 rounded-full
                          bg-white dark:bg-black
                          border border-gray-200 dark:border-zinc-700
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <Truck
                          size={18}
                          className="text-black dark:text-white"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">
                          Free Shipping
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Over ₹120 orders
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RETURNS */}
                  <div
                    className="
                      rounded-2xl p-4
                      border border-gray-200 dark:border-zinc-800
                      bg-gray-50 dark:bg-zinc-900
                      transition-all duration-300
                      hover:shadow-lg
                      hover:-translate-y-1
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          w-11 h-11 rounded-full
                          bg-white dark:bg-black
                          border border-gray-200 dark:border-zinc-700
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <RotateCcw
                          size={18}
                          className="text-black dark:text-white"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">
                          Easy Returns
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          30-day policy
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WARRANTY */}
                  <div
                    className="
                      rounded-2xl p-4
                      border border-gray-200 dark:border-zinc-800
                      bg-gray-50 dark:bg-zinc-900
                      transition-all duration-300
                      hover:shadow-lg
                      hover:-translate-y-1
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          w-11 h-11 rounded-full
                          bg-white dark:bg-black
                          border border-gray-200 dark:border-zinc-700
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <ShieldCheck
                          size={18}
                          className="text-black dark:text-white"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-sm text-black dark:text-white">
                          Warranty
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          2-year coverage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-14 sm:mt-20">
          <RelatedProducts category={category} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
