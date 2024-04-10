import React, { useContext, useEffect, useState } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import siteStrings from "../../assets/data/siteStrings.json";
import DefaultButton from "../buttons/DefaultButton";
import TransparentButton from "../buttons/TransparentButton";

import "../../styles/ctastyles.css";

export default function CTASection() {
  const [isMobile, setIsMobile] = useState(false);
  const { colors, typography } = useContext(ThemeContext);
  const { heading2, paragraph } = typography;

  const ctaStrings = siteStrings.ctaSection;

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
    <section className="cta_section">
      <div className="cta_container">
        <div className="cta_content">
          <h2
            style={{
              fontSize: !isMobile ? heading2.fontSize : 30,
              fontWeight: heading2.fontWeight,
              color: colors.primary.main,
              marginBottom: ".5em",
              maxWidth: 700,
            }}
          >
            {ctaStrings.title}
          </h2>
          <p
            style={{
              fontSize: !isMobile ? paragraph.fontSize : 15,
              fontweight: paragraph.fontWeight,
              color: colors.primary.main,
              marginBottom: "2em",
              maxWidth: 500,
            }}
          >
            {ctaStrings.details}
          </p>
        </div>
        <div className="cta_buttons">
          <DefaultButton text={"Learn More"} />
          <TransparentButton text={"Contact"} isBorder={true} />
        </div>
      </div>
    </section>
  );
}
