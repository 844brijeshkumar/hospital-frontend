import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleTheme = () => {
    setTheme(theme === "theme-dark" ? "" : "theme-dark");
  };
  // Apply theme globally
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <navbar className="w-full bg-[var(--color-bg)] text-black shadow-md z-50 relative">
      <nav className="w-full mx-auto px-6 py-4 flex items-center justify-between bg-[var(--color-bg)]">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-3">
            <div>
              {theme ? (
                <img
                  src="home-logo.png"
                  className="h-25 w-23"
                  alt="MedLock Logo"
                />
              ) : (
                <img src="logo.png" className="h-25 w-23" alt="MedLock Logo" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text)] ">
                MedLock
              </h1>
              <p className="text-xs text-[var(--color-text)]">
                Centralized Medical Reports
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-[var(--color-text)] font-medium">
          {nav?.map((page, index) => {
            return (
              <Link
                to={page.link}
                key={index}
                className="hover:text-[var(--color-hover)] transition-colors duration-200"
              >
                {page.name}
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            className="p-1 rounded cursor-pointer bg-[var(--color-primary)] text-white flex items-center justify-center"
          >
            {theme === "theme-dark" ? (
              <FaSun className="w-5 h-5" />
            ) : (
              <FaMoon className="w-5 h-5" />
            )}
          </button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-bg)] shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            {nav.map((page, index) => (
              <Link
                to={page.link}
                key={index}
                onClick={toggleMenu}
                className="hover:text-[var(--color-primary)] transition-colors duration-200 text-lg"
              >
                {page.name}
              </Link>
            ))}

            {/* Theme Selector in Mobile */}

            <button
              onClick={toggleTheme}
              className="p-2 rounded cursor-pointer bg-[var(--color-primary)] text-white flex items-center justify-center"
            >
              {theme === "theme-dark" ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </navbar>
  );
};

export default Navbar;
