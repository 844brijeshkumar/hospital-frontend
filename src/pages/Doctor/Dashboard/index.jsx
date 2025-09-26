import { useState } from "react";

import Footer from "../../../components/footer";

import { mockPatient, mockReports } from "../../../utils";
import Header from "../../../components/Header";
import DashboardOverview from "./DashboardOverview";
import AssignReport from "./AssignReport";
import ReportUpload from "./ReportUpload";
const Dashboard = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [reports, setReports] = useState(mockReports);

  const handleUploadReport = (newReport) => {
    setReports((prevReports) => [newReport, ...prevReports]);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "Dashboard":
        return <DashboardOverview patient={mockPatient} reports={reports} />;
      case "assignReports":
        return <AssignReport reports={reports} />;
      case "addReport":
        return <ReportUpload onUpload={handleUploadReport} />;
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
        dashboard="hospital"
      />
      <main>{renderActiveView()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
