import Navbar from "../components/Navbar";
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
        <Navbar></Navbar>
        <main className="bg-gradient-to-t   from-rose-300 to-violet-300  lg:bg-sunset   w-full bg-fixed bg-no-repeat bg-cover  h-screen  flex items-center sm:justify-center ">
          <section className="mt-5  flex flex-col sm:mx-5   items-center gap-5 md:justify-center md:flex-row">

          </section>
        </main>
    </>)

}
 
export default Blog;