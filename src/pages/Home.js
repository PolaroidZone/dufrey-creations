import React from "react";

import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import FeatureSection from "../components/sections/FeatureSection";
import FeatureListSection from "../components/sections/FeatureListSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import ServiceSection from "../components/sections/ServiceSection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSection />
      <FeatureListSection />
      <BenefitsSection />
      <ServiceSection />
    </>
  );
};

export default Home;
