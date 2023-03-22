import Image from "next/image";

const Icon = ({name, src, width}) => {
    return ( <div className="flex gap-2 justify-center w-28 items-center">
     
        <Image alt={name} width={width} src={src} ></Image>
        {name.length > 0 ? <p className="text-align text-lg font-medium ">{name}</p> : null}
    </div>  );
}
 
export default Icon; 