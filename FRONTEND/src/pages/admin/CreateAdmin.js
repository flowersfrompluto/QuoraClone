import { useState } from "react";
import DashboardNav from "../../components/DashboardNav";
import SideBar from "../../components/SideBar";

function CreateAdmin() {
    const [username, setUsername] = useState("");
    const [uFname, setuFname] = useState("");
    const [uLname, setuLname] = useState("");
    const [uEmail, setuEmail] = useState("");
    const [uPhone, setUphone] = useState("");
    const [uPassword, setuPassword] = useState("");
    const [checkValue, setCheckValue] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        if (username === "" || uFname === "" || uLname === "" || uEmail === "" || uPhone === "" || uPassword === "") {
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
            <DashboardNav />
            <div className="body flex">
                <div>
                    <SideBar />
                </div>
                <div className="right">
                    <div className="signUp">
                        <form action="" className="form">
                            <p className="info">Admin Sign Up</p>
                            <div className="formGroup topLabel">
                                <label htmlFor="">Username</label>
                                <input maxlength="25" type="text" placeholder="First Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                                {checkValue === true && username === "" ? <p className="errorTxt">Username Required</p> : null}
                            </div>
                            <div className="formGroup topLabel">
                                <label htmlFor="">First Name</label>
                                <input maxlength="25" type="text" placeholder="First Name" value={uFname} onChange={(e) => setuFname(e.target.value)} />
                                {checkValue === true && uFname === "" ? <p className="errorTxt">First Name Required</p> : null}
                            </div>
                            <div className="formGroup">
                                <label htmlFor="">Last Name</label>
                                <input maxlength="25" type="text" placeholder="Last Name" value={uLname} onChange={(e) => setuLname(e.target.value)} />
                                {checkValue === true && uLname === "" ? <p className="errorTxt">Last Name Required</p> : null}
                            </div>
                            <div className="formGroup">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="Email" value={uEmail} onChange={(e) => setuEmail(e.target.value)} />
                                {checkValue === true && uEmail === "" ? <p className="errorTxt">Email Required!</p> : null}
                            </div>
                            <div className="formGroup">
                                <label htmlFor="">Phone Number</label>
                                <input type="number" placeholder="Phone Number" value={uPhone} onChange={(e) => setUphone(e.target.value)} />
                                {checkValue === true && uPhone === "" ? <p className="errorTxt">Phone Number Required</p> : null}
                            </div>
                            <div className="formGroup">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="Password" value={uPassword} onChange={(e) => setuPassword(e.target.value)} />
                                {checkValue === true && uPassword === "" ? <p className="errorTxt">Password Required!</p> : null}
                            </div>
                            <div className="postBtn flex">
                                <button className="addQuestBtn" onClick={submitForm}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAdmin;