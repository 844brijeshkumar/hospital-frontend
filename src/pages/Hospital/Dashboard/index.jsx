import React, { useState } from "react";
import {
  Users,
  FileText,
  UserPlus,
  ArrowRight,
  Stethoscope,
  Building,
  Edit,
  Trash2,
  Plus,
  ArrowLeft,
} from "lucide-react";

// --- SAMPLE DATA DEFINITIONS ---
const hospitalData = {
  name: "City General Hospital",
  address: "123 Health Ave, Metropolis",
  contact: "+1 234 567 8900",
};

const doctorsData = [
  {
    id: "DOC101",
    name: "Dr. Priya Sharma",
    specialty: "Cardiology",
    contact: "priya.sharma@cgh.com",
    lastLogin: new Date(new Date().setHours(11, 0, 0)).toISOString(),
  },
  {
    id: "DOC102",
    name: "Dr. Arjun Patel",
    specialty: "Orthopedics",
    contact: "arjun.patel@cgh.com",
    lastLogin: new Date(new Date().setHours(9, 30, 0)).toISOString(),
  },
  {
    id: "DOC103",
    name: "Dr. Kavita Rao",
    specialty: "Pediatrics",
    contact: "kavita.rao@cgh.com",
    lastLogin: new Date(new Date().setHours(15, 0, 0)).toISOString(),
  },
];

const reportsData = [
  {
    id: "REP201",
    patientName: "Aarav Singh",
    doctorName: "Dr. Priya Sharma",
    type: "Blood Test Results",
    status: "Completed",
    date: new Date(new Date().setHours(14, 0, 0)).toISOString(),
  },
  {
    id: "REP202",
    patientName: "Saanvi Gupta",
    doctorName: "Dr. Arjun Patel",
    type: "X-Ray Analysis",
    status: "Completed",
    date: new Date(new Date().setHours(10, 0, 0)).toISOString(),
  },
  {
    id: "REP203",
    patientName: "Vihaan Mehta",
    doctorName: "Dr. Kavita Rao",
    type: "Consultation Summary",
    status: "Completed",
    date: new Date(new Date().setHours(16, 0, 0)).toISOString(),
  },
];

const initialFormState = {
  name: "",
  specialty: "",
  contact: "",
};

// --- HOSPITAL DASHBOARD COMPONENT ---
const HospitalDashboardUI = ({
  hospital,
  doctors,
  reports,
  onAddDoctor,
  onUpdateDoctor,
  onDeleteDoctor,
  onUpdateHospital,
}) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editingDoctorId, setEditingDoctorId] = useState(null);
  const [hospitalProfile, setHospitalProfile] = useState(hospital);

  const totalDoctors = doctors?.length;
  const completedReports = reports?.filter(
    (report) => report.status === "Completed"
  );
  const totalReports = completedReports?.length;

  const recentDoctorActivity = doctors?.slice(0, 3);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(date));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingDoctorId) {
      onUpdateDoctor(editingDoctorId, formData);
      setEditingDoctorId(null);
    } else {
      onAddDoctor(formData);
    }
    setFormData(initialFormState);
    setIsFormOpen(false);
  };

  const handleEditClick = (doctor) => {
    setFormData(doctor);
    setEditingDoctorId(doctor.id);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (id) => {
    onDeleteDoctor(id);
  };

  const handleHospitalProfileUpdate = (e) => {
    e.preventDefault();
    onUpdateHospital(hospitalProfile);
    setIsProfileEditing(false);
  };

  const renderDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-blue-800">{totalDoctors}</p>
              <p className="text-blue-700 font-medium">Total Doctors</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-xl shadow-md">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-100 to-white rounded-2xl shadow-lg p-6 border border-emerald-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-emerald-800">
                {totalReports}
              </p>
              <p className="text-emerald-700 font-medium">Reports Assigned</p>
            </div>
            <div className="bg-emerald-500 p-3 rounded-xl shadow-md">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-100 to-white rounded-2xl shadow-lg p-6 border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-amber-800">
                {hospitalProfile.name}
              </p>
              <p className="text-amber-700 font-medium">Hospital Name</p>
            </div>
            <div className="bg-amber-500 p-3 rounded-xl shadow-md">
              <Building className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Users className="h-6 w-6 text-gray-500 mr-3" />
          Recent Doctor Activity
        </h2>
        <div className="space-y-4">
          {recentDoctorActivity?.map((doctor) => (
            <div
              key={doctor.id}
              className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Stethoscope className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {doctor.name} - {doctor.specialty}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Last logged in at {formatTime(doctor.lastLogin)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderDoctors = () => (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Doctors List</h2>
        <button
          onClick={() => {
            setIsFormOpen(true);
            setEditingDoctorId(null);
            setFormData(initialFormState);
          }}
          className="bg-[#1a756f] hover:bg-[#0b4f4a] text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Add New Doctor
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {editingDoctorId ? "Edit Doctor" : "Add New Doctor"}
          </h3>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a756f] focus:ring-[#1a756f] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Specialty
              </label>
              <input
                type="text"
                value={formData.specialty}
                onChange={(e) =>
                  setFormData({ ...formData, specialty: e.target.value })
                }
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a756f] focus:ring-[#1a756f] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="email"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a756f] focus:ring-[#1a756f] sm:text-sm"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-[#1a756f] rounded-md hover:bg-[#0b4f4a]"
              >
                {editingDoctorId ? "Update Doctor" : "Add Doctor"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Specialty
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {doctors?.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {doctor.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doctor.specialty}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doctor.contact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEditClick(doctor)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(doctor.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const renderReports = () => (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Reports</h2>
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="space-y-4">
          {reports?.map((report) => (
            <div
              key={report.id}
              className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {report.type} for {report.patientName}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Assigned by: {report.doctorName}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                  ${
                    report.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {report.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderProfile = () => (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Hospital Profile</h2>
        <button
          onClick={() => setIsProfileEditing(!isProfileEditing)}
          className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl font-medium transition-colors hover:bg-indigo-200 flex items-center"
        >
          <Edit className="h-4 w-4 mr-2" />
          {isProfileEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        {isProfileEditing ? (
          <form onSubmit={handleHospitalProfileUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hospital Name
              </label>
              <input
                type="text"
                value={hospitalProfile.name}
                onChange={(e) =>
                  setHospitalProfile({
                    ...hospitalProfile,
                    name: e.target.value,
                  })
                }
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={hospitalProfile.address}
                onChange={(e) =>
                  setHospitalProfile({
                    ...hospitalProfile,
                    address: e.target.value,
                  })
                }
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="text"
                value={hospitalProfile.contact}
                onChange={(e) =>
                  setHospitalProfile({
                    ...hospitalProfile,
                    contact: e.target.value,
                  })
                }
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <p>
              <span className="font-bold text-gray-700">Name:</span>{" "}
              {hospitalProfile.name}
            </p>
            <p>
              <span className="font-bold text-gray-700">Address:</span>{" "}
              {hospitalProfile.address}
            </p>
            <p>
              <span className="font-bold text-gray-700">Contact:</span>{" "}
              {hospitalProfile.contact}
            </p>
          </div>
        )}
      </div>
    </>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "doctors":
        return renderDoctors();
      case "reports":
        return renderReports();
      case "profile":
        return renderProfile();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="h-svh w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white h-full">
        <div className="bg-gradient-to-r from-[#0b4f4a] via-[#1a756f] to-[#2a9b94] rounded-2xl p-8 text-white mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome, {hospital.name} Administrator!
              </h1>
              <p className="text-stone-100">
                Manage your hospital's operations with ease.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center ${
                  activeTab === "dashboard"
                    ? "bg-white/30 text-white"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                <Building className="h-4 w-4 mr-2" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab("doctors")}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center ${
                  activeTab === "doctors"
                    ? "bg-white/30 text-white"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                <Stethoscope className="h-4 w-4 mr-2" />
                Doctors
              </button>
              <button
                onClick={() => setActiveTab("reports")}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center ${
                  activeTab === "reports"
                    ? "bg-white/30 text-white"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                <FileText className="h-4 w-4 mr-2" />
                Reports
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center ${
                  activeTab === "profile"
                    ? "bg-white/30 text-white"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                <Building className="h-4 w-4 mr-2" />
                Profile
              </button>
            </div>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT WITH STATE MANAGEMENT ---
const HospitalDashboard = () => {
  const [doctors, setDoctors] = useState(doctorsData);
  const [hospital, setHospital] = useState(hospitalData);

  const handleAddDoctor = (newDoctor) => {
    const newId = `DOC${Date.now()}`;
    setDoctors([
      ...doctors,
      { ...newDoctor, id: newId, lastLogin: new Date().toISOString() },
    ]);
  };

  const handleUpdateDoctor = (id, updatedDoctor) => {
    setDoctors(
      doctors.map((doc) => (doc.id === id ? { ...doc, ...updatedDoctor } : doc))
    );
  };

  const handleDeleteDoctor = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  const handleUpdateHospital = (updatedHospital) => {
    setHospital(updatedHospital);
  };

  return (
    <HospitalDashboardUI
      hospital={hospital}
      doctors={doctors}
      reports={reportsData}
      onAddDoctor={handleAddDoctor}
      onUpdateDoctor={handleUpdateDoctor}
      onDeleteDoctor={handleDeleteDoctor}
      onUpdateHospital={handleUpdateHospital}
    />
  );
};

export default HospitalDashboard;
