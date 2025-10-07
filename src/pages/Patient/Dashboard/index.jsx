import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import DashboardOverview from "./DashboardOverview";
import MedicalHistory from "./MedicalHistory";
import { addReport } from "../../../features/Patient/patientSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  // Get patient data from the Redux store
  const patient = useSelector((state) => state.patient.patient);
  
  // Use a temporary state for UI view management
  const [activeView, setActiveView] = useState("dashboard");

  // This function is now responsible for dispatching an action.
  const handleUploadReport = (newReport) => {
    dispatch(addReport(newReport));
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardOverview />;
      case "reports":
        return <MedicalHistory />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header
        activeView={activeView}
        onViewChange={setActiveView}
        patientName={patient.name}
        dashboard="patient"
      />
      <main>{renderActiveView()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;