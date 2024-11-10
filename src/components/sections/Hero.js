import React, { useContext } from "react";
import DefaultButton from "../buttons/DefaultButton";

import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/hero.css";
import Carousel from "../media/Carousel";

export default function Hero() {
  const { colors } = useContext(ThemeContext);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero_intro">
          <h2 style={{ color: colors.secondary.main }}>
            Discover the Best Sewing <br /> Machines for You
          </h2>
          <p style={{ color: colors.secondary.main }}>
            Explore our wide selection of high-quality sewing machines and
            services.
          </p>
          <DefaultButton text="Learn More" />
        </div>
        <Carousel />
      </div>
    </section>
  );
}
