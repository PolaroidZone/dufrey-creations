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
      fontSize: 48,
      fontWeight: 700,
    },
    heading2: {
      fontSize: 40,
      fontWeight: 700,
    },
    heading3: {
      fontSize: 36,
      fontWeight: 700,
    },
    heading4: {
      fontSize: 32,
      fontWeight: 700,
    },
    heading5: {
      fontSize: 24,
      fontWeight: 300,
    },
    paragraph: {
      fontSize: "20",
      fontWeight: 300,
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
