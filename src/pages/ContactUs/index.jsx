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
import {
  FaPlus,
  FaCheckCircle,
  FaBars,
  FaMicrophone,
  FaStop,
  FaTimes, // <-- Imported the close icon
} from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "user", // Default value
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    // In a real application, you would send this data to a backend API.
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
    setFormData({
      name: "",
      email: "",
      userType: "user",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 text-gray-800">
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

      {/* Contact Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto glass-effect p-10 md:p-16 rounded-3xl medical-shadow">
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
                <img
                  src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn-primary">
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
      <footer className="bg-gradient-to-r from-[#0b4f4a] via-[#1a756f] to-[#2a9b94] border-t border-slate-600 py-8 mt-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <img src="home-logo.png" className=" h-24 w-26" />
              <h3 className="text-lg font-bold text-white">MedLock</h3>
            </div>
            <p className=" mb-2">
              Your trusted centralized medical report system
            </p>
            <p className="text-sm text-emerald-400">
              Secure • Reliable • Always Accessible
            </p>
            <div className="mt-4 pt-4 border-t border-slate-600 text-xs ">
              © 2023 MedLock. All rights reserved. | Privacy Policy | Terms of
              Service
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
