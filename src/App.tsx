import { motion } from "framer-motion";
import Card from "./components/card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

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
            {/*  */}
          </ul>
        </div>
      </header>
      <div
        className="flex justify-center items-center mb-16"
        style={{ height: "80vh" }}
      >
        <div className="md:lg:grid grid-cols-2 gap-3 items-center ">
          <div className="justify-self-center">
            <img
              src="/patapata.gif"
              alt=""
              style={{ height: "20rem" }}
              className="rounded-2xl hidden md:lg:block"
            />
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-center md:lg:text-left">
              Hello
            </h1>
            <h2 className="text-2xl mb-10 text-center md:lg:text-left">
              My name is{" "}
              <span className="bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 bg-clip-text text-transparent inline-block font-semibold">
                Hakim
              </span>
            </h2>
            <h3 className="mx-5 md:lg:mx-0 mb-2">I have experience using</h3>
            <ul className="flex gap-3 flex-wrap mx-5 md:lg:mx-0">
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
                Dart
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Flutter
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                Firebase
              </li>
              <li className="p-3 rounded-2xl text-white bg-gradient-to-r from-green-500 via-violet-600 to-blue-400 font-semibold transition ease-in-out hover:-translate-y-2 hover:translate-x-1">
                and a certified yapper :D
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="flex justify-center items-center my-10 pt-20" id="about">
        <div className="mx-16 text-center " style={{ height: "100vh" }}>
          <motion.h1
            className="text-5xl font-semibold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            About
          </motion.h1>
          <motion.p
            className=" md:lg:mx-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Hey there! I'm Muhammad Hakim, hailing from the beautiful city of
            Melaka. Currently, you can find me diving into the world of computer
            science at the International Islamic University Malaysia. When I'm
            not buried in code, you'll catch me gaming, binge-watching anime, or
            smashing shuttlecocks on the badminton court. Not only that, I am
            also passsionate in music. I can play guitar, drum, percussion and
            even the Malaysian tradisional music instrument, the Gamelan. Reach
            me out and let's connect :D
          </motion.p>
          <div className="flex flex-col md:lg:flex-row justify-center gap-20 mt-10">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              src="/image2.jpeg"
              alt=""
              style={{ width: "15rem" }}
              className="rounded-2xl self-start mb-5 md:lg:mb-0 hidden md:lg:block"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              src="/image1.JPG"
              alt=""
              style={{ width: "15rem" }}
              className="rounded-2xl self-start mb-5 md:lg:mb-0 hidden md:lg:block"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              src="/image3.jpeg"
              alt=""
              style={{ width: "15rem" }}
              className="rounded-2xl self-start mb-5 md:lg:mb-0 hidden md:lg:block"
            />
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="flex justify-center  pt-10" id="projects">
        <div className="">
          <motion.h1
            className="text-center text-5xl font-semibold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h1>
          <div className="md:lg:grid grid-cols-3 gap-10">
            <Card
              github="https://github.com/Motion-U/motionu-official-website"
              link="/project1.png"
              title="Motion-U Technopreneurship Club Official Website"
              desc="Motion-U Club is a technopreneurship club based in International Islamic University Malaysia. I created the website using NextJs, Tailwind and Contentful Headless CMS."
            ></Card>
            <Card
              github="https://github.com/hakimnazry24/KICT-Order-Food"
              link="/project2.png"
              title="KICT Online Food Order"
              desc="KICT Online Food Order is an food ordering system that is meant for community at Kulliyyah of Information and Communication Technology (KICT) IIUM. This project is built using React, NodeJS, SQLite, and Tailwind"
            ></Card>
            <Card
              github="https://github.com/hakimnazry24/Motion-U-Program-Management-System"
              link="/project3.png"
              title="Motion-U Program Management System"
              desc="Motion-U Program Management System is a system that helps Motion-U mainboards to manage club's program. It is built using React, NodeJS, SQLite and Tailwind"
            ></Card>
            <Card
              github="https://github.com/hakimnazry24/Venue-Reservation-System"
              link="/project4.png"
              title="Venue Reservation System"
              desc="This project is part of my assignment for Mobile Application Development course. It is built using HTML, Tailwind, and Dart"
            ></Card>
            <Card
              github="https://github.com/hakimnazry24/hakimnazry24.github.io"
              link="/project5.png"
              title="Personal Website"
              desc="This is my personal website for showcasing biodata and projects. It is built using ReactJS and Tailwind"
            ></Card>
            <Card
              github="https://github.com/hakimnazry24/Abu-Hurairah-Stray-Cats-Reporting-System.git"
              link="/project6.png"
              title="Abu Hurairah Club Stray Cats Reporting System"
              desc="Stray Cats Reporting System is a system that allows IIUM community to report stray cats around IIUM. It eases Abu Hurairah Club to locate any stray cats around IIUM. Built using ReactJS, NodeJS, Tailwind, and SQLite"
            ></Card>
            <Card
              github="https://caringclubiium.vercel.app/"
              link="/project7.png"
              title="Caring Club IIUM Official Website"
              desc="Caring Club IIUM is a club that focuses on orphan's wellbeing. Caring Club is part of CENSERVE club located at International Islamic University Malaysia. The website is build using NextJS and Contentful CMS"
            ></Card>
            <Card
              github="https://github.com/hakimnazry24/Fiverr-Clone-"
              link="/project8.png"
              title="IIUM Freelancer: Freelancing Platform for Students"
              desc="The Fiverr app is a widely-used platform that connects freelancers with clients seeking various services, from graphic design and digital marketing to writing and programming. Built using Flutter and Firebase"
            ></Card>
            <Card
              github="https://bilalkict.vercel.app"
              link="/project9.png"
              title="Portfolio Website for My Friend"
              desc="I built portfolio website to help my friend land a job. Built using NextJS, Tailwind, Material Tailwind, and Framer Motion"
            ></Card>
            <Card
              github=""
              link="/project10.png"
              title="Portfolio Website for Tuan Yusry"
              desc="I built portfolio website for Tuan Yusry, the Co-Founder of Startlah Innovation PLT. It has features his biodata, e-books, and blogposts. Built using NextJS, Tailwind, Material Tailwind, Framer Motion and Contentful CMS"
            ></Card>
            <Card
              github=""
              link="/project11.png"
              title="Learning Management System for Startlah Innovation PLT"
              desc="I built Learning Management System for the company using Moodle LMS and hosted at Digital Ocean"
            ></Card>
            <Card
              github=""
              link="/project12.png"
              title="Board Game Stock Management System"
              desc="I built a mobile app that can be used to manage board games stocks at my intern company. Build Using Dart, Flutter and Firebase Firestore"
            ></Card>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="flex justify-center py-10 text-center" id="contact">
        <div>
          <h1 className="text-5xl font-semibold mb-20">Contact</h1>
          <div className="md:lg:grid grid-cols-4 gap-5">
            <div className="flex flex-col items-center gap-2 mb-5 md:lg:mb-0">
              <TfiEmail style={{ fontSize: "5rem" }} />
              <p>hakimnazry@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-2 mb-5 md:lg:mb-0">
              <a href="www.github.com/hakimnazry24">
                <FaGithub
                  style={{ fontSize: "5rem" }}
                  className="inline-block"
                />
                <p>github.com/hakimnazry24</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 mb-5 md:lg:mb-0">
              <a href="https://twitter.com/hakimnazry_">
                <BsTwitterX
                  style={{ fontSize: "5rem" }}
                  className="inline-block"
                />
                <p>@hakimnazry_</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 mb-5 md:lg:mb-0">
              <a href="www.linkedin.com/in/hakim-nazri/">
                <FaLinkedin
                  style={{ fontSize: "5rem" }}
                  className="inline-block"
                />
                <p>www.linkedin.com/in/hakim-nazri/</p>
              </a>
            </div>
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
