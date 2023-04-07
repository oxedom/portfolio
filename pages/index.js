import Head from "next/head";
import Image from "next/image";

import avatarArms from "../public/images/laptop.png";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import githubIcon from "../public/images/github-mark.png";
import ProjectBox from "../components/ProjectBox";
import Icon from "../components/Icon";

//Skills
import react from "../public/skills/front/react.svg";
import css from "../public/skills/front/css.svg";
import nextjs from "../public/skills/front/nextjs.svg";
import tailwind from "../public/skills/front/tailwind.svg";
import jslogo from "../public/skills/front/jslogo.svg";
import htmllogo from "../public/skills/front/html.svg";
import recoil from "../public/skills/front/Recoil.svg";

//Back Skills
import firebase from "../public/skills/back/firebase.svg";
import graphql from "../public/skills/back/graphql.svg";
import mongodb from "../public/skills/back/mongodb.svg";
import postgres from "../public/skills/back/postgres.png";
import node from "../public/skills/back/node.svg";
import flask from "../public/skills/back/flask.svg";
import nginx from "../public/skills/back/nginx.svg";
import express from "../public/skills/back/express.svg";

//General SKills
import docker from "../public/skills/other/docker.svg";
import cli from "../public/skills/other/cli.svg";
import git from "../public/skills/other/git.svg";
import java from "../public/skills/other/Java.svg";
import jest from "../public/skills/other/jest.svg";
import linux from "../public/skills/other/linux_tux.svg";
import opencv from "../public/skills/other/opencv.svg";
import tensorflow from "../public/skills/other/tensorflow.svg";
import webpack from "../public/skills/other/webpack.svg";
import Skillbox from "../components/Skillbox";

export default function Home() {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e) => {
    if (window.scrollY > 75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Sam Brink</title>
        <meta name="description" content="Sam Brink's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div onScrollCapture={handleScroll}>
        <Navbar
          scrolled={scrolled}
          contactRef={contactRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
        ></Navbar>
        <main className="bg-gradient-to-t   from-rose-300 to-violet-300  lg:bg-sunset  w-full bg-fixed bg-no-repeat bg-cover  h-screen  flex items-center sm:justify-center ">
          <section className="mt-5  flex flex-col sm:mx-5   items-center gap-5 md:justify-center md:flex-row">
            <header className="text-gray-900 mt-10 sm:mt-0 ml-3 text-opacity-95   ">
              <h2 className="text-6xl font-bold md:text-8xl   ">
                {" "}
                Hi I&apos;m Sam,
              </h2>
              <h3 className="text-4xl md:text-5xl font-medium ">
                {" "}
                Software Developer
              </h3>
              <p className="text-xl  sm:text-3xl   ">
                A creative programmer with a devoted passion for technology and
                learning.
              </p>
            </header>

            <div className={`${scrolled ? "" : "animate-mover " } "z-2 flex flex-col p-5 gap-5   transition items-center"   `}>
              <Image
                alt="avatar of self"
                className=" max-w-[180px]  duration-100"
                width={350}
                src={avatarArms}
              ></Image>
            </div>
          </section>
        </main>

        <section className="flex justify-center">
          <div className=" flex flex-col gap-10  mt-10 border-b pb-10 w-[1440px]">
            <h2 className="text-5xl sm:text-7xl text-center  font-bold text-slate-900 items-center  ">
              {" "}
              Skills
            </h2>

            <div className=" flex flex-col lg:flex-row gap-12   items-center justify-center">
              {/* <h3 className={skillTitle}> Frontend </h3> */}
              <Skillbox title={"Front-end"}>
                <Icon src={htmllogo} width={35} name="HTML5" />
                <Icon src={css} width={28} name="CSS3" />
                <Icon src={jslogo} width={30} name="JavaScript" />
                <Icon src={react} width={40} name="React" />
                <Icon src={nextjs} width={40} name="Next.js" />
                <Icon src={recoil} width={10} name="Recoil" />
                <Icon src={tailwind} width={55} name="Tailwind" />
                <Icon src={webpack} width={55} name="Webpack" />
              </Skillbox>

              <Skillbox title={"Back-end"}>
                <Icon name="Node" src={node} width={35} />
                <Icon name="Postgres" src={postgres} width={35} />
                <Icon name="Firebase" src={firebase} width={40} />
                <Icon name="Graphql" src={graphql} width={40} />
                <Icon name="Nginx" src={nginx} width={40} />
                <Icon name="Mongodb" src={mongodb} width={40} />
                <Icon name="Flask" src={flask} width={45} />
                <Icon name="Express" src={express} width={45} />
              </Skillbox>

              <Skillbox title={"Miscellaneous"}>
                <Icon name={"Docker"} src={docker} width={70} />
                <Icon name="CLI" src={cli} width={40} />
                <Icon name="GIT" src={git} width={60} />
                <Icon name="Java" src={java} width={50} />
                <Icon name="Jest" src={jest} width={35} />
                <Icon name="Linux" src={linux} width={40} />
                <Icon name="OpenCV" src={opencv} width={45} />
                <Icon name="TFJS" src={tensorflow} width={50} />
              </Skillbox>
            </div>
          </div>
        </section>

        <section className="flex justify-center  " ref={projectsRef}>
          <div className="flex flex-col gap-10  mt-10 border-b pb-10 w-[1440px]">
            <h2 className="text-5xl sm:text-7xl text-center  font-bold text-slate-900 items-center">
              {" "}
              Projects
            </h2>

            <ProjectBox></ProjectBox>
          </div>
        </section>

        <section
          className="my-10 flex flex-col gap-5 items-center  "
          ref={skillsRef}
        >
          <h3 className="text-6xl md:text-7xl text-center  font-bold text-slate-900 ">
            {" "}
            Contact me{" "}
          </h3>

          <span className="text-xl md:text-2xl ">
            {" "}
            sambenjaminbrink@gmail.com
          </span>
        </section>

        <footer
          ref={contactRef}
          className="flex flex-col justify-center gap-2 items-center pt-6 pb-16  bg-black"
        >
          <div className="flex justify-center items-center ">
            <a
              className="text-white flex justify-center items-center gap-3 font-medium "
              href="https://github.com/oxedom"
            >
              <span></span>
              <Image
                alt="github"
                className="invert"
                src={githubIcon}
                width={40}
                height={40}
              ></Image>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
