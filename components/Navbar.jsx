import { useRouter } from 'next/router'

const Navbar = () => {

    const sectionStyle = "text-gray-700 hover:text-black p-2 mb active:outline  outline-stone-100 rounded-xl "


    return ( 
    
        
        <nav className="flex z-3 w-full mb-10 fixed shadow-sm  h-[100px]  sm:h-20 justify-around  gap-2 sm:gap-5 items-center animate-fade p-1">
        <p className="text-2xl sm:text-4xl sm:mx-4 font-bold "> Sam Brink</p>
        <div className="text-lg sm:text-4xl flex gap-2 sm:gap-10 justify-center items-center" >
        <p className={sectionStyle} >Projects</p>
        <p className={sectionStyle}>Skills</p>
        <p className={sectionStyle}>Contact</p>

        </div>
    

    </nav> );
}
 
export default Navbar;