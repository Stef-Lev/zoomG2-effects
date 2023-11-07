import { PropsWithChildren, useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import Loader from "./Loader";
import ScrollToTop from "./ScrollToTop";
import Head from "next/head";
import { useRouter } from "next/router";
import ScrollTopButton from "./ScrollTopButton";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router && router.events) {
      router.events.on("routeChangeStart", () => setLoading(true));
      router.events.on("routeChangeComplete", () => setLoading(false));
      router.events.on("routeChangeError", () => setLoading(false));
    }
    return () => {
      if (router && router.events) {
        router.events.off("routeChangeStart", () => setLoading(true));
        router.events.off("routeChangeComplete", () => setLoading(false));
        router.events.off("routeChangeError", () => setLoading(false));
      }
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Zoom G2 Patches</title>
        <meta name="description" content="Zoom G2 Patches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loader fullScreen />
      ) : (
        <Container maxW="3xl" height="100vh">
          {children}
          <ScrollToTop />
          <ScrollTopButton />
        </Container>
      )}
    </>
  );
};

export default Layout;
