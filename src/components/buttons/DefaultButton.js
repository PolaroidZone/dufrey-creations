import { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/Buttons/buttonStyles.css";

const DefaultButton = ({ text }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <button
      className="default_button"
      style={{
        backgroundColor: colors.tertiary.main,
        color: colors.secondary.main,
      }}
    >
      {text ? text : "Default"}
    </button>
  );
};

export default DefaultButton;
