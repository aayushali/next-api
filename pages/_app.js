import "../styles/globals.css"; // to add global
import { ThemeProvider } from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
const theme = {
  colors: {
    primary: "#355C7D",
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
