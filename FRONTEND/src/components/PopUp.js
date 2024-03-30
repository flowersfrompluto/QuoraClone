// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// import { IoCloseOutline } from "react-icons/io5";
import CreatePost from "./CreatePost";
import AskQuestion from "./AskQuestion";



function PopUp() {

    return (
        <div className="createPopUp">
            <div className="relative">
                <CreatePost />
            </div>
            <div className="absolute">
                <AskQuestion />
            </div>
        </div>
    )
};

export default PopUp;