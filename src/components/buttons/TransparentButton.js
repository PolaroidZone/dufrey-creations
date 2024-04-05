import React, { useContext } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import "../../styles/Buttons/buttonStyles.css";

export default function ({ text }) {
  const { colors } = useContext(ThemeContext);

  return (
    <button
      className="transparent_button"
      style={{
        backgroundColor: "transparent",
        color: colors.primary.main,
      }}
    >
      {text ? text : "Button"}
    </button>
  );
}
