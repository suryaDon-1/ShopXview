import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import ProductDetail from "./components/Products/ProductDetail.jsx";
import SignIn from "./components/user/SignIn.jsx";
import SiginUp from "./components/user/SiginUp.jsx";
import Profile from "./components/user/Profile.jsx";
import { useEffect } from "react";
import { getProfile } from "./features/auth/authslice.js";
import { useDispatch } from "react-redux";
import Cart from "./components/user/Cart.jsx";
import Checkout from "./components/user/Checkout.jsx";
import Orders from "./components/user/Orders.jsx";
import { getorcretecart } from "./features/cart/cartSlice.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import About from "./Pages/About.jsx";
import Careers from "./Pages/Carrers.jsx";
import Shipping from "./Pages/Shipping.jsx";
import Returns from "./Pages/Returns.jsx";
import FAQ from "./Pages/FAQ.jsx";
import Contact from "./Pages/Contact.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserData = async () => {
      // first load user
      const res = await dispatch(getProfile());

      // then load correct cart
      if (res.payload) {
        await dispatch(getorcretecart());
      }
    };

    loadUserData();
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/product/:id/:category",
          element: <ProductDetail />,
        },
        {
          path: "/siginin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SiginUp />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",

          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "userorder",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        {
          path: "/about",
          element: <About/>
        },
         {
          path: "/careers",
          element:<Careers/>
        }, {
          path: "/shipping",
          element:<Shipping/>
        },
         {
          path:"/returns",
          element: <Returns/>
        },
         {
          path:"/faq",
          element:<FAQ/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
