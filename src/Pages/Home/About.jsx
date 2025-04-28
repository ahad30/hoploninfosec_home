import React from 'react';
import {FaUsers  } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";

const About = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-8 mb-32">
      <h1 className="lg:text-6xl font-medium text-white mb-6">About Us</h1>
      <div className="border-t border-4 border-[#ff1414] my-8 w-[16%]"></div>
      
      <p className="text-lg text-white mb-8">
      At Hoplon Infosec, our extensive over decade of experience enables us to effectively combat the present-day cybersecurity challenges. With our innovative deep web & dark web monitoring, cyber threat intelligence, attack surface management, risk management, vulnerability management, incident response, penetration testing, red teaming, brand intelligence, takedown & disruption, consulting services, and cybersecurity training; we provide unmatched guidance to organizations across industries, regions, and the globe, regardless of their size. As a dependable partner and seasoned authority, we cultivate robust partnerships with our clients, guaranteeing enduring triumph through our collaborative efforts.
      </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
      <div className="flex items-center gap-3">
        <TbWorld className="text-6xl text-[#ff1414] mr-4" />
        <h2 className="text-[30px]  text-white">World Class Professional Cybersecurity team</h2>
      </div>
      
      <div className="flex items-center  gap-3">
        <GiTrophyCup className="text-6xl text-[#ff1414] mr-3" />
        <h3 className="text-[30px]  text-white">We succeed when we make our clients successful.</h3>
      </div>
      
      <div className="flex items-start  gap-3">
        <BsGraphUpArrow className="text-6xl text-[#ff1414] mr-3 mt-1" />
        <h3 className="text-[30px] text-white">
        Continuous Growth with Operational Excellence
        </h3>
      </div>
      
      <div className="flex items-start gap-3">
        <FaUsers className="text-6xl text-[#ff1414] mr-3 mt-1" />
        <h3 className="text-[30px] text-white">
        Our team is committed with Honesty and Teamwork
        </h3>
      </div>
        </div>
    </div>
  );
};

export default About;