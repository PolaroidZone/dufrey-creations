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
      <h1>Header</h1>
    </header>
  );
};

export default Header;
