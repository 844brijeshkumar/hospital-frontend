import { FaCheckCircle, FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import MedicalFactMarquee from "../../components/Fact";
import Navbar from "../../components/Navbar";
import CompanyCarousel from "../../components/CompanyCarousel";
import { useEffect } from "react";
import { getUsers } from "../../api/user";

const Home = () => {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-[var(--color-text)]">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative text-white flex flex-col items-center justify-center text-center py-20 px-4 md:py-32 lg:py-48"
        style={{
          backgroundImage: `url('https://placehold.co')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b4f4a] via-[#1a756f] to-[#2a9b94] opacity-90"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <MedicalFactMarquee />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 mt-12 px-2">
            Good Health is in your hands
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-12 px-2 max-w-2xl mx-auto">
            Providing accessible, comprehensive, and compassionate healthcare
            solutions for you and your family.
          </p>
          <div className="mt-8">
            <CompanyCarousel />
          </div>
        </div>
      </div>

      {/* Main content container */}
      <main className="container mx-auto px-4 sm:px-6 py-12">
        {/* Three Icon Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mt-8 sm:-mt-16 relative z-20 lg:gap-8">
          {/* Patient Portal Card */}
          <Link to="/login/patient" className="block">
            <div className="bg-[var(--color-card-bg)] p-6 sm:p-8 rounded-2xl shadow-[var(--color-shadow)] flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 h-full">
              <img
                src="PATIENT.png"
                alt="Patient and Doctor Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-card-text)]">
                Patient Portal
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-card-secondary-text)]">
                Manage your appointments, records, and more.
              </p>
            </div>
          </Link>

          {/* AI Assistant Card */}
          <Link to="/logina" className="block">
            <div className="bg-[var(--color-card-bg)] h-full p-6 sm:p-8 rounded-2xl shadow-[var(--color-shadow)] flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="AI.png"
                alt="AI Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-card-text)]">
                AI Assistant
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-card-secondary-text)]">
                Get instant medical advice and support.
              </p>
              <div className="mt-4 bg-[var(--color-secondary)] text-white p-3 rounded-full hover:bg-[var(--color-hover)] transition-colors duration-200">
                <FaMicrophone className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Our Hospital Card */}
          <Link to="/hospital" className="block">
            <div className="bg-[var(--color-card-bg)] h-full p-6 sm:p-8 rounded-2xl shadow-[var(--color-shadow)] flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="HOSPITAL.png"
                alt="Hospital Icon"
                className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--color-card-text)]">
                Hospital Portal
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-card-secondary-text)]">
                Learn about our mission and team of experts.
              </p>
            </div>
          </Link>
        </section>

        {/* Services Section */}
        <section className="mt-16 bg-[var(--color-card-bg)] p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-card-text)] mb-4">
                OUR SERVICES
              </h2>
              <ul className="space-y-4 text-sm sm:text-base text-[var(--color-card-secondary-text)]">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <span>
                    Mental Healthcare: Our dedicated team provides compassionate
                    support for mental well-being.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <span>
                    Child Health Services: Specialized care for your child's
                    growth and development.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <span>
                    Diagnostic Services: State-of-the-art facilities for
                    accurate and timely diagnoses.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <span>
                    Emergency Care: 24/7 care for urgent medical needs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://placehold.co/800x600/333333/ffffff?text=Hospital+Staff"
                alt="Hospital staff in a clean environment"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
