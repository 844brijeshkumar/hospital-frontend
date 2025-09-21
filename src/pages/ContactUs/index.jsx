import React, { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  Stethoscope,
  Building2,
  Menu,
  X,
} from "lucide-react";
import Footer from "../../components/footer";

// The main App component containing all logic and UI
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "user", // Default value
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      userType: "user",
      subject: "",
      message: "",
    });
  };

  // Custom CSS classes and animations are defined here
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    * {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }
    
    .gradient-bg {
      background: linear-gradient(135deg, #0f766e 0%, #14b8a6 25%, #5eead4 50%, #14b8a6 75%, #0f766e 100%);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #0f766e, #14b8a6, #5eead4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .medical-shadow {
      box-shadow: 0 20px 25px -5px rgba(15, 118, 110, 0.1), 0 10px 10px -5px rgba(15, 118, 110, 0.04);
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #0f766e, #14b8a6);
    }
    
    .btn-primary:hover {
      background: linear-gradient(135deg, #134e4a, #0f766e);
      box-shadow: 0 20px 25px -5px rgba(15, 118, 110, 0.3);
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .form-input-focus:focus {
      transform: translateY(-1px);
      box-shadow: 0 10px 25px -5px rgba(15, 118, 110, 0.2);
    }

  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 text-gray-800">
        <header className="w-full bg-white shadow-md z-50 relative">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <div className="flex items-center space-x-3">
                {/* Placeholder for the logo image */}
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white font-bold text-xl">
                  ML
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#0b4f4a]">MedLock</h1>
                  <p className="text-xs text-[#0b4f4a]">
                    Centralized Medical Reports
                  </p>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
              {nav?.map((page, index) => {
                return (
                  <a
                    href={page.link}
                    key={index}
                    className="hover:text-teal-600 transition-colors duration-200"
                  >
                    {page.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-teal-600">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
              <div className="flex flex-col items-center space-y-4">
                {nav?.map((page, index) => (
                  <a
                    href={page.link}
                    key={index}
                    onClick={toggleMenu}
                    className="hover:text-teal-600 transition-colors duration-200 text-lg"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Contact Section */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md p-10 md:p-16 rounded-3xl medical-shadow border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold gradient-text mb-4 tracking-tight">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We'd love to hear from you. Reach out to our team for any
                inquiries about our medical report system.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
                  <h3 className="text-2xl font-bold text-teal-900 mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">Phone</h4>
                        <p className="text-gray-600 text-lg">+1 (123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                        <p className="text-gray-600 text-lg">
                          contact@medlock.dev
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          Address
                        </h4>
                        <p className="text-gray-600 text-lg">
                          456 Tech Lane, Suite 789
                          <br />
                          Dev City, 54321
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Placeholder for the medical team image */}
                  <img
                    src="https://placehold.co/800x600/f0fdfa/0f766e?text=Medical+Team"
                    alt="Medical team working together"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">
                      Professional Medical Care
                    </p>
                    <p className="text-sm opacity-90">
                      Trusted by healthcare professionals
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm form-input-focus"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm form-input-focus"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      I am a...
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="userType"
                          value="user"
                          checked={formData.userType === "user"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.userType === "user"
                              ? "border-teal-500 bg-teal-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-teal-300"
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <User
                              className={`w-6 h-6 ${
                                formData.userType === "user"
                                  ? "text-teal-600"
                                  : "text-gray-400"
                              }`}
                            />
                            <span
                              className={`font-semibold ${
                                formData.userType === "user"
                                  ? "text-teal-700"
                                  : "text-gray-600"
                              }`}
                            >
                              User
                            </span>
                          </div>
                        </div>
                      </label>
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="userType"
                          value="doctor"
                          checked={formData.userType === "doctor"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.userType === "doctor"
                              ? "border-teal-500 bg-teal-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-teal-300"
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <Stethoscope
                              className={`w-6 h-6 ${
                                formData.userType === "doctor"
                                  ? "text-teal-600"
                                  : "text-gray-400"
                              }`}
                            />
                            <span
                              className={`font-semibold ${
                                formData.userType === "doctor"
                                  ? "text-teal-700"
                                  : "text-gray-600"
                              }`}
                            >
                              Doctor
                            </span>
                          </div>
                        </div>
                      </label>
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="userType"
                          value="hospital"
                          checked={formData.userType === "hospital"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.userType === "hospital"
                              ? "border-teal-500 bg-teal-50 shadow-lg"
                              : "border-gray-200 bg-white hover:border-teal-300"
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <Building2
                              className={`w-6 h-6 ${
                                formData.userType === "hospital"
                                  ? "text-teal-600"
                                  : "text-gray-400"
                              }`}
                            />
                            <span
                              className={`font-semibold ${
                                formData.userType === "hospital"
                                  ? "text-teal-700"
                                  : "text-gray-600"
                              }`}
                            >
                              Hospital
                            </span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm form-input-focus"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm form-input-focus resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="btn-primary w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                      <Send className="mr-3 w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                  {isSubmitted && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-green-700 font-bold text-lg">
                          Thank you! Your message has been sent successfully.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
};

export default App;
