import {
  Truck,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On orders over $120",
  },
  {
    icon: RefreshCw,
    title: "30-Day Returns",
    subtitle: "No-fuss exchanges",
  },
  {
    icon: ShieldCheck,
    title: "2-Year Warranty",
    subtitle: "Repair or replace",
  },
  {
    icon: Sparkles,
    title: "Carbon Neutral",
    subtitle: "Every shipment",
  },
];

export default function FeaturesBar() {
  return (
    <section
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        mt-12 sm:mt-14
      "
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
          rounded-3xl
          border
          border-gray-200 dark:border-white/10
          bg-white dark:bg-zinc-900
          p-4 sm:p-5
          shadow-sm
          transition-colors
        "
      >
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                group
                flex items-center
                gap-4
                rounded-2xl
                border border-transparent
                p-4
                transition-all duration-300
                hover:border-gray-200
                dark:hover:border-white/10
                hover:bg-gray-50
                dark:hover:bg-zinc-800
                hover:shadow-sm
              "
            >
              {/* ICON */}
              <div
                className="
                  flex items-center justify-center
                  w-12 h-12 sm:w-14 sm:h-14
                  shrink-0
                  rounded-2xl
                  bg-gray-100 dark:bg-zinc-800
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-black
                  dark:group-hover:bg-white
                "
              >
                <Icon
                  className="
                    w-5 h-5
                    text-black dark:text-white
                    group-hover:text-white
                    dark:group-hover:text-black
                    transition-colors duration-300
                  "
                />
              </div>

              {/* TEXT */}
              <div className="min-w-0">
                <h3
                  className="
                    text-sm sm:text-base
                    font-semibold
                    leading-tight
                    text-gray-900 dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs sm:text-sm
                    text-gray-500 dark:text-gray-400
                    break-words
                  "
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}