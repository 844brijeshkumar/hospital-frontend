import { useState } from "react";
import Header from "../../../components/Header";
import PatientDashboard from "../../../components/PatientDashboard";
import MedicalHistory from "../../../components/MedicalHistory";
import ReportUpload from "../../../components/ReportUpload";
import { mockPatient, mockReports } from "../../../utils";
import Footer from "../../../components/footer";
const Dashboard = () => {
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
        dashboard="patient"
      />
      <main>{renderActiveView()}</main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Dashboard;
