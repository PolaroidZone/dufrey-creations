import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "../../styles/display/carousel.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="top_carousel">
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
      </div>
      <div className="bottom_carousel">
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
        <div className="item_carousel">
          <img src="https://via.placeholder.com/150" alt="carausel" />
        </div>
      </div>
    </div>
  );
}
