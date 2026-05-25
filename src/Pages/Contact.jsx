
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Handshake,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* HERO */}
      <section
        className="
          relative overflow-hidden

          py-20 sm:py-24 lg:py-32
          px-4 sm:px-6

          bg-gray-50 dark:bg-zinc-950

          border-b border-gray-200 dark:border-zinc-800
        "
      >
        {/* BLUR */}
        <div
          className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[500px] h-[500px]
            rounded-full
            bg-gray-200/50 dark:bg-white/5
            blur-3xl
            pointer-events-none
          "
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Contact Us
          </p>

          <h1
            className="
              mt-5
              text-4xl sm:text-5xl lg:text-7xl
              font-black
              leading-tight
              tracking-tight

              text-black dark:text-white
            "
          >
            We’d Love to{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Hear From You
            </span>
          </h1>

          <p
            className="
              mt-6 sm:mt-8
              max-w-3xl mx-auto

              text-base sm:text-lg lg:text-xl
              leading-relaxed

              text-gray-600 dark:text-gray-400
            "
          >
            Have questions about products, shipping, orders, or partnerships?
            Our team is here to help and support you every step of the way.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {/* CUSTOMER SUPPORT */}
          <div
            className="
              rounded-3xl
              p-6 sm:p-8

              border border-gray-200 dark:border-zinc-800

              bg-gray-50 dark:bg-zinc-900

              transition-all duration-300

              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-black dark:bg-white

                flex items-center justify-center
              "
            >
              <MessageCircle className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Customer Support
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400" />

                <p className="text-gray-600 dark:text-gray-400 break-all">
                  support@shopxmail.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400" />

                <p className="text-gray-600 dark:text-gray-400">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400" />

                <p className="text-gray-600 dark:text-gray-400">
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* BUSINESS ADDRESS */}
          <div
            className="
              rounded-3xl
              p-6 sm:p-8

              border border-gray-200 dark:border-zinc-800

              bg-gray-50 dark:bg-zinc-900

              transition-all duration-300

              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-black dark:bg-white

                flex items-center justify-center
              "
            >
              <MapPin className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Business Address
            </h2>

            <div className="mt-5 flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400" />

              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                ShopX Pvt Ltd
                <br />
                Sector 21, Cyber City
                <br />
                Gurugram, Haryana
                <br />
                India – 122001
              </p>
            </div>
          </div>

          {/* PARTNERSHIPS */}
          <div
            className="
              rounded-3xl
              p-6 sm:p-8

              border border-gray-200 dark:border-zinc-800

              bg-gray-50 dark:bg-zinc-900

              transition-all duration-300

              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className="
                w-14 h-14
                rounded-2xl

                bg-black dark:bg-white

                flex items-center justify-center
              "
            >
              <Handshake className="h-6 w-6 text-white dark:text-black" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-black dark:text-white">
              Partnerships
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400" />

                <p className="text-gray-600 dark:text-gray-400 break-all">
                  partners@shopxmail.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400" />

                <p className="text-gray-600 dark:text-gray-400 break-all">
                  hello@shopxmail.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400" />

                <p className="text-gray-600 dark:text-gray-400">
                  Response within 24–48 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NOTE */}
        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-500">
          Note: This contact information is for demo purposes only.
        </p>
      </section>
    </div>
  );
}

export default Contact;