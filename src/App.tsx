import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Card from "./components/Card";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function App() {
  const [displayDropdownMenu, setDisplayDropdownMenu] = useState(false);
  return (
    <>
      <Helmet>
        <title>Hakim Nazri Portfolio</title>
        <meta
          name="description"
          content="Muhammad Hakim Bin Md Nazri is a web application freelancer and a computer science students at International Islamic University Malaysia. He builds solutions for many different clients for their businesses using the latest technology"
        />
        <meta
          name="keywords"
          content="web application, mobile application, web application freelancer, mobile application freelancer, computer science student, Internation Islamic University Malaysia, IT solution, portfolio, Hakim Nazri, Muhammad Hakim Bin Md Nazri, final year project, fyp, hakim computer science iium, hakim web freelancer"
        />
      </Helmet>
      <div className="bg-white p-4 fixed left-0 top-0 w-full block md:hidden">
        <button className=" p-2 border rounded-md ">
          <RxHamburgerMenu
            onClick={() => setDisplayDropdownMenu(!displayDropdownMenu)}
          />
        </button>
      </div>
      <header
        className={`p-6 fixed top-0 left-0 w-full h-screen bg-white ${
          displayDropdownMenu ? "block" : "hidden"
        }`}
      >
        <button className=" p-2 border rounded-md block md:hidden">
          <RxHamburgerMenu
            onClick={() => setDisplayDropdownMenu(!displayDropdownMenu)}
          />
        </button>
        <div className="flex flex-col space-x-5">
          <ul>
            <li className="border-b-2 p-2">
              <a
                href="#about"
                className="hover:underline"
                onClick={() => setDisplayDropdownMenu(false)}
              >
                <li>About</li>
              </a>
            </li>
            <li
              className="border-b-2 p-2"
              onClick={() => setDisplayDropdownMenu(false)}
            >
              <a href="#experience" className="hover:underline">
                <li>Experience</li>
              </a>
            </li>
            <li
              className="border-b-2 p-2"
              onClick={() => setDisplayDropdownMenu(false)}
            >
              <a href="#past-projects" className="hover:underline">
                <li>Past Projects</li>
              </a>
            </li>
            <li
              className="border-b-2 p-2"
              onClick={() => setDisplayDropdownMenu(false)}
            >
              <a href="#cv" className="hover:underline">
                <li>Curriculum Vitae</li>
              </a>
            </li>
            <li
              className="border-b-2 p-2"
              onClick={() => setDisplayDropdownMenu(false)}
            >
              <a href="#contact" className="hover:underline">
                <li>Contact</li>
              </a>
            </li>
          </ul>
          {/* <ul>
            <a href="#blog" className="hover:underline">
              <li>Blog</li>
            </a>
          </ul> */}
        </div>
      </header>
      <header className="hidden md:flex justify-between p-6">
        <a href="/" className="text-xl font-semibold">
          <div>Hakim Nazri</div>
        </a>
        <div className="flex space-x-5">
          <ul>
            <a href="#about" className="hover:underline">
              <li>About</li>
            </a>
          </ul>
          <ul>
            <a href="#experience" className="hover:underline">
              <li>Experience</li>
            </a>
          </ul>
          <ul>
            <a href="#past-projects" className="hover:underline">
              <li>Past Projects</li>
            </a>
          </ul>
          <ul>
            <a href="#cv" className="hover:underline">
              <li>Curriculum Vitae</li>
            </a>
          </ul>
          <ul>
            <a href="#contact" className="hover:underline">
              <li>Contact</li>
            </a>
          </ul>
          {/* <ul>
            <a href="#blog" className="hover:underline">
              <li>Blog</li>
            </a>
          </ul> */}
        </div>
      </header>

      <section className="md:grid grid-cols-2 lg:gap-x-32 items-center mt-28 md:mt-5 h-screen w-2/3 mx-auto">
        <div className="flex justify-center md:justify-end mb-10 md:mb-0">
          <img src="/hakim.jpeg" alt="" className="w-4/5 mb:2-3/5 rounded-lg" />
        </div>
        <div className="text-lg justify-self-start">
          Hello 👋
          <br />
          <h1 className="text-xl font-semibold">I am Muhammad Hakim</h1>
          <h2 className="mt-5 text-xl">
            Web Application Freelancer | Mobile Application Freelancer |
            Computer Science Student
          </h2>
          <a href="https://www.linkedin.com/in/hakim-nazri/">
            <button className="border border-black p-2 px-4 rounded-md flex gap-x-2 items-center transition-all hover:text-white hover:font-semibold hover:bg-black mt-5">
              Let&apos;s connect!
            </button>
          </a>
        </div>
      </section>

      {/* about */}
      <div className="flex justify-center items-center my-10 pt-20" id="about">
        <div className="mx-16 text-center " style={{ height: "100vh" }}>
          <motion.h1
            className="text-2xl font-semibold mb-5"
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

      <section className="my-20 mx-5 md:mx-0" id="experience">
        <h1 className="text-center text-2xl font-semibold mb-5">Experiences</h1>
        <div className="lg:w-3/5 mx-auto flex flex-col gap-y-14">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Programming Tutor</h2>
              <h3 className="text-lg">
                International Islamic University Malaysia
              </h3>
              <p className="lg:w-2/3 mt-5">
                Responsible for preparing modules and training for Element of
                Programming students for first year Computer Science students
              </p>
            </div>
            <h4 className="hidden md:block">November 2024 - Current</h4>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Freelancer</h2>
              <h3 className="text-lg">QuantumLeap Technologies</h3>
              <p className="lg:w-2/3 mt-5">
                Building web application for various clients to meet their
                business requirements
              </p>
            </div>
            <h4 className="hidden md:block">July 2024 - Current</h4>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Computer Science Intern</h2>
              <h3 className="text-lg">Startlah Innovation PLT</h3>
              <p className="lg:w-2/3 mt-5">
                Building web application to manage company customer relationship
              </p>
            </div>
            <h4 className="hidden md:block">July 2024 - Current</h4>
          </div>
        </div>
      </section>

      <section id="past-projects" className="my-20">
        <motion.h1
          className="text-center text-2xl font-semibold mb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Past Projects
        </motion.h1>

        <div className="flex flex-col md:grid grid-cols-3 gap-10 w-2/3 mx-auto justify-items-center mt-10">
          <Card
            projectTitle="IGIIDeation Innovation Competition Administration & Judging System"
            description="Administration and judging system for IGIIDeation Innovation Competition that was held on 8 February 2025."
            projectLink="https://judgevaganza.silverseedslab.com/"
            imageLink="/project1.png"
          />
          <Card
            projectTitle="Portfolio Website for Bilal"
            description="Portfolio website to showcase self-introduction and skills. My first freelancing client."
            projectLink="https://bilalkict.vercel.app/"
            imageLink="/project2.png"
          />
          <Card
            projectTitle="MotionU Official Website"
            description="The official website for MotionU entrepreneurship club. Integrate with Contentful CMS for blog"
            projectLink="https://motionu.club/"
            imageLink="/project3.png"
          />{" "}
          <Card
            projectTitle="Portfolio Website for Tuan Yusry"
            description="Portfolio website for Tuan Yusry. the Co-Founder of Startlah Innovation PLT"
            projectLink="https://yusryyusopp.com/"
            imageLink="/project4.png"
          />
          <Card
            projectTitle="Official Research Management Centre IIUM Website"
            description="Official Research Management Centre (RMC) IIUM website built on Wordpress"
            projectLink="https://yusryyusopp.com/"
            imageLink="/project5.png"
          />
        </div>
      </section>

      <section className="my-10" id="cv">
        <h1 className="text-center text-2xl font-semibold mb-10">
          My Curriculum Vitae
        </h1>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/export?format=pdf"
            download
            className="underline active:text-blue-700"
          >
            Download Here
          </a>
        </div>
        <iframe
          src="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/preview"
          className="w-full md:w-2/3 mx-auto h-screen"
        ></iframe>
      </section>

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
