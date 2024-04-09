import React, { useContext, useState } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

export default function Burger({ isOpen, setIsOpen }) {
  const { colors } = useContext(ThemeContext);

  const line1Style = {
    backgroundColor: colors.primary.main,
    height: "3px",
    width: "100%",
    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
    transition: "ease .6s",
    top: isOpen ? "50%" : 0,
  };

  const line2Style = {
    backgroundColor: colors.primary.main,
    height: "3px",
    width: "100%",
    top: "50%",
    bottom: 0,
    display: isOpen ? "none" : "block",
  };

  const line3Style = {
    backgroundColor: colors.primary.main,
    height: "3px",
    width: "100%",
    transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
    transition: "ease .6s",
    marginTop: isOpen ? "-50%" : 0,
  };

  const lines = [
    { style: line1Style },
    { style: line2Style },
    { style: line3Style },
  ];

  return (
    <div
      onClick={() => setIsOpen()}
      style={{
        width: "30px",
        height: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {lines.map((line, index) => (
        <div key={index} style={line.style}></div>
      ))}
    </div>
  );
}
