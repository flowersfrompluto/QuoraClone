import likes from "../../images/likes.png"
import posts from "../../images/comments.png"
import users from "../../images/users.png"
import DashboardNav from "../../components/DashboardNav";
import SideBar from "../../components/SideBar";

function Dashboard() {
    return (
        <div>
            <DashboardNav />
            <div className="body flex">
                <div>
                    <SideBar />
                </div>
                <div className="right">
                    <div className="card">
                        <div className="cards users">
                            <div className="cardItems flex">
                                <div>
                                    <p>Total Users</p>
                                </div>
                                <div>
                                    <img src={users} alt="" />
                                </div>
                            </div>
                            <div className="cardIcon">
                                <h1>10,000</h1>
                            </div>
                        </div>
                        <div className="cards posts">
                            <div className="cardItems flex">
                                <div>
                                    <p>Total Posts</p>
                                </div>
                                <div>
                                    <img src={posts} alt="" />
                                </div>
                            </div>
                            <div className="cardIcon">
                                <h1>20,000</h1>
                            </div>
                        </div>
                        <div className="cards likes">
                            <div className="cardItems flex">
                                <div>
                                    <p>Total Likes</p>
                                </div>
                                <div>
                                    <img src={likes} alt="" />
                                </div>
                            </div>
                            <div className="cardIcon">
                                <h1>30,000</h1>
                            </div>
                        </div>
                    </div>
                    <div className="productTable">
                        <table className="myTable">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>NAME</th>
                                    <th>CATEGORY</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>DESCRIPTION</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="tBody">
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;