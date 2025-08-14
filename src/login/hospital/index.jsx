
import React, { useState } from 'react';

// The main App component that renders the hospital authentication page.
export default function index() {
    // State to toggle between the Login and Signup forms.
    const [isLogin, setIsLogin] = useState(true);
    // State to hold and display messages to the user (e.g., success or error).
    const [message, setMessage] = useState({ text: '', type: '' });
    // State to store the generated NPI ID and Password after signup.
    const [generatedCredentials, setGeneratedCredentials] = useState(null);
    // State to hold the selected organization from the single-select dropdown.
    const [selectedOrganization, setSelectedOrganization] = useState('');

    // List of example organizations for the dropdown.
    const organizations = [
        "World Health Organization",
        "Doctors Without Borders",
        "Red Cross",
        "United Nations Healthcare",
        "Global Health Council"
    ];

    // Handle form submission for the Signup form.
    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const hospitalName = formData.get('signup-hospital-name');
        const hospitalId = formData.get('signup-hospital-id');
        const selectedOrg = selectedOrganization; // Get the state directly.

        console.log('Attempting to sign up with:', { hospitalName, selectedOrg, hospitalId });

        // --- START OF BACKEND INTEGRATION POINT ---
        // In a real application, you would make an API call here to your backend.
        // The backend would handle storing this data and GENERATING a unique NPI ID and a secure password.
        try {
            // Placeholder for a successful API call and generated credentials
            // const response = await fetch('/api/hospital/signup', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ hospitalName, selectedOrg, hospitalId })
            // });
            // const result = await response.json();

            // Simulate a successful registration with generated credentials
            const newNpiId = `NPI-${Math.floor(Math.random() * 90000) + 10000}`;
            const newPassword = Math.random().toString(36).slice(-8); // Simple random password for simulation
            
            setGeneratedCredentials({ npiId: newNpiId, password: newPassword });
            setMessage({ text: 'Registration successful! Your credentials have been generated.', type: 'success' });

            e.target.reset(); // Reset form fields
            setSelectedOrganization(''); // Clear selected organization
            setTimeout(() => {
                setMessage({ text: '', type: '' });
            }, 5000);
        } catch (error) {
            console.error('Signup failed:', error);
            setMessage({ text: 'Registration failed. Please try again.', type: 'error' });
            setGeneratedCredentials(null);
        }
        // --- END OF BACKEND INTEGRATION POINT ---
    };

    // Handle form submission for the Login form.
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const npiId = formData.get('login-npi-id');
        const password = formData.get('login-password');

        console.log('Attempting to log in with:', { npiId, password });

        // --- START OF BACKEND INTEGRATION POINT ---
        // Here, you would make an API call to your backend to verify the hospital's credentials.
        try {
            // Placeholder for a successful API call
            // const response = await fetch('/api/hospital/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ npiId, password })
            // });
            // const result = await response.json();

            // Simulate a successful login and OTP request
            setMessage({ text: 'Login successful! OTP sent to your registered contact.', type: 'success' });
        } catch (error) {
            console.error('Login failed:', error);
            setMessage({ text: 'Invalid NPI ID or password. Please try again.', type: 'error' });
        }
        // --- END OF BACKEND INTEGRATION POINT ---
    };

    return (
        <div className="bg-gradient-to-br from-[#7DB1AD] to-white min-h-screen flex justify-center items-center p-4 text-black">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200">
                    <button
                        onClick={() => {
                            setIsLogin(true);
                            setMessage({ text: '', type: '' });
                            setGeneratedCredentials(null);
                        }}
                        className={`py-2 px-4 text-center font-semibold focus:outline-none transition-colors duration-200 border-b-2
                            ${isLogin
                                ? 'text-gray-700 border-[#7DB1AD]'
                                : 'text-gray-400 border-transparent hover:text-[#7DB1AD]'
                            }`}
                    >
                        Hospital Login
                    </button>
                    <button
                        onClick={() => {
                            setIsLogin(false);
                            setMessage({ text: '', type: '' });
                            setGeneratedCredentials(null);
                        }}
                        className={`py-2 px-4 text-center font-semibold focus:outline-none transition-colors duration-200 border-b-2
                            ${!isLogin
                                ? 'text-gray-700 border-[#7DB1AD]'
                                : 'text-gray-400 border-transparent hover:text-[#7DB1AD]'
                            }`}
                    >
                        Hospital Sign Up
                    </button>
                </div>

                {/* Conditional Rendering of Form*/}
                {isLogin ? (
                    // Login Form
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Login with NPI ID</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label htmlFor="login-npi-id" className="block text-sm font-medium text-gray-700">NPI ID</label>
                                <input type="text" id="login-npi-id" name="login-npi-id" placeholder="Enter your NPI ID" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#7DB1AD] focus:border-[#7DB1AD] transition-colors duration-200" required />
                            </div>
                            <div>
                                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="login-password" name="login-password" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#7DB1AD] focus:border-[#7DB1AD] transition-colors duration-200" required />
                            </div>
                            {message.text && (
                                <div
                                    className={`p-3 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                    role="alert"
                                >
                                    {message.text}
                                </div>
                            )}
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#7DB1AD] hover:bg-[#6B9E99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7DB1AD] transition-colors duration-200">Login</button>
                        </form>
                    </div>
                ) : (
                    // Signup Form
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Register Hospital</h2>
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div>
                                <label htmlFor="signup-hospital-name" className="block text-sm font-medium text-gray-700">Hospital Name</label>
                                <input type="text" id="signup-hospital-name" name="signup-hospital-name" placeholder="Enter full hospital name" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#7DB1AD] focus:border-[#7DB1AD] transition-colors duration-200" required />
                            </div>
                            <div>
                                <label htmlFor="signup-organized-where" className="block text-sm font-medium text-gray-700">Organization Provided</label>
                                <select
                                    id="signup-organized-where"
                                    name="signup-organized-where"
                                    value={selectedOrganization}
                                    onChange={(e) => setSelectedOrganization(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#7DB1AD] focus:border-[#7DB1AD] transition-colors duration-200"
                                >
                                    {organizations.map((org, index) => (
                                        <option key={index} value={org}>{org}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="signup-hospital-id" className="block text-sm font-medium text-gray-700">Hospital ID</label>
                                <input type="text" id="signup-hospital-id" name="signup-hospital-id" placeholder="Enter an existing internal ID" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#7DB1AD] focus:border-[#7DB1AD] transition-colors duration-200" required />
                            </div>
                            {message.text && (
                                <div
                                    className={`p-3 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                    role="alert"
                                >
                                    {message.text}
                                </div>
                            )}
                            {generatedCredentials && (
                                <div className="bg-indigo-50 p-4 rounded-lg space-y-2">
                                    <p className="text-sm font-medium text-gray-700">Your Generated Credentials:</p>
                                    <p className="font-mono text-xs text-gray-900">
                                        NPI ID: <span className="font-bold">{generatedCredentials.npiId}</span>
                                    </p>
                                    <p className="font-mono text-xs text-gray-900">
                                        Password: <span className="font-bold">{generatedCredentials.password}</span>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Please save these credentials securely. You can now use them to log in.
                                    </p>
                                </div>
                            )}
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#7DB1AD] hover:bg-[#6B9E99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7DB1AD] transition-colors duration-200">Sign Up</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

