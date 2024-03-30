import DashboardNav from "../../components/DashboardNav";
import SideBar from "../../components/SideBar";
import { ImBin } from "react-icons/im";

function AllPosts() {
    return (
        <div>
            <DashboardNav />
            <div className="body flex">
                <div>
                    <SideBar />
                </div>
                <div className="right">
                    <div className="productTable">
                        <table id="myTable">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>POSTED BY</th>
                                    <th>MESSAGE</th>
                                    <th>DATE POSTED</th>
                                    <th>LIKES</th>
                                    <th>COMMENTS</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>Harry Max</th>
                                    <th>Today it a great day</th>
                                    <th>30/04/2024</th>
                                    <th>20</th>
                                    <th>3</th>
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

export default AllPosts;