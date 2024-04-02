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
              ...typography.h1,
            }}
          >
            Logo
          </h1>
        </div>
        <nav className="header_nav">
          <ul>
            <li>
              <a href="#" style={{ color: colors.primary.main }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={{ color: colors.primary.main }}>
                About
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
          </ul>
          <button
            style={{
              backgroundColor: colors.accent.main,
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
