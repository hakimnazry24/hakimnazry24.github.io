import { motion } from "framer-motion";

const ABOUT_IMAGES = [
  { src: "/image2.jpeg", alt: "Hakim image 2" },
  { src: "/image1.JPG", alt: "Hakim image 1" },
  { src: "/image3.jpeg", alt: "Hakim image 3" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section className="brutal-section bg-cream" id="about">
      <div className="brutal-container px-6">
        <motion.h2
          className="brutal-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          About
          <motion.span
            className="block w-16 h-1 bg-terracotta mx-auto mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="brutal-card p-8 md:p-10 mb-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-lg md:text-xl leading-relaxed font-body text-navy">
              Hey there! I&apos;m Muhammad Hakim, hailing from the beautiful
              city of Melaka. Currently, you can find me diving into the world
              of computer science at the International Islamic University
              Malaysia. When I&apos;m not buried in code, you&apos;ll catch me
              gaming, binge-watching anime, or smashing shuttlecocks on the
              badminton court. Not only that, I am also passionate in music. I
              can play guitar, drum, percussion and even the Malaysian
              traditional music instrument, the Gamelan. Reach me out and
              let&apos;s connect :D
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            {ABOUT_IMAGES.map(({ src, alt }, index) => (
              <motion.div
                key={src}
                className="relative"
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                style={{
                  transform: index === 1 ? "translateY(20px)" : "translateY(0)",
                }}
              >
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-navy rounded-[4px]" />
                <motion.img
                  src={src}
                  alt={alt}
                  className="relative w-full md:w-56 h-56 object-cover border-4 border-navy rounded-[4px]"
                  whileHover={{ scale: 1.05, rotate: index === 1 ? 2 : -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
