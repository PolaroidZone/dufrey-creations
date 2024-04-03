//Store images that can be uses in the app
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
//import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import image10 from "../assets/images/10.jpg";
import image11 from "../assets/images/11.jpg";
import image12 from "../assets/images/12.jpg";

import hero from "../assets/images/hero.png";
import featuresImage from "../assets/images/featurePic-edit.png";

export const images = {
  carousel1: [
    { id: 1, src: image7, alt: "image7" },
    { id: 2, src: image2, alt: "image2" },
    { id: 3, src: image3, alt: "image3" },
    { id: 4, src: image4, alt: "image4" },
    { id: 6, src: image1, alt: "image1" },
    { id: 7, src: image6, alt: "image5" },
  ],
  carousel2: [
    { id: 8, src: image12, alt: "image12" },
    { id: 9, src: image9, alt: "image9" },
    { id: 10, src: image10, alt: "image10" },
    { id: 11, src: image11, alt: "image11" },
    { id: 12, src: image8, alt: "image8" },
  ],
  index: {
    hero: { src: hero, alt: "hero" },
    features: { src: featuresImage, alt: "features" },
  },
};
// Path: src/components/media/Carousel.js
