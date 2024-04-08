import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeContext } from "./hooks/ThemeContext";
import Theme from "./theme/Theme";

function App() {
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
