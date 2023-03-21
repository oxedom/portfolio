import Image from "next/image";

const Icon = ({name, src, width}) => {
    return ( <div className="flex flex-col justify-center w-23 items-center">
     
        <Image alt={name} width={width} src={src} ></Image>
        {name.length > 0 ? <p className="text-align font-medium ">{name}</p> : null}
    </div>  );
}
 
export default Icon; 