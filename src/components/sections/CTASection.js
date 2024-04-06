import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import siteStrings from "../../assets/data/siteStrings.json";
import DefaultButton from "../buttons/DefaultButton";

export default function CTASection() {
  const { colors, typohraphy } = useContext(ThemeContext);
  const { heading2, paragraph } = typohraphy;

  const ctaStrings = siteStrings.ctaSection;

  return (
    <section className="cta_section">
      <div className="cta_container">
        <div className="cta_content">
          <h2
            style={{
              fontSize: heading2.fontSize,
              fontWeight: heading2.fontWeight,
            }}
          >
            {ctaStrings.title}
          </h2>
          <p
            style={{
              fontSize: paragraph.fontSize,
              fontweight: paragraph.fontWeight,
            }}
          >
            {ctaStrings.description}
          </p>
        </div>
        <div className="cta_buttons">
          <DefaultButton text={"Learn More"} />
        </div>
      </div>
    </section>
  );
}
