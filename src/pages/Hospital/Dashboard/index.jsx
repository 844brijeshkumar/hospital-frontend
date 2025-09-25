import React, { useState } from "react";
import DashboardOverview from "./DashboardOverview";
import DoctorsSection from "./DoctorSection";
import ReportsSection from "./ReportSection";
import ProfileSection from "./ProfileSection";
import { hospitalData, doctorsData, reportsData } from "../../../utils/index";
import { LayoutDashboard, Stethoscope, FileText, User, LogOut } from "lucide-react";
import Footer from "../../../components/footer";

const HospitalDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [doctors, setDoctors] = useState(doctorsData);
  const [hospital, setHospital] = useState(hospitalData);

  const addDoctor = (doctor) => {
    const newDoctor = {
      ...doctor,
      id: "DOC" + Math.floor(Math.random() * 1000 + 100),
      lastLogin: new Date().toISOString(),
      specialty: doctor.specialization,
      contact: doctor.email,
    };
    setDoctors([newDoctor, ...doctors]);
  };

  const updateDoctor = (id, updatedDoctor) => {
    setDoctors(
      doctors.map((doc) =>
        doc.id === id
          ? {
              ...doc,
              ...updatedDoctor,
              specialty: updatedDoctor.specialization || updatedDoctor.specialty,
              contact: updatedDoctor.email || updatedDoctor.contact,
            }
          : doc
      )
    );
  };

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  const updateHospital = (updatedHospital) => {
    setHospital(updatedHospital);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview hospital={hospital} doctors={doctors} reports={reportsData} />;
      case "doctors":
        return (
          <DoctorsSection
            doctors={doctors}
            onAddDoctor={addDoctor}
            onUpdateDoctor={updateDoctor}
            onDeleteDoctor={deleteDoctor}
          />
        );
      case "reports":
        return <ReportsSection reports={reportsData} doctors={doctors} />;
      case "profile":
        return <ProfileSection hospital={hospital} onUpdateHospital={updateHospital} />;
      default:
        return null;
    }
  };

  return (
    <div className=" space-y-8">
      {/* Header with Tabs */}
      <header className="bg-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="logo.png" className="h-22 w-20" alt="MedLock Logo" />
              <div>
                <h1 className="text-2xl font-bold text-[#0b4f4a]">MedLock</h1>
                <p className="text-xs text-[#0b4f4a]">Hospital's Portal</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-1">
              {[
                { label: "Dashboard", icon: LayoutDashboard, tab: "dashboard" },
                { label: "Doctors", icon: Stethoscope, tab: "doctors" },
                { label: "Reports", icon: FileText, tab: "reports" },
                { label: "Hospital Profile", icon: User, tab: "profile" },
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    activeTab === item.tab
                      ? "bg-[#d1e8e5] text-[#0b4f4a] shadow-lg"
                      : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Doctor Profile / Logout */}
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-[#0b4f4a]">Hospital Name</p>
                <p className="text-xs text-[#0b4f4a]">Hospital ID: #D001</p>
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
              {["dashboard", "doctors", "reports", "profile"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab ? "bg-[#d1e8e5] text-[#0b4f4a]" : "text-[#0b4f4a] hover:bg-[#e0f1ef]"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Active Tab Content */}
      <div>{renderContent()}</div>
      <Footer/>
    </div>
  );
};

export default HospitalDashboard;
