import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import {
  clearcart,
  deleteitem,
  getorcretecart,
  updatecart,
} from "../../features/cart/cartSlice.js";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch(); // us to call api
  const navigate = useNavigate(); // // use to navigate
  const { cart, loading } = useSelector((state) => state.cart);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showclearcart, setshowclearcart] = useState(false);

  useEffect(() => {
    dispatch(getorcretecart());
  }, [dispatch]);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // select all
  const handleSelectAll = () => {
    if (selectedItems.length === cart.item.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.item.map((item) => item._id));
    }
  };

  // ✅ selected total
  const selectedTotal = cart?.item
    ?.filter((item) => selectedItems.includes(item._id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (loading) {
    return <div className="text-center mt-10">Loading cart...</div>;
  }

  if (!cart || cart.item?.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white border rounded-2xl p-10 text-center shadow-sm max-w-md w-full">
          {/* ICON */}
          <div className="text-5xl mb-4">🛒</div>

          {/* TITLE */}
          <h1 className="text-xl font-semibold text-gray-800">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Looks like you haven’t added anything yet
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  // handle check out
  const handleCheckout = () => {
    navigate("/checkout", {
      state: { selectedProducts, selectedTotal }, // now with useLocation i can get all these in next page
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center">
      <div className="w-full max-w-6xl space-y-6">
        {/* HEADER */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Shopping Cart
            </h1>
            <p className="text-sm text-gray-500">
              Review your items before checkout
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* SELECT ALL */}
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedItems.length === cart.item.length}
                onChange={handleSelectAll}
              />
              Select All
            </label>

            {/* CLEAR */}
            <button
              onClick={() => setshowclearcart(true)}
              className="px-4 py-2 text-sm rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT: ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cart.item.map((item) => {
              const isSelected = selectedItems.includes(item._id);

              return (
                <div
                  key={item._id}
                  className={`bg-white border rounded-2xl p-4 flex justify-between items-center transition hover:shadow-md
                ${isSelected ? "ring-2 ring-black" : ""}`}
                >
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(item._id)}
                    />

                    <img
                      src={item.product?.images?.[0]?.url || "/placeholder.png"}
                      className="w-20 h-20 object-cover rounded-xl border"
                    />

                    <div>
                      <h2 className="font-medium text-gray-800">
                        {item.product?.name}
                      </h2>
                      <p className="text-sm text-gray-500">₹{item.price}</p>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex items-center gap-6">
                    {/* QUANTITY */}
                    <div className="flex items-center border rounded-xl overflow-hidden">
                      <button
                        className="px-3 py-1 hover:bg-gray-100"
                        onClick={() =>
                          dispatch(
                            updatecart({
                              productId: item.product._id,
                              quantity: item.quantity - 1,
                            }),
                          )
                        }
                      >
                        -
                      </button>

                      <span className="px-3">{item.quantity}</span>

                      <button
                        className="px-3 py-1 hover:bg-gray-100"
                        onClick={() =>
                          dispatch(
                            updatecart({
                              productId: item.product._id,
                              quantity: item.quantity + 1,
                            }),
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* PRICE */}
                    <span className="font-semibold text-gray-800 w-20 text-right">
                      ₹{item.price * item.quantity}
                    </span>

                    {/* DELETE */}
                    <button
                      onClick={() => dispatch(deleteitem(item.product._id))}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="bg-white border rounded-2xl p-5 h-fit shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Items Selected</span>
                <span>{selectedItems.length}</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{selectedTotal || 0}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-gray-800">
              <span>Total</span>
              <span>₹{selectedTotal || 0}</span>
            </div>

            {/* CHECKOUT */}
            <button
              disabled={selectedItems.length === 0}
              onClick={handleCheckout}
              className={`w-full mt-5 py-3 rounded-xl transition font-medium
            ${
              selectedItems.length === 0
                ? "bg-gray-300 text-gray-500"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showclearcart && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-center">Clear Cart</h2>

            <p className="text-sm text-gray-500 text-center mt-2">
              Are you sure you want to clear your cart?
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setshowclearcart(false)}
                className="flex-1 py-2 border rounded-xl hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  dispatch(clearcart());
                  setshowclearcart(false);
                }}
                className="flex-1 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
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
