import "../styles/globals.css";
import { Component, ReactElement } from "react";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  display: 'fallback',
  variable: '--poppins-font'
});

type AppProps = {
  Component: any,
  pageProps: Object
}

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
};