import { NavLink } from "react-router-dom";
import { useState } from "react";
import PopUp from "../components/PopUp";

import { IoCloseOutline } from "react-icons/io5";
import logo from "../images/logo.png"

// REACT ICONS
import { FaUser } from "react-icons/fa";
import { PiNotePencilThin } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { LiaNewspaperSolid } from "react-icons/lia";
import { HiUserGroup } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";


function Profile() {

    const [togglePost, settogglePost] = useState(false);

    return (
        <div>
            {togglePost && (
                <div className="popUp">
                    <div className="postForm">
                        <div className="close">
                            <button onClick={() => settogglePost(!togglePost)}>
                                <IoCloseOutline />
                            </button>
                        </div>
                        <div className="atns flex">
                            <div className="linkTo">
                                <NavLink to="/" className="link">Add Question</NavLink>
                            </div>
                            <div className="linkTo">
                                <NavLink to="/" className="link">Create Post</NavLink>
                            </div>
                        </div>

                        <div>
                            <PopUp />
                        </div>
                        <div className="action flex">
                            <div className="postBtn">
                                <button className="closeBtn" onClick={() => settogglePost(!togglePost)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="">
                <nav className="flex profileNav">
                    <div>
                        <ul className="profileNav_menu">
                            <li className="logo">
                                <NavLink to="/" className="profileNav-link">
                                    <img src={logo} alt="Quora Logo" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="profileNav-link"><IoMdHome /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/following" className="profileNav-link"><LiaNewspaperSolid /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/answer" className="profileNav-link"><PiNotePencilThin /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/spaces" className="profileNav-link"><HiUserGroup /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/notification" className="profileNav-link"><FaBell /></NavLink>
                            </li>
                            <li className="navBtn">
                                <input type="text" placeholder="Search Quora" />
                            </li>
                            <li className="navBtn">
                                <button className="tryQuora">Try Quora+</button>
                            </li>
                            <li>
                                <NavLink to="/profile" className="profileNav-link"><FaUser /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/language" className="profileNav-link"><CiGlobe /></NavLink>
                            </li>
                            <li className="navBtn">
                                <button className="addQuestion" onClick={() => settogglePost(!togglePost)}>Add Question</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="profile">
                <h1>hello world</h1>
            </div>
        </div>
    )
};

export default Profile;