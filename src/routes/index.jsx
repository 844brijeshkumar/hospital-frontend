import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoute, PublicRoute } from "../utils"; // ⬅️ import it

import Contact from "../pages/ContactUs";
import About from "../pages/AboutUs";
import Service from "../pages/Services";
import PrivacyPolicy from "../pages/Privacy";
import TermsOfService from "../pages/Terms";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PatientDashboard = lazy(() => import("../pages/Patient/Dashboard"));
const DoctorDashboard = lazy(() => import("../pages/Doctor/Dashboard"));
const AdminDashboard = lazy(() => import("../pages/Admin/adminPortal.jsx"));
const HospitalDashboard = lazy(() =>
  import("../pages/Hospital/Dashboard/index")
);

const LoginPatient = lazy(() => import("../pages/Patient/Login"));
const LoginHospital = lazy(() => import("../pages/Hospital/Login"));
const LoginA = lazy(() => import("../login/aiAssistent"));
const LoginDoctor = lazy(() => import("../pages/Doctor/Login"));
const HospitalHomePage = lazy(() => import("../pages/Hospital/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
    ),
  },
  {
    path: "/patient/dashboard",
    element: (
      <PrivateRoute allowedRoles={["patient"]} redirectTo="/login/patient">
        <PatientDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/doctor/dashboard",
    element: (
      <PrivateRoute allowedRoles={["doctor"]} redirectTo="/login/doctor">
        <DoctorDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/hospital/dashboard",
    element: (
      <PrivateRoute allowedRoles={["hospital"]} redirectTo="/login/hospital">
        <HospitalDashboard />
      </PrivateRoute>
    ),
  },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Service /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/admin", element: <AdminDashboard /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  {
    path: "/login/patient",
    element: (
      <PublicRoute>
        <LoginPatient />
      </PublicRoute>
    ),
  },
  {
    path: "/login/hospital",
    element: (
      <PublicRoute>
        <LoginHospital />{" "}
      </PublicRoute>
    ),
  },
  { path: "/logina", element: <LoginA /> },
  {
    path: "/login/doctor",
    element: (
      <PublicRoute>
        <LoginDoctor />
      </PublicRoute>
    ),
  },
  {
    path: "/hospital",
    element: (
      <PublicRoute>
        <HospitalHomePage />
      </PublicRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
