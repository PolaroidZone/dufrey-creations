import React, { useContext, useState, useEffect } from "react";
import DefaultButton from "../buttons/DefaultButton";

import { ThemeContext } from "../../hooks/ThemeContext";
import sitestrings from "../../assets/data/siteStrings.json";

import "../../styles/newLetter.css";

export default function NewsLetter() {
  const [isMobile, setIsMobile] = useState(false);
  const { colors, typography } = useContext(ThemeContext);
  const { heading2, heading5, paragraph } = typography;

  const newsLetterStrings = sitestrings.newsLetter;

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
    <section className="news_letter_sectoin">
      <div className="new_letter_container">
        <div className="news_letter_top">
          <h2
            style={{
              fontSize: !isMobile ? heading2.fontSize : 30,
              fontWeight: heading2.fontWeight,
              color: colors.secondary.main,
              textAlign: "center",
              maxWidth: 450,
              marginBottom: ".8em",
            }}
          >
            {newsLetterStrings.title}
          </h2>
          <p
            style={{
              fontSize: !isMobile ? paragraph.fontSize : 15,
              fontWeight: paragraph.fontWeight,
              color: colors.secondary.main,
              textAlign: "center",
              marginBottom: "3em",
            }}
          >
            {newsLetterStrings.details}
          </p>
        </div>
        <div className="news_letter_form_container">
          <form className="news_letter_form" method="post">
            <input inputMode="text" placeholder={newsLetterStrings.email} />
            <DefaultButton text={newsLetterStrings.subscribe} size={"small"} />
          </form>
          <div className="news_privacy">
            <h5
              style={{
                fontSize: 12,
                fontWeight: heading5.fontWeight,
                color: colors.secondary.main,
                textAlign: "center",
              }}
            >
              {newsLetterStrings.privacy}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
