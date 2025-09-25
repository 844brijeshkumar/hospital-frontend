export const mockPatient = {
  id: "1",
  name: "Brijesh Maurya",
  email: "rahul.sharma@email.com",
  phone: "+91 98765 43210",
  dateOfBirth: new Date("1985-06-15"),
  gender: "male",
  bloodGroup: "A+",
  emergencyContact: {
    name: "Priya Sharma",
    phone: "+91 98765 43211",
    relation: "Wife",
  },
  allergies: ["Penicillin", "Peanuts"],
  chronicConditions: ["Hypertension", "Diabetes Type 2"],
};

export const mockReports = [
  {
    id: "1",
    patientId: "1",
    title: "Complete Blood Count (CBC)",
    category: "lab",
    date: new Date("2024-01-15"),
    doctorName: "Dr. Anjali Gupta",
    hospital: "City General Hospital",
    description:
      "Routine blood work showing normal hemoglobin levels and white cell count.",
    tags: ["routine", "blood-work", "normal"],
    priority: "low",
  },
  {
    id: "2",
    patientId: "1",
    title: "Chest X-Ray",
    category: "imaging",
    date: new Date("2024-01-10"),
    doctorName: "Dr. Vikram Singh",
    hospital: "Metro Medical Center",
    description:
      "Clear lungs, no signs of pneumonia or other respiratory issues.",
    tags: ["chest", "x-ray", "clear", "respiratory"],
    priority: "medium",
  },
  {
    id: "3",
    patientId: "1",
    title: "Diabetes Medication Prescription",
    category: "prescription",
    date: new Date("2024-01-08"),
    doctorName: "Dr. Meera Patel",
    hospital: "Diabetes Care Clinic",
    description: "Metformin 500mg twice daily, continue for 3 months.",
    tags: ["diabetes", "metformin", "prescription"],
    priority: "high",
  },
  {
    id: "4",
    patientId: "1",
    title: "Annual Health Checkup",
    category: "consultation",
    date: new Date("2024-01-05"),
    doctorName: "Dr. Rajesh Kumar",
    hospital: "Wellness Medical Center",
    description:
      "Annual physical examination. Blood pressure slightly elevated, diabetes under control.",
    tags: ["annual", "checkup", "physical", "bp-elevated"],
    priority: "medium",
  },
  {
    id: "5",
    patientId: "1",
    title: "COVID-19 Vaccination Booster",
    category: "vaccination",
    date: new Date("2023-12-20"),
    doctorName: "Nurse Jennifer",
    hospital: "City Vaccination Center",
    description:
      "COVID-19 booster shot administered. No adverse reactions observed.",
    tags: ["covid-19", "vaccination", "booster"],
    priority: "low",
  },
];

export const mockDoctors = [
  {
    id: "1",
    name: "Dr. Anjali Gupta",
    specialization: "Internal Medicine",
    hospital: "City General Hospital",
    email: "anjali.gupta@citygeneral.com",
    phone: "+91 98765 00001",
  },
  {
    id: "2",
    name: "Dr. Vikram Singh",
    specialization: "Radiology",
    hospital: "Metro Medical Center",
    email: "vikram.singh@metromedical.com",
    phone: "+91 98765 00002",
  },
];

// Helper function to get the appropriate emoji icon for a report category
export const getCategoryIcon = (category) => {
  switch (category) {
    case "lab":
      return "🧪";
    case "imaging":
      return "�";
    case "prescription":
      return "💊";
    case "consultation":
      return "👨‍⚕️";
    case "surgery":
      return "🏥";
    case "vaccination":
      return "💉";
    default:
      return "📄";
  }
};

// Helper function to format the date
export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

export const formatTime = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
};
// Helper function to calculate the patient's age
export const getAge = (patient) => {
  console.log(patient);
  const today = new Date();
  const birthDate = new Date(patient.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case "critical":
      return "bg-red-100 text-red-800 border-red-200";
    case "high":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const hospitalData = {
  npi_id: "HOSP001",
  name: "City General Hospital",
  location: "123 Health Ave, Metropolis",
  state: "New York",
  country: "United States",
  org_issued_name: "City General Hospital Inc",
  contact: "+1 234 567 8900",
};

export const doctorsData = [
  {
    id: "DOC101",
    name: "Dr. Priya Sharma",
    specialty: "Cardiology",
    specialization: "Cardiology",
    contact: "priya.sharma@cgh.com",
    email: "priya.sharma@cgh.com",
    phone_no: "+1 234 567 8901",
    address: "456 Medical Center Dr, Metropolis, NY",
    date_of_birth: "1985-03-15",
    npi_id: "HOSP001",
    lastLogin: new Date(new Date().setHours(11, 0, 0)).toISOString(),
  },
  {
    id: "DOC102",
    name: "Dr. Arjun Patel",
    specialty: "Orthopedics",
    specialization: "Orthopedics",
    contact: "arjun.patel@cgh.com",
    email: "arjun.patel@cgh.com",
    phone_no: "+1 234 567 8902",
    address: "789 Bone St, Metropolis, NY",
    date_of_birth: "1980-07-22",
    npi_id: "HOSP001",
    lastLogin: new Date(new Date().setHours(9, 30, 0)).toISOString(),
  },
  {
    id: "DOC103",
    name: "Dr. Meera Kapoor",
    specialty: "Neurology",
    specialization: "Neurology",
    contact: "meera.kapoor@cgh.com",
    email: "meera.kapoor@cgh.com",
    phone_no: "+1 234 567 8903",
    address: "123 Brain Ave, Metropolis, NY",
    date_of_birth: "1978-12-05",
    npi_id: "HOSP001",
    lastLogin: new Date(new Date().setHours(14, 15, 0)).toISOString(),
  },
  {
    id: "DOC104",
    name: "Dr. Rajesh Singh",
    specialty: "Pediatrics",
    specialization: "Pediatrics",
    contact: "rajesh.singh@cgh.com",
    email: "rajesh.singh@cgh.com",
    phone_no: "+1 234 567 8904",
    address: "987 Kids Lane, Metropolis, NY",
    date_of_birth: "1982-06-18",
    npi_id: "HOSP001",
    lastLogin: new Date(new Date().setHours(10, 45, 0)).toISOString(),
  },
  {
    id: "DOC105",
    name: "Dr. Ananya Verma",
    specialty: "Dermatology",
    specialization: "Dermatology",
    contact: "ananya.verma@cgh.com",
    email: "ananya.verma@cgh.com",
    phone_no: "+1 234 567 8905",
    address: "654 Skin Blvd, Metropolis, NY",
    date_of_birth: "1987-09-30",
    npi_id: "HOSP001",
    lastLogin: new Date(new Date().setHours(16, 0, 0)).toISOString(),
  },
  {
    id: "DOC106",
    name: "Dr. Karan Mehta",
    specialty: "Oncology",
    specialization: "Oncology",
    contact: "karan.mehta@cgh.com",
    email: "karan.mehta@cgh.com",
    phone_no: "+1 234 567 8906",
    address: "321 Cancer Care Rd, Metropolis, NY",
    date_of_birth: "1975-11-12",
    npi_id: "HOSP001",
    lastLogin: new Date(new Date().setHours(8, 20, 0)).toISOString(),
  },
  {
    id: "DOC107",
    name: "Dr. Priyanka Rao",
    specialty: "Gynecology",
    specialization: "Gynecology",
    contact: "priyanka.rao@cgh.com",
    email: "priyanka.rao@cgh.com",
    phone_no: "+1 234 567 8907",
    address: "852 Women Health St, Metropolis, NY",
    date_of_birth: "1983-02-27",
    npi_id: "HOSP001",
    lastLogin: new Date(new Date().setHours(12, 30, 0)).toISOString(),
  },
];


export const reportsData = [
  {
    id: "REP201",
    report_id: "REP201",
    patient_adhaar: "123456789012",
    doctor_id: "DOC101",
    npi_id: "HOSP001",
    date_of_issue: "2025-09-25",
    title: "Blood Test Results",
    description: "Routine blood test results for Aarav Singh",
    priority: "High",
    category: "Lab",
    status: "Completed",
  },
  {
    id: "REP202",
    report_id: "REP202",
    patient_adhaar: "987654321098",
    doctor_id: "DOC102",
    npi_id: "HOSP001",
    date_of_issue: "2025-09-24",
    title: "X-Ray Analysis",
    description: "X-Ray results for Saanvi Gupta",
    priority: "Medium",
    category: "Radiology",
    status: "Completed",
  },
  {
    id: "REP203",
    report_id: "REP203",
    patient_adhaar: "112233445566",
    doctor_id: "DOC103",
    npi_id: "HOSP001",
    date_of_issue: "2025-09-23",
    title: "MRI Scan Report",
    description: "MRI scan analysis for Rohan Mehta",
    priority: "High",
    category: "Radiology",
    status: "Pending",
  },
  {
    id: "REP204",
    report_id: "REP204",
    patient_adhaar: "223344556677",
    doctor_id: "DOC104",
    npi_id: "HOSP001",
    date_of_issue: "2025-09-22",
    title: "Pediatric Checkup Summary",
    description: "Annual checkup report for Anika Sharma",
    priority: "Low",
    category: "General",
    status: "Completed",
  },
  {
    id: "REP205",
    report_id: "REP205",
    patient_adhaar: "334455667788",
    doctor_id: "DOC105",
    npi_id: "HOSP001",
    date_of_issue: "2025-09-21",
    title: "Skin Allergy Test",
    description: "Dermatology test results for Kabir Khan",
    priority: "Medium",
    category: "Lab",
    status: "In Progress",
  },
  {
    id: "REP206",
    report_id: "REP206",
    patient_adhaar: "445566778899",
    doctor_id: "DOC106",
    npi_id: "HOSP001",
    date_of_issue: "2025-09-20",
    title: "Oncology Consultation Report",
    description: "Consultation summary for Priya Desai",
    priority: "High",
    category: "Consultation",
    status: "Pending",
  },
  {
    id: "REP207",
    report_id: "REP207",
    patient_adhaar: "556677889900",
    doctor_id: "DOC107",
    npi_id: "HOSP001",
    date_of_issue: "2025-09-19",
    title: "Gynecology Ultrasound Report",
    description: "Ultrasound results for Nisha Verma",
    priority: "Medium",
    category: "Radiology",
    status: "Completed",
  },
];


export const initialDoctorForm = {
  name: "",
  email: "",
  password_hash: "",
  phone_no: "",
  date_of_birth: "",
  address: "",
  specialization: "",
  npi_id: hospitalData.npi_id,
};
