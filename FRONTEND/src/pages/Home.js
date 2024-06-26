import { NavLink, Link } from "react-router-dom";
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
import { FaBell } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { LiaNewspaperSolid } from "react-icons/lia";
import { HiUserGroup } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";


// IMPORTED IMAGES
import img1 from "../images/img (3).jpg"
import img2 from "../images/img (2).jpg"
import img3 from "../images/img (1).jpg"
import profile3 from "../images/icons/3.jpg"
import profile4 from "../images/icons/4.jpg"
import profile5 from "../images/icons/5.jpg"
import profile6 from "../images/icons/6.jpg"


function Home() {

  const [togglePost, settogglePost] = useState(false);
  const [toggleHidePost, settoggleHidePost] = useState(true);

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
            <div className="newPost">
              <div className="topBtn flex">
                <Link to="/profile:id">
                  <img src={profile6} alt="" />
                </Link>
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
              {toggleHidePost && (
                <div className="postBody">
                  <div className="userInfo flex">
                    <div className="userName flex">
                      <div>
                        <Link to="/profile:id">
                          <img src={profile3} alt="profile icon" />
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
                      <button className="hideBtn" onClick={() => settoggleHidePost(!toggleHidePost)}>
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                  <Link to="/post/:id">
                    <div className="post">
                      <div className="postTxt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus similique impedit officiis, rerum porro quidem laboriosam, optio dicta aliquid vitae tenetur, ullam veniam ipsam voluptatum adipisci quasi? Ab, libero! Facilis eius rem odio quidem commodi. Distinctio quae maiores eum unde rem, rerum corporis, recusandae voluptate harum nostrum voluptatem!</p>

                      </div>
                      <div className="postImage">
                        <img src={img1} alt="" />
                      </div>
                    </div>
                  </Link>
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
              )}
              <div className="postBody">
                <div className="userInfo flex">
                  <div className="userName flex">
                    <div>
                      <Link to="/profile:id">
                        <img src={profile4} alt="profile icon" />
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
                    <button className="hideBtn" onClick={() => settoggleHidePost(!toggleHidePost)}>
                      <IoMdClose />
                    </button>
                  </div>
                </div>
                <Link to="/post/:id">
                  <div className="post">
                    <div className="postTxt">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus similique impedit officiis, rerum porro quidem laboriosam, optio dicta aliquid vitae tenetur, ullam veniam ipsam voluptatum adipisci quasi? Ab, libero! Facilis eius rem odio quidem commodi. Distinctio quae maiores eum unde rem, rerum corporis, recusandae voluptate harum nostrum voluptatem!</p>
                    </div>
                    <div className="postImage">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                </Link>
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
                      <Link to="/post/:id">
                        <button className="flex">
                          <FaRegComment />
                          <p className="bullet">•</p>
                          <p>100</p>
                        </button>
                      </Link>
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
                      <Link to="/profile:id">
                        <img src={profile5} alt="profile icon" />
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
                    <button className="hideBtn" onClick={() => settoggleHidePost(!toggleHidePost)}>
                      <IoMdClose />
                    </button>
                  </div>
                </div>
                <Link to="/post/:id">
                  <div className="post">
                    <div className="postTxt">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam voluptates dignissimos qui provident ad voluptate quasi maxime! Dignissimos consequatur doloribus consectetur laborum, eum, dolorum exercitationem temporibus cum soluta quidem amet doloremque facere fugiat possimus tenetur inventore? Distinctio quisquam laborum neque aliquam culpa voluptatibus ipsa voluptatem. Quaerat fuga natus voluptatum laudantium quo quos assumenda ipsa culpa? Eum quia numquam quaerat cupiditate. Corrupti molestiae neque labore autem ea mollitia cupiditate unde!</p>
                    </div>
                    <div className="postImage">
                      <img src={img3} alt="" />
                    </div>
                  </div>
                </Link>
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
