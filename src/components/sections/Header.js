import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "../../hooks/ThemeContext";

import DefaultButton from "../buttons/DefaultButton";

import "../../styles/header.css";
import Burger from "../buttons/Burger";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const { colors, typography, breakpoints } = useContext(ThemeContext);
  const buttonLabel = "Learn More";

  const windowWidth = window.innerWidth;

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

  return (
    <header
      className="header"
      style={{
        backgroundColor: colors.secondary.main,
        position: isFixed ? "fixed" : "relative",
        top: 0,
        width: "100%",
        boxShadow: isFixed ? "0 2px 5px rgba(0,0,0,0.2)" : "none",
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
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
