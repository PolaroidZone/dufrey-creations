import React from "react";
import DefaultButton from "../buttons/DefaultButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_intro">
          <h2>
            Discover the Best Sewing <br /> Machines for You
          </h2>
          <h4>
            Explore our wide selection of high-quality sewing machines and
            services.
          </h4>
          <DefaultButton text="Learn More" />
        </div>
        <div className="carausel">
          <div className="carausel_item">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div className="carausel_item">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div className="carausel_item">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div className="carausel_item">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}
