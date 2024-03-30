// import { NavLink } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Admin() {
    return (
        <div>
            <DashboardNav />
            <div className="body flex">
                <div>
                    <SideBar />
                </div>
                <div className="right">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Admin;