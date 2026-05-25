import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, Lock } from "lucide-react";
import {
  clearcart,
  deleteitem,
  getorcretecart,
  updatecart,
} from "../features/cart/cartSlice.js";
import { useNavigate } from "react-router-dom";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart, loading } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showclearcart, setshowclearcart] = useState(false);

  useEffect(() => {
    if (!user) return;
    dispatch(getorcretecart());
  }, [dispatch, user]);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (!cart?.item) return;

    if (selectedItems.length === cart.item.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.item.map((item) => item._id));
    }
  };

  const selectedTotal = cart?.item
    ?.filter((item) => selectedItems.includes(item._id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const selectedProducts = cart.item.filter((item) =>
      selectedItems.includes(item._id)
    );

    navigate("/checkout", {
      state: { selectedProducts, selectedTotal },
    });
  };

  /* LOADING */
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full py-10">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      </div>
    );
  }

  /* NOT LOGGED IN */
  if (!user) {
    return (
      <div className="p-6 sm:p-8 text-center">
        <div
          className="
            w-16 h-16 mx-auto
            rounded-2xl
            bg-black dark:bg-white
            flex items-center justify-center
          "
        >
          <Lock className="text-white dark:text-black" size={28} />
        </div>

        <h2 className="font-semibold text-lg mt-4 text-gray-900 dark:text-white">
          Login Required
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Please login to view your cart
        </p>

        <button
          onClick={() => navigate("/siginin")}
          className="
            mt-5
            px-5 py-3
            rounded-2xl
            bg-black dark:bg-white
            text-white dark:text-black
            text-sm font-medium
            hover:scale-[1.02]
            transition-all
          "
        >
          Login
        </button>
      </div>
    );
  }

  /* EMPTY CART */
  if (!cart || cart.item?.length === 0) {
    return (
      <div className="p-6 sm:p-8 text-center">
        <div className="text-5xl">🛒</div>

        <h2 className="font-semibold text-lg mt-4 text-gray-900 dark:text-white">
          Cart is Empty
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Add items to see them here
        </p>

        <button
          onClick={() => navigate("/")}
          className="
            mt-5
            px-5 py-3
            rounded-2xl
            bg-black dark:bg-white
            text-white dark:text-black
            text-sm font-medium
            hover:scale-[1.02]
            transition-all
          "
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
          Cart
        </h2>

        <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          <input
            type="checkbox"
            checked={
              selectedItems.length === cart?.item?.length &&
              cart?.item?.length > 0
            }
            onChange={handleSelectAll}
            className="accent-black dark:accent-white"
          />
          All
        </label>
      </div>

      {/* ITEMS */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {cart.item.map((item) => {
          const isSelected = selectedItems.includes(item._id);

          return (
            <div
              key={item._id}
              className={`
                flex flex-col sm:flex-row
                gap-4
                p-3 sm:p-4
                rounded-2xl
                border
                bg-white dark:bg-zinc-900
                border-gray-200 dark:border-white/10
                transition-all
                ${
                  isSelected
                    ? "ring-2 ring-black dark:ring-white"
                    : ""
                }
              `}
            >
              {/* TOP */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelect(item._id)}
                  className="accent-black dark:accent-white"
                />

                <img
                  src={
                    item.product?.images?.[0]?.url ||
                    "/placeholder.png"
                  }
                  alt={item.product?.name}
                  className="
                    w-16 h-16 sm:w-20 sm:h-20
                    object-cover
                    rounded-xl
                    shrink-0
                  "
                />

                {/* PRODUCT INFO */}
                <div className="flex-1 min-w-0">
                  <h2
                    className="
                      text-sm sm:text-base
                      font-medium
                      text-gray-800 dark:text-white
                      line-clamp-2
                    "
                  >
                    {item.product?.name}
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center justify-between sm:justify-end gap-3">
                
                {/* QTY */}
                <div
                  className="
                    flex items-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-200 dark:border-white/10
                    bg-white dark:bg-zinc-800
                  "
                >
                  {/* DECREASE */}
                  <button
                    className="
                      px-3 py-2
                      text-sm
                      hover:bg-gray-100
                      dark:hover:bg-zinc-700
                      transition
                      disabled:opacity-40
                    "
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      dispatch(
                        updatecart({
                          productId: item.product._id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                  >
                    -
                  </button>

                  {/* SELECT */}
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updatecart({
                          productId: item.product._id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                    className="
                      px-2 py-2
                      text-xs sm:text-sm
                      outline-none
                      bg-white dark:bg-zinc-800
                      text-gray-800 dark:text-white
                    "
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Qty: {i + 1}
                      </option>
                    ))}
                  </select>

                  {/* INCREASE */}
                  <button
                    className="
                      px-3 py-2
                      text-sm
                      hover:bg-gray-100
                      dark:hover:bg-zinc-700
                      transition
                    "
                    onClick={() =>
                      dispatch(
                        updatecart({
                          productId: item.product._id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                {/* DELETE */}
                <button
                  onClick={() =>
                    dispatch(deleteitem(item.product._id))
                  }
                  className="
                    w-10 h-10
                    rounded-xl
                    flex items-center justify-center
                    text-gray-500
                    hover:bg-red-500
                    hover:text-white
                    dark:hover:bg-red-500
                    transition-all
                  "
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* SUMMARY */}
      <div
        className="
          pt-4 mt-4
          border-t
          border-gray-200 dark:border-white/10
          space-y-3
        "
      >
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span>Items</span>
          <span>{selectedItems.length}</span>
        </div>

        <div className="flex justify-between text-base font-semibold text-gray-900 dark:text-white">
          <span>Total</span>
          <span>₹{selectedTotal || 0}</span>
        </div>

        {/* CLEAR CART */}
        <button
          onClick={() => setshowclearcart(true)}
          className="
            w-full
            flex items-center justify-center gap-2
            rounded-2xl
            border border-red-200 dark:border-red-500/20
            bg-red-50 dark:bg-red-500/10
            py-3
            text-sm font-medium
            text-red-500 dark:text-red-400
            hover:bg-red-500
            hover:text-white
            transition-all
          "
        >
          <Trash2 size={16} />
          Clear Cart
        </button>

        {/* CHECKOUT */}
        <button
          disabled={selectedItems.length === 0}
          onClick={handleCheckout}
          className={`
            w-full
            py-3
            rounded-2xl
            text-sm font-medium
            transition-all
            ${
              selectedItems.length === 0
                ? "bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                : "bg-black dark:bg-white text-white dark:text-black hover:scale-[1.01]"
            }
          `}
        >
          Checkout
        </button>
      </div>

      {/* CLEAR CART MODAL */}
      {showclearcart && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/50
            flex items-center justify-center
            p-4
          "
        >
          <div
            className="
              w-full max-w-sm
              rounded-3xl
              bg-white dark:bg-zinc-900
              p-6
              border border-gray-200 dark:border-white/10
            "
          >
            <h2 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
              Clear Cart?
            </h2>

            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
              This action will remove all items from your cart.
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setshowclearcart(false)}
                className="
                  flex-1
                  py-3
                  rounded-2xl
                  border
                  border-gray-300 dark:border-white/10
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-zinc-800
                  transition
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  dispatch(clearcart());
                  setSelectedItems([]);
                  setshowclearcart(false);
                }}
                className="
                  flex-1
                  py-3
                  rounded-2xl
                  bg-red-500
                  text-white
                  hover:bg-red-600
                  transition
                "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}