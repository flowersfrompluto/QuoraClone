// import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.png"
import Login from "../components/Login";
import SignUp from "../components/SignUp";



function Account() {

  return (
    <div className="account_page">
      <div className="account_items">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <p>A place to share knowledge and better understand the world</p>
        </div>
        <div className="account_grid flex">
          <div className="signUpComponent">
            <SignUp/>
          </div>
          <div className="border">
            <hr />
          </div>
          <div className="loginComponent">
            <Login/>
          </div>
        </div>
        <span className="terms">By continuing you indicate that you agree to Quora’s <NavLink className="lang">Terms of Service</NavLink> and <NavLink className="lang">Privacy Policy</NavLink>.</span>
        <div className="accounts_lang">
          <p>New: <span className="lang">العربية</span>, <span className="lang">עברית</span>, <span className="lang">polski</span>, <span className="lang">ગુજરાતી</span>, <span className="lang">ಕನ್ನಡ</span>, <span className="lang">മലയാളം</span> and <span className="lang">తెలుగు</span></p>
        </div>
        <div className="accountFoot">
          <ul >
            <li>
              <NavLink className="link">About</NavLink>
            </li>
            <li className="bullet">•</li>
            <li>
              <NavLink className="link">Careers</NavLink>
            </li>
            <li className="bullet">•</li>
            <li>
              <NavLink className="link">Privacy</NavLink>
            </li>
            <li className="bullet">•</li>
            <li>
              <NavLink className="link">Terms</NavLink>
            </li>
            <li className="bullet">•</li><li>
              <NavLink className="link">Contact</NavLink>
            </li>
            <li className="bullet">•</li><li>
              <NavLink className="link">Languages</NavLink>
            </li>
            <li className="bullet">•</li>
            <li>
              <NavLink className="link">Your Ad Choices</NavLink>
            </li>
            <li className="bullet">•</li>
            <li>
              <NavLink className="link">Press</NavLink>
            </li>
            <li className="bullet">•</li>
            <li>© Quora, Inc. 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Account;
