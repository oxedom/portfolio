import Image from "next/image";

const Icon = ({ name, src, width, height }) => {
  return (
    <div className="flex gap-2  items-center w-32">
      {/* <Image
        className="max-w-full aspect-auto"
        alt={name}
        width={40}
        height={40}
        src={src}
      ></Image> */}
      {name.length > 0 ? (
        <p className="text-align text-gray-800 font-medium ">{name}</p>
      ) : null}
    </div>
  );
};

export default Icon;
