import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mvfflin&apos;s Portfolio</title>
        <meta name="og:title" content="Mvfflin's Portfolio" />
        <meta
          name="og:description"
          content="My website portfolio, check it out!"
        />
        <meta
          name="og:image"
          content="https://cdn.glitch.global/91984866-9109-49e2-baa6-0250c708e319/muffin.png?v=1699029659441"
        />
        <link rel="icon" type="image/x-icon" href="./muffin.png" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
