import { motion } from "framer-motion";

export default function CV() {
  return (
    <section className="brutal-section bg-cream" id="cv">
      <div className="brutal-container px-6">
        <motion.h2
          className="brutal-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          My Curriculum Vitae
          <motion.span
            className="block w-16 h-1 bg-terracotta mx-auto mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <a
            href="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/export?format=pdf"
            download
            className="brutal-btn-secondary text-lg inline-flex items-center gap-3"
          >
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              ↓
            </motion.span>{" "}
            Download PDF
          </a>
        </motion.div>

        <motion.div
          className="brutal-card overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.005 }}
        >
          <iframe
            src="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/preview"
            className="w-full h-[80vh] md:h-[90vh]"
            title="Curriculum Vitae"
          />
        </motion.div>
      </div>
    </section>
  );
}
