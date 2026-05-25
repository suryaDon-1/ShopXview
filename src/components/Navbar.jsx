import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Menu,
  Search,
  Moon,
  User,
  ChevronDown,
  ShoppingBag,
  X,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authslice.js";
import toast from "react-hot-toast";
import CartDrawer from "./CartDrawer.jsx";
import { clearCartState } from "../features/cart/cartSlice.js";
import { useTheme } from "../context/ThemeContext.jsx";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { theme, toggleTheme } = useTheme();

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const [serachval, setsearchval] = useState(search);

  const [openCart, setOpenCart] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const hanldeSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (serachval.trim() !== "") {
      params.set("search", serachval);
    } else {
      params.delete("search");
    }

    navigate(`/shop?${params.toString()}`);
    setSearchParams(params);
    setMobileMenu(false);
  };

  const handleLogout = async () => {
    const t = toast.loading("Logging out...");

    try {
      await dispatch(logout()).unwrap();
      await dispatch(clearCartState());

      toast.success("Logged out successfully", { id: t });

      navigate("/");
    } catch (error) {
      toast.error("Logout failed", { id: t });
    }

    setshowDropdown(false);
  };

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Sneakers", path: "/shop?category=Sneakers" },
    { name: "Apparel", path: "/shop?category=Apparel" },
    { name: "Accessories", path: "/shop?category=Accessories" },
    { name: "Electronics", path: "/shop?category=Electronics" },
  ];

  return (
    <>
      <header
        className="
          sticky top-0 z-50
          w-full
          border-b
          border-gray-200 dark:border-white/10
          bg-white/95 dark:bg-zinc-950/95
          backdrop-blur
          transition-colors
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            h-16 sm:h-[72px]
            px-3 sm:px-5 lg:px-8
            flex items-center gap-2 sm:gap-4
          "
        >
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(true)}
            className="
              lg:hidden
              p-2
              rounded-xl
              hover:bg-gray-100
              dark:hover:bg-zinc-800
              transition
            "
          >
            <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <div
              className="
                h-10 w-10 sm:h-12 sm:w-12
                rounded-2xl
                bg-black dark:bg-white
                text-white dark:text-black
                grid place-items-center
                font-bold
                text-xl sm:text-2xl
                shadow-md
              "
            >
              S
            </div>

            <div className="leading-tight hidden xs:block">
              <h1 className="font-bold text-lg sm:text-2xl text-gray-900 dark:text-white">
                ShopX
              </h1>

              <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Premium Store
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1 ml-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="
                  px-4 py-2
                  rounded-xl
                  text-sm font-medium
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-zinc-800
                  transition-all
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* SEARCH */}
          <form
            onSubmit={hanldeSearch}
            className="
              hidden md:flex
              flex-1
              max-w-xl
              mx-2 lg:mx-6
            "
          >
            <div className="relative w-full">
              <Search
                className="
                  absolute
                  left-4 top-1/2 -translate-y-1/2
                  h-4 w-4
                  text-gray-400
                "
              />

              <input
                type="text"
                value={serachval}
                onChange={(e) => setsearchval(e.target.value)}
                placeholder="Search products..."
                className="
                  w-full
                  h-11
                  rounded-full
                  border
                  border-gray-300 dark:border-white/10
                  bg-gray-50 dark:bg-zinc-900
                  pl-11 pr-28
                  text-sm
                  text-gray-900 dark:text-white
                  outline-none
                  focus:ring-2
                  focus:ring-black dark:focus:ring-white
                  transition
                "
              />

              <button
                type="submit"
                className="
                  absolute right-1 top-1/2 -translate-y-1/2
                  px-5 py-2
                  rounded-full
                  bg-black dark:bg-white
                  text-white dark:text-black
                  text-sm font-medium
                  hover:scale-[1.02]
                  transition-all
                "
              >
                Search
              </button>
            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="
                h-10 w-10
                rounded-full
                flex items-center justify-center
                hover:bg-gray-100
                dark:hover:bg-zinc-800
                transition
              "
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            {/* PROFILE */}
            <div className="relative">
              <button
                onClick={() => setshowDropdown(!showDropdown)}
                className="
                  flex items-center gap-1
                  p-2
                  rounded-full
                  hover:bg-gray-100
                  dark:hover:bg-zinc-800
                  transition
                "
              >
                <User className="w-[18px] h-[18px] text-gray-700 dark:text-gray-200" />

                <ChevronDown
                  className={`
                    w-3.5 h-3.5
                    text-gray-500 dark:text-gray-400
                    transition-transform
                    ${showDropdown ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* DROPDOWN */}
              {showDropdown && (
                <div
                  className="
                    absolute right-0 top-12
                    w-52
                    rounded-2xl
                    border
                    border-gray-200 dark:border-white/10
                    bg-white dark:bg-zinc-900
                    shadow-2xl
                    p-2
                    z-50
                  "
                >
                  {!user ? (
                    <Link
                      to="/siginin"
                      onClick={() => setshowDropdown(false)}
                      className="
                        block
                        rounded-xl
                        px-4 py-3
                        text-sm
                        text-gray-700 dark:text-gray-200
                        hover:bg-gray-100
                        dark:hover:bg-zinc-800
                        transition
                      "
                    >
                      Sign in / Sign up
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/profile"
                        onClick={() => setshowDropdown(false)}
                        className="
                          block
                          rounded-xl
                          px-4 py-3
                          text-sm
                          text-gray-700 dark:text-gray-200
                          hover:bg-gray-100
                          dark:hover:bg-zinc-800
                          transition
                        "
                      >
                        Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="
                          w-full text-left
                          rounded-xl
                          px-4 py-3
                          text-sm
                          text-red-500
                          hover:bg-red-50
                          dark:hover:bg-red-500/10
                          transition
                        "
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* CART */}
            <button
              onClick={() => setOpenCart(true)}
              className="
                relative
                h-10 w-10
                rounded-full
                flex items-center justify-center
                hover:bg-gray-100
                dark:hover:bg-zinc-800
                transition
              "
            >
              <ShoppingBag className="w-[18px] h-[18px] text-gray-700 dark:text-gray-200" />

              {cart?.item?.length > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    w-5 h-5
                    rounded-full
                    bg-black dark:bg-white
                    text-white dark:text-black
                    text-[10px] font-semibold
                    flex items-center justify-center
                  "
                >
                  {cart.item.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden px-3 pb-3">
          <form onSubmit={hanldeSearch}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

              <input
                type="text"
                value={serachval}
                onChange={(e) => setsearchval(e.target.value)}
                placeholder="Search..."
                className="
                  w-full
                  h-11
                  rounded-full
                  border
                  border-gray-300 dark:border-white/10
                  bg-gray-50 dark:bg-zinc-900
                  pl-11 pr-24
                  text-sm
                  text-gray-900 dark:text-white
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  absolute right-1 top-1/2 -translate-y-1/2
                  px-4 py-2
                  rounded-full
                  bg-black dark:bg-white
                  text-white dark:text-black
                  text-xs font-medium
                "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[99999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenu(false)}
          />

          <div
            className="
              absolute left-0 top-0
              h-full w-[85%] max-w-sm
              bg-white dark:bg-zinc-950
              border-r border-gray-200 dark:border-white/10
              shadow-2xl
              p-5
              overflow-y-auto
            "
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3"
              >
                <div
                  className="
                    h-11 w-11
                    rounded-2xl
                    bg-black dark:bg-white
                    text-white dark:text-black
                    grid place-items-center
                    font-bold text-xl
                  "
                >
                  S
                </div>

                <div>
                  <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                    ShopX
                  </h2>

                  <p className="text-[10px] tracking-widest uppercase text-gray-500">
                    Premium Store
                  </p>
                </div>
              </Link>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setMobileMenu(false)}
                className="
                  p-2 rounded-xl
                  text-red-500 dark:text-red-400
                  hover:bg-red-50
                  dark:hover:bg-red-500/10
                  transition
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className="
                    px-4 py-3
                    rounded-2xl
                    text-sm font-medium
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-100
                    dark:hover:bg-zinc-800
                    transition
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {openCart && (
        <div className="fixed inset-0 z-[99999]">
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenCart(false)}
          />

          {/* DRAWER */}
          <div
            className="
              absolute right-0 top-0
              h-full
              w-full sm:max-w-md
              bg-white dark:bg-zinc-950
              shadow-2xl
              flex flex-col
              border-l border-gray-200 dark:border-white/10
            "
          >
            {/* HEADER */}
            <div
              className="
                flex items-center justify-between
                p-4
                border-b
                border-gray-200 dark:border-white/10
              "
            >
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
                Your Cart
              </h2>

              {/* X BUTTON */}
              <button
                onClick={() => setOpenCart(false)}
                className="
                  p-2 rounded-xl
                  text-red-500 dark:text-red-400
                  hover:bg-red-50
                  dark:hover:bg-red-500/10
                  transition
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* CART CONTENT */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4">
              <CartDrawer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;