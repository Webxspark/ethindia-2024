import {createBrowserRouter} from "react-router-dom";
import App from "@/App.tsx";
import LandingPage from "@/pages/LandingPage.tsx";
import DashboardLayout from "@/layouts/dashboard-layout.tsx";
import HomePage from "@/pages/HomePage";
import NewCoinPage from "@/pages/NewCoinPage";
import MarketplacePage from "@/pages/MarketPlacePage";
import ProfilePage from "@/pages/ProfilePage";
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
                element: <HomePage />
            },
            {
                path: "/dashboard/new-coin",
                element: <NewCoinPage />
            },
            {
                path: "/dashboard/marketplace",
                element: <MarketplacePage />
            },
            {
                path: "/dashboard/profile",
                element: <ProfilePage />
            }
        ]
    }
])

export {router};