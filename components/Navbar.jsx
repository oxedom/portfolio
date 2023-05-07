import { useRouter } from "next/router";



const Navbar = ({ projectsRef, contactRef, skillsRef, scrolled }) => {

  let router = useRouter()
  const onHomePage = (router.pathname === '/')
  console.log(onHomePage);
  function doScroll(element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  function handleRedirect(value) 
  {
    if(value === 'home') 
    {
      router.push('/')
    }
    if(value === 'blog') 
    {
      router.push('blog')
    }
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
    scrolled
      ? "active:outline text-black  outline-stone-100 hover:cursor-pointer  "
      : ""
  }  rounded-md transition `;

  return (
    <nav
      className={` z-99  fixed mb-5   top-0 w-full max-w-full h-[80px]     md:h-[50px]   ${
        scrolled ? "bg-white shadow-sm" : ""
      }
          transition duration-300  gap-2 sm:gap-5  p-1`}
    >
      <div className="flex flex-col md:flex-row md:gap-5 items-center md:justify-start md:ml-5 justify-center ">
        <p onClick={() => { handleRedirect('home')}} className="text-2xl text-center text-gray-800 sm:text-left sm:text-3xl font-bold hover:cursor-default">
          {" "}
          Sam Brink
        </p>
  <div  className=" sm:text-2xl flex gap-2 sm:gap-5 justify-center items-center">
          
          
          <p
            onClick={(e) => {
              handleScroll("skills");
            }}
            className={`${sectionStyle} ${onHomePage ? "block" : "hidden"} `}
          >
            Skills
          </p>
          <p
            onClick={(e) => {
              handleScroll("projects");
            }}
            className={`${sectionStyle} ${onHomePage ? "block" : "hidden"} `}
          >
            Projects
          </p>
          <p
            onClick={(e) => {
              handleScroll("contact");
            }}
            className={`${sectionStyle} ${onHomePage ? "block" : "hidden"} `}
          >
            Contact
          </p>
 
          <p
            onClick={(e) => {
              handleRedirect('blog')
            }}
            className={sectionStyle}
          >
            Blog
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
