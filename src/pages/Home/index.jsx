import React, { useState, useRef, useEffect } from "react";
import {
  FaPlus,
  FaCheckCircle,
  FaBars,
  FaMicrophone,
  FaStop,
  FaTimes, // <-- Imported the close icon
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FallBack from "../../components/fallBack";
import Footer from "../../components/footer";
import MedicalFactMarquee from "../../components/Fact";

// The VoiceAssistant component (remains unchanged)
const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState("Press the mic to start talking.");
  const ws = useRef(null);
  const audioContext = useRef(null);
  const sourceNode = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      const audioData = event.data;
      if (audioContext.current && sourceNode.current) {
        audioContext.current.decodeAudioData(audioData, (buffer) => {
          const newSource = audioContext.current.createBufferSource();
          newSource.buffer = buffer;
          newSource.connect(sourceNode.current);
          newSource.start(0);
        });
      }
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioContext.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      sourceNode.current = audioContext.current.destination;

      mediaRecorder.ondataavailable = (event) => {
        if (ws.current.readyState === WebSocket.OPEN) {
          ws.current.send(event.data);
        }
      };

      mediaRecorder.start(100);
      setIsListening(true);
      setStatus("Listening...");
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setStatus("Microphone access denied.");
    }
  };

  const stopListening = () => {
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.close();
    }
    setIsListening(false);
    setStatus("Recording stopped.");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
      <h3 className="text-2xl font-semibold text-teal-800 mb-4">
        AI Assistant
      </h3>
      <p className="text-gray-600 mb-4">{status}</p>
      <div className="flex justify-center space-x-4">
        {!isListening ? (
          <button
            onClick={startListening}
            className="bg-teal-600 text-white p-4 rounded-full hover:bg-teal-700 transition-colors duration-200"
          >
            <FaMicrophone className="w-6 h-6" />
          </button>
        ) : (
          <button
            onClick={stopListening}
            className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors duration-200"
          >
            <FaStop className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

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

// The main App component
const Home = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-teal-50 text-gray-800`}>
      <header className="w-full bg-white shadow-md z-50 relative">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
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
      </header>

      {/* Hero Section */}
      <div
        className="text-white flex items-center justify-center text-center py-20 px-4 md:py-32 lg:py-48"
        style={{
          backgroundImage: `url('https://placehold.co/1920x800/d1e7e5')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0b4f4a] via-[#1a756f] to-[#2a9b94] ">
          <br></br>
          <MedicalFactMarquee/>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Good Health is in your hands
          </h1>
          <br></br>
          <a
            href="#"
            className="rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 bg-white text-teal-600 font-bold py-3 px-8  "
          >
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Main content container */}
      <main className="container mx-auto px-6 py-12">
        {/* Three Icon Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-20">
          {/* Patient Portal Card */}
          <Link to="/patient-dashboard">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="PATIENT.png"
                alt="Patient and Doctor Icon"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-semibold text-teal-800">
                Patient Portal
              </h3>
              <p className="text-gray-600 mt-2">
                Manage your appointments, records, and more.
              </p>
            </div>
          </Link>

          {/* AI Assistant Card */}
          <Link to="/logina">
            <div className="bg-white h-full p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
              <img src="AI.png" alt="AI Icon" className="w-24 h-24 mb-4" />
              <h3 className="text-2xl font-semibold text-teal-800">
                AI Assistant
              </h3>
              <div className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors duration-200">
                <FaMicrophone className="w-4 h-4" />
              </div>{" "}
            </div>
          </Link>

          {/* Our Hospital Card */}

          <Link to="/hospital">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="HOSPITAL.png"
                alt="Hospital Icon"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-semibold text-teal-800">
                Hospital Portal
              </h3>
              <p className="text-gray-600 mt-2">
                Learn about our mission and team of experts.
              </p>
            </div>
          </Link>
        </section>

        {/* Services Section */}
        <section className="mt-16 bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">
                OUR SERVICES
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>
                    Mental Healthcare: Our dedicated team provides compassionate
                    support for mental well-being.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>
                    Child Health Services: Specialized care for your child's
                    growth and development.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>
                    Diagnostic Services: State-of-the-art facilities for
                    accurate and timely diagnoses.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                  <span>
                    Emergency Care: 24/7 care for urgent medical needs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
              <img
                src="https://placehold.co/800x600/d1e7e5/030202?text=Hospital+Staff"
                alt="Hospital staff in a clean environment"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
