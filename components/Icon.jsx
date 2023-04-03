import Image from "next/image";

const Icon = ({name, src, width,height}) => {
    return ( <div className="flex gap-2 justify-center items-center w-32">
     
        <Image className="max-w-full aspect-auto" alt={name} width={width} height={height} src={src} ></Image>
        {name.length > 0 ? <p className="text-align  font-medium ">{name}</p> : null}
    </div>  );
}
 
export default Icon; 