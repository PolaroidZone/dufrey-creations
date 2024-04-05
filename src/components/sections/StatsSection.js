import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import { statsSection } from "../../assets/data/siteStrings.json";

export default function StatsSection() {
  const { colors, typography } = useContext(ThemeContext);
  const { heading2, paragraph } = typography;

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
              <ul>
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
