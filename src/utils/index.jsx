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
