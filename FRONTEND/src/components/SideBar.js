import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";


function SideBar() {
    return (
        <div className="left">
            <div className="user">
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    Dashboard<span className="span"><RxDoubleArrowRight /></span></NavLink>
            </div>
            <div className="down">
                <div className="user">
                    <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        Users<span className="span"><RxDoubleArrowRight /></span></NavLink>
                </div>
                <div className="user">
                    <NavLink to="/usersignup" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        Create User <span className="span"><RxDoubleArrowRight /></span></NavLink>
                </div>
                <div className="user">
                    <NavLink to="/adminsignup" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        Create Admin <span className="span"><RxDoubleArrowRight /></span></NavLink>
                </div>
                <div className="user">
                    <NavLink to="/allposts" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        All Posts<span className="span"><RxDoubleArrowRight /></span></NavLink>
                </div>
                <div className="exit">
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
};

export default SideBar;