import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";




const Blog = () => {


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

        
        <main className="flex  justify-center flex-col bg-pink-400  items-center">

               

              
                <nav className="flex justify-center [&>*]font-lex font-lex bg-white w-full xl:h-[150px] grow border-b-2 border-black items-center    ">

                        <ul className="grid grid-cols-3 max-w-[1700px] items-center place-items-center grow">

                  
                        <Link href={'/'}> <span className="text-3xl"> CODE &lt;/&gt; </span></Link>
                        <h1 className="text-center text-3xl m-2 "> SAM BENJAMIN BRINK </h1>
                        <a  className="text-3xl invert bg-white" href="https://sambenjaminbrink.myportfolio.com/"> PHOTOGRAPHY</a>
                        </ul>
                </nav>
            

     

  
       
        </main>
       
    </>)

}
 
export default Blog;