import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import siteSrtings from "../../assets/data/siteStrings.json";
import { images } from "../../constants/images";

import "../../styles/footer.css";

export default function Footer() {
  const { colors, typography } = useContext(ThemeContext);

  const { heading1, heading2, heading3, paragraph } = typography;

  const { footer } = siteSrtings;

  const socialIcons = [
    {
      src: images.icons.facebookIcon.src,
      alt: images.icons.facebookIcon.alt,
      url: footer.social.facebook,
    },
    {
      src: images.icons.linkedInIcon.src,
      alt: images.icons.linkedInIcon.alt,
      url: footer.social.linkedin,
    },
  ];

  return (
    <footer>
      <div
        className="footer_container"
        style={{ backgroundColor: colors.secondary.main }}
      >
        <div className="footer_top">
          <div className="footer_logo">
            <h1>Dufrey</h1>
          </div>
          <ul className="footer_nav">
            {footer.navItems.map((item, index) => (
              <li key={index}>
                <a href="#" style={{ color: colors.primary.main }}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer_social">
            {socialIcons.map((icon, index) => (
              <a href={icon.url} key={index}>
                <i className="footer_social_icons">
                  <img src={icon.src} alt={icon.alt} />
                </i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer_bottom">
          <p
            style={{ color: colors.primary.main, fontSize: paragraph.fontSize }}
          >
            {footer.copyRight} &copy; {new Date().getFullYear()}
          </p>
          {footer["T&C"].map((item, index) => (
            <a
              key={index}
              href="#"
              style={{
                color: colors.primary.main,
                fontSize: paragraph.fontSize,
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
