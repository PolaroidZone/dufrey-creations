import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import siteStrings from "../../assets/data/siteStrings.json";
import { images } from "../../constants/images";

import "../../styles/contactStyles.css";
import HomeMap from "../maps/HomeMap";

export default function ContactSection() {
  const { colors, typography } = useContext(ThemeContext);

  const { heading2, heading5, heading4, paragraph } = typography;

  const contactInfo = siteStrings.contactInfo;

  const { address, phone, email } = contactInfo;

  const { locationIcon, phoneIcon, emailIcon } = images.icons;

  const contactList = [
    { id: 1, icon: emailIcon, title: email.title, details: email.address },
    { id: 2, icon: phoneIcon, title: phone.title, details: phone.number },
    {
      id: 3,
      icon: locationIcon,
      title: address.title,
      details: address.city + ", " + address.street,
    },
  ];

  return (
    <section
      className="contact_section"
      style={{ backgroundColor: colors.primaryLight.main }}
    >
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
          <div className="contact_information">
            <ul className="contact_list">
              {contactList.map((contact, index) => (
                <li key={index}>
                  <div>
                    <img className="contact_icon" src={contact.icon.src} />
                  </div>
                  <div>
                    <h4
                      style={{
                        color: colors.primary.main,
                        fontSize: heading4.fontSize,
                        fontWeight: heading4.fontWeight,
                        marginBottom: 0,
                      }}
                    >
                      {contact.title}
                    </h4>
                    <p>{contact.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="contact_map">
          <HomeMap />
        </div>
      </div>
    </section>
  );
}
