import logo from "../images/logo.png"
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoCloseOutline } from "react-icons/io5";


function DashboardNav() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [checkValue, setCheckValue] = useState(false)
    const [showLogin, setShowLogin] = useState(false)


    const submitForm = async (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setCheckValue(true);
        }
        // try {
        //   e.preventDefault();
        //   if (uFname === "" || uLname === "" || uEmail === "" || uPhone === "" || uPassword === "") {
        //     setCheckValue(true);
        //   } else {
        //     let user_obj = {
        //       first_name: uFname,
        //       last_name: uLname,
        //       email: uEmail,
        //       phone: uPhone,
        //       password: uPassword,
        //     };
        //     const res = await fetch("http://property.reworkstaging.name.ng/v1/users", {
        //       method: "Post",
        //       headers: {
        //         "content-type": "application/JSON"
        //       },
        //       body: JSON.stringify(user_obj)
        //     });
        //     const users = await res.json();
        //     console.log(users)
        //     alert("Account Created Successful")
        //     navigate("/login")
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
    };

    return (
        <div>
            <nav>
                <div className="navBar flex">
                    <div className="logo">
                        <NavLink to="/admin" className="nav-link">
                            <img src={logo} alt="Quora Logo" />
                        </NavLink>
                    </div>
                    <div>
                        <input type="search" placeholder="search" className="search" />
                    </div>
                    <div className="acct">
                        <button onClick={() => setShowLogin(!showLogin)}>Login</button>
                    </div>
                </div>
            </nav>
            {showLogin && (
                <div className="dashboardLogin">
                    <div className="dashboardForm">
                        <div className="close">
                            <button onClick={() => setShowLogin(!showLogin)}><IoCloseOutline className="cancel" /></button>
                        </div>
                        <form action="">
                            <div className="formGroup">
                                <label htmlFor="">Enter Username</label>
                                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                {checkValue === true && username === "" ? <p className="errorTxt">Username Required!</p> : null}
                            </div>
                            <div className="formGroup">
                                <label htmlFor="">Enter Password</label>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {checkValue === true && password === "" ? <p className="errorTxt">Password Required!</p> : null}
                            </div>
                            <div className="dashboardAtn flex">
                                <div>
                                    <p>Forgot Password? <NavLink className="click">Click Here</NavLink></p>
                                </div>
                                <div>
                                    <button onClick={submitForm}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
};

export default DashboardNav;