// import { NavLink } from "react-router-dom";
// import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


// REACT ICONS
import { FaUser } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";

function CreatePost() {
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [checkValue, setCheckValue] = useState(false);
  const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
  const makePost = async (e) => {
    e.preventDefault();


    try {
      if (loggedinuser === null) {
        alert("Please Login or Sign Up to create a post");
        navigate("/account")
      }
      else {
        if (message === "") {
          setCheckValue(true);
        } else {
          let post_obj = {
            message: message
          };
          const res = await fetch("http://localhost:4000/api/v1/posts", {
            method: "Post",
            headers: {
              "content-type": "application/JSON"
            },
            body: JSON.stringify(post_obj)
          });
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div className="makePost">
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
          <textarea name="" id="" cols="10" rows="10" placeholder="Say something... " value={message} onChange={(e) => setMessage(e.target.value)}>
          </textarea>
          {checkValue === true && message === "" ? <p className="errorTxt">Post cannot be left empty</p> : null}
        </div>
        <div className="createPostAtn flex">
          <div>
            <input type="file" accept="image/png, image/gif, image/jpeg, video/mp4" />
          </div>
          <div className="postBtn">
            <button className="addQuestBtn" onClick={makePost}>Post</button>
          </div>
        </div>
      </div>
    </div >
  );
}


export default CreatePost;
