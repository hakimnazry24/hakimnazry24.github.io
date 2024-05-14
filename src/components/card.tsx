import { motion } from "framer-motion";

type CardProp = {
  link: string;
  title: string;
  desc: string;
};

export default function Card({ link, title, desc }: CardProp) {
  return (
    <>
      <motion.div className="max-w-sm rounded overflow-hidden shadow-lg" whileHover={{scale: 1.1}} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.2}} viewport={{once: true}}>
        <img className="w-full" src={link} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </motion.div>
    </>
  );
}
