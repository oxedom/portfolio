import { useState } from "react";
import Project from "./Project";
import shoppingCart from "../public/images/projects/shoppingCart.png"
import Image from "next/image";

const ProjectBox = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)

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
            name: "Photography store",
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

    ]

    return ( <div className="grid grid-cols-3  gap-5">
        <div className="flex ">
        <Image src={projects[selectedIndex]['imageSrc']}></Image>
        <ul>
        {projects.map((el,index) => { return <li  onClick={(e) => { setSelectedIndex(index)}}>{el.name}</li>})}
        </ul>
        <p> {projects[selectedIndex]['name']}</p>
        </div>

        
     

    </div>  );
}
 
export default ProjectBox;