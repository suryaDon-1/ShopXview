import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, deleteAddress } from "../../features/address/addressSlice";

import AddressCard from "../../components/AddressCard.jsx";
import AddAddress from "./AddAddress.jsx";
import UpdateAddress from "./UpdateAddress.jsx";

import {
  MapPin,
  Plus,
  Trash2,
  Home,
  ShieldCheck,
  X,
} from "lucide-react";

function Address() {
  const dispatch = useDispatch();

  // UPDATE
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);

  // DELETE
  const [deleteId, setDeleteId] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  // ADD
  const [showAdd, setShowAdd] = useState(false);

  const { address = [], loading } = useSelector((state) => state.address);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  return (
    <div
      className="
        min-h-screen

        bg-[#f5f5f7] dark:bg-black

        text-gray-900 dark:text-white

        transition-colors duration-300
      "
    >
      {/* ================= HERO ================= */}
      <div
        className="
          bg-gradient-to-r
          from-black
          via-gray-900
          to-black

          dark:from-[#0f0f10]
          dark:via-[#151515]
          dark:to-black

          text-white
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="flex flex-col xl:flex-row justify-between gap-8">
            {/* LEFT */}
            <div className="flex-1">
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className="
                    w-14 h-14 sm:w-16 sm:h-16
                    rounded-2xl

                    bg-white/10
                    border border-white/10

                    backdrop-blur

                    flex items-center justify-center

                    shrink-0
                  "
                >
                  <MapPin size={28} />
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
                    My Addresses
                  </h1>

                  <p className="text-sm sm:text-base text-gray-300 mt-2">
                    Manage your shipping and billing addresses
                  </p>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {/* SAVED */}
                <div
                  className="
                    rounded-3xl

                    bg-white/10

                    border border-white/10

                    backdrop-blur

                    px-5 py-5
                  "
                >
                  <p className="text-sm text-gray-300">
                    Saved Addresses
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-black mt-2">
                    {address.length}
                  </h2>
                </div>

                {/* SECURITY */}
                <div
                  className="
                    rounded-3xl

                    bg-white/10

                    border border-white/10

                    backdrop-blur

                    px-5 py-5
                  "
                >
                  <p className="text-sm text-gray-300">
                    Secure Checkout
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <ShieldCheck size={20} />

                    <span className="font-semibold">
                      Enabled
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex xl:justify-end">
              <button
                onClick={() => setShowAdd(true)}
                className="
                  w-full sm:w-auto

                  h-14

                  px-6

                  rounded-2xl

                  bg-white
                  dark:bg-white

                  text-black

                  font-semibold

                  flex items-center justify-center gap-2

                  hover:scale-[1.02]

                  active:scale-[0.98]

                  transition-all duration-300

                  shadow-lg
                "
              >
                <Plus size={18} />
                Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* LOADING */}
        {loading && (
          <div className="grid sm:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="
                  h-52

                  rounded-3xl

                  animate-pulse

                  bg-white dark:bg-[#111111]

                  border border-gray-200 dark:border-gray-800
                "
              />
            ))}
          </div>
        )}

        {/* EMPTY */}
        {!loading && address.length === 0 && (
          <div
            className="
              rounded-3xl

              bg-white dark:bg-[#111111]

              border border-gray-200 dark:border-gray-800

              p-8 sm:p-16

              text-center

              shadow-sm
            "
          >
            <div
              className="
                w-24 h-24 sm:w-28 sm:h-28

                rounded-full

                bg-gray-100 dark:bg-[#1b1b1b]

                flex items-center justify-center

                mx-auto
              "
            >
              <Home
                size={42}
                className="text-gray-500 dark:text-gray-400"
              />
            </div>

            <h2
              className="
                text-2xl sm:text-3xl

                font-black

                mt-6

                text-gray-900 dark:text-white
              "
            >
              No Addresses Added
            </h2>

            <p
              className="
                text-sm sm:text-base

                text-gray-500 dark:text-gray-400

                mt-3

                max-w-md mx-auto
              "
            >
              Save your delivery addresses to make checkout faster
              and smoother on your next purchase.
            </p>

            <button
              onClick={() => setShowAdd(true)}
              className="
                mt-8

                w-full sm:w-auto

                px-8
                h-14

                rounded-2xl

                bg-black dark:bg-white

                text-white dark:text-black

                font-semibold

                hover:opacity-90

                active:scale-[0.98]

                transition-all duration-300
              "
            >
              Add Your First Address
            </button>
          </div>
        )}

        {/* ADDRESS GRID */}
        {!loading && address.length > 0 && (
          <>
            {/* TOP BAR */}
            <div
              className="
                flex flex-col sm:flex-row
                sm:items-center
                sm:justify-between

                gap-5

                mb-8
              "
            >
              <div>
                <h2
                  className="
                    text-2xl sm:text-3xl

                    font-black

                    text-gray-900 dark:text-white
                  "
                >
                  Saved Addresses
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Select, edit, or remove your saved locations
                </p>
              </div>

              <button
                onClick={() => setShowAdd(true)}
                className="
                  hidden md:flex

                  items-center gap-2

                  h-12

                  px-5

                  rounded-2xl

                  bg-black dark:bg-white

                  text-white dark:text-black

                  font-medium

                  hover:opacity-90

                  transition-all duration-300
                "
              >
                <Plus size={18} />
                Add Address
              </button>
            </div>

            {/* ADDRESS LIST */}
            <div className="flex flex-col gap-4 max-w-5xl">
              {address.map((item) => (
                <div
                  key={item._id}
                  className="
                    origin-top

                    transition-transform duration-300

                    hover:scale-[1.01]
                  "
                >
                  <AddressCard
                    address={item}
                    onEdit={() => {
                      setSelectedAddress(item);
                      setShowUpdate(true);
                    }}
                    onDelete={(id) => {
                      setDeleteId(id);
                      setShowDelete(true);
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ================= UPDATE MODAL ================= */}
      {showUpdate && selectedAddress && (
        <div
          className="
            fixed inset-0 z-50

            flex items-center justify-center

            bg-black/60

            backdrop-blur-sm

            p-3 sm:p-4
          "
        >
          <div className="relative w-full max-w-2xl">
            {/* CLOSE */}
            <button
              onClick={() => {
                setShowUpdate(false);
                setSelectedAddress(null);
              }}
              className="
                absolute
                top-3 right-3 sm:-top-4 sm:-right-4

                w-10 h-10

                rounded-full

                bg-white dark:bg-[#1b1b1b]

                border border-gray-200 dark:border-gray-700

                text-black dark:text-white

                shadow-lg

                flex items-center justify-center

                z-10

                hover:scale-105

                transition-all duration-300
              "
            >
              <X size={18} />
            </button>

            <UpdateAddress
              address={selectedAddress}
              onClose={() => {
                setShowUpdate(false);
                setSelectedAddress(null);
              }}
            />
          </div>
        </div>
      )}

      {/* ================= ADD MODAL ================= */}
      {showAdd && (
        <div
          className="
            fixed inset-0 z-50

            flex items-center justify-center

            bg-black/60

            backdrop-blur-sm

            p-3 sm:p-4
          "
        >
          <div className="relative w-full max-w-2xl">
            {/* CLOSE */}
            <button
              onClick={() => setShowAdd(false)}
              className="
                absolute
                top-3 right-3 sm:-top-4 sm:-right-4

                w-10 h-10

                rounded-full

                bg-white dark:bg-[#1b1b1b]

                border border-gray-200 dark:border-gray-700

                text-black dark:text-white

                shadow-lg

                flex items-center justify-center

                z-10

                hover:scale-105

                transition-all duration-300
              "
            >
              <X size={18} />
            </button>

            <AddAddress onClose={() => setShowAdd(false)} />
          </div>
        </div>
      )}

      {/* ================= DELETE MODAL ================= */}
      {showDelete && (
        <div
          className="
            fixed inset-0 z-50

            flex items-center justify-center

            bg-black/60

            backdrop-blur-sm

            p-4
          "
        >
          <div
            className="
              w-full max-w-md

              rounded-3xl

              bg-white dark:bg-[#111111]

              border border-gray-200 dark:border-gray-800

              p-6 sm:p-8

              shadow-2xl
            "
          >
            {/* ICON */}
            <div
              className="
                w-16 h-16

                rounded-full

                bg-red-100 dark:bg-red-500/10

                flex items-center justify-center

                mx-auto
              "
            >
              <Trash2
                className="text-red-500"
                size={28}
              />
            </div>

            {/* TITLE */}
            <h2
              className="
                text-2xl

                font-black

                text-center

                mt-5

                text-gray-900 dark:text-white
              "
            >
              Delete Address
            </h2>

            <p
              className="
                text-sm sm:text-base

                text-gray-500 dark:text-gray-400

                text-center

                mt-3
              "
            >
              Are you sure you want to remove this saved address?
            </p>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={() => setShowDelete(false)}
                className="
                  flex-1

                  h-12

                  rounded-2xl

                  border border-gray-300 dark:border-gray-700

                  bg-white dark:bg-[#1b1b1b]

                  text-gray-800 dark:text-gray-300

                  font-medium

                  hover:bg-gray-100 dark:hover:bg-[#232323]

                  transition-all duration-300
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  dispatch(deleteAddress(deleteId));
                  setShowDelete(false);
                }}
                className="
                  flex-1

                  h-12

                  rounded-2xl

                  bg-red-500

                  text-white

                  font-medium

                  hover:bg-red-600

                  transition-all duration-300
                "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FLOAT BUTTON ================= */}
      {!loading && address.length > 0 && (
        <button
          onClick={() => setShowAdd(true)}
          className="
            fixed bottom-5 right-5 sm:bottom-6 sm:right-6

            w-14 h-14 sm:w-16 sm:h-16

            rounded-full

            bg-black dark:bg-white

            text-white dark:text-black

            shadow-2xl

            flex items-center justify-center

            hover:scale-105

            active:scale-[0.96]

            transition-all duration-300

            z-40
          "
        >
          <Plus size={26} />
        </button>
      )}
    </div>
  );
}

export default Address;