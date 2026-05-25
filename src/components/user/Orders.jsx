import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuserorders } from "../../features/order/orderSlice.js";
import TrackOrderModal from "../TrackOrderModal.jsx";

import {
  Package,
  MapPin,
  CreditCard,
  CalendarDays,
  Truck,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

function Orders() {
  const dispatch = useDispatch();

  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    dispatch(getuserorders());
  }, [dispatch]);

  const { orders = [], loading, error } = useSelector(
    (state) => state.orders
  );

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 text-black dark:bg-[#0a0a0a] dark:text-white flex items-center justify-center transition-colors duration-300">

        <div className="text-center">

          <div className="w-12 h-12 border-4 border-black dark:border-white border-t-transparent rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Loading your orders...
          </p>
        </div>
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center px-4 transition-colors duration-300">

        <div className="bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-3xl p-8 text-center shadow-sm max-w-md w-full">

          <h2 className="text-2xl font-bold text-red-500">
            Something went wrong
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">

      {/* HEADER */}
      <div className="bg-white dark:bg-[#111111] border-b border-black/10 dark:border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* LEFT */}
            <div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                My Orders
              </h1>

              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
                Track, manage and review your purchases
              </p>
            </div>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

              <div className="bg-gray-100 dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 px-5 py-4 rounded-3xl flex-1 sm:min-w-[170px]">

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Orders
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  {orders?.length || 0}
                </h2>
              </div>

              <div className="bg-black dark:bg-white text-white dark:text-black px-5 py-4 rounded-3xl flex-1 sm:min-w-[170px]">

                <p className="text-sm opacity-70">
                  Active Orders
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  {
                    orders?.filter(
                      (o) =>
                        o.status !== "delivered" &&
                        o.status !== "cancelled"
                    ).length
                  }
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {orders.length === 0 ? (

          /* EMPTY STATE */
          <div className="bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-[2rem] p-8 sm:p-12 text-center shadow-sm transition-all duration-300">

            <div className="w-24 h-24 bg-gray-100 dark:bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto">

              <ShoppingBag className="w-10 h-10 text-gray-500 dark:text-gray-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mt-6">
              No Orders Yet
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto text-sm sm:text-base leading-7">
              Looks like you haven’t placed any orders yet.
              Start shopping to see your orders here.
            </p>

            <button className="mt-8 px-7 py-3.5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Start Shopping
            </button>
          </div>

        ) : (

          /* ORDERS */
          <div className="space-y-6">

            {orders.map((order) => (

              <div
                key={order._id}
                className="bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >

                {/* TOP */}
                <div className="border-b border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#161616] px-5 sm:px-6 py-5">

                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

                    {/* LEFT */}
                    <div className="flex flex-wrap gap-6">

                      {/* DATE */}
                      <div>

                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <CalendarDays size={15} />
                          Ordered On
                        </div>

                        <p className="font-semibold mt-1 text-sm sm:text-base">
                          {new Date(
                            order.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </div>

                      {/* PAYMENT */}
                      <div>

                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <CreditCard size={15} />
                          Payment
                        </div>

                        <p className="font-semibold mt-1 capitalize text-sm sm:text-base">
                          {order.paymentMethod}
                        </p>
                      </div>

                      {/* TOTAL */}
                      <div>

                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <Package size={15} />
                          Total
                        </div>

                        <p className="font-bold text-xl mt-1">
                          ₹{order.totalPrice}
                        </p>
                      </div>
                    </div>

                    {/* STATUS */}
                    <div>

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold capitalize inline-flex items-center
                        ${
                          order.status === "confirmed"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                            : order.status === "delivered"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                            : order.status === "cancelled"
                            ? "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ITEMS */}
                <div className="p-5 sm:p-6">

                  <div className="space-y-4">

                    {order.items.map((item, index) => (

                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center gap-5 border border-black/10 dark:border-white/10 rounded-3xl p-4 hover:bg-gray-50 dark:hover:bg-[#161616] transition-all duration-300"
                      >

                        {/* IMAGE */}
                        <div className="w-full h-52 sm:h-32 sm:w-32 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1a1a] flex-shrink-0">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* INFO */}
                        <div className="flex-1 min-w-0">

                          <h2 className="font-semibold text-base sm:text-lg line-clamp-2">
                            {item.name}
                          </h2>

                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">

                            <p>
                              Quantity:
                              <span className="font-medium text-black dark:text-white ml-1">
                                {item.quantity}
                              </span>
                            </p>

                            <p>
                              Price:
                              <span className="font-medium text-black dark:text-white ml-1">
                                ₹{item.price}
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* ITEM TOTAL */}
                        <div className="md:text-right">

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Item Total
                          </p>

                          <h2 className="text-xl font-bold mt-1">
                            ₹{item.price * item.quantity}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                    {/* ADDRESS */}
                    <div className="min-w-0">

                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                        <MapPin size={15} />
                        Delivery Address
                      </div>

                      <p className="text-sm sm:text-base leading-7 text-gray-800 dark:text-gray-300 break-words">
                        {order.shippingAddress.street},{" "}
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.state},{" "}
                        {order.shippingAddress.country}
                      </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto">

                      {/* PAYMENT STATUS */}
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm font-medium text-center whitespace-nowrap
                        ${
                          order.isPaid
                            ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                            : "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                        }`}
                      >
                        {order.isPaid
                          ? "Payment Completed"
                          : "Cash On Delivery"}
                      </div>

                      {/* TRACK BUTTON */}
                      <button
                        onClick={() =>
                          setSelectedOrder(order)
                        }
                        className="px-5 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium"
                      >
                        <Truck size={17} />

                        Track Order

                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedOrder && (
        <TrackOrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
}

export default Orders;