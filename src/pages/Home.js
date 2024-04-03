import React from "react";

import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import FeatureSection from "../components/sections/FeatureSection";
import FeatureListSection from "../components/sections/FeatureListSection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSection />
      <FeatureListSection />
    </>
  );
};

export default Home;
