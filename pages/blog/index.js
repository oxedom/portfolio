import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import meLogo from '../../public/blog/me2.png'
import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import cameraCover from '../../public/blog/cameraCover.png'
import parkerrCover from '../../public/blog/parkerrCover.png'


const Blog = () => {



    const [scrolled, setScrolled] = useState(false)


    const handleScroll = (e) => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    useEffect(() => {
      
      window.addEventListener("scroll", handleScroll);
    }, []);

    const blogs = 
    [
      {title: "How to chose your first film camera", coverImg: cameraCover, date: 1683712329623, alt: "camera", url: "camera-guide" , },
      {title: "Building Parkerr: From Idea to Execution", coverImg: parkerrCover, date: "",  alt: "camera" ,  url: "parkerr-story" , },
      {title: "Good Albums", coverImg: cameraCover, date: "",   alt: "camera",  url: "albums-list", } ,
    ]

    const bannerTextArr = 
    [
     "If you do things right, people won't be sure you've done anything at all",
    "You miss 100% of the shots you don't take",
      "If you tell the truth, you don't have to remember anything",
      "Peace cannot be kept by force; it can only be achieved by understanding",
      "Some people would rather eat well, and some would rather sleep well",
     "One day your parents picked you up, sat you down, and never picked you up again",
     "Get your facts first, then you can distort them as you please",
     "A lie can travel halfway around the world while the truth is putting on its shoes"
    ]
  

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
      
      <nav className={`flex justify-center font-bold    bg-white        transition duration-50     font-lex w-full xl:h-[120px] grow border-y-2 border-black items-center    
      
      
  

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
                  
        <main className="flex flex-col bg-black  w-full    ">  

        {/* <nav className="bg-black  text-white font-lex  h-16 flex flex-wrap gap-2   overflow-clip  "> 
            {bannerTextArr.map((b =>  <>   <p className="uppercase h-full   "> {b} </p>  </>)) }

         </nav> */}

         
               <div className="flex pt-16  bg-green-200   border-black pb-10 rounded-t-2xl h-screen  justify-center gap-12 items-center ">
                <p className="text-6xl text-gray-900 animate-mover  font-bold font-lex uppercase cursor-default">
                   There is no <br/> 
                   such thing as a  <br/> 
                   FAILED EXPERIMENT <br/> 
                 </p>
                <Image className="animate-mover" width={500} src={meLogo}/>
                </div>


                <main className="bg-yellow-200 ">



<svg className={`fill-green-200  duration-300 w-full `}
preserveAspectRatio="none"
viewBox="0 0 1200 120"
xmlns="http://www.w3.org/2000/svg"

>
<path  d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z"/>
</svg>



</main>


                <section className="grow rounded-b-2xl gap-y-10 flex-col items-center h-screen  bg-yellow-200 flex pt-7" >
                  <h2 className="text-5xl text-gray-900 pt-32 font-lex font-bold hover:cursor-default"> Featured Articles</h2>
                <div className="grid gap-x-4   grid-cols-3 w-2/3 h-2/3  bg-yellow-200">
                {blogs.map((b,index) => <BlogCard  key={b.title} {...b} />)}
          
                          </div>
                </section>
         


         
               
        </main>


      


    


       
    </>)

}
 
export default Blog;