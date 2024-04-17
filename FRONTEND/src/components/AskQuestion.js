// import { useNavigate } from "react-router-dom"
// import Button from "../components/Button"
// import { NavLink } from "react-router-dom";
// import { useState, useContext } from "react"
// import { GlobalContext } from "../context/context";

// REACT ICONS
import { FaUser } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";


function AskQuestion() {

  return (
    <div>
      <div className="question">
        <div className="tipped">
          <div className="tips">
            <b>Tips on getting good answers quickly</b>
            <ul>
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <p><FaUser /></p>
          <span>
            <RxTriangleRight />
          </span>
          <select name="" id="">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div className="inputTxt">
          <textarea name="" id="" cols="5" rows="5" placeholder="Start your question with 'What', 'How', 'Why', etc. ">
          </textarea>
        </div>
        <div className="createPostAtn flex">
          <div className="postBtn">
            <button className="addQuestBtn" >Ask</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
