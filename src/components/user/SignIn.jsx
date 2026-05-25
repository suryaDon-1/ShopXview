import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfile,
  GoogleSigin,
  loginUser,
} from "../../features/auth/authslice.js";

import { GoogleLogin } from "@react-oauth/google";

import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgePercent,
} from "lucide-react";

import { getorcretecart } from "../../features/cart/cartSlice.js";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector(
    (state) => state.auth
  );

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading) return;

    const toastId = toast.loading("Logging in...");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await dispatch(
        loginUser({ email, password })
      ).unwrap();

      await dispatch(getorcretecart());

      toast.success(
        res.message || "Login successful!",
        {
          id: toastId,
        }
      );

      navigate("/");
    } catch (error) {
      toast.error(
        error?.message || "Invalid credentials",
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
                Premium Shopping Experience
              </p>

              <h2
                className="
                  text-4xl xl:text-5xl

                  font-black

                  leading-tight

                  mt-5
                "
              >
                Style Meets
                <br />
                Innovation.
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
                Discover premium fashion, electronics,
                and lifestyle products designed for modern
                living.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="relative z-10 space-y-4">
            {/* CARD */}
            <div
              className="
                flex items-center gap-4

                rounded-2xl

                border border-white/10

                bg-white/10

                backdrop-blur-xl

                p-4
              "
            >
              <ShieldCheck className="h-5 w-5 shrink-0" />

              <div>
                <h3 className="font-semibold text-sm">
                  Secure Payments
                </h3>

                <p className="text-xs text-gray-300 mt-1">
                  Safe & encrypted checkout
                </p>
              </div>
            </div>

            {/* CARD */}
            <div
              className="
                flex items-center gap-4

                rounded-2xl

                border border-white/10

                bg-white/10

                backdrop-blur-xl

                p-4
              "
            >
              <Truck className="h-5 w-5 shrink-0" />

              <div>
                <h3 className="font-semibold text-sm">
                  Fast Delivery
                </h3>

                <p className="text-xs text-gray-300 mt-1">
                  Quick shipping across India
                </p>
              </div>
            </div>

            {/* CARD */}
            <div
              className="
                flex items-center gap-4

                rounded-2xl

                border border-white/10

                bg-white/10

                backdrop-blur-xl

                p-4
              "
            >
              <BadgePercent className="h-5 w-5 shrink-0" />

              <div>
                <h3 className="font-semibold text-sm">
                  Exclusive Deals
                </h3>

                <p className="text-xs text-gray-300 mt-1">
                  Early access to premium offers
                </p>
              </div>
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
              <h2
                className="
                  text-3xl sm:text-4xl

                  font-black

                  text-gray-900 dark:text-white
                "
              >
                Welcome Back
              </h2>

              <p
                className="
                  text-sm

                  text-gray-500 dark:text-gray-400

                  mt-3
                "
              >
                Sign in to continue your shopping
                experience.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
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
                    placeholder="Enter your email"
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
                <div className="flex items-center justify-between mb-2">
                  <label
                    className="
                      text-sm

                      font-medium

                      text-gray-700 dark:text-gray-300
                    "
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="
                      text-sm

                      text-gray-500 dark:text-gray-400

                      hover:text-black
                      dark:hover:text-white

                      transition
                    "
                  >
                    Forgot Password?
                  </button>
                </div>

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
                    placeholder="Enter your password"
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
                  "Please wait..."
                ) : (
                  <>
                    Sign In

                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-4 py-1">
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1" />

                <span
                  className="
                    text-xs

                    text-gray-400 dark:text-gray-500
                  "
                >
                  OR
                </span>

                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1" />
              </div>

              {/* GOOGLE */}
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={async (
                    credentialResponse
                  ) => {
                    const token =
                      credentialResponse.credential;

                    const res = await dispatch(
                      GoogleSigin(token)
                    );

                    console.log(res);

                    await dispatch(
                      getorcretecart()
                    );

                    navigate("/");

                    dispatch(getProfile());
                  }}
                  onError={() => {
                    toast.error(
                      "Google Login Failed"
                    );
                  }}
                />
              </div>

              {/* FOOTER */}
              <p
                className="
                  text-center

                  text-sm

                  text-gray-500 dark:text-gray-400

                  pt-2
                "
              >
                Don’t have an account?{" "}

                <Link
                  to="/signup"
                  className="
                    font-semibold

                    text-black dark:text-white

                    hover:underline
                  "
                >
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;