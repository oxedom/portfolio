import "../styles/globals.css";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../utils/analytics";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();

    router.events.on('routeChangeComplete', logPageView);

    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, []);

  return <Component {...pageProps} />;
}
