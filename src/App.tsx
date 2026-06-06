import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
          content="computerscience, IIUM CS program, International Islamic University Malaysia CS program, IIUM Kulliyyah of ICT, Islamic values in computer science, IIUM final year project guidelines, Computer science IIUM curriculum, IIUM CS graduation requirements, IIUM project supervisor selection, Muslim-friendly technology solutions, Islamic fintech projects, Final year project ideas computer science, Web development FYP topics, Machine learning final year projects, Mobile app development project, FYP timeline planning, Project defense preparation, CS project documentation template, Research methodology for CS projects, Final year project proposal writing, CS project literature review guidelines, Full-stack web development, MERN stack tutorial, React.js for beginners, Node.js API development, JavaScript frameworks comparison, Database design best practices, Responsive web design techniques, UI/UX design principles, Progressive web app development, Web security implementation, Web development freelancing Malaysia, Student freelancer portfolio, Setting freelance web development rates, Finding first web development client, Freelance web developer contract template, Remote work tools for developers, Time management for student freelancers, CS student side hustle ideas, Balancing studies and freelance work, Freelance web developer taxes Malaysia, Agile methodology for student projects, Git version control for beginners, GitHub for project collaboration, Kanban boards for project tracking, Sprint planning for student projects, Project documentation best practices, Testing methodologies for web projects, DevOps for small projects, CI/CD pipeline implementation, Project stakeholder management, Client communication best practices, Web project requirements gathering, Project scope definition template, Client feedback implementation strategies, Web development project milestones, Professional invoicing for freelancers, Handling difficult client requests, Web project proposal template, Malaysian"
        />
      </Helmet>

      <Navbar
        displayDropdownMenu={displayDropdownMenu}
        setDisplayDropdownMenu={setDisplayDropdownMenu}
      />
      <Hero />
      <About />
      {/* <Experience /> */}
      {/* <Projects /> */}
      <CV />
      <Contact />
      <Footer />
    </>
  );
}
