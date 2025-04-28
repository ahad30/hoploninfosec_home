import React from 'react';
import { motion } from 'framer-motion';

const Banner = ({ title, description }) => {
  // Smooth fade animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      className="bg-gradient-to-bl from-[#a020f0] from-[-28%] to-[#131313] to-[73%] text-white py-16 rounded-3xl max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      variants={fadeIn}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className=" text-center">
        {/* Title */}
        <motion.h1 
          className="text-3xl sm:text-5xl font-normal mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg text-[#E0E0E0] sm:text-base mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {description}
        </motion.p>
        
        {/* Static Get Started Button */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            className="inline-block px-8 py-3 text-sm text-white bg-[#ED1C24] rounded-full hover:bg-[#c5161d] transition-colors duration-300 hover:shadow-lg"
            href="#"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;