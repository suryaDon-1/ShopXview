import {
  CheckCircle2,
  Circle,
  PackageCheck,
  Truck,
  Box,
  X,
} from "lucide-react";

function TrackOrderModal({ order, onClose }) {
  if (!order) return null;

  const steps = [
    {
      key: "placed",
      label: "Order Placed",
      desc: "Your order has been placed",
      icon: Box,
    },
    {
      key: "confirmed",
      label: "Confirmed",
      desc: "Seller confirmed your order",
      icon: PackageCheck,
    },
    {
      key: "shipped",
      label: "Shipped",
      desc: "Your package is on the way",
      icon: Truck,
    },
    {
      key: "delivered",
      label: "Delivered",
      desc: "Package delivered successfully",
      icon: CheckCircle2,
    },
  ];

  const currentIndex = steps.findIndex(
    (step) => step.key === order.status
  );

  return (
    <div
      className="
        fixed inset-0 z-[999]
        bg-black/60
        backdrop-blur-sm
        flex items-center justify-center
        p-3 sm:p-4
      "
      onClick={onClose}
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-3xl
          max-h-[95vh]
          overflow-y-auto
          rounded-3xl
          border
          border-gray-200 dark:border-white/10
          bg-white dark:bg-zinc-950
          shadow-2xl
          animate-[fadeIn_0.25s_ease]
        "
      >
        {/* HEADER */}
        <div
          className="
            sticky top-0 z-20
            flex items-start justify-between gap-4
            border-b
            border-gray-200 dark:border-white/10
            bg-white/95 dark:bg-zinc-950/95
            backdrop-blur
            px-4 sm:px-6
            py-5
          "
        >
          <div className="min-w-0">
            <h2
              className="
                text-xl sm:text-2xl
                font-bold
                text-gray-900 dark:text-white
              "
            >
              Track Order
            </h2>

            <p
              className="
                text-xs sm:text-sm
                text-gray-500 dark:text-gray-400
                mt-1
                break-all
              "
            >
              Order ID: #{order._id?.slice(-8)}
            </p>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              shrink-0
              w-10 h-10
              rounded-xl
              border
              border-red-200 dark:border-red-500/20
              flex items-center justify-center
              text-red-500 dark:text-red-400
              hover:bg-red-50
              dark:hover:bg-red-500/10
              transition-all
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-4 sm:p-6">
          {/* STATUS CARD */}
          <div
            className="
              mb-8
              rounded-3xl
              border
              border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-zinc-900
              p-5
            "
          >
            <div
              className="
                flex flex-col lg:flex-row
                lg:items-center
                lg:justify-between
                gap-5
              "
            >
              {/* LEFT */}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Current Status
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl sm:text-3xl
                    font-bold
                    capitalize
                    text-gray-900 dark:text-white
                  "
                >
                  {order.status}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Ordered on{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* STATUS BADGE */}
              <div
                className={`
                  px-5 py-3
                  rounded-2xl
                  text-sm font-semibold
                  w-fit
                  ${
                    order.status === "delivered"
                      ? "bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400"
                      : order.status === "shipped"
                      ? "bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400"
                      : order.status === "confirmed"
                      ? "bg-yellow-100 dark:bg-yellow-500/15 text-yellow-700 dark:text-yellow-400"
                      : "bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                {order.status === "delivered"
                  ? "Delivered Successfully"
                  : order.status === "shipped"
                  ? "Out For Delivery"
                  : order.status === "confirmed"
                  ? "Preparing Shipment"
                  : "Order Received"}
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* LINE */}
            <div
              className="
                absolute
                left-5 sm:left-6
                top-2 bottom-2
                w-[2px]
                bg-gray-200 dark:bg-white/10
              "
            />

            <div className="space-y-7 sm:space-y-8">
              {steps.map((step, index) => {
                const completed = index <= currentIndex;
                const Icon = step.icon;

                return (
                  <div
                    key={step.key}
                    className="relative flex gap-4 sm:gap-5"
                  >
                    {/* ICON */}
                    <div
                      className={`
                        relative z-10
                        w-10 h-10 sm:w-12 sm:h-12
                        rounded-full
                        flex items-center justify-center
                        border-2
                        shrink-0
                        ${
                          completed
                            ? "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black"
                            : "bg-white dark:bg-zinc-950 border-gray-300 dark:border-white/20 text-gray-400"
                        }
                      `}
                    >
                      {completed ? (
                        <Icon size={18} />
                      ) : (
                        <Circle size={16} />
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 min-w-0 pb-2">
                      <div
                        className="
                          flex flex-col sm:flex-row
                          sm:items-center
                          sm:justify-between
                          gap-2
                        "
                      >
                        <h3
                          className={`
                            text-base sm:text-lg
                            font-semibold
                            ${
                              completed
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-400 dark:text-gray-500"
                            }
                          `}
                        >
                          {step.label}
                        </h3>

                        {index === currentIndex && (
                          <span
                            className="
                              w-fit
                              rounded-full
                              bg-black dark:bg-white
                              px-3 py-1
                              text-xs font-medium
                              text-white dark:text-black
                            "
                          >
                            Current
                          </span>
                        )}
                      </div>

                      <p
                        className={`
                          mt-1
                          text-sm
                          ${
                            completed
                              ? "text-gray-500 dark:text-gray-400"
                              : "text-gray-400 dark:text-gray-500"
                          }
                        `}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FOOTER */}
          <div
            className="
              mt-8
              pt-6
              border-t
              border-gray-200 dark:border-white/10
              grid grid-cols-1 sm:grid-cols-2
              gap-5
            "
          >
            {/* PAYMENT */}
            <div
              className="
                rounded-2xl
                border
                border-gray-200 dark:border-white/10
                bg-gray-50 dark:bg-zinc-900
                p-4
              "
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Payment Method
              </p>

              <h3
                className="
                  mt-1
                  font-semibold
                  capitalize
                  text-gray-900 dark:text-white
                "
              >
                {order.paymentMethod}
              </h3>
            </div>

            {/* TOTAL */}
            <div
              className="
                rounded-2xl
                border
                border-gray-200 dark:border-white/10
                bg-gray-50 dark:bg-zinc-900
                p-4
              "
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Amount
              </p>

              <h3
                className="
                  mt-1
                  text-2xl
                  font-bold
                  text-gray-900 dark:text-white
                "
              >
                ₹{order.totalPrice}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}

export default TrackOrderModal;