import { Link } from "react-router-dom";
// import Button from "../components/Button";
// import { useEffect, useState } from "react";


// REACT ICONS
import { FaUser } from "react-icons/fa";

function CreatePost() {

  return (
    <div>
      <div className="question">
        <Link to="/createpost">Add Question</Link>
        <div className="tips">
          <b>Tips on getting good answers quickly</b>
          <ul>
            <li>Make sure your question has not been asked already</li>
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </ul>
        </div>
        <div className="flex">
          <p><FaUser /></p>
          <span>arrow</span>
          <select name="" id="">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div>
          <textarea name="" id="" cols="10" rows="10" placeholder="Start your question with 'What', 'How', 'Why', etc. ">

          </textarea>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
