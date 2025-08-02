import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import TemplatesPage from "../pages/TemplatesPage";

const router  = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegistrationPage />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    },
    {
        path: "/templates",
        element: <PrivateRoute><TemplatesPage /></PrivateRoute>
    }
])


export default router