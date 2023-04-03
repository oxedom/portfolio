

const Project = ({name, about, imageSrc, repoLink, liveLink, selected, handleSelect}) => {

    const buttonStyle = " px-5 py-2  font-bold text-lg rounded-lg m-1 shadow" 
    const handleCode = () => {
        window.open(repoLink)
    }
    const handleLive = () => {
        window.open(liveLink)
    }
    
    return ( <div onClick={handleSelect} className={`rounded-lg w-full flex-col p-5 gap-3 ${selected ? "bg-green-200" : "bg-gray-100" } flex   `}>
        

  
        <span className="font-bold text-3xl  text-gray-700"> {name} </span>

        {/* <p> {about}</p> */}
        <div>
        <button  className={`${buttonStyle} bg-blue-400  text-white`  } onClick={handleLive} > Live Site </button>
        <button className={`${buttonStyle} bg-white `  } onClick={handleCode}>  Code</button>
    
        </div>
   
       </div>  );
}
 
export default Project;