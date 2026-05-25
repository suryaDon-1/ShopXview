import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { registerUser } from "../../features/auth/authslice.js";

export default function SiginUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector(
    (state) => state.auth
  );

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const toastId = toast.loading(
      "Creating account..."
    );

    const res = await dispatch(registerUser(form));

    if (res.meta.requestStatus === "fulfilled") {
      toast.success(
        "Account created successfully!",
        {
          id: toastId,
        }
      );

      navigate("/");
    }

    if (res.meta.requestStatus === "rejected") {
      toast.error(
        res.payload || "Registration failed",
        {
          id: toastId,
        }
      );
    }
  };

  return (
    <div
      className="
        w-full
        min-h-screen

        bg-[#f5f5f7] dark:bg-black

        flex items-start lg:items-center justify-center

        overflow-y-auto

        px-3 py-6 sm:px-4 lg:p-6

        transition-colors duration-300
      "
    >
      {/* MAIN CARD */}
      <div
        className="
          w-full
          max-w-5xl

          bg-white dark:bg-[#0f0f10]

          rounded-[28px]

          overflow-hidden

          grid grid-cols-1 lg:grid-cols-2

          border border-gray-200 dark:border-gray-800

          shadow-[0_20px_60px_rgba(0,0,0,0.08)]

          transition-colors duration-300
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            hidden lg:flex

            relative

            bg-black

            text-white

            p-8 xl:p-10

            flex-col justify-between

            overflow-hidden
          "
        >
          {/* BACKGROUND */}
          <div
            className="
              absolute inset-0

              bg-gradient-to-br
              from-zinc-900
              via-black
              to-zinc-800
            "
          />

          {/* GLOW */}
          <div
            className="
              absolute

              -top-20 -right-20

              w-72 h-72

              bg-white/5

              rounded-full

              blur-3xl
            "
          />

          {/* TOP */}
          <div className="relative z-10">
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <div
                className="
                  h-11 w-11

                  rounded-2xl

                  bg-white

                  text-black

                  flex items-center justify-center

                  text-lg font-black
                "
              >
                S
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight">
                  ShopX
                </h1>

                <p className="text-xs text-gray-400 mt-1">
                  Premium Shopping Platform
                </p>
              </div>
            </div>

            {/* HERO */}
            <div className="mt-16">
              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.35em]

                  text-gray-400
                "
              >
                Join The Future
              </p>

              <h2
                className="
                  text-4xl xl:text-5xl

                  font-black

                  leading-tight

                  mt-5
                "
              >
                Create Your
                <br />
                Premium Account.
              </h2>

              <p
                className="
                  mt-5

                  text-sm

                  text-gray-300

                  leading-relaxed

                  max-w-md
                "
              >
                Unlock exclusive deals, faster checkout,
                wishlist syncing, and a fully personalized
                shopping experience.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="relative z-10 space-y-4">
            {/* CARD */}
            <div
              className="
                rounded-2xl

                border border-white/10

                bg-white/10

                backdrop-blur-xl

                p-4
              "
            >
              <h3 className="font-semibold text-sm">
                Exclusive Member Deals
              </h3>

              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Access premium discounts and early product
                launches before everyone else.
              </p>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-2xl

                border border-white/10

                bg-white/10

                backdrop-blur-xl

                p-4
              "
            >
              <h3 className="font-semibold text-sm">
                Secure & Fast Checkout
              </h3>

              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Save addresses and payment methods securely
                for one-click purchases.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex items-center justify-center

            px-4 sm:px-6 lg:px-10

            py-8 sm:py-10
          "
        >
          <div className="w-full max-w-md">
            {/* MOBILE LOGO */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div
                className="
                  h-11 w-11

                  rounded-2xl

                  bg-black dark:bg-white

                  text-white dark:text-black

                  flex items-center justify-center

                  text-lg font-black
                "
              >
                S
              </div>

              <div>
                <h1 className="text-xl font-black text-black dark:text-white">
                  ShopX
                </h1>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Premium Shopping
                </p>
              </div>
            </div>

            {/* TITLE */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles
                  className="
                    h-4 w-4

                    text-black dark:text-white
                  "
                />

                <span
                  className="
                    text-xs

                    font-medium

                    text-gray-600 dark:text-gray-400
                  "
                >
                  Join ShopX Today
                </span>
              </div>

              <h2
                className="
                  text-3xl sm:text-4xl

                  font-black

                  text-gray-900 dark:text-white
                "
              >
                Create Account
              </h2>

              <p
                className="
                  text-sm

                  text-gray-500 dark:text-gray-400

                  mt-3
                "
              >
                Start your premium shopping journey.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* USERNAME */}
              <div>
                <label
                  className="
                    text-sm

                    font-medium

                    text-gray-700 dark:text-gray-300

                    mb-2 block
                  "
                >
                  Username
                </label>

                <div
                  className="
                    h-13 sm:h-14

                    border border-gray-300 dark:border-gray-700

                    rounded-2xl

                    px-4

                    bg-white dark:bg-[#171717]

                    flex items-center gap-3

                    focus-within:border-black
                    dark:focus-within:border-white

                    focus-within:ring-4
                    focus-within:ring-black/5
                    dark:focus-within:ring-white/5

                    transition-all duration-300
                  "
                >
                  <User
                    className="
                      h-5 w-5

                      text-gray-400 dark:text-gray-500
                    "
                  />

                  <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      h-full

                      bg-transparent

                      outline-none

                      text-[16px] sm:text-sm

                      text-black dark:text-white

                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                    "
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  className="
                    text-sm

                    font-medium

                    text-gray-700 dark:text-gray-300

                    mb-2 block
                  "
                >
                  Email Address
                </label>

                <div
                  className="
                    h-13 sm:h-14

                    border border-gray-300 dark:border-gray-700

                    rounded-2xl

                    px-4

                    bg-white dark:bg-[#171717]

                    flex items-center gap-3

                    focus-within:border-black
                    dark:focus-within:border-white

                    focus-within:ring-4
                    focus-within:ring-black/5
                    dark:focus-within:ring-white/5

                    transition-all duration-300
                  "
                >
                  <Mail
                    className="
                      h-5 w-5

                      text-gray-400 dark:text-gray-500
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      h-full

                      bg-transparent

                      outline-none

                      text-[16px] sm:text-sm

                      text-black dark:text-white

                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                    "
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  className="
                    text-sm

                    font-medium

                    text-gray-700 dark:text-gray-300

                    mb-2 block
                  "
                >
                  Password
                </label>

                <div
                  className="
                    h-13 sm:h-14

                    border border-gray-300 dark:border-gray-700

                    rounded-2xl

                    px-4

                    bg-white dark:bg-[#171717]

                    flex items-center gap-3

                    focus-within:border-black
                    dark:focus-within:border-white

                    focus-within:ring-4
                    focus-within:ring-black/5
                    dark:focus-within:ring-white/5

                    transition-all duration-300
                  "
                >
                  <Lock
                    className="
                      h-5 w-5

                      text-gray-400 dark:text-gray-500
                    "
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      h-full

                      bg-transparent

                      outline-none

                      text-[16px] sm:text-sm

                      text-black dark:text-white

                      placeholder:text-gray-400 dark:placeholder:text-gray-500
                    "
                  />
                </div>
              </div>

              {/* TERMS */}
              <p
                className="
                  text-xs

                  text-gray-500 dark:text-gray-400

                  leading-relaxed
                "
              >
                By creating an account, you agree to our
                Terms & Privacy Policy.
              </p>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full

                  h-13 sm:h-14

                  rounded-2xl

                  font-semibold

                  text-sm

                  flex items-center justify-center gap-2

                  transition-all duration-300

                  ${
                    loading
                      ? `
                        bg-gray-300
                        dark:bg-gray-700

                        text-gray-500
                        dark:text-gray-400

                        cursor-not-allowed
                      `
                      : `
                        bg-black
                        dark:bg-white

                        text-white
                        dark:text-black

                        hover:scale-[1.01]

                        active:scale-[0.99]

                        hover:shadow-xl
                      `
                  }
                `}
              >
                {loading ? (
                  "Creating..."
                ) : (
                  <>
                    Create Account

                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1" />

                <span
                  className="
                    text-[11px]

                    text-gray-400 dark:text-gray-500
                  "
                >
                  OR
                </span>

                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1" />
              </div>

              {/* LOGIN */}
              <p
                className="
                  text-center

                  text-sm

                  text-gray-500 dark:text-gray-400
                "
              >
                Already have an account?{" "}

                <Link
                  to="/siginin"
                  className="
                    font-semibold

                    text-black dark:text-white

                    hover:underline
                  "
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}