import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/Buttons/buttonStyles.css";

export default function TransparentButton({ text, color, isBorder }) {
  const { colors } = useContext(ThemeContext);

  return (
    <button
      className="transparent_button"
      style={{
        backgroundColor: "transparent",
        color: color ? color : colors.primary.main,
        border: isBorder ? `1px solid ${colors.primary.main}` : "none",
      }}
    >
      {text ? text : "Button"}
    </button>
  );
}
