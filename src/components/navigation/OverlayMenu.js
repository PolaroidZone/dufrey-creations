import React, { useContext, useState, useEffect } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import { OverlayContext } from "../../hooks/OverlayMenuContext";

import DefaultButton from "../buttons/DefaultButton";
import Header from "../sections/Header";

import "../../styles/overlay_menu.css";

export default function OverlayMenu() {
  const { colors } = useContext(ThemeContext);
  const { isOverlayMenuActive, isMobile } = useContext(OverlayContext);

  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 900) {
        setIsFixed(true);
      }
      if (window.pageYOffset < 200) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav_menu_style = {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: colors.secondary.main,
    position: "fixed",
    zIndex: 10,
    transform: isOverlayMenuActive === true ? "none" : "translateX(-200%)",
    transition: "transform 0.5s ease-in-out",
  };

  const nav_style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "100%",
    height: "100%",
    backgroundColor: colors.accent.main,
  };

  const ul_style = {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    width: "100%",
    marginBottom: 40,
    marginTop: isFixed ? 80 : 0,
  };

  const li_style = {
    padding: 10,
    listStyleType: "none",
    textAlign: "left",
    width: "100%",
    marginTop: 20,
    borderBottom: "1px solid #fdfdfaaa",
  };

  const a_style = {
    color: colors.secondary.main,
    textDecoration: "none",
    paddingLeft: 20,
  };

  return (
    <div className="nav_menu" style={nav_menu_style}>
      <Header />
      <nav style={nav_style}>
        <ul style={ul_style}>
          <li style={li_style}>
            <a href="#" style={a_style}>
              About Us
            </a>
          </li>
          <li style={li_style}>
            <a href="#" style={a_style}>
              Services
            </a>
          </li>
          <li style={li_style}>
            <a href="#" style={a_style}>
              Contact
            </a>
          </li>
          <li style={li_style}>
            <a href="#" style={a_style}>
              More
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DefaultButton text={"Learn More"} />
        </div>
      </nav>
    </div>
  );
}
