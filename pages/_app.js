import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../fonts.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: light;
  }
`;

const theme = {
  colors: {
    ayu: {
      dark: {
        fg: "#cbccc6ff",
        bg: "#212733ff",
        white: "#fafafaff",
        grey: "#d3d3d3ff",
        darkGrey: "#5c6773ff",
        blue: "#73d0ffff",
        darkerBlue: "#5bcfe6ff",
        lightBlack: "#2c313cff",
        ultraLightGreen: "#98e6caff",
        ligthGreen: "#97e4c8ff",
        orange: "#f08778ff",
        darkerOrange: "#fda754ff",
        goldenYellow: "#fdcc60ff",
      },
      light: {
        fg: "#6c7680ff",
        bg: "#fafafaff",
        black: "#252525ff",
        deeperBlack: "#111111ff",
        blue: "#399ee6ff",
        lightBlue: "#60b8d6ff",
        grey: "#a8acb2ff",
        lightGrey: "#ebececff",
        green: "#53bf97ff",
        pink: "#ec7171ff",
        orange: "#eb8536ff",
        darkOrange: "#f66d2eff",
      },
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
