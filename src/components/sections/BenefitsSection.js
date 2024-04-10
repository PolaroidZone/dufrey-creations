import React, { useContext, useState, useEffect } from "react";

import siteStrings from "../../assets/data/siteStrings.json";

import { ThemeContext } from "../../hooks/ThemeContext";
import { images } from "../../constants/images";

import "../../styles/benefits.css";
import DefaultButton from "../buttons/DefaultButton";
import TransparentButton from "../buttons/TransparentButton";

export default function BenefitsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const { colors, typography } = useContext(ThemeContext);

  const { heading2, heading5, paragraph } = typography;

  const { benefitsSection } = siteStrings;
  const { benefits } = images.index;

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
    <section className="benefits_section" style={{ color: colors.accent }}>
      <div className="benefits_container">
        <div className="benefits_box">
          <div className="benefits_content">
            <h5
              style={{
                color: colors.primary.main,
                fontSize: heading5.fontSize,
                fontWeight: heading5.fontWeight,
                marginBottom: ".5em",
              }}
            >
              {benefitsSection.emphases}
            </h5>
            <h2
              style={{
                color: colors.primary.main,
                fontSize: !isMobile ? heading2.fontSize : 30,
                marginBottom: ".6em",
              }}
            >
              {benefitsSection.title}
            </h2>
            <p
              style={{
                color: colors.primary.main,
                fontSize: !isMobile ? paragraph.fontSize : 15,
                textAlign: "left",
              }}
            >
              {benefitsSection.paragraph}
            </p>
          </div>
          <div className="benefits_cta">
            <DefaultButton text={"Learn More"} />
            <TransparentButton text={"Contact Us >"} />
          </div>
        </div>
        <div className="benefits_box">
          <div className="benefits_img">
            <img src={benefits.src} alt={benefits.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
