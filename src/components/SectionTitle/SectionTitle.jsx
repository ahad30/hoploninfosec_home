import { motion } from 'framer-motion';
import { BsSignIntersectionFill } from "react-icons/bs";

const SectionTitle = ({defaultKey, title, subTitle}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="my-8 flex flex-col justify-center items-center">
        {/* Title with staggered animation */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className={`text-2xl text-white bg-[#A020F0] rounded-full px-6 py-2 
          ${defaultKey === "Partner" ? "bg-[#FF0000]" : ""} text-center`}>
            {title}
          </h1>
        </motion.div>

        {/* Subtitle with staggered animation */}
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h5 className="lg:text-[43px] text-white mt-5">
            {subTitle}
          </h5>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionTitle;