import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import Contact from "../pages/ContactUs";
import About from "../pages/AboutUs";
import Service from "../pages/Services";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PatientDashboard = lazy(() => import("../pages/Patient/Dashboard"));
const DoctorDashboard = lazy(() => import("../pages/Doctor/Dashboard"));
const HospitalDashboard = lazy(() => import("../pages/Hospital/Dashboard"));

const LoginPatient = lazy(() => import("../pages/Patient/Login"));
const LoginHospital = lazy(() => import("../pages/Hospital/Login"));
const LoginA = lazy(() => import("../login/aiAssistent"));
const LoginDoctor = lazy(() => import("../pages/Doctor/Login"));
const HospitalHomePage = lazy(() => import("../pages/Hospital/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/patient-dashboard",
    element: <PatientDashboard />,
  },
  { path: "/doctor-dashboard", element: <DoctorDashboard /> },
  { path: "/hospital-dashboard", element: <HospitalDashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Service /> },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login-patient",
    element: <LoginPatient />,
  },
  {
    path: "/login-hospital",
    element: <LoginHospital />,
  },
  {
    path: "/logina",
    element: <LoginA />,
  },
  {
    path: "/login-doctor",
    element: <LoginDoctor />,
  },
  {
    path: "/hospital",
    element: <HospitalHomePage />,
  },
]);

export default router;
