import Link from "next/link";
import Image from "next/image";

const BlogCard = ({url, title, coverImg, alt, color}) => {

    


    return ( 
    
    
    <Link href={`blog/${url}`}>

    <article className="flex flex-col justify-center items-center aspect-square border-black shadow-neo  "> 
            <h3 className={`font-lex w-full border-b-2 border-black  h-20  bg-purple-400 text-xl  text-center`} > {title} </h3>
            <Image alt={alt} width={350} className=" w-full  " src={coverImg}/>
                
            
        
     </article> 
     
     </Link>
     );
}
 
export default BlogCard;