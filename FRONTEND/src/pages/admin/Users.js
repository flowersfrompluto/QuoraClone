import DashboardNav from "../../components/DashboardNav";
import SideBar from "../../components/SideBar";
import { ImBin } from "react-icons/im";

function Users() {
    return (
        <div>
            <DashboardNav />
            <div className="body flex">
                <div>
                    <SideBar />
                </div>
                <div className="right">
                    <div className="userTable">
                        <table id="myUserTable">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>NAME</th>
                                    <th>PHONE NUMBER</th>
                                    <th>EMAIL</th>
                                    <th>PASSWORD</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>Harry Max</th>
                                    <th>08185931389</th>
                                    <th>harry@mail.com</th>
                                    <th>********</th>
                                    <th>
                                        {/* <button>Delete</button> */}
                                        <button><ImBin /></button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Users;
