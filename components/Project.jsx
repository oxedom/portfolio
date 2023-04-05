
import Image from "next/image"
const Project = ({name, about, imageSrc, repoLink, liveLink, selected, handleSelect}) => {

    const buttonStyle = " px-5 py-2  font-bold text-lg rounded-lg m-1 shadow" 
    const handleCode = () => {
        window.open(repoLink)
    }
    const handleLive = () => {
        window.open(liveLink)
    }
    
    return ( <div onClick={handleSelect} className={`w-[300px] lg:w-[475px] text-gray-900    grid grid-row-4 px-5 pb-2 rounded-lg justify-center items-center place-items-center     duration-200 shadow transition  bg-gradient-to-b from-gray-100   to-gray-50 }    `}>
        

  
        <span className="font-bold text-xl text-center  p-5"> {name} </span>
        <Image className="rounded-lg" width={500} src={imageSrc}  ></Image>
        <p className="p-2 text-center text-lg"> {about}</p>
        <div>
        <button  className={`${buttonStyle}  bg-gradient-to-tl from-orange-500   to-orange-400 hover:saturate-150    text-white`  } onClick={handleLive} > Live Site </button>
        <button className={`${buttonStyle} bg-white text-black `  } onClick={handleCode}>  Code</button>

        </div>
   
       </div>  );
}
 
export default Project;