import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { GlobalContext } from "../context/Context";

function Login() {

  const navigate = useNavigate();
  const [uEmail, setuEmail] = useState("");
  const [uPassword, setuPassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);
  const { currentUser } = useContext(GlobalContext)

  const loginForm = async (e) => {
    e.preventDefault();
    if (uEmail === "" || uPassword === "") {
      return setCheckValue(true);
    }
    try {
      if (uEmail === "" || uPassword === "") {
        return setCheckValue(true);
      }
      const login_obj = {
        email: uEmail,
        password: uPassword
      }
      const res = await fetch("http://localhost:4000/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/JSON"
          },
          body: JSON.stringify(login_obj)
        })
      const data = await res.json()

      localStorage.setItem("loggedinuser", JSON.stringify(data))
      console.log(data)
      alert(res.ok)
      // alert("Login Successful!")
      setuEmail("");
      setuPassword("");
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div className="login">
        <form action="" className="form">
          <p className="info">Login</p>
          <div className="formGroup topLabel">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" value={uEmail} onChange={(e) => setuEmail(e.target.value)} />
            {checkValue === true && uEmail === "" ? <p className="errorTxt">Email Required!</p> : null}
          </div>
          <div className="formGroup">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" value={uPassword} onChange={(e) => setuPassword(e.target.value)} />
            {checkValue === true && uPassword === "" ? <p className="errorTxt">Password Required! <span><NavLink className="resetPassword">Reset Password?</NavLink></span></p> : null}
          </div>
          <div className="postBtn flex">
            <span>
              <NavLink className="forgotPass">
                Forgot password?
              </NavLink>
            </span>
            <button className="addQuestBtn" onClick={loginForm}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
