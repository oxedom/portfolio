import Image from "next/image";



const Project = ({name, about, imageSrc, repoLink, liveLink}) => {

    const buttonStyle = " px-5 py-2  font-bold text-lg rounded-lg m-1 shadow" 
    const handleCode = () => {
        window.open(repoLink)
    }
    const handleLive = () => {
        window.open(liveLink)
    }
    
    return ( <div className="rounded-lg flex-col p-5 gap-3 bg-gray-100 flex  shadow ">
        

  
        <span className="font-bold text-3xl text-gray-700"> {name} </span>
      
        <Image width={800}  className="rounded-lg   " src={imageSrc}></Image>
        <p> {about}</p>
        <div>
        <button  className={`${buttonStyle} bg-lime-500  text-white`  } onClick={handleLive} >  Live Site</button>
        <button className={`${buttonStyle} bg-white `  } onClick={handleCode}>  Code</button>
    
        </div>
   
       </div>  );
}
 
export default Project;