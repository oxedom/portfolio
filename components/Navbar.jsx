

const Navbar = ({projectsRef, contactRef, skillsRef, scrolled}) => {

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

    const sectionStyle = `text-gray-700 hover:text-black p-1 mb ${scrolled ? "active:outline text-black  outline-stone-100" : "" }  rounded-md transition `


    return ( 
    
        
        <nav className={` z-3  mb-5 fixed  max-w-full w-full  h-[100px]  sm:h-25 2xl:h-25 ${scrolled ? "bg-white shadow-sm" : ""}
          transition duration-300  gap-2 sm:gap-5 animate-fade p-1`}>
        
        <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-center sm:text-left sm:text-3xl font-bold "> Sam Brink</p>

        <div className=" sm:text-2xl flex gap-2 sm:gap-10 justify-center items-center" >
        <p onClick={(e) => { handleScroll("projects")}}  className={sectionStyle} >Projects</p>
        <p onClick={(e) => { handleScroll("skills")}} className={sectionStyle}>Skills</p>
        <p onClick={(e) => { handleScroll("contact")}}  className={sectionStyle}>Contact</p>

        </div>

        </div>
    

    </nav> );
}
 
export default Navbar;