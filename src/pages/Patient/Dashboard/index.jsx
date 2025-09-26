import { useState } from "react";
import Header from "../../../components/Header";

import { mockPatient, mockReports } from "../../../utils";
import Footer from "../../../components/footer";
import DashboardOverview from "./DashboardOverview";
import MedicalHistory from "./MedicalHistory";
const Dashboard = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [reports, setReports] = useState(mockReports);

  const handleUploadReport = (newReport) => {
    setReports((prevReports) => [newReport, ...prevReports]);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardOverview patient={mockPatient} reports={reports} />;
      case "reports":
        return <MedicalHistory reports={reports} />;

      default:
        return <DashboardOverview patient={mockPatient} reports={reports} />;
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
      <Footer />
    </div>
  );
};

export default Dashboard;
