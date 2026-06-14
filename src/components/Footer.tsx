import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-navy border-t-4 border-navy py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="brutal-container flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          className="font-display font-bold text-white text-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Hakim Nazri
        </motion.p>
        <motion.p
          className="font-body text-cream"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Made with{" "}
          <motion.span
            className="text-terracotta font-bold inline-block"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.span>{" "}
          by Hakim &copy; {new Date().getFullYear()}
        </motion.p>
        <motion.a
          href="#"
          className="font-display font-semibold text-mustard hover:text-white transition-colors duration-200"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ x: -3 }}
        >
          Back to top ↑
        </motion.a>
      </div>
    </motion.footer>
  );
}
