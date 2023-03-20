import Skillbox from "./SkillBox";
import Image from "next/image";
import express from '../public/skills/back/expres.png'
import firebase from '../public/skills/back/firebase.png'
import graphql from '../public/skills/back/graphql.png'
import mongodb from '../public/skills/back/mongodb.png'
import postgres from '../public/skills/back/postgres.png'
import node from '../public/skills/back/node.png'

const Backend = () => {

    const divStyle = 'flex flex-col items-center'

    return ( <section>
        
        <Skillbox >
        <h3 className="text-center  font-bold text-4xl p-5"> Backend </h3>
            <div className="grid grid-cols-3 gap-2 items-center">

            <div className={divStyle}>
            <Image src={node} width={50} ></Image>
            <p className="font-medium"> Node</p>
            </div>

            <div className={divStyle}>
            <Image src={express} width={50} ></Image>
            <p className="font-medium"> Express</p>
            </div>


            <div className={divStyle}>
            <Image src={postgres} width={50} ></Image>
            <p className="font-medium"> Postgres </p>
            </div>



            <div className={divStyle}>
            <Image src={mongodb} width={80} ></Image>
            <p className="font-medium"> MongoDB</p>
            </div>



            <div className={divStyle}>
            <Image src={firebase} width={70} ></Image>
            <p className="font-medium"> Firebase</p>
            </div>

            <div className={divStyle}>
            <Image src={graphql} width={70} ></Image>
            <p className="font-medium"> GraphQL</p>
            </div>


      
  

            </div>
        </Skillbox>
    </section> );
}
 
export default Backend;