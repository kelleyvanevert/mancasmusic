import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
