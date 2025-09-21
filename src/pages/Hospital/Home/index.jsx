import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
// import Footer from "../../../components/Footer";

// The main App component that renders the complete page,
// including the responsive header and the portal cards.
const App = () => {
  // useState hook to manage the state of the mobile menu (open or closed).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A function to toggle the state of the menu.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`font-sans antialiased text-gray-800 bg-teal-50 min-h-screen`}
    >
      {/* Header component with a drop shadow */}
      <Navbar />

      {/* Mobile navigation menu - conditionally rendered */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col items-start space-y-4">
          {/* Close button for the mobile menu */}
          <button
            onClick={toggleMenu}
            className="self-end text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile navigation links */}
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-teal-600 transition-colors duration-200 w-full text-left"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-teal-600 transition-colors duration-200 w-full text-left"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-teal-600 transition-colors duration-200 w-full text-left"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-teal-600 transition-colors duration-200 w-full text-left"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Main content container */}
      <main className="container  mx-auto px-6 py-12 pt-50">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-900 mb-12">
          Welcome Back Hospital Hands
        </h1>
        {/* Two Card Section, centered and responsive */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Doctor Card */}
          {/* Using a placeholder image for the card icon */}
          <Link to="/login-doctor" className="w-full max-w-sm">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 h-full">
              <img
                src="PATIENT.png"
                alt="Doctor Icon"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-semibold text-teal-800">
                Login as a Doctor!
              </h3>
              <p className="text-gray-600 mt-2">
                Access patient records and manage.
              </p>
            </div>
          </Link>

          {/* Hospital Card */}
          {/* Using a placeholder image for the card icon */}
          <Link to="/login-hospital" className="w-full max-w-sm">
            {" "}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 h-full">
              <img
                src="HOSPITAL.png"
                alt="Hospital Icon"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-semibold text-teal-800">
                Login as a Hospital Head!
              </h3>
              <p className="text-gray-600 mt-2">
                Learn about our mission and team of experts.
              </p>
            </div>
          </Link>
        </section>
      </main>

      {/* Footer - Reusing the footer from the original App component */}
      {/* <Footer /> */}

      <Footer />
    </div>
  );
};

export default App;
