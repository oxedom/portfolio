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
      </Head>

        
        <main className="flex  justify-center flex-col bg-pink-400  items-center">

                <nav className="grid grid-cols-3 bg-white w-full  grow border-b-2 border-black items-center    ">
             
                        <Link href={'/'}> <span> CODE</span></Link>
                        <h1 className="text-center text-4xl m-2"> SAM BENJAMIN BRINK </h1>
                        <a href="https://sambenjaminbrink.myportfolio.com/"> PHOTOGRAPHY</a>

                </nav>
            

                    <h2 className="text-3xl"> List of Blogs </h2>
            <ul>
            <h1 className="text-2xl"> The day my bike was stolen.</h1>
            <h1 className="text-2xl"> Why I will never go to the cinema again.</h1>
            <h1 className="text-2xl"> The day lost my car in a parking lot</h1>
            </ul>


  
       
        </main>
       
    </>)

}
 
export default Blog;