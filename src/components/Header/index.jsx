import React from "react";
import { Activity, User, FileText, Search, LogOut } from "lucide-react";

const Header = ({ activeView, onViewChange, patientName, dashboard }) => {
  return (
    <header className="bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <img src="logo.png" className="h-22 w-20" alt="MedLock Logo" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0b4f4a]">MedLock</h1>
              <p className="text-xs text-[#0b4f4a]">
                Centralized Medical Reports
              </p>
            </div>
          </div>

          {/* Navigation */}
          {dashboard == "hospital" ? (
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
                onClick={() => onViewChange("Assign")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeView === "Assign"
                    ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg backdrop-blur-sm"
                    : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                }`}
              >
                <FileText className="inline h-4 w-4 mr-2" />
                My Reports
              </button>
              <button
                onClick={() => onViewChange("Add Report")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeView === "Add Report"
                    ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg backdrop-blur-sm"
                    : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                }`}
              >
                <Search className="inline h-4 w-4 mr-2" />
                Upload Report
              </button>
            </nav>
          ) : (
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
          )}

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
            <button
              onClick={() => onViewChange("upload")}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === "upload"
                  ? "bg-[#d1e8e5] text-[#0b4f4a]"
                  : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
              }`}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
