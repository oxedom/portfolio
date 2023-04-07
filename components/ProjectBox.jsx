import Project from "./Project";
import shoppingCart from "../public/images/projects/shoppingCart.png";
import cvMaker from "../public/images/projects/cvMaker.png";
import games from "../public/images/projects/games.png";
import petagram from "../public/images/projects/petagram.png";
import parkerr from "../public/images/projects/parker.png";

const ProjectBox = () => {
  const projects = [
    {
      name: "Parkerr",
      about: "Smart Parking with Parkerr. 🚗",
      imageSrc: parkerr,
      repoLink: "https://github.com/oxedom/parker",
      liveLink: "https://parkerr.org/",
    },

    {
      name: "Instagram for pets",
      about: "Share your pet's adventures with the world 🐕",
      imageSrc: petagram,
      repoLink: "https://github.com/oxedom/instagram-clone",
      liveLink: "https://instagram-backend-79d91.web.app/feed",
    },
    {
      name: "E-commerce",
      about: "E-commerce Demo store for my photography work. 📷",
      imageSrc: shoppingCart,
      repoLink: "https://github.com/oxedom/shopping-cart",
      liveLink: "https://oxedom.github.io/shopping-cart/",
    },
    {
      name: "Resume Builder",
      imageSrc: cvMaker,
      about: " Build and your future, one resume at a time!  📝",
      repoLink: "https://github.com/oxedom/cv-project",
      liveLink: "https://oxedom.github.io/cv-project/",
    },
    {
      name: "Games!",
      imageSrc: games,
      about: "Tic Tac Toe, Battleship, Memory Game: Let the games begin! 🎲",
      repoLink: "https://github.com/oxedom?tab=repositories",
      liveLink: "https://oxedom.github.io/memory-card/",
    },
  ];

  const selectedStyle = "text-4xl sm:text-5xl font-bold text-black ";
  const unselectedStyle =
    "text-large sm:text-3xl font-semibold text-gray-700 opacity-90  ";

  return (
    <div className="flex flex-col items-center       justify-center gap-2 p-5   ">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-10   ">
        {projects.map((el, index) => {
          return (
            <Project
              key={el.repoLink}
              liveLink={el.liveLink}
              repoLink={el.repoLink}
              name={el.name}
              imageSrc={el.imageSrc}
              about={el.about}
            ></Project>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;
