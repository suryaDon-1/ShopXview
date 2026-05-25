import React from "react";
import {
  MapPin,
  Pencil,
  Trash2,
  Globe,
} from "lucide-react";

function AddressCard({ address, onEdit, onDelete }) {
  return (
    <div
      className="
        w-full
        rounded-3xl
        border
        border-gray-200 dark:border-white/10
        bg-white dark:bg-zinc-900
        p-4 sm:p-5 md:p-6 lg:p-7
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* TOP SECTION */}
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5 md:gap-6">
        
        {/* LEFT SIDE */}
        <div className="flex items-start gap-3 sm:gap-4 w-full min-w-0">
          
          {/* ICON */}
          <div
            className="
              w-12 h-12 sm:w-14 sm:h-14
              rounded-2xl
              bg-gradient-to-br
              from-black to-gray-700
              dark:from-white dark:to-gray-300
              flex items-center justify-center
              shrink-0
              shadow-md
            "
          >
            <MapPin
              size={22}
              className="text-white dark:text-black"
            />
          </div>

          {/* ADDRESS INFO */}
          <div className="flex-1 min-w-0">
            
            {/* STREET */}
            <h2
              className="
                text-lg sm:text-xl md:text-2xl
                font-bold
                text-gray-900 dark:text-white
                break-words
                leading-snug
              "
            >
              {address.street}
            </h2>

            {/* CITY + STATE */}
            <p
              className="
                mt-2
                text-sm sm:text-base md:text-lg
                text-gray-600 dark:text-gray-300
                break-words
              "
            >
              {address.city}, {address.state}
            </p>

            {/* ZIP */}
            <p
              className="
                mt-2
                text-sm md:text-base
                text-gray-500 dark:text-gray-400
              "
            >
              ZIP Code: {address.zip}
            </p>

            {/* COUNTRY */}
            <div
              className="
                flex flex-wrap items-center gap-2
                mt-3
                text-sm md:text-base
                text-gray-500 dark:text-gray-400
              "
            >
              <Globe size={16} />
              <span className="break-words">
                {address.country}
              </span>
            </div>
          </div>
        </div>

        {/* STATUS BADGE */}
        <div
          className="
            self-start
            whitespace-nowrap
            rounded-full
            bg-green-100 dark:bg-green-500/15
            px-4 py-2
            text-xs sm:text-sm
            font-semibold
            text-green-700 dark:text-green-400
          "
        >
          Saved Address
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-5 md:my-6 border-t border-gray-100 dark:border-white/10" />

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
        
        {/* EDIT BUTTON */}
        <button
          onClick={() => onEdit(address)}
          className="
            flex-1
            flex items-center justify-center gap-2
            rounded-2xl
            border
            border-gray-300 dark:border-white/10
            bg-white dark:bg-zinc-800
            px-4 py-3.5 md:py-4
            text-sm sm:text-base
            font-semibold
            text-gray-700 dark:text-gray-200
            hover:bg-black
            hover:text-white
            hover:border-black
            dark:hover:bg-white
            dark:hover:text-black
            dark:hover:border-white
            transition-all
            duration-300
          "
        >
          <Pencil size={18} />
          Edit Address
        </button>

        {/* DELETE BUTTON */}
        <button
          onClick={() => onDelete(address._id)}
          className="
            flex-1
            flex items-center justify-center gap-2
            rounded-2xl
            bg-red-50 dark:bg-red-500/10
            px-4 py-3.5 md:py-4
            text-sm sm:text-base
            font-semibold
            text-red-500 dark:text-red-400
            hover:bg-red-500
            hover:text-white
            dark:hover:bg-red-500
            dark:hover:text-white
            transition-all
            duration-300
          "
        >
          <Trash2 size={18} />
          Delete Address
        </button>
      </div>
    </div>
  );
}

export default AddressCard;