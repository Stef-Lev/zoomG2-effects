import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Fonts from "@/fonts/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
