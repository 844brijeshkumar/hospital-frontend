
import React from "react";

// This new page component displays only the Doctor and Hospital portal cards.
// It reuses the header and footer from your original App component.
// I have removed the import for react-icons/fa and react-router-dom/Link to make the code self-contained and resolve the compilation error.
const NewPage = () => {
  return (
    <div className={`bg-teal-50 text-gray-800`}>
      {/* Header - Reusing the header from the original App component */}
      <header className="w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="logo.png"
              className="w-30 h-33 text-teal-700"
              alt="MedLock Logo"
            />
            <span className="text-2xl font-bold text-teal-900">MedLock</span>
          </a>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a
              href="#"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <button className="md:hidden text-teal-600">
            {/* Using an inline SVG to replace FaBars for a self-contained component */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main content container */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-900 mb-12">
          Welcome Back Hospital Hands
        </h1>
        {/* Two Card Section, centered and responsive */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Doctor Card */}
          {/* A new card for the Doctor Portal */}
          {/* Using an anchor tag instead of Link to avoid the react-router-dom dependency */}
          <a href="#" className="w-full max-w-sm">
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
          </a>

          {/* Hospital Card */}
          {/* This card is taken from your original page */}
          {/* Using an anchor tag instead of Link to avoid the react-router-dom dependency */}
          <a href="#" className="w-full max-w-sm">
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
          </a>
        </section>
      </main>

      {/* Footer - Reusing the footer from the original App component */}
      <footer className="bg-teal-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 MedLock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewPage;
