const Navbar = () => {



    return ( 
    
        
        <nav className="flex z-3 w-full  fixed shadow-sm  h-10 sm:h-20 justify-center gap-2 sm:gap-5 items-center">
        <p className="text-2xl sm:text-5xl  font-bold"> Sam Brink</p>
        <div className="text-lg sm:text-4xl flex gap-2 sm:gap-10 justify-center items-center" >
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>

        </div>
    

    </nav> );
}
 
export default Navbar;