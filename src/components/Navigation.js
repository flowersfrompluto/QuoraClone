// import Button from "./Button";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { LiaNewspaperSolid } from "react-icons/lia";
import { FaBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { PiNotePencilThin } from "react-icons/pi";



function Navigation() {
  return (
    <nav className="flex nav">
      <div>
        <ul className="nav_menu">
          <li className="logo">
            <Link to="/" className="nav-link">
              <img src={logo} alt="PropertiesHub Logo"/>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link"><IoMdHome /></Link>
          </li>
          <li>
            <Link to="/properties" className="nav-link"><LiaNewspaperSolid /></Link>
          </li>
          <li>
            <Link to="/agents" className="nav-link"><PiNotePencilThin /></Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link"><HiUserGroup /></Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link"><FaBell /></Link>
          </li>
          <li>
            <input type="text" placeholder="Search Quora"/>
          </li>
          <li>
            <button>Try Quora+</button>
          </li>
          <li>
            <Link to="/blog" className="nav-link"><FaUser /></Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link"><CiGlobe /></Link>
          </li>
          <li>
            <button>Add Question</button>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navigation;
