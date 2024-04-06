import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import siteStrings from "../../assets/data/siteStrings.json";

export default function CTASection() {
  const { colors, typohraphy } = useContext(ThemeContext);

  const ctaStrings = siteStrings.ctaSection;

  return (
    <section className="cta_section">
      <div className="cta_container">
        <div className="cta_content">
        <h2>{ctaStrings.title}</h2>
        <p>{ctaStrings.description}</p>
        </div>
        <div className="cta_buttons"></div>
      </div>
    </section>
  );
}
