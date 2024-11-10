import { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/Buttons/buttonStyles.css";

const DefaultButton = ({ text, size }) => {
  const { colors } = useContext(ThemeContext);

  const buttonSize = () => {
    if (!size || size === "large") {
      return 70;
    }

    if (size === "small") {
      return 40;
    }

    if (size === "medium") {
      return 60;
    }

    return 70;
  };

  return (
    <button
      className="default_button"
      style={{
        backgroundColor: colors.tertiary.main,
        color: colors.secondary.main,
        height: buttonSize(size),
        width: size === "small" ? 100 : 200,
      }}
    >
      {text ? text : "Default"}
    </button>
  );
};

export default DefaultButton;
