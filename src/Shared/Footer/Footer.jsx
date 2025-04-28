import React from "react";
import image from "../../assets/logo.png";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#350057] text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row justify-between gap-5 mb-12 lg:gap-0 lg:px-16">
           <div className="md:w-[30%] mx-auto">
           <div className="flex justify-end">
                <img src={image} alt=""  className="w-[149px] h-[149px]"/>
            </div>
           </div>
            <div className="flex space-x-6">
              <a href="#" aria-label="LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            <div className="text-start mb-12 lg:col-span-2">
              <h2 className="text-3xl  mb-4">
                Start Using Hoplon Now.
              </h2>
              <p className="max-w-2xl mx-auto mb-6 text-[#E0E0E0]">
                Total protection has never been more effortless. Take advantage
                of our services to explore the most popular solutions for your
                business:
              </p>
              <ul className="space-y-2 list-disc lg:px-7 mb-8 text-[#E0E0E0]">
                <li>Protect against malware with Endpoint Security.</li>
                <li>
                Defend against threats on your mobile devices with our Mobile Security.
                </li>
                <li>Protect your Emails with our Email Security.</li>
              </ul>
              <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
            <button className="bg-[#FF0000] hover:bg-blue-700 text-white 
              py-2 px-5 rounded-xl lg:text-xl">
                Schedule a Consultation
              </button>
        </motion.div>
            
            </div>
            <div>
              <h3 className="font-bold text-3xl   mb-4">Products</h3>
              <ul className="space-y-5 text-[16px]">
                <li>Al-Debue Automated Red Tenting</li>
                <li>Cloud Storage and Disaster</li>
      
                <li>Email Security and not globally</li>
                <li>Mobile Security</li>
                <li>Endpoint Security</li>
                <li>Deep and Dash Web Monitoring</li>
                <li>XDR-Extended Detection & Response</li>
                <li>Training Software</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-3xl   mb-4">Services</h3>
              <ul className="space-y-5 text-[16px]">
                <li>Protection Testing</li>
                <li>Cybersecurity Compliance</li>
                <li>Offensive Security</li>
                <li>Cybersecurity Consultation and Training</li>
                <li>Incident Response and Digital Forensic Investigation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-3xl mb-4">About</h3>
              <ul className="space-y-5 text-[16px]">
                <li>About Hoplon Helms</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Events</li>
                <li>Our Team</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <ul className="flex text-[10px] text-[#A020F0] lg:text-base items-center space-x-5">
                <li>Contact Us</li>
                <li>Contact Policy</li>
                <li>Primary Policy</li>
              </ul>
            </div>

            <div className="mt-5 lg:mt-0">
              <p className="text-center text-[10px] lg:text-base">
              Copyright © Hoplon InfoSec, LLC and its group of companies.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
