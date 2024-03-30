// import Button from "./Button";
import logo from "../images/logo.png"
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

// REACT ICONS
import { IoMdHome } from "react-icons/io";
import { LiaNewspaperSolid } from "react-icons/lia";
import { FaBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { PiNotePencilThin } from "react-icons/pi";



function Navigation() {

  const [togglePost, settogglePost] = useState(false);

  return (
    <nav className="flex nav">
      <div>
        <ul className="nav_menu">
          <li className="logo">
            <Link to="/">
              <img src={logo} alt="Quora Logo" />
            </Link>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><IoMdHome /></NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><LiaNewspaperSolid /></NavLink>
          </li>
          <li>
            <NavLink to="/answer" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><PiNotePencilThin /></NavLink>
          </li>
          <li>
            <NavLink to="/spaces" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><HiUserGroup /></NavLink>
          </li>
          <li>
            <NavLink to="/notification" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><FaBell /></NavLink>
          </li>
          <li className="navBtn">
            <input type="text" placeholder="Search Quora" />
          </li>
          <li className="navBtn">
            <button className="tryQuora">Try Quora+</button>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><FaUser /></NavLink>
          </li>
          <li>
            <NavLink to="/language" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><CiGlobe /></NavLink>
          </li>
          <li className="navBtn">
            <button className="addQuestion" onClick={() => settogglePost(!togglePost)}>Add Question</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
