export const getCategoryIcon = (category) => {
  switch (category) {
    case 'lab':
      return '🧪';
    case 'imaging':
      return '📊';
    case 'prescription':
      return '💊';
    case 'consultation':
      return '👨‍⚕️';
    case 'surgery':
      return '🏥';
    case 'vaccination':
      return '💉';
    default:
      return '📄';
  }
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
};

export const formatTime = (date) => {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(date));
};

export const getAge = (patient) => {
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
    case 'critical':
      return '#ef4444';
    case 'high':
      return '#f97316';
    case 'medium':
      return '#eab308';
    case 'low':
      return '#10b981';
    default:
      return '#6b7280';
  }
};
