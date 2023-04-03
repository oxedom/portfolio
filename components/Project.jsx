
import Image from "next/image"
const Project = ({name, about, imageSrc, repoLink, liveLink, selected, handleSelect}) => {

    const buttonStyle = " px-5 py-2  font-bold text-lg rounded-lg m-1 shadow" 
    const handleCode = () => {
        window.open(repoLink)
    }
    const handleLive = () => {
        window.open(liveLink)
    }
    
    return ( <div onClick={handleSelect} className={`w-[300px] lg:w-[450px]  grid grid-row-4 px-5 pb-2 rounded-lg justify-center items-center place-items-center     duration-200 shadow transition ${selected ? "bg-purpleSun text-black  " : "bg-gray-200  text-gray-500" }    `}>
        

  
        <span className="font-bold text-xl text-center  p-5"> {name} </span>
        <Image className="rounded-lg" width={500} src={imageSrc}  ></Image>
        <p className="p-2 text-center text-lg"> {about}</p>
        <div>
        <button  className={`${buttonStyle} bg-orangeSun hover:saturate-150    text-white`  } onClick={handleLive} > Live Site </button>
        <button className={`${buttonStyle} bg-white text-black `  } onClick={handleCode}>  Code</button>

        </div>
   
       </div>  );
}
 
export default Project;