import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaPlus,
  FaCheckCircle,
  FaBars,
  FaMicrophone,
  FaStop,
  FaTimes, // <-- Imported the close icon
} from "react-icons/fa";
const nav = [
  {
    id: 1,
    link: "/",
    name: "Home",
  },
  {
    id: 2,
    link: "/services",
    name: "Services",
  },
  {
    id: 3,
    link: "/about",
    name: "About Us",
  },
  {
    id: 4,
    link: "/contact",
    name: "Contact",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <navbar className="w-full bg-white text-black shadow-md z-50 relative">
      <nav className="w-full mx-auto px-6 py-4 flex items-center justify-between bg-white">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-3">
            <div>
              <img src="logo.png" className="h-25 w-23" alt="MedLock Logo" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0b4f4a]">MedLock</h1>
              <p className="text-xs text-[#0b4f4a]">
                Centralized Medical Reports
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {nav?.map((page, index) => {
            return (
              <Link
                to={page.link}
                key={index}
                className="hover:text-teal-600 transition-colors duration-200"
              >
                {page.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-teal-600">
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            {nav?.map((page, index) => (
              <Link
                to={page.link}
                key={index}
                onClick={toggleMenu} // Close menu on link click
                className="hover:text-teal-600 transition-colors duration-200 text-lg"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </navbar>
  );
};

export default Navbar;
