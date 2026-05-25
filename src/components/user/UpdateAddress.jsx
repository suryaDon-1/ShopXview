import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAddress } from "../../features/address/addressSlice.js";

import {
  MapPin,
  Building2,
  Globe,
  Save,
  X,
} from "lucide-react";

export default function UpdateAddress({
  address,
  onClose,
}) {
  const dispatch = useDispatch();

  const addressId = address?._id;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    street: "",
    city: "",
    zip: "",
    state: "",
    country: "",
  });

  // PRELOAD DATA
  useEffect(() => {
    if (address) {
      setForm({
        street: address.street || "",
        city: address.city || "",
        zip: address.zip || "",
        state: address.state || "",
        country: address.country || "",
      });
    }
  }, [address]);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await dispatch(
        updateAddress({
          addressId,
          data: form,
        })
      );

      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // OVERLAY
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">

      {/* MODAL */}
      <div
        className="
          relative
          w-full
          max-w-2xl
          my-auto
          rounded-[2rem]
          bg-white
          dark:bg-[#111111]
          border
          border-black/10
          dark:border-white/10
          shadow-2xl
          max-h-[95vh]
          overflow-y-auto
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            sticky
            top-4
            ml-auto
            mr-4
            mt-4
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            dark:bg-white
            dark:text-black
            hover:scale-105
            active:scale-95
            transition-all
          "
        >
          <X size={18} />
        </button>

        {/* HEADER */}
        <div className="bg-gradient-to-r from-black via-zinc-900 to-black px-5 py-6 text-white sm:px-8 dark:from-white dark:via-zinc-200 dark:to-white dark:text-black">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur dark:bg-black/10">

              <MapPin size={24} />
            </div>

            <div>

              <h2 className="text-2xl sm:text-3xl font-bold">
                Update Address
              </h2>

              <p className="mt-1 text-sm text-gray-300 dark:text-gray-700">
                Edit your delivery information
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-5 sm:p-8 pb-28"
        >

          {/* STREET */}
          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Street Address
            </label>

            <div className="relative">

              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              />

              <input
                type="text"
                name="street"
                value={form.street}
                onChange={handleChange}
                placeholder="Enter street address"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-[#1a1a1a]
                  py-4
                  pl-12
                  pr-4
                  text-sm
                  text-black
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-black
                  dark:focus:border-white
                  focus:bg-white
                  dark:focus:bg-[#202020]
                  focus:ring-4
                  focus:ring-black/5
                  dark:focus:ring-white/10
                "
              />
            </div>
          </div>

          {/* CITY + ZIP */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* CITY */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                City
              </label>

              <div className="relative">

                <Building2
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                />

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-300
                    dark:border-white/10
                    bg-gray-50
                    dark:bg-[#1a1a1a]
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    text-black
                    dark:text-white
                    placeholder:text-gray-400
                    dark:placeholder:text-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-black
                    dark:focus:border-white
                    focus:bg-white
                    dark:focus:bg-[#202020]
                    focus:ring-4
                    focus:ring-black/5
                    dark:focus:ring-white/10
                  "
                />
              </div>
            </div>

            {/* ZIP */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                ZIP Code
              </label>

              <input
                type="text"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                placeholder="ZIP Code"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-[#1a1a1a]
                  px-4
                  py-4
                  text-sm
                  text-black
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-black
                  dark:focus:border-white
                  focus:bg-white
                  dark:focus:bg-[#202020]
                  focus:ring-4
                  focus:ring-black/5
                  dark:focus:ring-white/10
                "
              />
            </div>
          </div>

          {/* STATE + COUNTRY */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* STATE */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                State
              </label>

              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-[#1a1a1a]
                  px-4
                  py-4
                  text-sm
                  text-black
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-black
                  dark:focus:border-white
                  focus:bg-white
                  dark:focus:bg-[#202020]
                  focus:ring-4
                  focus:ring-black/5
                  dark:focus:ring-white/10
                "
              />
            </div>

            {/* COUNTRY */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Country
              </label>

              <div className="relative">

                <Globe
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                />

                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-300
                    dark:border-white/10
                    bg-gray-50
                    dark:bg-[#1a1a1a]
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    text-black
                    dark:text-white
                    placeholder:text-gray-400
                    dark:placeholder:text-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-black
                    dark:focus:border-white
                    focus:bg-white
                    dark:focus:bg-[#202020]
                    focus:ring-4
                    focus:ring-black/5
                    dark:focus:ring-white/10
                  "
                />
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="
            sticky
            bottom-0
            left-0
            bg-white
            dark:bg-[#111111]
            pt-4
            flex
            flex-col
            gap-4
            sm:flex-row
          ">

            {/* CANCEL */}
            <button
              type="button"
              onClick={onClose}
              className="
                flex-1
                rounded-2xl
                border
                border-gray-300
                dark:border-white/10
                px-5
                py-4
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-300
                transition-all
                duration-300
                hover:bg-gray-100
                dark:hover:bg-[#1a1a1a]
              "
            >
              Cancel
            </button>

            {/* SAVE */}
            <button
              type="submit"
              disabled={loading}
              className={`
                flex
                flex-1
                items-center
                justify-center
                gap-2
                rounded-2xl
                px-5
                py-4
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  loading
                    ? "cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-white/10 dark:text-gray-500"
                    : "bg-black text-white hover:scale-[1.02] hover:bg-[#1a1a1a] active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-gray-200"
                }
              `}
            >
              <Save size={18} />

              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}