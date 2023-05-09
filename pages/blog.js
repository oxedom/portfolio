
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import meLogo from '../public/blog/me.png'
import { useState, useEffect } from "react";


const Blog = () => {


    const [scrolled, setScrolled] = useState(false)


    const handleScroll = (e) => {
      if (window.scrollY > 140) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    useEffect(() => {
      
      window.addEventListener("scroll", handleScroll);
    }, []);
  

    return (<>
         <Head>
        <title>Sam Brink</title>
        <meta name="description" content="Sam Brink's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      
      <nav className={`flex justify-center font-bold z-99  fixed  top-0  font-lex bg-white w-full xl:h-[120px] grow border-b-2 border-black items-center  sticky  
      
      
      ${
        scrolled ? "opacity-0" : ""
      }
          transition duration-500  gap-2 sm:gap-5  p-1
      `}>

<ul className="grid grid-cols-3 max-w-[1700px] items-center place-items-center grow">


          <Link href={'/'}> <span className="text-3xl hover:invert bg-white"> CODE &lt;/&gt; </span></Link>
          <div className="flex flex-col items-center cursor-default">
          <h1 className="text-center text-3xl m-2  "> SAM BENJAMIN BRINK </h1>
          <p className="text-xs"> blog</p>
          </div>

          <a target="_blank" className="text-3xl hover:invert bg-black text-white " href="https://sambenjaminbrink.myportfolio.com/"> PHOTOGRAPHY</a>
          </ul>
          </nav>
                  
        <main className="flex flex-col bg-green-200  w-full   ">

               <div className="flex pt-16  justify-center gap-12 items-center ">
                <p className="text-6xl text-gray-900  font-bold font-lex uppercase cursor-default">
                   There is no <br/> 
                   such thing as a  <br/> 
                   FAILED EXPERIMENT <br/> 
                 </p>
                <Image width={500} src={meLogo}/>
               </div>
        </main>


   

        <main className="bg-green-500 bg-yellow-200 h-screen">


        <svg className={`fill-green-200 h-[350px] duration-300 w-full  ${scrolled ? "" : "opacity-0"} `}
   preserveAspectRatio="none"
   viewBox="0 0 1200 120"
   xmlns="http://www.w3.org/2000/svg"

  >
       <path  d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z"/>
  </svg>




        </main>
    


       
    </>)

}
 
export default Blog;