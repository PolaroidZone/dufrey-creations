import React, { useContext, useState, useEffect } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";
import siteStrings from "../../assets/data/siteStrings.json";

import "../../styles/testimonial.css";

export default function TestimonialSection() {
  const [isMobile, setIsMobile] = useState(false);
  const { colors, typography } = useContext(ThemeContext);
  const { heading3, heading5, paragraph } = typography;

  const testimonial = siteStrings.testimonialSection;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

    // Check right away (not just on resize)
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="testimonial_section"
      style={{ backgroundColor: colors.secondary.main }}
    >
      <div className="testimonial_container">
        {testimonial.map((testimonial, index) => (
          <>
            <div key={index} className="testimonial_content">
              <h3
                style={{
                  fontSize: !isMobile ? heading3.fontSize : 20,
                  fontWeight: heading3.fontWeightMedium,
                }}
              >
                {testimonial.quote}
              </h3>
            </div>
            <div className="testimonial_profile">
              <img className="author_image" />
              <h4
                style={{
                  fontSize: heading5.fontSize,
                  fontWeight: heading5.fontWeightMedium,
                }}
              >
                {testimonial.author}
              </h4>
              <p
                style={{
                  fontSize: paragraph.fontSize,
                  fontWeight: paragraph.fontWeight,
                }}
              >
                {testimonial.type}
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
