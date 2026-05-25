import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddAddress } from "../../features/address/addressSlice.js";

import {
  MapPin,
  Home,
  Building2,
  Globe,
  MapPinned,
  Phone,
  X,
} from "lucide-react";

const AddAddress = ({ onClose }) => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.address);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    country: "",
  });

  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (
      !form.fullName ||
      !form.phone ||
      !form.street ||
      !form.city ||
      !form.zip
    ) {
      return "Please fill all required fields";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validate();

    if (errorMsg) {
      setFormError(errorMsg);
      return;
    }

    setFormError("");

    const res = await dispatch(adddAddress(form));

    if (res.meta.requestStatus === "fulfilled") {
      if (onClose) onClose();
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-50

        bg-black/50 backdrop-blur-sm

        flex items-start sm:items-center justify-center

        overflow-y-auto

        px-2 pt-6 pb-2 sm:p-4
      "
    >
      {/* MODAL */}
      <div
        className="
          relative

          w-full
          sm:max-w-2xl

          max-h-[95vh]

          overflow-y-auto

          rounded-[28px] sm:rounded-3xl

          bg-white dark:bg-[#0f0f10]

          border border-gray-200 dark:border-gray-800

          shadow-2xl

          flex flex-col
        "
      >
        {/* HEADER */}
        <div
          className="
            sticky top-0 z-20

            px-4 sm:px-6
            py-4 sm:py-5

            border-b border-gray-200 dark:border-gray-800

            bg-white/95 dark:bg-[#0f0f10]/95

            backdrop-blur-xl

            shrink-0
          "
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="
                  w-11 h-11 sm:w-12 sm:h-12

                  rounded-2xl

                  bg-black dark:bg-white

                  text-white dark:text-black

                  flex items-center justify-center

                  shrink-0
                "
              >
                <MapPin size={20} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add New Address
                </h2>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Enter your delivery information
                </p>
              </div>
            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                h-10 w-10

                rounded-xl

                border border-gray-200 dark:border-gray-700

                bg-white dark:bg-[#171717]

                flex items-center justify-center

                text-gray-700 dark:text-gray-300

                hover:bg-gray-100 dark:hover:bg-[#222]

                transition-all duration-300

                shrink-0
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div
          className="
            flex-1

            overflow-y-auto

            pb-32 sm:pb-6
          "
        >
          <form
            id="address-form"
            onSubmit={handleSubmit}
            className="p-4 sm:p-6 space-y-5"
          >
            {/* ERROR */}
            {(formError || error) && (
              <div
                className="
                  rounded-2xl
                  px-4 py-3

                  text-sm

                  border

                  bg-red-50 dark:bg-red-500/10
                  border-red-200 dark:border-red-500/20

                  text-red-600 dark:text-red-400
                "
              >
                {formError || error}
              </div>
            )}

            {/* FULL NAME */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Full Name
              </label>

              <div className="relative">
                <Home
                  size={18}
                  className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    text-gray-400 dark:text-gray-500
                  "
                />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="
                    w-full
                    h-12 sm:h-14

                    rounded-2xl

                    border border-gray-200 dark:border-gray-700

                    bg-[#fafafa] dark:bg-[#171717]

                    pl-11 pr-4

                    text-sm sm:text-base
                    text-gray-900 dark:text-white

                    placeholder:text-gray-400 dark:placeholder:text-gray-500

                    outline-none

                    focus:border-black dark:focus:border-white

                    transition-all duration-300
                  "
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    text-gray-400 dark:text-gray-500
                  "
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="
                    w-full
                    h-12 sm:h-14

                    rounded-2xl

                    border border-gray-200 dark:border-gray-700

                    bg-[#fafafa] dark:bg-[#171717]

                    pl-11 pr-4

                    text-sm sm:text-base
                    text-gray-900 dark:text-white

                    placeholder:text-gray-400 dark:placeholder:text-gray-500

                    outline-none

                    focus:border-black dark:focus:border-white

                    transition-all duration-300
                  "
                />
              </div>
            </div>

            {/* STREET */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Street Address
              </label>

              <div className="relative">
                <MapPinned
                  size={18}
                  className="
                    absolute left-4 top-4
                    text-gray-400 dark:text-gray-500
                  "
                />

                <textarea
                  rows={4}
                  name="street"
                  placeholder="House no, street name, landmark..."
                  value={form.street}
                  onChange={handleChange}
                  className="
                    w-full

                    rounded-2xl

                    border border-gray-200 dark:border-gray-700

                    bg-[#fafafa] dark:bg-[#171717]

                    pl-11 pr-4 py-3

                    text-sm sm:text-base
                    text-gray-900 dark:text-white

                    placeholder:text-gray-400 dark:placeholder:text-gray-500

                    outline-none resize-none

                    focus:border-black dark:focus:border-white

                    transition-all duration-300
                  "
                />
              </div>
            </div>

            {/* CITY + ZIP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* CITY */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  City
                </label>

                <div className="relative">
                  <Building2
                    size={18}
                    className="
                      absolute left-4 top-1/2 -translate-y-1/2
                      text-gray-400 dark:text-gray-500
                    "
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    className="
                      w-full
                      h-12 sm:h-14

                      rounded-2xl

                      border border-gray-200 dark:border-gray-700

                      bg-[#fafafa] dark:bg-[#171717]

                      pl-11 pr-4

                      text-sm sm:text-base
                      text-gray-900 dark:text-white

                      placeholder:text-gray-400 dark:placeholder:text-gray-500

                      outline-none

                      focus:border-black dark:focus:border-white

                      transition-all duration-300
                    "
                  />
                </div>
              </div>

              {/* ZIP */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  ZIP Code
                </label>

                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP / Pincode"
                  value={form.zip}
                  onChange={handleChange}
                  className="
                    w-full
                    h-12 sm:h-14

                    rounded-2xl

                    border border-gray-200 dark:border-gray-700

                    bg-[#fafafa] dark:bg-[#171717]

                    px-4

                    text-sm sm:text-base
                    text-gray-900 dark:text-white

                    placeholder:text-gray-400 dark:placeholder:text-gray-500

                    outline-none

                    focus:border-black dark:focus:border-white

                    transition-all duration-300
                  "
                />
              </div>
            </div>

            {/* STATE + COUNTRY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* STATE */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={form.state}
                  onChange={handleChange}
                  className="
                    w-full
                    h-12 sm:h-14

                    rounded-2xl

                    border border-gray-200 dark:border-gray-700

                    bg-[#fafafa] dark:bg-[#171717]

                    px-4

                    text-sm sm:text-base
                    text-gray-900 dark:text-white

                    placeholder:text-gray-400 dark:placeholder:text-gray-500

                    outline-none

                    focus:border-black dark:focus:border-white

                    transition-all duration-300
                  "
                />
              </div>

              {/* COUNTRY */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Country
                </label>

                <div className="relative">
                  <Globe
                    size={18}
                    className="
                      absolute left-4 top-1/2 -translate-y-1/2
                      text-gray-400 dark:text-gray-500
                    "
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={form.country}
                    onChange={handleChange}
                    className="
                      w-full
                      h-12 sm:h-14

                      rounded-2xl

                      border border-gray-200 dark:border-gray-700

                      bg-[#fafafa] dark:bg-[#171717]

                      pl-11 pr-4

                      text-sm sm:text-base
                      text-gray-900 dark:text-white

                      placeholder:text-gray-400 dark:placeholder:text-gray-500

                      outline-none

                      focus:border-black dark:focus:border-white

                      transition-all duration-300
                    "
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* FOOTER */}
        <div
          className="
            sticky bottom-0 z-20 shrink-0

            border-t border-gray-200 dark:border-gray-800

            bg-white/95 dark:bg-[#0f0f10]/95

            backdrop-blur-xl

            p-4
          "
        >
          <div className="flex gap-3">
            {/* CANCEL */}
            <button
              type="button"
              onClick={onClose}
              className="
                flex-1
                h-12 sm:h-14

                rounded-2xl

                border border-gray-200 dark:border-gray-700

                bg-white dark:bg-[#171717]

                text-gray-700 dark:text-gray-300

                hover:bg-gray-50 dark:hover:bg-[#1f1f1f]

                transition-all duration-300

                font-medium
              "
            >
              Cancel
            </button>

            {/* SUBMIT */}
            <button
              type="submit"
              form="address-form"
              disabled={loading}
              className={`
                flex-1
                h-12 sm:h-14

                rounded-2xl

                font-medium

                transition-all duration-300

                ${
                  loading
                    ? `
                      bg-gray-300 dark:bg-gray-700
                      text-gray-500 dark:text-gray-400
                      cursor-not-allowed
                    `
                    : `
                      bg-black dark:bg-white
                      text-white dark:text-black

                      hover:scale-[1.01]
                      active:scale-[0.99]

                      hover:shadow-lg
                    `
                }
              `}
            >
              {loading ? "Saving..." : "Save Address"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;