
const Header = () => {
    return (
        <div>
            <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-center space-x-8 md:space-x-16">
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Services</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Products</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Resources</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Certifications</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">About</a>
        </div>
      </nav>
    </header>
        </div>
    );
};

export default Header;