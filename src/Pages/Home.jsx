import React from "react";

import Herosection from "../components/home/Herosection.jsx";
import FeaturesBar from "../components/home/Featurebar.jsx";
import CategoriesSection from "../components/home/Categoriessection.jsx";
import FeaturedProducts from "../components/home/FeatureProduct.jsx";
import Membership from "../components/home/Membership.jsx";
import Brands from "../components/home/Brands.jsx";

function Home() {
  return (
    <main
      className="
        min-h-screen

        bg-white dark:bg-black

        text-black dark:text-white

        transition-colors duration-300

        overflow-hidden
      "
    >
      {/* HERO */}
      <section className="relative">
        <Herosection />
      </section>

      {/* FEATURES */}
      <section
        className="
          relative

          mt-10 sm:mt-14 lg:mt-16

          px-4 sm:px-6 lg:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          <FeaturesBar />
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        className="
          relative

          mt-16 sm:mt-20 lg:mt-24

          px-4 sm:px-6 lg:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          <CategoriesSection />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="
          relative

          mt-16 sm:mt-20 lg:mt-24

          px-4 sm:px-6 lg:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          <FeaturedProducts />
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section
        className="
          relative

          mt-20 sm:mt-24 lg:mt-28

          px-4 sm:px-6 lg:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          <Membership />
        </div>
      </section>

      {/* BRANDS */}
      <section
        className="
          relative

          mt-16 sm:mt-20 lg:mt-24
          pb-16 sm:pb-20 lg:pb-24

          px-4 sm:px-6 lg:px-8
        "
      >
        <div className="max-w-7xl mx-auto">
          <Brands />
        </div>
      </section>
    </main>
  );
}

export default Home;