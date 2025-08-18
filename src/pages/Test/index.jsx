import { useState } from "react";
import Header from "../../components/Header";
import PatientDashboard from "../../components/PatientDashboard";
import MedicalHistory from "../../components/MedicalHistory";
import ReportUpload from "../../components/ReportUpload";
import { mockPatient, mockReports } from "../../utils";
const index = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [reports, setReports] = useState(mockReports);

  const handleUploadReport = (newReport) => {
    setReports((prevReports) => [newReport, ...prevReports]);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <PatientDashboard patient={mockPatient} reports={reports} />;
      case "reports":
        return <MedicalHistory reports={reports} />;
      case "upload":
        return <ReportUpload onUpload={handleUploadReport} />;
      default:
        return <PatientDashboard patient={mockPatient} reports={reports} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header
        activeView={activeView}
        onViewChange={setActiveView}
        patientName={mockPatient.name}
      />
      <main>{renderActiveView()}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-t border-slate-600 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <img src="logo.png" className=" h-20 w-20" />
              <h3 className="text-lg font-bold text-white">MedLock</h3>
            </div>
            <p className="text-slate-300 mb-2">
              Your trusted centralized medical report system
            </p>
            <p className="text-sm text-emerald-400">
              Secure • Reliable • Always Accessible
            </p>
            <div className="mt-4 pt-4 border-t border-slate-600 text-xs text-slate-400">
              © 2025 MediVault. All rights reserved. | Privacy Policy | Terms of
              Service
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
