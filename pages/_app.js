import { StrictMode } from "react";
import { AppContextProvider } from "../AppContext/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </StrictMode>
  );
}

export default MyApp;
