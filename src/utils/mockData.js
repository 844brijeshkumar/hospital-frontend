export const mockPatient = {
  id: '1',
  name: 'Brijesh Maurya',
  email: 'rahul.sharma@email.com',
  phone: '+91 98765 43210',
  dateOfBirth: new Date('1985-06-15'),
  gender: 'male',
  bloodGroup: 'A+',
  emergencyContact: {
    name: 'Priya Sharma',
    phone: '+91 98765 43211',
    relation: 'Wife',
  },
  allergies: ['Penicillin', 'Peanuts'],
  chronicConditions: ['Hypertension', 'Diabetes Type 2'],
};

export const mockReports = [
  {
    id: '1',
    patientId: '1',
    title: 'Complete Blood Count (CBC)',
    category: 'lab',
    date: new Date('2024-01-15'),
    doctorName: 'Dr. Anjali Gupta',
    hospital: 'City General Hospital',
    description: 'Routine blood work showing normal hemoglobin levels and white cell count.',
    tags: ['routine', 'blood-work', 'normal'],
    priority: 'low',
  },
  {
    id: '2',
    patientId: '1',
    title: 'Chest X-Ray',
    category: 'imaging',
    date: new Date('2024-01-10'),
    doctorName: 'Dr. Vikram Singh',
    hospital: 'Metro Medical Center',
    description: 'Clear lungs, no signs of pneumonia or other respiratory issues.',
    tags: ['chest', 'x-ray', 'clear', 'respiratory'],
    priority: 'medium',
  },
];
