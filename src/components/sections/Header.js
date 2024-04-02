import { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/header.css";

const Header = () => {
  const { colors, spacing, typography } = useContext(ThemeContext);
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
          <button
            className="header_button"
            style={{
              backgroundColor: colors.tertiary.main,
              color: colors.secondary.main,
              ...spacing.padding,
            }}
          >
            Learn more
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
