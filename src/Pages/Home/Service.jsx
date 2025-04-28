import React from 'react'
import { 
    FiShield, 
    FiGlobe, 
    FiActivity, 
    FiSearch, 
    FiCheckCircle, 
    FiAlertTriangle, 
    FiBarChart2,
    FiBook,
    FiUser
  } from 'react-icons/fi';
import Card from '../../components/Card/Card';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Service = () => {
    const services = [
        {
          icon: <FiShield />,
          title: 'Offensive Security',
          description: 'How effective is your organization\'s\ncybersecurity? Identify and exploit\nvulnerabilities of your own organization\'s\ncybersecurity before attackers.'
        },
        {
          icon: <FiGlobe />,
          title: 'Deep web and Dark Web',
          description: 'Unlike the visible surface web or open web, regular search engines can’t find deep web or invisible web or hidden web even though more than 90% of all websites are deep web.'
        },
        {
          icon: <FiActivity />,
          title: 'Penetration Testing',
          description: 'Can cybercriminals exploit your system? Run Pentesting or Ethical Hacking to mock real-world cyberattack to find weaknesses of your system.'
        },
       
        {
          icon: <FiSearch />,
          title: 'Attack Surface Management',
          description: 'ASM involves the ongoing identification, monitoring, and control of both internal and external internet-connected assets to detect possible attack vectors and vulnerabilities.'
        },
        {
          icon: <FiCheckCircle />,
          title: 'Cyber Security Compliances',
          description: 'Can cybercriminals exploit your system? Run Pentesting or Ethical Hacking to mock real-world cyberattack to find weaknesses of your system.'
        },
        {
          icon: <FiAlertTriangle />,
          title: 'Incident Response',
          description: 'Cybersecurity incident response involves the procedures and tools that an organization uses to identify and address cyberthreats, security breaches, or cyberattacks.'
        },
        {
          icon: <FiBarChart2 />,
          title: 'Vulnerability Management',
          description: 'Vulnerability management is an ongoing, proactive, and often automated procedure that safeguards your computer systems, networks, and enterprise applications against cyberattacks and data breaches. Want to know how you can stay safe?'
        },
        {
          icon: <FiBook />,
          title: 'Cyber Security Consultation and Training',
          description: 'Vulnerability management is an ongoing, proactive, and often automated procedure that safeguards your computer systems, networks, and enterprise applications against cyberattacks and data breaches. Want to know how you can stay safe?'
        },
        {
            icon: <FiUser />,
            title: 'Digital Forensic Investigation',
            description: 'Digital forensics is a specialized field within forensic science dedicated to the identification, retrieval, examination, interpretation, and documentation of electronically stored information. The presence of electronic evidence is prevalent in nearly all criminal cases, underscoring the vital role that digital forensics plays in aiding law enforcement inquiries.'
          },
      ];
  return (
    <div className="px-3 py-8">
    <SectionTitle title="Our Services" subTitle="High Tech Cybersecurity for the Smart Generation" />
    <Card cardsData={services} />
  </div>
  )
}

export default Service