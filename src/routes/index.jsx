import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
// const Home = lazy(() => import("../pages/home"));
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Test from "../pages/Test";
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
]);

export default router;
