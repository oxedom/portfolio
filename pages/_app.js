import "../styles/globals.css";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../utils/analytics";
import { useEffect } from "react";
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    console.log('G-init');
    router.events.on('routeChangeComplete', logPageView);

    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, []);

  return (<>
  <Analytics/>
    <Component {...pageProps} />;
  </>)
  

}
