import {createBrowserRouter} from "react-router-dom";
import App from "@/App.tsx";
import LandingPage from "@/pages/LandingPage.tsx";
import DashboardLayout from "@/layouts/dashboard-layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/landing",
        element: <LandingPage/>
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <>i'm dashboard</>
            },
            {
                path: "/dashboard/marketplace",
                element: <>i'm marketplace</>
            }
        ]
    }
])

export {router};