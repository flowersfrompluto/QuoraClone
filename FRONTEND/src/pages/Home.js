import { NavLink } from "react-router-dom";
import { useState } from "react";
import PopUp from "../components/PopUp";

import { IoCloseOutline } from "react-icons/io5";
import logo from "../images/logo.png"

// REACT ICONS
import { FaUser, FaRegComment } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { MdGames, MdOutlinePsychology, MdOutlineSportsKabaddi, MdCameraRoll, MdOutlineHistory, MdOutlineAdd } from "react-icons/md";
import { GiMusicSpell } from "react-icons/gi";
import { TiSocialAtCircular } from "react-icons/ti";
import { PiNotePencilThin, PiArrowFatUpThin, PiArrowFatDownThin } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { FaUserSecret, FaBell } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { LiaNewspaperSolid } from "react-icons/lia";
import { HiUserGroup } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";


// IMPORTED IMAGES
import img1 from "../images/img (3).jpg"
import img2 from "../images/img (2).jpg"
import img3 from "../images/img (1).jpg"


function Home() {

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
              {/* <div>
                <input type="file" accept="image/png, image/gif, image/jpeg, video/mp4" />
              </div> */}
              <div className="postBtn">
                <button className="closeBtn" onClick={() => settogglePost(!togglePost)}>Cancel</button>
                {/* <button className="addQuestBtn" >Post</button> */}
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
            <hr />
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
            <div className="newPost">
              <div className="topBtn flex">
                <p>
                  <FaUser />
                </p>
                <button onClick={() => settogglePost(!togglePost)}>What do you want to ask or share?</button>
              </div>
              <div className="createBtns flex">
                <button onClick={() => settogglePost(!togglePost)}>
                  <span><RiQuestionnaireLine /></span> Ask
                </button>
                <div className="line">I</div>
                <button>
                  <span><PiNotePencilThin /></span> Answer
                </button>
                <div className="line">I</div>
                <button onClick={() => settogglePost(!togglePost)}>
                  <span><LuPencil /></span> Post
                </button>
              </div>
            </div>

            <div className="feed">
              <div className="postBody">
                <div className="userInfo flex">
                  <div className="userName flex">
                    <div>
                      <img src="" alt="" />
                      <p><FaUserSecret /></p>
                    </div>
                    <div className="userDetails">
                      <div className="flex">
                        <p>True Love Conquers All</p>
                        <p className="bullet">•</p>
                        <button>Follow</button>
                      </div>
                      <div className="flex">
                        <p>Posted by Ana Lorde</p>
                        <p className="bullet">•</p>
                        <p>Oct 20</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button><IoMdClose /></button>
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
                  <div className="atnBtn flex">
                    <div>
                      <button className="flex">
                        <FaRegComment />
                        <p className="bullet">•</p>
                        <p>100</p>
                      </button>
                    </div>
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
              <div className="postBody">
                <div className="userInfo flex">
                  <div className="userName flex">
                    <div>
                      <img src="" alt="" />
                      <p><FaUserSecret /></p>
                    </div>
                    <div className="userDetails">
                      <div className="flex">
                        <p>True Love Conquers All</p>
                        <p className="bullet">•</p>
                        <button>Follow</button>
                      </div>
                      <div className="flex">
                        <p>Posted by Ana Lorde</p>
                        <p className="bullet">•</p>
                        <p>Oct 20</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button><IoMdClose /></button>
                  </div>
                </div>
                <div className="post">
                  <div className="postTxt">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus similique impedit officiis, rerum porro quidem laboriosam, optio dicta aliquid vitae tenetur, ullam veniam ipsam voluptatum adipisci quasi? Ab, libero! Facilis eius rem odio quidem commodi. Distinctio quae maiores eum unde rem, rerum corporis, recusandae voluptate harum nostrum voluptatem!</p>
                  </div>
                  <div className="postImage">
                    <img src={img2} alt="" />
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
                  <div className="atnBtn flex">
                    <div>
                      <button className="flex">
                        <FaRegComment />
                        <p className="bullet">•</p>
                        <p>100</p>
                      </button>
                    </div>
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
              <div className="postBody">
                <div className="userInfo flex">
                  <div className="userName flex">
                    <div>
                      <img src="" alt="" />
                      <p><FaUserSecret /></p>
                    </div>
                    <div className="userDetails">
                      <div className="flex">
                        <p>True Love Conquers All</p>
                        <p className="bullet">•</p>
                        <button>Follow</button>
                      </div>
                      <div className="flex">
                        <p>Posted by Ana Lorde</p>
                        <p className="bullet">•</p>
                        <p>Oct 20</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button><IoMdClose /></button>
                  </div>
                </div>
                <div className="post">
                  <div className="postTxt">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus similique impedit officiis, rerum porro quidem laboriosam, optio dicta aliquid vitae tenetur, ullam veniam ipsam voluptatum adipisci quasi? Ab, libero! Facilis eius rem odio quidem commodi. Distinctio quae maiores eum unde rem, rerum corporis, recusandae voluptate harum nostrum voluptatem!</p>
                  </div>
                  <div className="postImage">
                    <img src={img3} alt="" />
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
                  <div className="atnBtn flex">
                    <div>
                      <button className="flex">
                        <FaRegComment />
                        <p className="bullet">•</p>
                        <p>100</p>
                      </button>
                    </div>
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
            </div>

          </div>
          <div className="ads">empty</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
