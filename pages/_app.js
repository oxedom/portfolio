import "../styles/globals.css";
import { useRouter } from "next/router";
import Script from 'next/script'
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
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6K3SY1R664"
        strategy="afterInteractive"
      />
           <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6K3SY1R664');
        `}
      </Script>
  <Analytics/>
    <Component {...pageProps} />;
  </>)
  

}
