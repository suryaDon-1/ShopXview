import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../features/address/addressSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance.js";
import toast from "react-hot-toast";
import { openrazorpay } from "../../utils/razorpay.js";
import AddAddress from "./AddAddress.jsx";

import {
  CreditCard,
  MapPin,
  Truck,
  ShieldCheck,
  ChevronRight,
  Lock,
  CheckCircle2,
} from "lucide-react";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { address = [] } = useSelector((state) => state.address || {});

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  const selectedProducts = state?.selectedProducts || [];

  const subtotal = useMemo(() => {
    return selectedProducts.reduce(
      (acc, item) =>
        acc + item.product?.discountprice * item.quantity,
      0
    );
  }, [selectedProducts]);

  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    try {
      setPlacingOrder(true);

      const items = selectedProducts.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
      }));

      const payload = {
        items,
        shippingAddress: selectedAddress,
        PaymentMethord: paymentMethod,
      };

      const res = await axiosInstance.post("/checkout", payload);

      const data = res.data.data;

      // COD
      if (paymentMethod === "COD") {
        toast.success("Order placed successfully");
        navigate("/userorder");
        return;
      }

      // Razorpay
      openrazorpay({
        order: data.razorpayOrder,

        onSucess: async (response) => {
          await axiosInstance.post("/verifypayment", {
            paymentData: response,
            orderData: data,
          });

          toast.success("Payment successful");
          navigate("/userorder");
        },

        onFailure: () => {
          toast.error("Payment cancelled");
        },
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log(error);
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      
      {/* HEADER */}
      <div className="relative overflow-hidden border-b border-black/10 bg-white dark:border-white/10 dark:bg-[#111111]">

        <div className="absolute inset-0 bg-gradient-to-r from-black/[0.03] via-transparent to-black/[0.03] dark:from-white/[0.03] dark:to-white/[0.03]" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6">

          {/* TOP */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="max-w-2xl">

              <div className="mb-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Lock size={14} />
                <span>100% Secure Checkout</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Checkout
              </h1>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                Complete your order with secure payment and fast delivery.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">

              <div className="rounded-3xl border border-black/10 bg-gray-100 px-5 py-4 dark:border-white/10 dark:bg-[#1a1a1a]">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Items
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  {selectedProducts.length}
                </h3>
              </div>

              <div className="rounded-3xl bg-black px-5 py-4 text-white dark:bg-white dark:text-black">
                <p className="text-xs opacity-70">
                  Total
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  ₹{total}
                </h3>
              </div>
            </div>
          </div>

          {/* STEPS */}
          <div className="mt-8 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">

            <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black">
              <CheckCircle2 size={16} />
              Cart
            </div>

            <div className="h-[1px] w-10 bg-gray-300 dark:bg-white/20"></div>

            <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black">
              <CheckCircle2 size={16} />
              Address
            </div>

            <div className="h-[1px] w-10 bg-gray-300 dark:bg-white/20"></div>

            <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black">
              <CheckCircle2 size={16} />
              Payment
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* ADDRESS */}
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-colors dark:border-white/10 dark:bg-[#111111]">

              <div className="flex flex-col gap-4 border-b border-black/10 px-5 py-5 dark:border-white/10 sm:flex-row sm:items-center">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <MapPin size={18} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    Delivery Address
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose where your order should arrive
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6">

                {address.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-black/10 bg-gray-50 p-5 dark:border-white/10 dark:bg-[#1a1a1a]">
                    <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                      No address found
                    </p>

                    <AddAddress />
                  </div>
                ) : (
                  <div className="space-y-4">

                    {address.map((addr) => (
                      <label
                        key={addr._id}
                        className={`block cursor-pointer rounded-2xl border p-5 transition-all duration-300
                        ${
                          selectedAddress === addr._id
                            ? "border-black bg-black/[0.03] dark:border-white dark:bg-white/[0.05]"
                            : "border-black/10 hover:border-black/40 dark:border-white/10 dark:hover:border-white/30"
                        }`}
                      >
                        <div className="flex gap-4">

                          <input
                            type="radio"
                            checked={selectedAddress === addr._id}
                            onChange={() => setSelectedAddress(addr._id)}
                            className="mt-1 accent-black dark:accent-white"
                          />

                          <div className="min-w-0 flex-1">

                            <div className="flex flex-wrap items-center gap-2">

                              <h3 className="text-sm font-semibold sm:text-base">
                                {addr.name || "Home"}
                              </h3>

                              <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] text-gray-600 dark:bg-white/10 dark:text-gray-300">
                                Default Address
                              </span>
                            </div>

                            <p className="mt-3 break-words text-sm leading-6 text-gray-600 dark:text-gray-400">
                              {addr.street}, {addr.city}, {addr.state},{" "}
                              {addr.pincode}
                            </p>

                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                              Phone: {addr.phone}
                            </p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* PAYMENT */}
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#111111]">

              <div className="flex flex-col gap-4 border-b border-black/10 px-5 py-5 dark:border-white/10 sm:flex-row sm:items-center">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <CreditCard size={18} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    Payment Method
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose your preferred payment option
                  </p>
                </div>
              </div>

              <div className="space-y-4 p-5 sm:p-6">

                {/* ONLINE */}
                <label
                  className={`flex cursor-pointer gap-4 rounded-2xl border p-5 transition-all duration-300
                  ${
                    paymentMethod === "razorpay"
                      ? "border-black bg-black/[0.03] dark:border-white dark:bg-white/[0.05]"
                      : "border-black/10 hover:border-black/40 dark:border-white/10 dark:hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    checked={paymentMethod === "razorpay"}
                    onChange={() => setPaymentMethod("razorpay")}
                    className="mt-1 accent-black dark:accent-white"
                  />

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <h3 className="text-sm font-semibold sm:text-base">
                        UPI / Card / Wallet
                      </h3>

                      <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">
                        Recommended
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Secure online payment via Razorpay
                    </p>
                  </div>
                </label>

                {/* COD */}
                <label
                  className={`flex cursor-pointer gap-4 rounded-2xl border p-5 transition-all duration-300
                  ${
                    paymentMethod === "COD"
                      ? "border-black bg-black/[0.03] dark:border-white dark:bg-white/[0.05]"
                      : "border-black/10 hover:border-black/40 dark:border-white/10 dark:hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                    className="mt-1 accent-black dark:accent-white"
                  />

                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">
                      Cash on Delivery
                    </h3>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Pay after receiving your order
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* ORDER ITEMS */}
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#111111]">

              <div className="flex flex-col gap-4 border-b border-black/10 px-5 py-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-lg font-semibold">
                    Order Summary
                  </h2>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {selectedProducts.length} item(s) in your order
                  </p>
                </div>

                <button
                  onClick={() => navigate("/cart")}
                  className="w-fit text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  Edit Cart
                </button>
              </div>

              <div className="divide-y divide-black/10 dark:divide-white/10">

                {selectedProducts.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:p-6"
                  >

                    {/* IMAGE */}
                    <div className="h-24 w-24 overflow-hidden rounded-2xl border border-black/10 bg-gray-100 dark:border-white/10 dark:bg-[#1a1a1a]">

                      <img
                        src={
                          item.image ||
                          item.product?.images?.[0]?.url ||
                          "/placeholder.png"
                        }
                        alt={item.product?.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="min-w-0 flex-1">

                      <h3 className="line-clamp-2 text-sm font-medium leading-6 text-black dark:text-white sm:text-base">
                        {item.product?.name || item.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">

                        <span>
                          Qty: {item.quantity}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>

                        <span className="font-medium text-green-600 dark:text-green-400">
                          In Stock
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3">

                        <p className="text-lg font-bold">
                          ₹{item.product?.discountprice}
                        </p>

                        {item.product?.price && (
                          <p className="text-sm text-gray-400 line-through dark:text-gray-500">
                            ₹{item.product?.price}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-fit">

            <div className="sticky top-24 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#111111]">

              {/* HEADER */}
              <div className="border-b border-black/10 p-6 dark:border-white/10">

                <h2 className="text-lg font-semibold">
                  Payment Details
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Review before placing order
                </p>
              </div>

              {/* BODY */}
              <div className="p-6">

                {/* DELIVERY */}
                <div className="mb-6 flex gap-3 rounded-2xl border border-black/10 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#1a1a1a]">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-[#111111]">
                    <Truck size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Fast Delivery
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Estimated delivery in 3-5 business days
                    </p>
                  </div>
                </div>

                {/* PRICE */}
                <div className="space-y-5 text-sm">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-600 dark:text-gray-400">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      ₹{subtotal}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-600 dark:text-gray-400">
                      Shipping
                    </span>

                    <span className="font-semibold">
                      {shipping === 0 ? "Free" : `₹${shipping}`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-black/10 pt-5 text-base font-bold dark:border-white/10">

                    <span>Total</span>

                    <span>₹{total}</span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  disabled={
                    !selectedAddress ||
                    selectedProducts.length === 0 ||
                    placingOrder
                  }
                  onClick={handlePlaceOrder}
                  className={`mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition-all duration-300 sm:text-base
                  ${
                    !selectedAddress ||
                    selectedProducts.length === 0
                      ? "cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-white/10 dark:text-gray-500"
                      : "bg-black text-white hover:scale-[1.02] hover:bg-[#1a1a1a] active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  }`}
                >
                  {placingOrder
                    ? "Processing..."
                    : paymentMethod === "razorpay"
                    ? "Pay Securely"
                    : "Place Order"}

                  {!placingOrder && <ChevronRight size={18} />}
                </button>

                {/* SECURITY */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <ShieldCheck size={14} />
                  <span>Secure SSL encrypted payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;