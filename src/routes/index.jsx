import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
// const Home = lazy(() => import("../pages/home"));
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Test from "../pages/Test";
import Loginp from "../login/patient"
import Loginh from "../login/hospital"
import LoginA from "../login/aiAssistent"
import LoginD from "../login/doctor"
import HomeH from "../pages/HospitalPage"
// const PageNotFound = lazy(() => import("../component/PageNotFound"));

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
