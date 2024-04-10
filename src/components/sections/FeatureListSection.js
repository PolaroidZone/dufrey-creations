import React, { useContext, useEffect, useState } from "react";

import siteStrings from "../../assets/data/siteStrings.json";
import { images } from "../../constants/images";
import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/featureListSection.css";

export default function FeatureListSection() {
  const [isMobile, setIsMobile] = useState(false);
  const { colors, typography } = useContext(ThemeContext);
  const { heading3, paragraph } = typography;

  const { featureListSection } = siteStrings;
  const featureList = featureListSection.list; //an objects array
  const featureListImage = images.index.featureList;

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
                    fontSize: !isMobile? heading3.fontSize: 20,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: colors.secondary.main,
                    fontSize: !isMobile? paragraph.fontSize : 15,
                    fontWeight: paragraph.fontWeight,
                    textAlign: "left",
                  }}
                >
                  {feature.paragraph}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="featureListSection_box">
          <div className="featureListSection_image">
            <img src={featureListImage.src} alt={featureListImage.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
