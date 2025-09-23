import React from "react";
import { Activity, User, FileText, Search, LogOut } from "lucide-react";
import {
  LayoutDashboard,
  ClipboardList,
  FilePlus2,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({
  activeView,
  onViewChange,
  patientName,
  dashboard,
  doctorName,
}) => {
  return (
    <>
      {dashboard == "hospital" ? (
        <header className="bg-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/hospital-home">
                {" "}
                <div className="flex items-center space-x-3">
                  <div>
                    <img
                      src="logo.png"
                      className="h-22 w-20"
                      alt="MedLock Logo"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-[#0b4f4a]">
                      MedLock
                    </h1>
                    <p className="text-xs text-[#0b4f4a]">Doctor's Portal</p>
                  </div>
                </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex space-x-1">
                <button
                  onClick={() => onViewChange("dashboard")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    activeView === "dashboard"
                      ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </button>
                <button
                  onClick={() => onViewChange("assignReports")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    activeView === "assignReports"
                      ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  <ClipboardList className="h-4 w-4 mr-2" />
                  Assign Reports
                </button>
                <button
                  onClick={() => onViewChange("addReport")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    activeView === "addReport"
                      ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  <FilePlus2 className="h-4 w-4 mr-2" />
                  Add New Report
                </button>
              </nav>

              {/* Doctor Profile */}
              <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-[#0b4f4a]">
                    {doctorName || "booyah"}
                  </p>
                  <p className="text-xs text-[#0b4f4a]">Doctor ID: #D001</p>
                </div>
                <div className="bg-[#d1e8e5] p-2 rounded-full">
                  <Stethoscope className="h-5 w-5 text-[#0b4f4a]" />
                </div>
                <button className="text-[#0b4f4a] hover:text-[#0b4f4a] transition-colors p-2 rounded-lg hover:bg-[#e0f1ef]">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden border-t border-[#d1e8e5] py-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => onViewChange("dashboard")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeView === "dashboard"
                      ? "bg-[#d1e8e5] text-[#0b4f4a]"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => onViewChange("assignReports")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeView === "assignReports"
                      ? "bg-[#d1e8e5] text-[#0b4f4a]"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  Assign
                </button>
                <button
                  onClick={() => onViewChange("addReport")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeView === "addReport"
                      ? "bg-[#d1e8e5] text-[#0b4f4a]"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  Add Report
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="bg-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/">
                <div className="flex items-center space-x-3">
                  <div>
                    <img
                      src="logo.png"
                      className="h-22 w-20"
                      alt="MedLock Logo"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-[#0b4f4a]">
                      MedLock
                    </h1>
                    <p className="text-xs text-[#0b4f4a]">Pateint's Portal</p>
                  </div>
                </div>
              </Link>

              {/* Navigation */}

              <nav className="hidden md:flex space-x-1">
                <button
                  onClick={() => onViewChange("dashboard")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeView === "dashboard"
                      ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg backdrop-blur-sm"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  <User className="inline h-4 w-4 mr-2" />
                  Dashboard
                </button>
                <button
                  onClick={() => onViewChange("reports")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeView === "reports"
                      ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg backdrop-blur-sm"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  <FileText className="inline h-4 w-4 mr-2" />
                  My Reports
                </button>
              </nav>

              {/* User Profile */}
              <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-[#0b4f4a]">
                    {patientName}
                  </p>
                  <p className="text-xs text-[#0b4f4a]">Patient ID: #001</p>
                </div>
                <div className="bg-[#d1e8e5] p-2 rounded-full border border-transparent">
                  <User className="h-5 w-5 text-[#0b4f4a]" />
                </div>
                <button className="text-[#0b4f4a] hover:text-[#0b4f4a] transition-colors p-2 rounded-lg hover:bg-[#e0f1ef]">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden border-t border-[#d1e8e5] py-2">
              <div className="flex space-x-1">
                <button
                  onClick={() => onViewChange("dashboard")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeView === "dashboard"
                      ? "bg-[#d1e8e5] text-[#0b4f4a]"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => onViewChange("reports")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeView === "reports"
                      ? "bg-[#d1e8e5] text-[#0b4f4a]"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  Reports
                </button>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
