// import { NavLink } from "react-router-dom";
// import Button from "../components/Button";
import { useState } from "react";


// REACT ICONS
import { FaUser } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";

function CreatePost() {

  const [message, setMessage] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const makePost = async (e) => {
    e.preventDefault();
    if (message === "") {
      setCheckValue(true);
    }
    // try {
    //   e.preventDefault();
    //   if (uFname === "" || uLname === "" || uEmail === "" || uPhone === "" || uPassword === "") {
    //     setCheckValue(true);
    //   } else {
    //     let user_obj = {
    //       first_name: uFname,
    //       last_name: uLname,
    //       email: uEmail,
    //       phone: uPhone,
    //       password: uPassword,
    //     };
    //     const res = await fetch("http://property.reworkstaging.name.ng/v1/users", {
    //       method: "Post",
    //       headers: {
    //         "content-type": "application/JSON"
    //       },
    //       body: JSON.stringify(user_obj)
    //     });
    //     const users = await res.json();
    //     console.log(users)
    //     alert("Account Created Successful")
    //     navigate("/login")
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <div className="makePost">
        <h1>CREATE POST</h1>
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
