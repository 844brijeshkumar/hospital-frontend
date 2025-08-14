import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
// const Home = lazy(() => import("../pages/home"));
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Test from "../pages/Test";
import Loginp from "../login/patient"
import Loginh from "../login/hospital"
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
  
]);

export default router;
