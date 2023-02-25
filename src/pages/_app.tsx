import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Zoom G2 Effects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
