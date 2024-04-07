import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import siteStrings from "../../assets/data/siteStrings.json";

import "../../styles/contactStyles.css";

export default function ContactSection() {
  const { colors, typography } = useContext(ThemeContext);

  const { heading2, heading5, paragraph } = typography;

  const contactInfo = siteStrings.contactInfo;

  return (
    <section className="contact_section">
      <div className="contact_container">
        <div className="contact_info">
          <div className="contact_content">
            <h5
              style={{
                color: colors.primary.main,
                fontSize: heading5.fontSize,
                fontWeight: heading5.fontWeight,
                marginBottom: ".5em",
              }}
            >
              {contactInfo.emphases}
            </h5>
            <h2
              style={{
                color: colors.primary.main,
                fontSize: heading2.fontSize,
                marginBottom: ".6em",
              }}
            >
              {contactInfo.title}
            </h2>
            <p
              style={{
                color: colors.primary.main,
                fontSize: paragraph.fontSize,
                textAlign: "left",
              }}
            >
              {contactInfo.details}
            </p>
          </div>
          <div className="contact_information"></div>
        </div>
        <div className="contact_map">
          <div
            style={{
              maxWidth: "100%",
              listStyle: "none",
              transition: "none",
              overflow: "hidden",
              width: "1528px",
              height: "941px",
            }}
          >
            <div
              id="my-map-display"
              style={{
                height: "100%",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <iframe
                style={{
                  height: "100%",
                  width: "100%",
                  border: "0",
                }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Francistown,+Botswana&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                title="Map"
              ></iframe>
            </div>
            <a
              className="google-map-code-enabler"
              href="https://www.bootstrapskins.com/themes"
              id="get-data-for-map"
            >
              premium bootstrap themes
            </a>
            <style>
              {`#my-map-display img{max-height:none;max-width:none!important;background:none!important;}`}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
}
