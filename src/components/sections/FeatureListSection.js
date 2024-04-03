import React, { useContext } from "react";

import siteStrings from "../../assets/data/siteStrings.json";
import { images } from "../../constants/images";
import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/featureListSection.css";

export default function FeatureListSection() {
  const { colors, typography } = useContext(ThemeContext);
  const { heading2, heading3, heading5, paragraph } = typography;

  const { featureListSection } = siteStrings;
  const featureList = featureListSection.list; //an objects array
  const featureImage = images.index.features;

  return (
    <section
      className="featureListSection_section"
      style={{ backgroundColor: colors.accent.main }}
    >
      <div className="featureListSection_container">
        <div className="featureListSection_box">
          <ul>
            {featureList.map((feature, index) => (
              <li key={index}>
                <h3
                  style={{
                    color: colors.secondary.main,
                    fontSize: heading3.fontSize,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: colors.secondary.main,
                    fontSize: paragraph.fontSize,
                    fontWeight: paragraph.fontWeight,
                  }}
                >
                  {feature.paragraph}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <div className="featureListSection_image">
            <img src={featureImage.src} alt={featureImage.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
