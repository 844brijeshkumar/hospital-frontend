import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Test = lazy(() => import("../pages/Test"));
const Loginp = lazy(() => import("../login/patient"));
const Loginh = lazy(() => import("../login/hospital"));
const LoginA = lazy(() => import("../login/aiAssistent"));
const LoginD = lazy(() => import("../login/doctor"));
const HomeH = lazy(() => import("../pages/HospitalPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path:"/loginp",
    element:<Loginp/>,
  },
  {
    path:"/loginh",
    element:<Loginh/>
  },
  {
    path: "/logina",
    element:<LoginA/>
  },
  {
    path: "/logind",
    element:<LoginD/>
  },
  {
    path: "/homeh",
    element:<HomeH/>
  },
]);

export default router;
