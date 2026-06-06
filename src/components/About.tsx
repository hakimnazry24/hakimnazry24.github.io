import { motion } from "framer-motion";

const ABOUT_IMAGES = [
  { src: "/image2.jpeg", alt: "" },
  { src: "/image1.JPG", alt: "" },
  { src: "/image3.jpeg", alt: "" },
];

export default function About() {
  return (
    <div className="flex justify-center items-center my-10 pt-20" id="about">
      <div className="mx-16 text-center" style={{ height: "100vh" }}>
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
          className="md:lg:mx-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hey there! I&apos;m Muhammad Hakim, hailing from the beautiful city of
          Melaka. Currently, you can find me diving into the world of computer
          science at the International Islamic University Malaysia. When I&apos;m
          not buried in code, you&apos;ll catch me gaming, binge-watching anime, or
          smashing shuttlecocks on the badminton court. Not only that, I am also
          passsionate in music. I can play guitar, drum, percussion and even the
          Malaysian tradisional music instrument, the Gamelan. Reach me out and
          let&apos;s connect :D
        </motion.p>
        <div className="flex flex-col md:lg:flex-row justify-center gap-20 mt-10">
          {ABOUT_IMAGES.map(({ src, alt }) => (
            <motion.img
              key={src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              src={src}
              alt={alt}
              style={{ width: "15rem" }}
              className="rounded-2xl self-start mb-5 md:lg:mb-0 hidden md:lg:block"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
