import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeContext } from "./hooks/ThemeContext";
import { OverlayContext } from "./hooks/OverlayMenuContext";
import Theme from "./theme/Theme";
import OverlayMenu from "./components/navigation/OverlayMenu";

function App() {
  const [isOverlayMenuActive, setIsOverlayMenuActive] = useState(false);

  const [theme, setTheme] = useState(Theme);
  const colors = theme.palette;
  const spacing = theme.spacing;
  const typography = theme.typography;
  const breakpoints = theme.breakpoints;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colors,
        spacing,
        typography,
        breakpoints,
      }}
    >
      <OverlayContext.Provider
        value={{ isOverlayMenuActive, setIsOverlayMenuActive }}
      >
        <OverlayMenu />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </OverlayContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
