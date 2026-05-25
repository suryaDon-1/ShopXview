import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  uploadPhoto,
  updateProfile,
  changePassword,
  logout,
  getProfile,
} from "../../features/auth/authslice.js";

import toast from "react-hot-toast";

import {
  User,
  Mail,
  Package,
  MapPin,
  Camera,
  Shield,
  ShoppingCart,
  LogOut,
  ChevronRight,
} from "lucide-react";

import CartDrawer from "../CartDrawer.jsx";
import Address from "./Address.jsx";
import Orders from "./Orders.jsx";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.orders);
  const { cart } = useSelector((state) => state.cart);
  const { address = [] } = useSelector((state) => state.address);

  const [tab, setTab] = useState("profile");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        username: user.username || "",
        email: user.email || "",
      });
    }
  }, [user]);

  // LOGOUT
  const handleLogout = async () => {
    const t = toast.loading("Logging out...");

    try {
      await dispatch(logout()).unwrap();

      toast.success("Logged out", { id: t });

      navigate("/");
    } catch {
      toast.error("Failed", { id: t });
    }
  };

  // IMAGE UPLOAD
  const handleUpload = async (file) => {
    if (!file) return;

    const formData = new FormData();

    formData.append("profile", file);

    const t = toast.loading("Uploading...");

    try {
      await dispatch(uploadPhoto(formData)).unwrap();

      toast.success("Updated", { id: t });

      dispatch(getProfile());
    } catch {
      toast.error("Failed", { id: t });
    }
  };

  // PROFILE UPDATE
  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    const t = toast.loading("Saving...");

    try {
      await dispatch(updateProfile(profileData)).unwrap();

      toast.success("Updated", { id: t });
    } catch {
      toast.error("Failed", { id: t });
    }
  };

  // PASSWORD UPDATE
  const handlePasswordChange = async (e) => {
    e.preventDefault();

    const t = toast.loading("Updating...");

    try {
      await dispatch(changePassword(passwordData)).unwrap();

      toast.success("Password updated", { id: t });

      setPasswordData({
        oldPassword: "",
        newPassword: "",
      });
    } catch {
      toast.error("Failed", { id: t });
    }
  };

  // SIDEBAR ITEMS
  const menuItems = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
    },
    {
      id: "security",
      label: "Security",
      icon: Shield,
    },
    {
      id: "orders",
      label: "Orders",
      icon: Package,
    },
    {
      id: "address",
      label: "Addresses",
      icon: MapPin,
    },
    {
      id: "cart",
      label: "Cart",
      icon: ShoppingCart,
    },
  ];

  return (
    <div
      className="
        min-h-screen

        bg-gray-50 dark:bg-black

        text-black dark:text-white

        transition-colors duration-300
      "
    >
      {/* HERO */}
      <section
        className="
          relative overflow-hidden

          border-b border-gray-200 dark:border-zinc-800

          bg-white dark:bg-zinc-950
        "
      >
        {/* BLUR */}
        <div
          className="
            absolute top-0 left-1/2 -translate-x-1/2

            h-[400px] w-[400px]

            rounded-full

            bg-gray-200/50 dark:bg-white/5

            blur-3xl
          "
        />

        <div
          className="
            relative

            max-w-7xl mx-auto

            px-4 sm:px-6 lg:px-8

            py-10 sm:py-14
          "
        >
          <div
            className="
              flex flex-col lg:flex-row

              items-start lg:items-center
              justify-between

              gap-8
            "
          >
            {/* USER */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              {/* IMAGE */}
              <div className="relative shrink-0">
                <img
                  src={
                    user?.profile ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="profile"
                  className="
                    h-24 w-24 sm:h-28 sm:w-28

                    rounded-full

                    object-cover

                    border-4 border-white dark:border-zinc-900

                    shadow-xl
                  "
                />

                <label
                  htmlFor="profile"
                  className="
                    absolute bottom-1 right-1

                    h-10 w-10

                    rounded-full

                    bg-black dark:bg-white

                    text-white dark:text-black

                    flex items-center justify-center

                    cursor-pointer

                    shadow-lg

                    hover:scale-105

                    transition-transform duration-300
                  "
                >
                  <Camera size={16} />
                </label>

                <input
                  id="profile"
                  type="file"
                  hidden
                  onChange={(e) => handleUpload(e.target.files[0])}
                />
              </div>

              {/* INFO */}
              <div>
                <h1
                  className="
                    text-2xl sm:text-3xl lg:text-4xl

                    font-black

                    tracking-tight
                  "
                >
                  {user?.username}
                </h1>

                <p
                  className="
                    mt-2

                    flex items-center gap-2

                    text-gray-500 dark:text-gray-400
                  "
                >
                  <Mail size={15} />
                  {user?.email}
                </p>

                <div
                  className="
                    mt-4

                    inline-flex items-center gap-2

                    rounded-full

                    border border-gray-200 dark:border-zinc-700

                    bg-gray-100 dark:bg-zinc-900

                    px-4 py-2

                    text-sm font-medium
                  "
                >
                  <Shield size={14} />
                  ShopX Premium Account
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <button
                onClick={() => navigate("/userorder")}
                className="
                  flex-1 sm:flex-none

                  h-12 px-5

                  rounded-2xl

                  bg-black dark:bg-white

                  text-white dark:text-black

                  font-semibold

                  transition-all duration-300

                  hover:scale-[1.02]

                  active:scale-95
                "
              >
                My Orders
              </button>

              <button
                onClick={handleLogout}
                className="
                  flex-1 sm:flex-none

                  h-12 px-5

                  rounded-2xl

                  bg-red-500

                  text-white

                  font-semibold

                  flex items-center justify-center gap-2

                  transition-all duration-300

                  hover:bg-red-600

                  active:scale-95
                "
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div
        className="
          max-w-7xl mx-auto

          px-4 sm:px-6 lg:px-8

          py-6 sm:py-8 lg:py-10
        "
      >
        {/* MOBILE TAB BUTTONS */}
        <div className="lg:hidden mb-6">
          <div
            className="
              flex gap-3

              overflow-x-auto

              scrollbar-hide
            "
          >
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`
                    shrink-0

                    h-11 px-4

                    rounded-2xl

                    border

                    flex items-center gap-2

                    text-sm font-medium

                    transition-all duration-300

                    ${
                      tab === item.id
                        ? `
                          bg-black dark:bg-white
                          text-white dark:text-black
                          border-black dark:border-white
                        `
                        : `
                          bg-white dark:bg-zinc-950
                          border-gray-200 dark:border-zinc-800

                          hover:bg-gray-100
                          dark:hover:bg-zinc-900
                        `
                    }
                  `}
                >
                  <Icon size={15} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3">
            <div
              className="
                sticky top-24

                rounded-3xl

                border border-gray-200 dark:border-zinc-800

                bg-white dark:bg-zinc-950

                p-4
              "
            >
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setTab(item.id)}
                      className={`
                        w-full

                        h-14 px-4

                        rounded-2xl

                        flex items-center justify-between

                        transition-all duration-300

                        ${
                          tab === item.id
                            ? `
                              bg-black dark:bg-white
                              text-white dark:text-black
                            `
                            : `
                              hover:bg-gray-100
                              dark:hover:bg-zinc-900
                            `
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} />
                        <span className="font-medium">
                          {item.label}
                        </span>
                      </div>

                      <ChevronRight size={16} />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="lg:col-span-9">
            {/* PROFILE */}
            {tab === "profile" && (
              <div className="space-y-6">
                {/* PROFILE FORM */}
                <div
                  className="
                    rounded-3xl

                    border border-gray-200 dark:border-zinc-800

                    bg-white dark:bg-zinc-950

                    p-5 sm:p-6 lg:p-8
                  "
                >
                  <h2 className="text-2xl font-bold">
                    Profile Settings
                  </h2>

                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Update your account information.
                  </p>

                  <form
                    onSubmit={handleProfileUpdate}
                    className="mt-8 space-y-5"
                  >
                    {/* USERNAME */}
                    <div>
                      <label className="text-sm font-medium">
                        Username
                      </label>

                      <div className="relative mt-2">
                        <User
                          size={18}
                          className="
                            absolute left-4 top-1/2 -translate-y-1/2

                            text-gray-400
                          "
                        />

                        <input
                          value={profileData.username}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              username: e.target.value,
                            })
                          }
                          placeholder="Username"
                          className="
                            w-full h-14

                            rounded-2xl

                            border border-gray-300 dark:border-zinc-700

                            bg-white dark:bg-black

                            pl-12 pr-4

                            outline-none

                            focus:ring-2 focus:ring-black
                            dark:focus:ring-white
                          "
                        />
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="text-sm font-medium">
                        Email
                      </label>

                      <div className="relative mt-2">
                        <Mail
                          size={18}
                          className="
                            absolute left-4 top-1/2 -translate-y-1/2

                            text-gray-400
                          "
                        />

                        <input
                          value={profileData.email}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              email: e.target.value,
                            })
                          }
                          placeholder="Email"
                          className="
                            w-full h-14

                            rounded-2xl

                            border border-gray-300 dark:border-zinc-700

                            bg-white dark:bg-black

                            pl-12 pr-4

                            outline-none

                            focus:ring-2 focus:ring-black
                            dark:focus:ring-white
                          "
                        />
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      className="
                        w-full sm:w-auto

                        h-14 px-8

                        rounded-2xl

                        bg-black dark:bg-white

                        text-white dark:text-black

                        font-semibold

                        transition-all duration-300

                        hover:scale-[1.02]

                        active:scale-95
                      "
                    >
                      Save Changes
                    </button>
                  </form>
                </div>

                {/* STATS */}
                <div
                  className="
                    grid

                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-3

                    gap-4
                  "
                >
                  {/* ORDERS */}
                  <div
                    className="
                      rounded-3xl

                      border border-gray-200 dark:border-zinc-800

                      bg-white dark:bg-zinc-950

                      p-5 sm:p-6
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Active Orders
                        </p>

                        <h2 className="mt-2 text-3xl font-black">
                          {orders?.filter(
                            (order) => order.status !== "delivered"
                          ).length || 0}
                        </h2>
                      </div>

                      <div
                        className="
                          h-12 w-12

                          rounded-2xl

                          bg-black dark:bg-white

                          text-white dark:text-black

                          flex items-center justify-center
                        "
                      >
                        <Package size={22} />
                      </div>
                    </div>
                  </div>

                  {/* CART */}
                  <div
                    className="
                      rounded-3xl

                      border border-gray-200 dark:border-zinc-800

                      bg-white dark:bg-zinc-950

                      p-5 sm:p-6
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Cart Items
                        </p>

                        <h2 className="mt-2 text-3xl font-black">
                          {cart?.item?.length || 0}
                        </h2>
                      </div>

                      <div
                        className="
                          h-12 w-12

                          rounded-2xl

                          bg-black dark:bg-white

                          text-white dark:text-black

                          flex items-center justify-center
                        "
                      >
                        <ShoppingCart size={22} />
                      </div>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div
                    className="
                      rounded-3xl

                      border border-gray-200 dark:border-zinc-800

                      bg-white dark:bg-zinc-950

                      p-5 sm:p-6
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Saved Addresses
                        </p>

                        <h2 className="mt-2 text-3xl font-black">
                          {address?.length || 0}
                        </h2>
                      </div>

                      <div
                        className="
                          h-12 w-12

                          rounded-2xl

                          bg-black dark:bg-white

                          text-white dark:text-black

                          flex items-center justify-center
                        "
                      >
                        <MapPin size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECURITY */}
            {tab === "security" && (
              <div
                className="
                  rounded-3xl

                  border border-gray-200 dark:border-zinc-800

                  bg-white dark:bg-zinc-950

                  p-5 sm:p-6 lg:p-8
                "
              >
                <h2 className="text-2xl font-bold">
                  Security Settings
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Change your password securely.
                </p>

                <form
                  onSubmit={handlePasswordChange}
                  className="mt-8 space-y-5"
                >
                  <input
                    type="password"
                    placeholder="Old Password"
                    value={passwordData.oldPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        oldPassword: e.target.value,
                      })
                    }
                    className="
                      w-full h-14

                      rounded-2xl

                      border border-gray-300 dark:border-zinc-700

                      bg-white dark:bg-black

                      px-4

                      outline-none

                      focus:ring-2 focus:ring-black
                      dark:focus:ring-white
                    "
                  />

                  <input
                    type="password"
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    className="
                      w-full h-14

                      rounded-2xl

                      border border-gray-300 dark:border-zinc-700

                      bg-white dark:bg-black

                      px-4

                      outline-none

                      focus:ring-2 focus:ring-black
                      dark:focus:ring-white
                    "
                  />

                  <button
                    className="
                      w-full sm:w-auto

                      h-14 px-8

                      rounded-2xl

                      bg-green-600

                      text-white

                      font-semibold

                      transition-all duration-300

                      hover:bg-green-700

                      active:scale-95
                    "
                  >
                    Update Password
                  </button>
                </form>
              </div>
            )}

            {/* ORDERS */}
            {tab === "orders" && (
              <div
                className="
                  rounded-3xl

                  border border-gray-200 dark:border-zinc-800

                  bg-white dark:bg-zinc-950

                  overflow-hidden
                "
              >
                <div
                  className="
                    border-b border-gray-200 dark:border-zinc-800

                    p-5 sm:p-6
                  "
                >
                  <h2 className="text-2xl font-bold">
                    Orders
                  </h2>
                </div>

                <div className="max-h-[75vh] overflow-y-auto p-5 sm:p-6">
                  <Orders />
                </div>
              </div>
            )}

            {/* ADDRESS */}
            {tab === "address" && (
              <div
                className="
                  rounded-3xl

                  border border-gray-200 dark:border-zinc-800

                  bg-white dark:bg-zinc-950

                  p-5 sm:p-6
                "
              >
                <h2 className="text-2xl font-bold mb-6">
                  Addresses
                </h2>

                <Address />
              </div>
            )}

            {/* CART */}
            {tab === "cart" && (
              <div
                className="
                  rounded-3xl

                  border border-gray-200 dark:border-zinc-800

                  bg-white dark:bg-zinc-950

                  overflow-hidden
                "
              >
                <div
                  className="
                    flex flex-col sm:flex-row
                    sm:items-center sm:justify-between

                    gap-2

                    border-b border-gray-200 dark:border-zinc-800

                    p-5 sm:p-6
                  "
                >
                  <h2 className="text-2xl font-bold">
                    Your Cart
                  </h2>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Scroll to view all items
                  </span>
                </div>

                <div className="max-h-[75vh] overflow-y-auto p-5 sm:p-6">
                  <CartDrawer />
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}