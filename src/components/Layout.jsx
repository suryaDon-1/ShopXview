import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div
      className="
        min-h-screen

        flex flex-col

        bg-white dark:bg-black

        text-black dark:text-white

        transition-colors duration-300
      "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Layout;