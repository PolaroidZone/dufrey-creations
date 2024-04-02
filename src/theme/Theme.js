//Create theme for the app
const Theme = {
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    primaryLight: {
      main: "#BEB7A4",
    },
    accent: {
      main: "#CE680F",
    },
    tertiary: {
      main: "#951A1A",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.17rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: ".83rem",
      fontWeight: 700,
    },
  },
  spacing: {
    padding: {
      paddingRIght: 10,
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
    margin: {
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
    },
  },
};

export default Theme;
