import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ url, title, coverImg, alt, color }) => {
  return (
    <Link href={`blog/${url}`}>
      <article className="flex flex-col  justify-center  items-center aspect-square border-black    ">
        <h3
          className={` w-full  p-2 border-t-2 border-x-2 border-black  h-20   bg-purple-400 text-xl  text-center  rounded-t-2xl`}
        >
          {" "}
          {title}{" "}
        </h3>
        <Image
          alt={alt}
          width={350}
          className="w-full rounded-b-2xl border-black border-b-2 border-x-2   "
          src={coverImg}
        />
      </article>
    </Link>
  );
};

export default BlogCard;
