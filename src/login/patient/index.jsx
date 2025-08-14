
import React, { useState } from 'react';

// The main App component that renders the authentication page.
export default function index() {
    // State to toggle between the Login and Signup forms.
    const [isLogin, setIsLogin] = useState(true);
    // State to hold and display messages to the user (e.g., success or error).
    const [message, setMessage] = useState({ text: '', type: '' });

    // Handle form submission for the Signup form.
    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('signup-name');
        const phone = formData.get('signup-phone');
        const gmail = formData.get('signup-gmail');
        const aadhaar = formData.get('signup-aadhaar');
        const password = formData.get('signup-password');

        console.log('Attempting to sign up with:', { name, phone, gmail, aadhaar, password });

        // --- START OF BACKEND INTEGRATION POINT ---
        // In a real application, you would make an API call here to your backend.
        // Your backend would then store this data in your Neon PostgreSQL database.
        // You would need to handle hashing the password on the server-side before storing it.
        try {
            // Placeholder for a successful API call
            // const response = await fetch('/api/signup', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, phone, gmail, aadhaar, password })
            // });
            // const result = await response.json();

            // if (response.ok) {
            //     // Handle success
            // } else {
            //     // Handle error
            // }

            // Simulate a successful registration
            setMessage({ text: 'Registration successful! You can now log in.', type: 'success' });
            e.target.reset(); // Reset form fields
            setTimeout(() => {
                setIsLogin(true); // Redirect to login after 2 seconds
                setMessage({ text: '', type: '' });
            }, 2000);
        } catch (error) {
            console.error('Signup failed:', error);
            setMessage({ text: 'Registration failed. Please try again.', type: 'error' });
        }
        // --- END OF BACKEND INTEGRATION POINT ---
    };

    // Handle form submission for the Login form.
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const aadhaar = formData.get('login-aadhaar');
        const password = formData.get('login-password');

        console.log('Attempting to log in with:', { aadhaar, password });

        // --- START OF BACKEND INTEGRATION POINT ---
        // Here, you would make an API call to your backend to verify the user's credentials.
        // On the backend, you would:
        // 1. Check if the Aadhaar number exists in your Neon PostgreSQL database.
        // 2. Compare the provided password with the stored hashed password.
        // 3. If credentials are valid, generate and send an OTP to the user's registered phone and Gmail.
        // 4. Return a response to the front end indicating success and a pending OTP verification.
        try {
            // Placeholder for a successful API call
            // const response = await fetch('/api/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ aadhaar, password })
            // });
            // const result = await response.json();

            // if (response.ok) {
            //     // Handle success, maybe show a new form for OTP
            // } else {
            //     // Handle error
            // }

            // Simulate a successful login and OTP request
            setMessage({ text: 'Login successful! OTP sent to your registered Gmail and Phone number.', type: 'success' });
            // In a real app, you would now show a new form for the user to enter the OTP.
        } catch (error) {
            console.error('Login failed:', error);
            setMessage({ text: 'Invalid Aadhaar number or password. Please try again.', type: 'error' });
        }
        // --- END OF BACKEND INTEGRATION POINT ---
    };

    return (
        <div className="bg-gradient-to-br from-[#7DB1AD] to-white min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200">
                    <button
                        onClick={() => {
                            setIsLogin(true);
                            setMessage({ text: '', type: '' });
                        }}
                        className={`py-2 px-4 text-center font-semibold focus:outline-none transition-colors duration-200 border-b-2
                            ${isLogin
                                ? 'text-gray-700 border-indigo-600'
                                : 'text-gray-400 border-transparent hover:text-indigo-600'
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => {
                            setIsLogin(false);
                            setMessage({ text: '', type: '' });
                        }}
                        className={`py-2 px-4 text-center font-semibold focus:outline-none transition-colors duration-200 border-b-2
                            ${!isLogin
                                ? 'text-gray-700 border-indigo-600'
                                : 'text-gray-400 border-transparent hover:text-indigo-600'
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Conditional Rendering of Forms */}
                {isLogin ? (
                    // Login Form
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Login with Aadhaar</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label htmlFor="login-aadhaar" className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
                                <input type="text" id="login-aadhaar" name="login-aadhaar" placeholder="Enter your 12-digit Aadhaar number" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" required pattern="[0-9]{12}" />
                            </div>
                            <div>
                                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="login-password" name="login-password" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" required />
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
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Create an Account</h2>
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div>
                                <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="signup-name" name="signup-name" placeholder="Enter your full name" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" required />
                            </div>
                            <div>
                                <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="signup-phone" name="signup-phone" placeholder="Enter your phone number" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" required pattern="[0-9]{10}" />
                            </div>
                            <div>
                                <label htmlFor="signup-gmail" className="block text-sm font-medium text-gray-700">Gmail Address</label>
                                <input type="email" id="signup-gmail" name="signup-gmail" placeholder="Enter your Gmail address" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" required />
                            </div>
                            <div>
                                <label htmlFor="signup-aadhaar" className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
                                <input type="text" id="signup-aadhaar" name="signup-aadhaar" placeholder="Enter your 12-digit Aadhaar number" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" required pattern="[0-9]{12}" />
                            </div>
                            <div>
                                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Create Password</label>
                                <input type="password" id="signup-password" name="signup-password" placeholder="Create a strong password" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200" required minLength="8" />
                            </div>
                            {message.text && (
                                <div
                                    className={`p-3 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                    role="alert"
                                >
                                    {message.text}
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

