import { useRouter } from 'next/router'

const Navbar = ({projectsRef, contactRef, skillsRef}) => {

    function doScroll(element) 
    {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }

    function handleScroll(value) 
    {   
 
        if(value === 'projects') 
        {
            
            doScroll(projectsRef.current)
         
        }
        else if(value === 'skills') 
        {
            doScroll(skillsRef.current)
        }
        else if(value === 'contact') 
        {
            doScroll(contactRef.current)
        }

    }

    const sectionStyle = "text-gray-700 hover:text-black p-2 mb active:outline  outline-stone-100 rounded-xl "


    return ( 
    
        
        <nav className="flex z-3 w-full mb-10 fixed shadow-sm  h-[100px]  sm:h-20 justify-around  gap-2 sm:gap-5 items-center animate-fade p-1">
        <p className="text-2xl sm:text-4xl sm:mx-4 font-bold "> Sam Brink</p>
        <div className="text-lg sm:text-4xl flex gap-2 sm:gap-10 justify-center items-center" >
        <p onClick={(e) => { handleScroll("projects")}}  className={sectionStyle} >Projects</p>
        <p onClick={(e) => { handleScroll("skills")}} className={sectionStyle}>Skills</p>
        <p onClick={(e) => { handleScroll("contact")}}  className={sectionStyle}>Contact</p>

        </div>
    

    </nav> );
}
 
export default Navbar;