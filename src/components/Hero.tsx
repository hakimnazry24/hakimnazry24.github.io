import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center brutal-section pt-24">
      <motion.div
        className="brutal-container w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image */}
        <motion.div
          className="flex justify-center md:justify-end order-1"
          variants={itemLeft}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-navy rounded-[4px]" />
            <motion.img
              src="/hakim.jpeg"
              alt="Hakim Nazri"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-navy rounded-[4px]"
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="order-2">
          <motion.p
            className="text-xl md:text-2xl font-display font-medium text-navy mb-2"
            variants={itemRight}
          >
            Hello 👋
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold text-navy leading-tight mb-4"
            variants={itemRight}
          >
            I'm <span className="text-terracotta">Muhammad Hakim</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-terracotta mb-6"
            variants={itemRight}
          />
          <motion.h2
            className="text-lg md:text-xl font-display text-navy mb-8 leading-relaxed"
            variants={itemRight}
          >
            Web Application Freelancer | Mobile Application Freelancer |
            Computer Science Student
          </motion.h2>
          <motion.div variants={itemUp}>
            <a
              href="https://www.linkedin.com/in/hakim-nazri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="brutal-btn text-lg flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's connect!
                <motion.span
                  className="text-xl inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
