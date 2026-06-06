import { motion } from "framer-motion";
import Card from "./Card";

interface Project {
  projectTitle: string;
  description: string;
  projectLink: string;
  imageLink: string;
}

const PROJECTS: Project[] = [
  {
    projectTitle:
      "IGIIDeation Innovation Competition Administration & Judging System",
    description:
      "Administration and judging system for IGIIDeation Innovation Competition that was held on 8 February 2025.",
    projectLink: "https://judgevaganza.silverseedslab.com/",
    imageLink: "/project1.png",
  },
  {
    projectTitle: "Portfolio Website for Bilal",
    description:
      "Portfolio website to showcase self-introduction and skills. My first freelancing client.",
    projectLink: "https://bilalkict.vercel.app/",
    imageLink: "/project2.png",
  },
  {
    projectTitle: "MotionU Official Website",
    description:
      "The official website for MotionU entrepreneurship club. Integrate with Contentful CMS for blog",
    projectLink: "https://motionu.club/",
    imageLink: "/project3.png",
  },
  {
    projectTitle: "Portfolio Website for Tuan Yusry",
    description:
      "Portfolio website for Tuan Yusry. the Co-Founder of Startlah Innovation PLT",
    projectLink: "https://yusryyusopp.com/",
    imageLink: "/project4.png",
  },
  {
    projectTitle: "Official Research Management Centre IIUM Website",
    description:
      "Official Research Management Centre (RMC) IIUM website built on Wordpress",
    projectLink: "https://yusryyusopp.com/",
    imageLink: "/project5.png",
  },
];

export default function Projects() {
  return (
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
        {PROJECTS.map((project) => (
          <Card key={project.projectTitle} {...project} />
        ))}
      </div>
    </section>
  );
}
