import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />

      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  );
}
