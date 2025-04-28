import { FaEnvelope, FaPhone, FaSearch } from "react-icons/fa";
import image from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#350057] shadow-sm fixed top-0 left-0 w-full z-50">
    <div className="flex space-x-3 justify-end -mb-5 px-6 mt-3">
    <div className="flex items-center space-x-4 text-white">
            <FaEnvelope className="text-[14px]" />
            <FaPhone className="text-[14px]" />
            <span className="text-[14px]">Contact Us</span>
          </div>

          {/* Schedule Consultation Button */}
          <button className="bg-black text-white px-4  py-0.5 rounded-full text-[14px] hover:bg-gray-800 ">
            Schedule a Consultation
          </button>
    </div>
      <nav className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="">
          <img
            src={image}// <-- Replace with your correct logo path
            alt="Logo"
           className="w-[100px] h-[100px] -mt-5 ml-3"
          />
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-10 me-[100px]">
          <a href="#" className="text-white hover:text-blue-400 font-medium text-[15px]">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-400 font-medium text-[15px]">
            Services
          </a>
          <a href="#" className="text-white hover:text-blue-400 font-medium text-[15px]">
            Products
          </a>
          <a href="#" className="text-white hover:text-blue-400 font-medium text-[15px]">
            Resources
          </a>
          <a href="#" className="text-white hover:text-blue-400 font-medium text-[15px]">
            Certifications
          </a>
          <a href="#" className="text-white hover:text-blue-400 font-medium text-[15px]">
            About
          </a>
        </div>

        {/* Right: Contact + Button + Search */}
        <div className="flex items-center space-x-4">
          {/* Email and Phone Icons */}
         

          {/* Search Icon */}
          <FaSearch className="text-white text-xl cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
