import React from "react";

import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import FeatureSection from "../components/sections/FeatureSection";
import FeatureListSection from "../components/sections/FeatureListSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import ServiceSection from "../components/sections/ServiceSection";
import StatsSection from "../components/sections/StatsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import CTASection from "../components/sections/CTASection";
import NewsLetter from "../components/sections/NewsLetter";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSection />
      <FeatureListSection />
      <BenefitsSection />
      <ServiceSection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
      <NewsLetter />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
