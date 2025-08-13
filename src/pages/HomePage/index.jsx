import { FaPlus, FaCheckCircle, FaBars } from 'react-icons/fa';



const App = () => {
  return (
    <div className={` bg-teal-50 text-gray-800`}>
      {/* Header */}
      <header className="w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <FaPlus className="w-8 h-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-900">FAUGET CENTER</span>
          </a>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-teal-600 transition-colors duration-200">Home</a>
            <a href="#" className="hover:text-teal-600 transition-colors duration-200">Services</a>
            <a href="#" className="hover:text-teal-600 transition-colors duration-200">About Us</a>
            <a href="#" className="hover:text-teal-600 transition-colors duration-200">Contact</a>
            <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200">Patient Portal</a>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-teal-600">
            <FaBars className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <div
        className="text-white flex items-center justify-center text-center py-20 px-4 md:py-32 lg:py-48"
        style={{
          backgroundImage: `url('https://placehold.co/1920x800/d1e7e5/030202?text=Welcome+to+Fauget+Center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Good Health is in your hands</h1>
          <p className="text-xl md:text-2xl font-light mb-8">Providing compassionate and expert care for all your health needs.</p>
          <a href="#" className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200">Book an Appointment</a>
        </div>
      </div>

      {/* Main content container */}
      <main className="container mx-auto px-6 py-12">
        {/* Three Icon Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-20">
          {/* Patient Portal Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
            <img src="PATIENT.png" alt="Patient and Doctor Icon" className="w-24 h-24 mb-4" />
            <h3 className="text-2xl font-semibold text-teal-800">Patient Portal</h3>
            <p className="text-gray-600 mt-2">Manage your appointments, records, and more.</p>
          </div>

          {/* AI Assistant Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
            <img src="AI.png" alt="AI Assistant Icon" className="w-24 h-24 mb-4" />
            <h3 className="text-2xl font-semibold text-teal-800">AI Assistant</h3>
            <p className="text-gray-600 mt-2">Get quick answers to your health questions.</p>
          </div>

          {/* Our Hospital Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
            <img src="HOSPITAL.png" alt="Hospital Icon" className="w-24 h-24 mb-4" />
            <h3 className="text-2xl font-semibold text-teal-800">About Us</h3>
            <p className="text-gray-600 mt-2">Learn about our mission and team of experts.</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-16 bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">OUR SERVICES</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>Mental Healthcare: Our dedicated team provides compassionate support for mental well-being.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>Child Health Services: Specialized care for your child's growth and development.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>Diagnostic Services: State-of-the-art facilities for accurate and timely diagnoses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>Emergency Care: 24/7 care for urgent medical needs.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
              <img src="https://placehold.co/800x600/d1e7e5/030202?text=Hospital+Staff" alt="Hospital staff in a clean environment" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Fauget Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
