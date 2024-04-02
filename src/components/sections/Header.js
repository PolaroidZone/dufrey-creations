import { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import DefaultButton from "../buttons/DefaultButton";

import "../../styles/header.css";

const Header = () => {
  const { colors, typography } = useContext(ThemeContext);
  const buttonLabel = "Learn More";
  return (
    <header
      className="header"
      style={{ backgroundColor: colors.secondary.main }}
    >
      <div className="header_container">
        <div className="header_logo">
          <h1
            style={{
              color: colors.primary.main,
              fontFamily: typography.fontFamily,
            }}
          >
            Dufrey
          </h1>
        </div>
        <nav className="header_nav">
          <ul>
            <li>
              <a href="#" style={{ color: colors.primary.main }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" style={{ color: colors.primary.main }}>
                Services
              </a>
            </li>
            <li>
              <a href="#" style={{ color: colors.primary.main }}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" style={{ color: colors.primary.main }}>
                More
              </a>
            </li>
          </ul>
          <DefaultButton text={buttonLabel} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
