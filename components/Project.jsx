import Image from "next/image";
import codeSvg from "../public/images/codeSvg.svg";
const Project = ({
  name,
  about,
  imageSrc,
  repoLink,
  liveLink,
  selected,
  handleSelect,
}) => {
  const buttonStyle = " px-5 py-2  font-bold text-lg rounded-lg m-1 shadow";
  const handleCode = () => {
    window.open(repoLink);
  };
  const handleLive = () => {
    window.open(liveLink);
  };

  return (
    <div
      onClick={handleSelect}
      className={`w-auto text-gray-900    grid grid-row-4 px-5 pb-2 rounded-lg justify-center items-center place-items-center     duration-200 shadow transition  bg-gradient-to-b from-gray-100   to-gray-50 }    `}
    >
      <span className="font-bold text-2xl text-gray-700 text-center  p-5">
        {" "}
        {name}{" "}
      </span>
      {/* <Image className="rounded-lg"  alt={name} width={500} src={imageSrc}></Image> */}
      <p className="p-2 text-center text-lg text-gray-800"> {about}</p>
      <div className="grid   grid-cols-2">
        <button
          className={`${buttonStyle}  bg-gradient-to-tl from-orange-500   to-orange-400 hover:saturate-150    text-white`}
          onClick={handleLive}
        >
          {" "}
          Live Site{" "}
        </button>
        <button
          className={`${buttonStyle} bg-white flex items-center justify-center text-black grow`}
          onClick={handleCode}
        >
          {/* <Image alt="Code </>" width={30} className="opacity-75" src={codeSvg} /> */}
        </button>
      </div>
    </div>
  );
};

export default Project;
