import { useContext, useEffect, useState, useCallback } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";
import { OverlayContext } from "../../hooks/OverlayMenuContext";

import DefaultButton from "../buttons/DefaultButton";

import "../../styles/header.css";
import Burger from "../buttons/Burger";

const Header = () => {
  const { setIsOverlayMenuActive, isOverlayMenuActive } =
    useContext(OverlayContext);

  const [isFixed, setIsFixed] = useState(false);

  const { colors, typography } = useContext(ThemeContext);

  const [transform, setTransform] = useState("translateY(0%)");

  const buttonLabel = "Learn More";

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setTransform("translateY(-100%)");
      }
      if (window.pageYOffset > 500) {
        setIsFixed(true);
        setTransform("translateY(0%)");
      }
      if (window.pageYOffset < 50) {
        setIsFixed(false);
        setTransform("translateY(-0%)");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkIsOpen = () => {
    if (isOverlayMenuActive === false) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    setIsOverlayMenuActive(checkIsOpen());
  }, [isOverlayMenuActive]);

  const handleClick = useCallback(() => {
    setIsOverlayMenuActive(!isOverlayMenuActive);
  });

  //toggle overlay menu on anycroll event
  useEffect(() => {
    const handleScroll = () => {
      if (isOverlayMenuActive === true) {
        setIsOverlayMenuActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOverlayMenuActive]);

  return (
    <header
      className="header"
      style={{
        backgroundColor: colors.secondary.main,
        position: isFixed ? "fixed" : "relative",
        top: 0,
        width: "100%",
        boxShadow: isFixed ? "0 2px 5px rgba(0,0,0,0.2)" : "none",
        transform: transform,
        transition: "transform 1s ease-in-out",
      }}
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
        <div className="header_burger">
          <Burger isOpen={isOverlayMenuActive} setIsOpen={handleClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
