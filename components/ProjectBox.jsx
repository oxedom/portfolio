import { useState } from "react";
import Project from "./Project";
import shoppingCart from "../public/images/projects/shoppingCart.png"
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


    const selectedStyle ="text-2xl sm:text-3xl font-bold text-black "
    const unselectedStyle = "text-large sm:text-2xl text-slate-800  "
    const buttonStyle = "bg-lime-600 text-white rounded-md hidden   p-3 shadow-sm text-sm sm:text-2xl hover:bg-lime-500 duration-300  transition active:border-4 border-slate-200 border-   "
    const projects = [
        {
            name: "Parker",
            about: "Parking App",
            imageSrc: shoppingCart,
            repoLink: "https://github.com/oxedom/parker",
            liveLink: ""
        },
        {
            name: "Petagram",
            about: "Browse Petagram to view photos of the cutests doggos around! ",
            imageSrc: shoppingCart,
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
            imageSrc: shoppingCart,
            repoLink: "https://github.com/oxedom/cv-project",
            liveLink: "https://oxedom.github.io/cv-project/"
        },
        {
            name: "Games ",
            about: "Build a CV using CV Maker! ",
            imageSrc: shoppingCart,
            repoLink: "https://github.com/oxedom/cv-project",
            liveLink: "https://oxedom.github.io/cv-project/"
        },

    ]

    return ( <div className="grid grid-rows-2    lg:mx-40">
        <div className="grid md:grid-cols-3     justify-center items-center    place-items-center center ">
        <button  onClick={handleBack} className={buttonStyle}> Back</button>
        <div className="flex  flex-col sm:flex-row items-center justify-between gap-5">
        {projects.map((el,index) => { return <p className={`${(index === selectedIndex) ? selectedStyle : unselectedStyle} hover:cursor-pointer ` }  onClick={(e) => { setSelectedIndex(index)}}>{el.name}</p>})}

        </div>

        <button onClick={handleNext} className={buttonStyle}> Next</button>
        </div>

        <div className="grid grid-cols-2">
        <Image src={projects[selectedIndex]['imageSrc']}></Image>
        <aside> {projects[selectedIndex]['about']} </aside>
        </div>


        
     

    </div>  );
}
 
export default ProjectBox;