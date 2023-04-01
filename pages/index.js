import Head from 'next/head'
import Image from 'next/image'

import avatarArms from '../public/images/avatarArms.png'
import Navbar from '../components/Navbar'
import { useEffect, useRef, useState } from 'react'
import githubIcon from '../public/images/github-mark.png'
import ProjectBox from '@/components/ProjectBox'
import Icon from '@/components/Icon'


//Skills
import react from '../public/skills/front/react.png'
import css from '../public/skills/front/css.png'
import nextjs from '../public/skills/front/nextjs.png'
import tailwind from '../public/skills/front/Tailwind.png'
import jslogo from '../public/skills/front/jslogo.png'
import htmllogo from '../public/skills/front/html.png'
import recoil from '../public/skills/front/Recoil.png'


//Back Skills
import express from '../public/skills/back/expres.png'
import firebase from '../public/skills/back/firebase.png'
import graphql from '../public/skills/back/graphql.png'
import mongodb from '../public/skills/back/mongodb.png'
import postgres from '../public/skills/back/postgres.png'
import node from '../public/skills/back/node.png'
import flask from '../public/skills/back/flask.png'
import nginx from '../public/skills/back/nginx.png'
//General SKills
import docker from '../public/skills/other/docker.png'
import cli from '../public/skills/other/cli.png'
import git from '../public/skills/other/git.png'
import github from '../public/skills/other/github.png'
import java from '../public/skills/other/Java.png'
import jest from '../public/skills/other/jest.png'
import linux from '../public/skills/other/linux_tux.png'
import opencv from '../public/skills/other/opencv.png'
import tensorflow from '../public/skills/other/tensorflow.png'
import webpack from '../public/skills/other/webpack.png'

export default function Home() {

  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef  = useRef(null)
  const [imageHover, setImageHover] = useState(false)
  const [scrolled, setScrolled ] = useState(false)
  const [showAvatar, setShowAvatar] = useState(true)
  const skillTitle = "text-center font-bold text-3xl text-slate-800 m-3"
  const skillBoxStyle = "bg-gray-100  text-gray-600 grid-cols-2 md:grid-cols-2 min-w-[310px] items-center  max-w-[450px] shadow-sm grid-rows-3 grid aspect-square  justify-items-center items-center justify-center p-6 md:p-2  rounded-lg"
  const handleScroll =(e) => {

    if(window.scrollY > 75) 
    {
      setScrolled(true)
    }
    else 
    {
      setScrolled(false)
    }
    if(window.scrollY > 650) 
    {
      setShowAvatar(false)
    }
    else 
    {
      setShowAvatar(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  
  return (
    <>
      <Head>
        <title>Sam Brink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
        <link rel="manifest" href="favicon/site.webmanifest"/>
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <div onScrollCapture={handleScroll}>
      <Navbar
      scrolled={scrolled}
      contactRef={contactRef}
      skillsRef={skillsRef}
      projectsRef={projectsRef}
      ></Navbar>
      <main   className="bg-sunsetMobile sm:bg-sunset w-full bg-fixed bg-no-repeat bg-cover w-min-[320px] h-screen  flex items-center sm:justify-center ">

        <section className='mt-5   flex flex-col sm:mx-5  items-center gap-5 md:justify-center md:flex-row'>
          
          <div className='text-black   '>
          <h2 className='text-2xl sm:text-4xl font-bold text-center '> Hi I'm Sam,</h2>
        <h3 className='text-2xl sm:text-4xl font-medium text-center'> Software Developer</h3>
        <p className='text-xl  sm:text-3xl text-center  '>Creative programmer with a devoted passion for technology and learning</p>
          </div>

          <div onMouseOver={(e) => { setImageHover(true)}} onMouseOut={(e) => { setImageHover(false)}} className='animate-mover flex flex-col p-5 gap-5 transition items-center  tr '>
          {imageHover ? <a target={"_blank"} className='fixed animate-fade  duration-100  opacity-10 bg-white font-bold p-2 text-black rounded-xl bottom-20 text-bold ' href='https://sambenjaminbrink.myportfolio.com/'> 
            Click for Photography site!
            </a> : null }
            {showAvatar ? <Image alt='avatar of self' className='animate-fade  duration-100' onClick={(e) => {if(imageHover) { window.open('https://sambenjaminbrink.myportfolio.com/')}}}  width={200}   src={avatarArms}></Image>
              : null }

          </div>


        </section>


  




</main>




<section className='my-32' > 
  <h2 className='text-5xl sm:text-7xl  mx-32 mb-32 font-bold text-slate-900  items-center '> Skills and tools</h2>

  <div className="flex flex-col  lg:flex-row justify-center items-center  mx-10 my-10">

      <div className=''>
      <h3 className={skillTitle}> Frontend </h3>
      <div  className={skillBoxStyle}>

    <Icon src={htmllogo} width={35} name="HTML5"/>
    <Icon src={css} width={28} name="CSS3"/>
    <Icon src={jslogo} width={30} name="JavaScript"/>
    <Icon src={react} width={40} name="React"/>
    <Icon src={nextjs} width={40} name="Next.js"/>
    <Icon src={recoil} width={50} name="Recoil"/>
    <Icon src={tailwind} width={55} name="Tailwind"/>
    <Icon src={webpack} width={55} name="Webpack"/>
    
      </div>
      </div>


    <div >
      <h3 className={skillTitle}> Backend</h3>
      <div  className={skillBoxStyle}>
    
      <Icon name="Node" src={node} width={35}/>
      <Icon  name="" src={express} width={70}/>
       <Icon name="Postgres" src={postgres} width={35} />
      <Icon  name="Firebase" src={firebase} width={40}/>
      <Icon name="Graphql" src={graphql} width={40}/>
      <Icon name="Nginx" src={nginx} width={40}/>
      <Icon name="Mongodb" src={mongodb} width={40}/>
       <Icon name="" src={flask} width={45} />


      </div>

      </div>

      <div>
    <h3 className={skillTitle}> Miscellaneous </h3>
    
      <div className={skillBoxStyle}>
      <Icon name={''}   src={docker} width={70} />
      <Icon name="CLI" src={cli} width={40} />
      <Icon name="" src={git} width={60} />
      <Icon name={"Github"} src={github} width={40} />
      <Icon name="" src={java} width={50} />
      <Icon name="Jest" src={jest} width={35} />
      <Icon name="Linux" src={linux} width={40} />
      <Icon name="" src={opencv} width={45} />
      <Icon name="TFJS" src={tensorflow} width={50} />
      </div>


      </div>

   

  </div>

  
 
</section>

<section className='mx-10'  ref={projectsRef}> 
  <h2 className='text-5xl sm:text-7xl  mx-32 mb-32 font-bold text-slate-900  items-center '> Projects</h2>

  <ProjectBox></ProjectBox>

</section>

<section className='my-20 flex flex-col gap-5 items-center ' ref={skillsRef}> 
    <h3 className='text-7xl text-center  font-bold text-slate-900 '>  Contact <span className='text-lime-600  animate-fade'> me </span> </h3>
    
    <span className='text-2xl ' > sambenjaminbrink@gmail.com</span>

  
</section>

<footer ref={contactRef} className='flex flex-col justify-center gap-5 items-center py-5  bg-black'>
  
  <div className='flex justify-center items-center '>

  <a className='text-white flex justify-center items-center gap-3 font-medium ' href='https://github.com/oxedom'>
    <span>
    Github Profile
    </span>
    <Image alt='github'  className='invert' src={githubIcon} width={40} height={40}></Image>
 </a>


  </div>






</footer>
      </div>
   
 

    </>
  )
}
