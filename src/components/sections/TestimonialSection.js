import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";
import siteStrings from "../../assets/data/siteStrings.json";

import "../../styles/testimonial.css";

export default function TestimonialSection() {
  const { colors, typography } = useContext(ThemeContext);
  const { heading3, heading5, paragraph } = typography;

  const testimonial = siteStrings.testimonialSection;

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
                  fontSize: heading3.fontSize,
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
