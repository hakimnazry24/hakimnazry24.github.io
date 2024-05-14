import { motion } from "framer-motion";
import Card from "./components/card";

export default function App() {
  return (
    <>
      <header className="flex items-center justify-between text-lg font-semibold p-5 bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 text-white">
        <a href="/">
          <h1 className="transition ease-in-out duration-150 p-3 hover:bg-white hover:text-black rounded-2xl">
            Hakim Nazri
          </h1>
        </a>
        <div>
          <ul className="flex gap-5">
          <li className="transition ease-in-out duration-150 p-3 hover:bg-white hover:text-black rounded-2xl">
              <a href="#projects">Projects</a>
            </li>
            <li className="transition ease-in-out duration-150 p-3 hover:bg-white hover:text-black rounded-2xl">
              <a href="#about">About</a>
            </li>
            <li className="transition ease-in-out duration-150 p-3 hover:bg-white hover:text-black rounded-2xl">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <div
        className="flex justify-center items-center mb-16"
        style={{ height: "80vh" }}
      >
        <div className="grid grid-cols-2 gap-3 items-center ">
          <div className="justify-self-center">
            <img
              src="/patapata.gif"
              alt=""
              style={{ height: "20rem" }}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-semibold ">Hello</h1>
            <h2 className="text-2xl mb-10">
              My name is{" "}
              <span className="bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 bg-clip-text text-transparent inline-block font-semibold">
                Hakim
              </span>
            </h2>
            <h3 className="mb-2">I have experience using</h3>
            <ul className="flex gap-3 flex-wrap">
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                HTML
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                CSS
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Javascript
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Typescript
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                ReactJS
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                NodeJS
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                NextJS
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Flutter
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Tailwind
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                DaisyUI
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Contentful CMS
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                SQLite
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                MongoDB
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Prisma ORM
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                and a certified yapper :D
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="flex justify-center items-center mb-10 pt-20" id="about">
        <div className="mx-16 text-center " style={{ height: "100vh" }}>
          <motion.h1 className="text-5xl font-semibold mb-5" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}}>About</motion.h1>
          <motion.p className=" md:lg:mx-32" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}}>
            Hey there! I'm Muhammad Hakim, hailing from the beautiful city of
            Melaka. Currently, you can find me diving into the world of computer
            science at the International Islamic University Malaysia. When I'm
            not buried in code, you'll catch me gaming, binge-watching anime, or
            smashing shuttlecocks on the badminton court. Not only that, I am
            also passsionate in music. I can play guitar, drum, percussion and
            even the Malaysian tradisional music instrument, the Gamelan. Reach
            me out and let's connect :D
          </motion.p>
          <div className="flex justify-center gap-20 mt-10">
            <motion.img initial={{opacity: 0}} whileInView={{opacity:1}} transition={{delay: 0.5}} viewport={{once: true}}  src="/image2.jpeg" alt="" style={{width: "15rem"}} className="rounded-2xl self-start" />
            <motion.img initial={{opacity: 0}} whileInView={{opacity:1}} transition={{delay: 0.5}} viewport={{once: true}}  src="/image1.JPG" alt="" style={{width: "15rem"}} className="rounded-2xl self-start" />
            <motion.img initial={{opacity: 0}} whileInView={{opacity:1}} transition={{delay: 0.5}} viewport={{once: true}}  src="/image3.jpeg" alt="" style={{width: "15rem"}} className="rounded-2xl self-start" />
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="flex justify-center h-screen pt-10" id="projects">
        <div>
          <motion.h1 className="text-center text-5xl font-semibold mb-5" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}}>Projects</motion.h1>
          <div className="md:lg: grid grid-cols-3 gap-10">
          <Card link="/project1.png" title="Motion-U Technopreneurship Club Official Website" desc="Motion-U Club is a technopreneurship club based in International Islamic University Malaysia. I created the website using NextJs, Tailwind and Contentful Headless CMS."></Card>
          <Card link="/project2.png" title="KICT Online Food Order" desc="KICT Online Food Order is an food ordering system that is meant for community at Kulliyyah of Information and Communication Technology (KICT) IIUM. This project is built using React, NodeJS, SQLite, and Tailwind"></Card>
          <Card link="/project3.png" title="Motion-U Program Management System" desc="Motion-U Program Management System is a system that helps Motion-U mainboards to manage club's program. It is built using React, NodeJS, SQLite and Tailwind"></Card>
          </div>
        </div>
      </div>

      {/* footer */}
      
        <footer className="w-full mb-10 flex justify-center md:lg:mt-40 absolute py-5">
          <p className="text-slate-600">
            Made with{" "}
            <span className="bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 bg-clip-text text-transparent inline-block font-semibold">
              ♥
            </span>{" "}
            by Hakim
          </p>
        </footer>
      
    </>
  );
}
