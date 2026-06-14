import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const CONTACT_ITEMS = [
  {
    icon: TfiEmail,
    label: "hakimnazry@gmail.com",
    href: "mailto:hakimnazry@gmail.com",
  },
  {
    icon: FaGithub,
    label: "github.com/hakimnazry24",
    href: "https://github.com/hakimnazry24",
  },
  {
    icon: BsTwitterX,
    label: "@hakimnazry_",
    href: "https://twitter.com/hakimnazry_",
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/hakim-nazri/",
    href: "https://linkedin.com/in/hakim-nazri/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Contact() {
  return (
    <section className="brutal-section bg-cream" id="contact">
      <div className="brutal-container px-6">
        <motion.h2
          className="brutal-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Contact
          <motion.span
            className="block w-16 h-1 bg-terracotta mx-auto mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {CONTACT_ITEMS.map(({ icon: Icon, label, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="brutal-card p-6 flex flex-col items-center gap-4 text-center h-full transition-all duration-200 ease-out hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal">
                <motion.div
                  className="bg-mustard border-4 border-navy rounded-[4px] p-4"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="text-4xl text-navy" />
                </motion.div>
                <p className="font-display font-semibold text-navy text-sm break-all">
                  {label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
