import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import PopUp from "../components/PopUp";

import { IoCloseOutline } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import logo from "../images/logo.png"

// REACT ICONS
import { FaUser } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { MdGames, MdOutlinePsychology, MdOutlineSportsKabaddi, MdCameraRoll, MdOutlineHistory, MdOutlineAdd } from "react-icons/md";
import { GiMusicSpell } from "react-icons/gi";
import { TiSocialAtCircular } from "react-icons/ti";
import { PiNotePencilThin, PiArrowFatUpThin, PiArrowFatDownThin } from "react-icons/pi";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { LiaNewspaperSolid } from "react-icons/lia";
import { HiUserGroup } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";


// IMPORTED IMAGES
import img1 from "../images/img (3).jpg"
import profile1 from "../images/icons/1.jpg"
import profile2 from "../images/icons/2.jpg"
import profile3 from "../images/icons/13.jpg"



function Post() {

  const [togglePost, settogglePost] = useState(false);
  const [toggleReply, settoggleReply] = useState(false);

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
      <div>
        <nav className="flex nav">
          <div>
            <ul className="nav_menu">
              <li className="logo">
                <NavLink to="/" className="nav-link">
                  <img src={logo} alt="Quora Logo" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-link"><IoMdHome /></NavLink>
              </li>
              <li>
                <NavLink to="/following" className="nav-link"><LiaNewspaperSolid /></NavLink>
              </li>
              <li>
                <NavLink to="/answer" className="nav-link"><PiNotePencilThin /></NavLink>
              </li>
              <li>
                <NavLink to="/spaces" className="nav-link"><HiUserGroup /></NavLink>
              </li>
              <li>
                <NavLink to="/notification" className="nav-link"><FaBell /></NavLink>
              </li>
              <li className="navBtn">
                <input type="text" placeholder="Search Quora" />
              </li>
              <li className="navBtn">
                <button className="tryQuora">Try Quora+</button>
              </li>
              <li>
                <NavLink to="/profile" className="nav-link"><FaUser /></NavLink>
              </li>
              <li>
                <NavLink to="/language" className="nav-link"><CiGlobe /></NavLink>
              </li>
              <li className="navBtn">
                <button className="addQuestion" onClick={() => settogglePost(!togglePost)}>Add Question</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="page home flex">
          <div className="sidebar">
            <ul className="sideBarHead">
              <li>
                <NavLink className="link">
                  <span>
                    <MdOutlineAdd />
                  </span> Create Space</NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <CgGames />
                  </span> Video Games
                </NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <GiMusicSpell />
                  </span> Music
                </NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <MdOutlinePsychology />
                  </span> Psychology
                </NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <MdGames />
                  </span> PC Gaming
                </NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <MdOutlineSportsKabaddi />
                  </span> Sports
                </NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <MdCameraRoll />
                  </span> Photography
                </NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <MdOutlineHistory />
                  </span> History
                </NavLink>
              </li>
              <li>
                <NavLink className="link">
                  <span>
                    <TiSocialAtCircular />
                  </span> Social Network
                </NavLink>
              </li>
            </ul>

            <ul className="sidebarFoot">
              <div className="flex">
                <li>
                  <NavLink className="link">About</NavLink>
                </li>
                <li className="bullet">•</li>
                <li>
                  <NavLink className="link">Careers</NavLink>
                </li>
                <li className="bullet">•</li>
              </div>
              <div className="flex">
                <li>
                  <NavLink className="link">Terms</NavLink>
                </li>
                <li className="bullet">•</li>
                <li>
                  <NavLink className="link">Privacy</NavLink>
                </li>
                <li className="bullet">•</li>
              </div>
              <div className="flex">
                <li>
                  <NavLink className="link">Acceptable Use</NavLink>
                </li>
                <li className="bullet">•</li>
              </div>
              <div className="flex">
                <li>
                  <NavLink className="link">Advertise</NavLink>
                </li>
                <li className="bullet">•</li>
                <li>
                  <NavLink className="link">Press</NavLink>
                </li>
                <li className="bullet">•</li>
              </div>
              <li>
                <NavLink className="link">Your Ad Choices</NavLink>
              </li>
            </ul>
          </div>

          <div className="mainFeed">
            <div className="feed commentFeed">
              <div className="postBody">
                <div className="userInfo flex">
                  <div className="userName flex">
                    <div>
                      <Link to="/profile:id">
                        <img src={profile1} alt="Profile icon" />
                      </Link>
                    </div>
                    <div className="userDetails">
                      <div className="flex">
                        <p>True Love Conquers All</p>
                        <p className="bullet">•</p>
                        <button className="followBtn">Follow</button>
                      </div>
                      <div className="postedBy flex">
                        <p>Posted by <Link className="userLink">Ana Lorde</Link></p>
                        <span className="bullet">•</span>
                        <p>Oct 20</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="hideBtn">
                      <IoMdClose />
                    </button>
                  </div>
                </div>
                <div className="post">
                  <div className="postTxt">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus similique impedit officiis, rerum porro quidem laboriosam, optio dicta aliquid vitae tenetur, ullam veniam ipsam voluptatum adipisci quasi? Ab, libero! Facilis eius rem odio quidem commodi. Distinctio quae maiores eum unde rem, rerum corporis, recusandae voluptate harum nostrum voluptatem!</p>
                  </div>
                  <div className="postImage">
                    <img src={img1} alt="" />
                  </div>
                </div>
                <div className="actionBtns flex">
                  <div className="flex">
                    <button className="upVoteBtn flex">
                      <p className="arrowUp"><PiArrowFatUpThin /></p>
                      Upvote
                      <p className="bullet">•</p>
                      <p>100</p>
                    </button>
                    <button className="downVoteBtn">
                      <PiArrowFatDownThin />
                    </button>
                  </div>
                  <div className="atnBtn">
                    <div>
                      <button className="flex">
                        <BsArrowRepeat />
                        <p className="bullet">•</p>
                        <p>100</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="makeComment flex">
                <div className="commentIcon">
                  <Link to="/profile:id">
                    <img src={profile2} alt="Profile Icon" />
                  </Link>
                </div>
                <div className="commentInput">
                  {/* RESIZEABLE INPUT */}
                  <p className="resize">
                    <span class="textarea" role="textbox" contentEditable></span>
                  </p>
                </div>
                <div className="commentBtn">
                  <button>Add Comment</button>
                </div>
              </div>
              <div className="postBody">
                <div className="userInfo">
                  <div className="userName flex">
                    <div>
                      <Link to="/profile:id">
                        <img src={profile3} alt="" />
                      </Link>
                    </div>
                    <div className="userDetails">
                      <div className="postedBy flex">
                        <p>Posted by <Link className="userLink">Gerard Molliere</Link></p>
                        <span className="bullet">•</span>
                        <p>Oct 20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post">
                  <div className="postTxt">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam voluptates dignissimos qui provident ad voluptate quasi maxime! Dignissimos consequatur doloribus consectetur laborum, eum, dolorum exercitationem temporibus cum soluta quidem amet doloremque facere fugiat possimus tenetur inventore? Distinctio quisquam laborum neque aliquam culpa voluptatibus ipsa voluptatem. Quaerat fuga natus voluptatum laudantium quo quos assumenda ipsa culpa? Eum quia numquam quaerat cupiditate. Corrupti molestiae neque labore autem ea mollitia cupiditate unde!</p>
                  </div>
                </div>
                <div className="commentAtns flex">
                  <div className="singlePost flex">
                    <div className="flex">
                      <button className="upVoteBtn flex">
                        <p className="arrowUp"><PiArrowFatUpThin /></p>
                        <p className="bullet">•</p>
                        <p>100</p>
                      </button>
                      <button className="downVoteBtn">
                        <PiArrowFatDownThin />
                      </button>
                    </div>
                    <div className="replyBtn">
                      <button onClick={() => settoggleReply(!toggleReply)}>
                        Reply
                      </button>
                    </div>
                  </div>
                  <div className="deleteCommentBtn">
                    {/* <button>Delete</button> */}
                    <button onClick=""><ImBin /></button>
                  </div>
                </div>
                {toggleReply && (<div className="replyComment flex">
                    <div className="replyInput">
                      {/* RESIZEABLE INPUT */}
                      <p className="resize">
                        <span class="textarea" role="textbox" contentEditable></span>
                      </p>
                    </div>
                    <div className="replyBtn">
                      <button>Reply</button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>


          <div className="ads">empty</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
