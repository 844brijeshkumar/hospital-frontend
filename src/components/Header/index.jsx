import { Activity, User, FileText, Search, LogOut } from "lucide-react";

const Header = ({ activeView, onViewChange, patientName }) => {
  return (
    <header className="bg-gradient-to-r from-[#6B9691] via-[#8FBEB9] to-[#B5E3E0] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <img src="logo.png" className="h-20 w-20 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">MedLock</h1>
              <p className="text-xs text-stone-100">
                Centralized Medical Reports
              </p>
            </div>
          </div>

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
            <button
              onClick={() => onViewChange("upload")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeView === "upload"
                  ? "bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30"
                  : "text-stone-100 hover:text-white hover:bg-white/10"
              }`}
            >
              <Search className="inline h-4 w-4 mr-2" />
              Upload Report
            </button>
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">{patientName}</p>
              <p className="text-xs text-stone-100">Patient ID: #001</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30">
              <User className="h-5 w-5 text-white" />
            </div>
            <button className="text-stone-100 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-white/20 py-2">
          <div className="flex space-x-1">
            <button
              onClick={() => onViewChange("dashboard")}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === "dashboard"
                  ? "bg-white/20 text-white backdrop-blur-sm"
                  : "text-stone-100 hover:text-white hover:bg-white/10"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => onViewChange("reports")}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === "reports"
                  ? "bg-white/20 text-white backdrop-blur-sm"
                  : "text-stone-100 hover:text-white hover:bg-white/10"
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => onViewChange("upload")}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === "upload"
                  ? "bg-white/20 text-white backdrop-blur-sm"
                  : "text-stone-100 hover:text-white hover:bg-white/10"
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
