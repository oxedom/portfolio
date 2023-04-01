import { useState } from "react";
import Project from "./Project";
import shoppingCart from "../public/images/projects/shoppingCart.png"
import cvMaker from "../public/images/projects/cvMaker.png"
import games from "../public/images/projects/games.png"
import petagram from "../public/images/projects/petagram.png"

import Image from "next/image";

const ProjectBox = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)

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


    const selectedStyle ="text-4xl sm:text-5xl font-bold text-black "
    const unselectedStyle = "text-large sm:text-3xl font-semibold text-gray-700 opacity-90  "
    const projects = [
        // {
        //     name: "Parker",
        //     about: "Parking App",
        //     imageSrc: shoppingCart,
        //     repoLink: "https://github.com/oxedom/parker",
        //     liveLink: ""
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
            about: "Build a CV using CV Maker! ",
            imageSrc: cvMaker,
            repoLink: "https://github.com/oxedom/cv-project",
            liveLink: "https://oxedom.github.io/cv-project/"
        },
        {
            name: "Games ",
            about: "Tic Tac Toe, Memory Card game, and Battleship",
            imageSrc: games,
            repoLink: "https://github.com/oxedom?tab=repositories",
            liveLink: "https://oxedom.github.io/memory-card/"
        },

    ]

    return ( <div className="flex justify-center gap-2   ">
  
     

            <div className="grid gap-2 "  >


        {projects.map((el,index) => { return <Project
        liveLink={el.liveLink}
        repoLink={el.repoLink}
        imageSrc={el.imageSrc}
        about={el.about}
        className={`${(index === selectedIndex) ? selectedStyle : unselectedStyle} hover:cursor-pointer  ` }  onClick={(e) => { setSelectedIndex(index)}}>{el.name}</Project>})}
        

        {/* <aside className="bg-gray-100 rounded-md p-5 w-64  h-64 font-medium text-xl "> {projects[selectedIndex]['about']} </aside> */}
            </div>

      
      

  


        {/* <Image className="rounded-xl " width={800} src={projects[selectedIndex]['imageSrc']}></Image> */}
     

    </div>  );
}
 
export default ProjectBox;