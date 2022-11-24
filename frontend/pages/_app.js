import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modaleUp from "../reducers/modaleUp";
import modaleIn from "../reducers/modaleIn";

const store = configureStore({
  reducer: { modaleUp, modaleIn },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
