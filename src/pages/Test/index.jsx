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
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-xl">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L13.09 8.26L19 7L17.74 13.09L22 14L15.74 17.74L14 22L7.74 15.74L2 14L8.26 13.09L7 7L13.09 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">MediVault</h3>
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
