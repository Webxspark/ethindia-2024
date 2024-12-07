import {Outlet} from "react-router-dom";
import DashboardNav from "@/components/core/dashboard-nav.tsx";

const DashboardLayout = () => {
    return (
        <div className={'mt-6 mx-10'}>
            <DashboardNav parent={"dashboard"} />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;