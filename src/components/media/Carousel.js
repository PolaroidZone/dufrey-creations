import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/display/carousel.css";

import { images } from "../../constants/images";

export default function Carousel() {
  console.log(images);
  return (
    <div className="carousel">
      <div className="top_carousel">
        {images.carousel1.map((image) => (
          <div key={image.id} className="item_carousel">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="bottom_carousel">
        {images.carousel2.map((image) => (
          <div key={image.id} className="item_carousel">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
