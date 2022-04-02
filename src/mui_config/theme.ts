import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#86c3ff",
      contrastText: "white",
    },
    warning: {
      main: "#ff8686",
      contrastText: "white",
    },
    text: {
      primary: "#707070",
    },
  },
  typography: {
    h1: {
      fontFamily: '"Noto Sans JP", sans-serif',
      fontWeight: 900,
      fontSize: "1.2rem",
    },
    button: {
      fontFamily: '"Noto Sans JP", sans-serif',
      fontWeight: 900,
    },
  },
});

export default theme;
