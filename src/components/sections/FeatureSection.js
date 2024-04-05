import React, { useContext } from "react";

import siteStrings from "../../assets/data/siteStrings.json";
import { images } from "../../constants/images";
import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/featureSection.css";

export default function FeatureSection() {
  const { colors, typography } = useContext(ThemeContext);
  const { heading2, heading3, heading5, paragraph } = typography;

  const { featureSection } = siteStrings;
  const featureList = featureSection.list; //an objects array
  const featureImage = images.index.features;

  return (
    <section className="feature_section">
      <div className="Feature_container">
        <div className="box">
          <div className="content__container">
            <div className="container_top">
              <h2
                style={{
                  color: colors.primary.main,
                  fontSize: heading2.fontSize,
                }}
              >
                {featureSection.title}
              </h2>
              <p
                style={{
                  color: colors.primary.main,
                  fontSize: paragraph.fontSize,
                  fontWeight: paragraph.fontWeight,
                  textAlign: "left",
                }}
              >
                {featureSection.paragraph}
              </p>
            </div>
            <div className="container_bottom">
              <ul>
                {featureList.map((feature, index) => {
                  return (
                    <li key={index}>
                      <div className="icon__container">
                        <img src={feature.icon} alt={feature.title} />
                      </div>
                      <h3
                        style={{
                          color: colors.primary.main,
                          fontSize: heading3.fontSize,
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          color: colors.primary.main,
                          fontSize: paragraph.fontSize,
                          fontWeight: paragraph.fontWeight,
                          textAlign: "left",
                        }}
                      >
                        {feature.paragraph}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image__container">
            <img src={featureImage.src} alt={featureImage.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
