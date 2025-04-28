import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Card = ({ cardsData }) => {
  // Smooth fade animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="w-full lg:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardsData.map((card, index) => (
        <motion.div 
          key={index}
          className="py-14 px-3 lg:px-12 bg-[#161616] rounded-3xl shadow-md border border-[#44474E] hover:shadow-lg transition-shadow duration-300 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={fadeIn}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Icon */}
          <div className="text-3xl mb-10">
            <p className='bg-[#A020F0] inline-block rounded-full p-3 text-white'>{card.icon}</p>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl text-white mb-2">{card.title}</h3>
          
          {/* Description */}
          <div className="text-[#FFFFFF] mb-6 whitespace-pre-line leading-[30px]">
            {card.description}
          </div>
          
          {/* Learn More button */}
          <button className="text-[#A020F0] rounded-md transition-colors duration-300 flex items-center gap-2">
            Learn More <FaArrowRight className='text-xs'/>
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;