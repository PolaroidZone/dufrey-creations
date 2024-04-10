import React, { useContext, useState, useEffect } from "react";

import siteStrings from "../../assets/data/siteStrings.json";
import { ThemeContext } from "../../hooks/ThemeContext";
import TransparentButton from "../buttons/TransparentButton";

import "../../styles/service.css";

export default function ServiceSection() {
  const [isMobile, setIsMobile] = useState(false);
  const { colors, typography } = useContext(ThemeContext);
  const { heading2, heading5, paragraph } = typography;

  const serviceSection = siteStrings.servicesSection;
  const { title, list } = serviceSection;

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
      className="service_section"
      style={{ backgroundColor: colors.accent.main }}
    >
      <div className="service_container">
        <div className="service_title">
          <h2
            style={{
              fontSize: !isMobile ? heading2.fontSize : 30,
              fontWeight: heading2.fontWeight,
              color: colors.secondary.main,
              textAlign: "center",
              maxWidth: "730px",
              marginBottom: "2em",
            }}
          >
            {title}
          </h2>
        </div>
        <div className="service_content">
          <ul>
            {list.map((list, index) => (
              <li key={index} className="service_item">
                <div>
                  <img />
                </div>
                <h5
                  style={{
                    fontSize: !isMobile ? heading5.fontSize : 20,
                    fontWeight: "bold",
                    color: colors.secondary.main,
                    marginBottom: "1em",
                  }}
                >
                  {list.title}
                </h5>
                <p
                  style={{
                    fontSize: !isMobile ? paragraph.fontSize : 15,
                    color: colors.secondary.main,
                    fontWeight: paragraph.fontWeight,
                    marginBottom: "2em",
                    textAlign: "center"
                  }}
                >
                  {list.paragraph}
                </p>
                <TransparentButton
                  text={"Learn More " + "→"}
                  color={colors.secondary.main}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
