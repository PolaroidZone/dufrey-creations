import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import siteStrings from "../../assets/data/siteStrings.json";

import "../../styles/statssection.css";

export default function StatsSection() {
  const { colors, typography } = useContext(ThemeContext);
  const { heading2, paragraph } = typography;

  const { statsSection } = siteStrings;

  const { title, details, list } = statsSection;

  return (
    <section
      className="stats_section"
      style={{ backgroundColor: colors.secondary.main }}
    >
      <div className="stats_container">
        <div className="stats_box">
          <div className="title_container">
            <h2
              style={{
                fontSize: heading2.fontSize,
                fontWeight: heading2.fontWeight,
                color: colors.primary.main,
              }}
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="stats_box">
          <div className="stats_content">
            <div className="stats_deatails">
              <p
                style={{
                  fontSize: paragraph.fontSize,
                  fontWeight: paragraph.fontWeight,
                  color: colors.primary.main,
                }}
              >
                {details}
              </p>
            </div>
            <div className="stats_list">
              <ul className="stats">
                {list.map((item, index) => (
                  <li key={index}>
                    <div>
                      <h3
                        style={{
                          fontSize: heading2.fontSize,
                          fontWeight: heading2.fontWeight,
                          color: colors.primary.main,
                        }}
                      >
                        {item.number}
                      </h3>
                      <p
                        style={{
                          fontSize: paragraph.fontSize,
                          fontWeight: paragraph.fontWeight,
                          color: colors.primary.main,
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
