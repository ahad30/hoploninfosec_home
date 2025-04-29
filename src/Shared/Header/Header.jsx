import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { FaEnvelope, FaPhoneAlt, FaSearch } from "react-icons/fa";
import image from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="bg-[#350057] shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="hidden lg:flex space-x-3 justify-end -mb-5 px-6 mt-3">
        <div className="flex items-center space-x-4 text-white">
          <FaEnvelope className="text-[15px]" />
          <FaPhoneAlt className="text-[15px]" />
          <span className="text-[14px]">Contact Us</span>
        </div>

        {/* Schedule Consultation Button */}
        <button className="bg-black text-white px-4 py-0.5 rounded-full text-[14px] hover:bg-gray-800">
          Schedule a Consultation
        </button>
      </div>
      
      <nav className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="">
          <img
            src={image}
            alt="Logo"
            className="w-[65px] h-[65px] lg:w-[100px] lg:h-[100px] lg:-mt-5 ml-3"
          />
        </div>


          <div className="hidden md:flex space-x-10 me-[100px]">
            <NavLink
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium text-[15px]" : "text-white hover:text-blue-400 font-medium text-[15px]"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium text-[15px]" : "text-white hover:text-blue-400 font-medium text-[15px]"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium text-[15px]" : "text-white hover:text-blue-400 font-medium text-[15px]"
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium text-[15px]" : "text-white hover:text-blue-400 font-medium text-[15px]"
              }
            >
              Resources
            </NavLink>
            <NavLink 
              to="/certifications" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium text-[15px]" : "text-white hover:text-blue-400 font-medium text-[15px]"
              }
            >
              Certifications
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-blue-400 font-medium text-[15px]" : "text-white hover:text-blue-400 font-medium text-[15px]"
              }
            >
              About
            </NavLink>
          </div>

          {/* Right: Contact + Button + Search */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-white text-xl cursor-pointer" />
          <div className="lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="text-white w-9 h-9 cursor-pointer"
              onClick={() => setVisible(true)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </div>
        </div>
      </nav>

           {/* Mobile Sidebar */}
           <Sidebar 
        visible={visible} 
        onHide={() => setVisible(false)}
        position="left"
        style={{ width: '100%', backgroundColor: '#FFFFFF' }}
        className=""
      >
        {/* Fixed Logo at Top */}
        <div className="sticky top-0 z-10  pb-2 px-4 mb-5 bg-white">
          <img
            src={image}
            alt="Logo"
            className="w-[70px] h-[70px] mx-auto"
          />
        </div>
        
        {/* Scrollable Content */}
        <div className="h-full">
          {/* Navigation Links */}
          <nav className="pt-4">
            <ul className="">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 block py-3 px-6 rounded-md transition" : "text-black  block py-3 px-6 rounded-md transition"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 block py-3 px-6 rounded-md transition" : "text-black  block py-3 px-6 rounded-md transition"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 block py-3 px-6 rounded-md transition" : "text-black  block py-3 px-6 rounded-md transition"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/resources" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 block py-3 px-6 rounded-md transition" : "text-black  block py-3 px-6 rounded-md transition"
                  }
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/certifications" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 block py-3 px-6 rounded-md transition" : "text-black  block py-3 px-6 rounded-md transition"
                  }
                >
                  Certifications
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 block py-3 px-6 rounded-md transition" : "text-black  block py-3 px-6 rounded-md transition"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Sidebar>
    </header>
  );
};

export default Header;