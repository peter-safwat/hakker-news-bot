import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="hn-slack-bot.vercel.app">
      <div>
        <Head>
          <meta
            name="description"
            content="Predict and prevent workplace burnout."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <meta name="theme-color" content="#7b46f6" />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="myha" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            itemProp="image"
            content="https://hn-slack-bot.vercel.app/thumbnail.png"
          />
          <meta
            property="og:image"
            content="https://hn-slack-bot.vercel.app/thumbnail.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@myha" />
          <meta name="twitter:creator" content="@myha" />
          <meta name="twitter:title" content="Myha" />
          <meta
            name="twitter:description"
            content="Predict and prevent workplace burnout"
          />
          <meta
            name="twitter:image"
            content="https://hn-slack-bot.vercel.app/thumbnail.png"
          />
        </Head>
        <Component {...pageProps} />
      </div>
    </PlausibleProvider>
  );
}

export default MyApp;
