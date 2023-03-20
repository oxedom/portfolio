import Skillbox from "./SkillBox";
import Image from "next/image";
import react from '../public/skills/front/react.png'
import css from '../public/skills/front/css.png'
import nextjs from '../public/skills/front/nextjs.png'
import tailwind from '../public/skills/front/Tailwind.png'
import jslogo from '../public/skills/front/jslogo.png'
import htmllogo from '../public/skills/front/html.png'



const Frontend = () => {

    const divStyle = 'flex flex-col items-center'

    return ( <section>
        
        <Skillbox >
        <h3 className="text-center  font-bold text-4xl p-5"> Frontend </h3>
            <div className="grid grid-cols-3 gap-2 items-center">

            <div className={divStyle}>
            <Image src={htmllogo} width={50} ></Image>
            <p className="font-medium"> HTML5</p>
            </div>

            <div className={divStyle}>
            <Image src={css} width={50} ></Image>
            <p className="font-medium"> CSS</p>
            </div>


            <div className={divStyle}>
            <Image src={jslogo} width={50} ></Image>
            <p className="font-medium"> Javascript </p>
            </div>



            <div className={divStyle}>
            <Image src={react} width={80} ></Image>
            <p className="font-medium"> React</p>
            </div>



            <div className={divStyle}>
            <Image src={nextjs} width={70} ></Image>
            <p className="font-medium"> Next.js</p>
            </div>

            <div className={divStyle}>
            <Image src={tailwind} width={70} ></Image>
            <p className="font-medium"> Tailwind</p>
            </div>

      
  

            </div>
        </Skillbox>
    </section> );
}
 
export default Frontend;