import { useState } from "react";
import {
  Upload,
  FileText,
  Calendar,
  User,
  Building2,
  Tag,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react";
const index = ({ onUpload }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "lab",
    date: new Date().toISOString().split("T")[0],
    doctorName: "",
    hospital: "",
    description: "",
    priority: "medium",
    tags: "",
  });

  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    { value: "lab", label: "Lab Tests", icon: "🧪" },
    { value: "imaging", label: "Imaging", icon: "📊" },
    { value: "prescription", label: "Prescriptions", icon: "💊" },
    { value: "consultation", label: "Consultations", icon: "👨‍⚕️" },
    { value: "surgery", label: "Surgery", icon: "🏥" },
    { value: "vaccination", label: "Vaccinations", icon: "💉" },
    { value: "other", label: "Other", icon: "📄" },
  ];

  const priorities = [
    { value: "low", label: "Low", color: "text-green-600" },
    { value: "medium", label: "Medium", color: "text-yellow-600" },
    { value: "high", label: "High", color: "text-orange-600" },
    { value: "critical", label: "Critical", color: "text-red-600" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      id: Date.now().toString(),
      patientId: "1",
      title: formData.title,
      category: formData.category,
      date: new Date(formData.date),
      doctorName: formData.doctorName,
      hospital: formData.hospital,
      description: formData.description,
      priority: formData.priority,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      fileUrl: uploadedFile ? URL.createObjectURL(uploadedFile) : undefined,
    };

    onUpload(newReport);

    // Reset form
    setFormData({
      title: "",
      category: "lab",
      date: new Date().toISOString().split("T")[0],
      doctorName: "",
      hospital: "",
      description: "",
      priority: "medium",
      tags: "",
    });
    setUploadedFile(null);
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 mb-8 flex items-center shadow-lg">
          <div className="bg-emerald-500 p-2 rounded-xl mr-4">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-emerald-800 text-lg">
              Report uploaded successfully!
            </p>
            <p className="text-emerald-600">
              Your medical report has been added to your history.
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-3">Upload Medical Report</h1>
        <p className="text-teal-100 text-lg">
          Add a new medical report to your centralized health record.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* File Upload Area */}
          <div className="lg:col-span-2">
            <label className="block text-lg font-bold text-gray-800 mb-4">
              Upload Report File (Optional)
            </label>
            <div
              className={`border-3 border-dashed rounded-2xl p-10 text-center transition-all duration-300 ${
                dragOver
                  ? "border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 scale-105"
                  : uploadedFile
                  ? "border-emerald-400 bg-gradient-to-br from-emerald-50 to-green-50"
                  : "border-gray-300 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {uploadedFile ? (
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-xl">
                    <FileText className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">
                      {uploadedFile.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-red-500 hover:text-red-700 p-3 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl mx-auto w-fit mb-6">
                    <Upload className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-xl font-bold text-gray-900 mb-3">
                    Drop your report here, or click to browse
                  </p>
                  <p className="text-gray-600 mb-6">
                    Supports: PDF, JPG, PNG, DOC, DOCX (Max: 10MB)
                  </p>
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl cursor-pointer font-bold transition-all duration-200 inline-block shadow-lg hover:shadow-xl"
                  >
                    Choose File
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Report Title */}
          <div className="lg:col-span-2">
            <label className="block text-lg font-bold text-gray-800 mb-3">
              Report Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="e.g., Complete Blood Count (CBC)"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3">
              Report Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2  text-blue-500 h-6 w-6" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 border-2 text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              />
            </div>
          </div>

          {/* Doctor Name */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3">
              Doctor Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 h-6 w-6" />
              <input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleInputChange}
                required
                placeholder="e.g., Dr. Anjali Gupta"
                className="w-full pl-12 pr-4 py-3 border-2 text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              />
            </div>
          </div>

          {/* Hospital */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-3">
              Hospital/Clinic *
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 h-6 w-6" />
              <input
                type="text"
                name="hospital"
                value={formData.hospital}
                onChange={handleInputChange}
                required
                placeholder="e.g., City General Hospital"
                className="w-full pl-12 pr-4 py-3 border-2 text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              />
            </div>
          </div>

          {/* Priority */}
          <div className="lg:col-span-2">
            <label className="block text-lg font-bold text-gray-800 mb-4">
              Priority Level *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {priorities.map((priority) => (
                <label
                  key={priority.value}
                  className={`border-3 rounded-2xl p-4 cursor-pointer transition-all duration-200 ${
                    formData.priority === priority.value
                      ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg scale-105"
                      : "border-gray-300 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={priority.value}
                    checked={formData.priority === priority.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <AlertCircle
                      className={`h-8 w-8 mx-auto mb-3 ${priority.color}`}
                    />
                    <span className={`font-bold text-lg ${priority.color}`}>
                      {priority.label}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <label className="block text-lg font-bold text-gray-800 mb-3">
              Description/Notes
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Add any additional notes or description about this report..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
            />
          </div>

          {/* Tags */}
          <div className="lg:col-span-2">
            <label className="block text-lg font-bold text-gray-800 mb-3">
              Tags (Optional)
            </label>
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 h-6 w-6" />
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="e.g., routine, blood-work, normal (comma separated)"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              />
            </div>
            <p className="text-gray-600 mt-2">
              Separate multiple tags with commas for better organization
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-200 flex items-center shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <Upload className="h-6 w-6 mr-3" />
            Upload Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
