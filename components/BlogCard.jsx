import Link from "next/link";
import Image from "next/image";

const BlogCard = ({url, title, coverImg, alt}) => {
    return ( 
    
    
    <Link href={url}>

    <article className="flex flex-col border-2 justify-center items-center aspect-square border-black rounded-2xl  "> 
            <h3 className="font-lex w-full rounded-t-2xl border-b-2 border-black  h-20   bg-orange-300  text-2xl  text-center" > {title} </h3>
            <Image alt={alt} width={350} className="rounded-b-2xl w-full  " src={coverImg}/>
                
            
        
     </article> 
     
     </Link>
     );
}
 
export default BlogCard;