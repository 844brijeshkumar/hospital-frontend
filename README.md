# MedLock - React Native Mobile App

A comprehensive healthcare mobile application for managing medical records, built with React Native.

## Features

- **Patient Portal**: Manage appointments, medical records, and health information
- **Doctor Dashboard**: Access patient records and upload medical reports
- **Hospital Management**: Manage doctors, patients, and reports
- **AI Assistant**: Get instant medical advice (Coming Soon)
- **Secure Authentication**: Role-based access control for patients, doctors, and hospitals
- **Medical History**: View and track all medical reports
- **Emergency Contacts**: Quick access to emergency contact information

## Tech Stack

- React Native 0.76.7
- React Navigation 7.x
- Redux Toolkit for state management
- AsyncStorage for local data persistence
- Axios for API calls
- React Native Vector Icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install iOS dependencies (macOS only):
```bash
cd ios && pod install && cd ..
```

3. Configure environment variables:
Create a `.env` file with your API base URL:
```
VITE_BASE_URL=your_api_url_here
```

## Running the App

### Android
```bash
npm run android
```

### iOS (macOS only)
```bash
npm run ios
```

### Metro Bundler
```bash
npm start
```

## Project Structure

```
src/
├── api/              # API utilities and auth functions
├── navigation/       # React Navigation setup
├── screens/          # All app screens
│   ├── Auth/         # Login screens
│   ├── Patient/      # Patient dashboard
│   ├── Doctor/       # Doctor dashboard
│   ├── Hospital/     # Hospital dashboard
│   ├── Public/       # Public pages
│   ├── Home/         # Home screen
│   └── AI/           # AI Assistant
├── store/            # Redux store and slices
├── styles/           # Theme and colors
└── utils/            # Helper functions and mock data
```

## User Roles

### Patient
- View and manage personal medical records
- Access medical history
- Update profile information
- Emergency contact management

### Doctor
- Upload and assign medical reports
- Manage patient information
- Access patient records

### Hospital
- Manage doctors
- Oversee medical reports
- Update hospital information

## Authentication

The app uses token-based authentication with role-based access control:
- Patient login with Aadhaar number
- Doctor login with email
- Hospital login with NPI ID

## Security

- Encrypted data storage using AsyncStorage
- Secure API communication
- Role-based access control
- Token-based authentication

## License

All rights reserved © 2025 MedLock
