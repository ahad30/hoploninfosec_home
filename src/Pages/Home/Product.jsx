import React from 'react'
import { 
    FiShield, 
    FiSmartphone, 
    FiHardDrive, 
    FiBook, 
    FiCpu, 
    FiGlobe,
    
  } from 'react-icons/fi';
import Card from '../../components/Card/Card';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaEnvelope } from 'react-icons/fa';
import { SiAdguard } from "react-icons/si";

const Product = () => {
    const products = [
        {
          icon: <FaEnvelope />,
          title: 'Email Security and Anti-phishing',
          description: `Is your email secure? By default, it's NOT secure! Protect your personal or business email(s) from social engineering now.`
        },
        {
          icon: <FiSmartphone />,
          title: 'Mobile Security',
          description: 'Do you know that mobile devices are BIG targets for attackers? Mobile cybersecurity encompasses the tactics, framework, and programs implemented to safeguard smartphone devices.'
        },
        {
          icon: <SiAdguard/>,
          title: 'Endpoint Security',
          description: 'How secure is your end-user devices? End-point security involves the protection of different endpoints within a network, typically including end-user devices like mobile devices, laptops, and desktops.'
        },
        {
          icon: <FiBook />,
          title: 'Training Software',
          description: 'Streamline your employee development with our powerful training software. Boost productivity, track progress, and deliver engaging content. Try our user-friendly platform today and transform your training programs for better results.'
        },
        {
          icon: <FiCpu />,
          title: 'AI-Driven Automated Red Teaming',
          description: 'AI-Driven Single Platform for Automated Pen Testing, Red Teaming & NextGen Attack Surface Management'
        },
        {
          icon: <FiGlobe />,
          title: 'Deep web and Dark Web Monitoring',
          description: 'The Dark Web comprises of various marketplaces that deal in emerging cyber threats. With the use of machine learning and natural language processing, Hoplon can swiftly establish links between Dark Web sites and other threat sources.'
        }
      ];
  return (
    <div className="px-3 py-8">
    <SectionTitle title="Our Products" subTitle="Our Products Can Assist You in Addressing Your Cybersecurity Challenges." />
    <Card cardsData={products} />
  </div>
  )
}

export default Product