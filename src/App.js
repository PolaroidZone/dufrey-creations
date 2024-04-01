import React, { useContext, useState } from "react";
import { Router, Routes } from "react-router-dom";

import Home from "./pages/Home";

import { ThemeContext } from "./hooks/ThemeContext";
import Theme from "./theme/Theme";

function App() {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState(Theme);
  const colors = theme.palette;
  const spacing = theme.spacing;
  const typography = theme.typography;

  return (
    <Routes>
      <themeContext.Provider
        value={{
          theme,
          setTheme,
          colors,
          spacing,
          typography,
        }}
      >
        <Router path="/" element={<Home />}></Router>
      </themeContext.Provider>
    </Routes>
  );
}

export default App;
