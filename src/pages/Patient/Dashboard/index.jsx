import { useState, useCallback, useMemo } from "react";
import { mockPatient, mockReports } from '../../../utils'; 
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import DashboardOverview from "./DashboardOverview";
import MedicalHistory from "./MedicalHistory";

const initialState = {
  patient: mockPatient,
  reports: mockReports,
};

const Dashboard = () => {
  // 1. Initialize State using useState
  const [patientData, setPatientData] = useState(initialState.patient);
  const [reportsData, setReportsData] = useState(initialState.reports);

  // 2. Define the 'addReport' logic (Reducer equivalent)
  const addReport = useCallback((newReport) => {
    // Update the reports state: add new report to the beginning
    setReportsData(prevReports => [newReport, ...prevReports]);
  }, []);

  // 3. Bundle the state for children components (to avoid excessive prop drilling)
  const patientState = useMemo(() => ({
      patient: patientData,
      reports: reportsData,
      // Pass the updater function as an action
      addReport: addReport, 
  }), [patientData, reportsData, addReport]);
  
  // --- END: State and Logic ---


  // Local state for UI view management
  const [activeView, setActiveView] = useState("dashboard");

  // This function is now responsible for calling the local state updater.
  const handleUploadReport = (newReport) => {
    patientState.addReport(newReport);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        // Pass the required state/actions down
        return <DashboardOverview {...patientState} />; 
      case "reports":
        // Pass the required state/actions down
        return <MedicalHistory reports={patientState.reports} />;
      default:
        return <DashboardOverview {...patientState} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header
        activeView={activeView}
        onViewChange={setActiveView}
        patientName={patientData.name} // Use local state here
        dashboard="patient"
      />
      <main>{renderActiveView()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;