import { useEffect, useState } from "react";
import Project from "./Project";
import shoppingCart from "../public/images/projects/shoppingCart.png"
import cvMaker from "../public/images/projects/cvMaker.png"
import games from "../public/images/projects/games.png"
import petagram from "../public/images/projects/petagram.png"
import output from '../public/images/projects/output.gif'
import Image from "next/image";

const ProjectBox = () => {

    const projects = [
        // {
        //     name: "Parker",
        //     about: "Parking App",
        //     imageSrc: shoppingCart,
        //     repoLink: "https://github.com/oxedom/parker",
        //     liveLink: ""
        // },
        // {
        //     name: "Parkerr",
        //     about: "Detect and mointor marking lots ",
        //     imageSrc: petagram,
        //     repoLink: "https://github.com/oxedom/parker",
        //     liveLink: "http://parkerr.org/"
        // },

        
        {
            name: "Instagram Clone",
            about: "Browse Petagram to view photos of the cutests doggos around! ",
            imageSrc: petagram,
            repoLink: "https://github.com/oxedom/instagram-clone",
            liveLink: "https://instagram-backend-79d91.web.app/feed"
        },
        {
            name: "E-commerce",
            about: "Shop sam's photography store!",
            imageSrc: shoppingCart,
            repoLink: "https://github.com/oxedom/shopping-cart",
            liveLink: "https://oxedom.github.io/shopping-cart/"
        },
        {
            name: "CV Maker",
            imageSrc: cvMaker,
            about: "Build a CV using CV Maker! ",
            repoLink: "https://github.com/oxedom/cv-project",
            liveLink: "https://oxedom.github.io/cv-project/"
        },
        {
            name: "Games ",
            imageSrc: games,
            about: "Tic Tac Toe, Memory Card game, and Battleship",
            repoLink: "https://github.com/oxedom?tab=repositories",
            liveLink: "https://oxedom.github.io/memory-card/"
        },



    ]

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [blur, setBlur] = useState(false)
    function handleNext () 
    {
        if(selectedIndex < projects.length-1) { setSelectedIndex(prev => prev+1)}

        else { setSelectedIndex(0)}
    }

    function handleBack () 
    {
        if(selectedIndex > 0) { setSelectedIndex(prev => prev-1)}

        else { setSelectedIndex(projects.length-1)}
    }

   
    useEffect(() => {

        setBlur(true)
        setTimeout(() => {
            setBlur(false)
        }, 150)

    }, [selectedIndex])



    
    // imageGif()

        // imageGif()
 

    const selectedStyle ="text-4xl sm:text-5xl font-bold text-black "
    const unselectedStyle = "text-large sm:text-3xl font-semibold text-gray-700 opacity-90  "
    const btnStyle = "bg-blue-300 rounded-lg text-white font-bold shadow-sm px-7 py-3 hover:bg-blue-400 duration-100"
    function handleSelect(index) { setSelectedIndex(index) }

    return ( <div className="flex flex-col items-center     justify-center gap-2 p-10   ">
  
        <div className="flex flex-col  gap-2  ">

    
        <Image width={600} className={`w-[300px]   md:w-[500px] lg:w-[600px] duration-500 rounded-lg ${blur ? "blur z-auto" : ""}`} src={projects[selectedIndex]['imageSrc']}></Image>
        <button className={btnStyle} onClick={() => handleNext()}> Next project </button>
        </div>

        <aside className="w-[300px] md:w-[500px] lg:w-[600px]">
        {projects[selectedIndex]['about']}
        </aside>
            <div className="grid gap-5 md:grid-cols-2 "   >


        {projects.map((el,index) => { return <Project
        liveLink={el.liveLink}
        handleSelect={ () => {handleSelect(index) }}
        repoLink={el.repoLink}
        selected={(index===selectedIndex)}
        name={el.name}
        imageSrc={el.imageSrc}
        about={el.about}
            ></Project>})}
        

     
            </div>

      
      

  


     

    </div>  );
}
 
export default ProjectBox;