// import Button from "./Button";
// import { Link, Outlet } from "react-router-dom";

function Signup() {

  return (
    <div>
      {/* <div className="signup-main">

        <div className="signupBody flex">

          <div className="signUpBtn">
            <div className="signupTxt">
              <p>Click to select account type</p>
            </div>
            <div>
              <Link to="/signup/useraccount" className="nav-link">
                <Button title="Sign up as User" btnBg="#004274" btnColor="white" classN="userChange" border="none"></Button>
              </Link>
            </div>

            <div>
              <Link to="/signup/agentaccount" className="nav-link">
                <Button title="Sign up as Agent" btnBg="#004274" btnColor="white" classN="userChange" border="none"></Button>
              </Link>
            </div>

            <div>
              <Link to="/signup/admin" className="nav-link">
                <Button title="Sign up as Merchant" btnBg="#004274" btnColor="white" classN="userChange" border="none"></Button>
              </Link>
            </div>

          </div>

          <div className="signUpForms">
            <Outlet />
          </div>

        </div>
      </div> */}
    </div>
  );
}

export default Signup;
