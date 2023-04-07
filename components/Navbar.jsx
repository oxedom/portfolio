const Navbar = ({ projectsRef, contactRef, skillsRef, scrolled }) => {
  function doScroll(element) {
 
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
 
  }

  function handleScroll(value) {
    
   
      if (value === "projects") {
        doScroll(projectsRef.current);
      } else if (value === "skills") {
        doScroll(skillsRef.current);
      } else if (value === "contact") {
        doScroll(contactRef.current);
      
    }
  }

  const sectionStyle = `text-gray-700 hover:text-black p-1 mb ${
    scrolled ? "active:outline text-black  outline-stone-100 hover:cursor-pointer  " : ""
  }  rounded-md transition `;

  return (
    <nav
      className={` z-99  fixed mb-5   top-0 w-full max-w-full h-[80px]     md:h-[50px]   ${
        scrolled ? "bg-white shadow-sm" : ""
      }
          transition duration-300  gap-2 sm:gap-5  p-1`}
    >
      <div className="flex flex-col md:flex-row md:gap-5 items-center md:justify-start md:ml-5 justify-center ">
        <p className="text-2xl text-center text-gray-800 sm:text-left sm:text-3xl font-bold hover:cursor-default">
          {" "}
          Sam Brink
        </p>

        <div className=" sm:text-2xl flex gap-2 sm:gap-5 justify-center items-center">

          <p
            onClick={(e) => {
              handleScroll("skills");
            }}
            className={sectionStyle}
          >
            Skills
          </p>
          <p
            onClick={(e) => {
              handleScroll("projects");
            }}
            className={sectionStyle}
          >
            Projects
          </p>
          <p
            onClick={(e) => {
              handleScroll("contact");
            }}
            className={sectionStyle}
          >
            Contact
          </p>
          <a
            target="_blank"
            href="https://github.com/oxedom/"
            className={sectionStyle}
          >
            {" "}
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
